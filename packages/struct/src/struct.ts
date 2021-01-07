import { createRuntimeObject, FieldDefinition, FieldRuntimeValue, getRuntimeValue, setRuntimeValue, StructDefaultOptions, StructDeserializationContext, StructOptions, StructSerializationContext } from './basic';
import { ArrayBufferFieldType, ArrayBufferLikeFieldType, Evaluate, FixedLengthArrayBufferLikeFieldDefinition, FixedLengthArrayBufferLikeFieldOptions, Identity, KeysOfType, NumberFieldDefinition, NumberFieldType, Overwrite, StringFieldType, Uint8ClampedArrayFieldType, VariableLengthArrayBufferLikeFieldDefinition, VariableLengthArrayBufferLikeFieldOptions } from './types';

/**
 * Extract the value type of the specified `Struct`
 *
 * The lack of generic constraint is on purpose to allow `StructLike` types
 */
export type StructValueType<T> =
    T extends { deserialize(context: StructDeserializationContext): Promise<infer R>; } ? R : never;

/**
 * Extract the init type of the specified `Struct`
 */
export type StructInitType<T extends Struct<any, object, object, any>> =
    T extends { create(value: infer R, ...args: any): any; } ? Evaluate<R> : never;

/**
 * Create a new `Struct` type with `TDescriptor` appended
 */
type AddFieldDescriptor<
    TValue extends object,
    TInit extends object,
    TExtra extends object,
    TPostDeserialized,
    TFieldName extends PropertyKey,
    TDefinition extends FieldDefinition<any, any, any>> =
    Identity<Struct<
        // Merge two types
        // Evaluate immediately to optimize editor hover tooltip
        Evaluate<TValue & Record<TFieldName, TDefinition['valueType']>>,
        // There is no `Evaluate` here, because otherwise the type of a `Struct` with many fields
        // can become too complex for TypeScript to compute
        Evaluate<Omit<TInit, TDefinition['removeInitFields']> & Record<TFieldName, TDefinition['valueType']>>,
        TExtra,
        TPostDeserialized
    >>;

/**
 * Overload methods to add an array buffer like field
 */
interface ArrayBufferLikeFieldCreator<
    TValue extends object,
    TInit extends object,
    TExtra extends object,
    TPostDeserialized
    > {
    /**
     * Append a fixed-length array to the `Struct`
     *
     * @param name Name of the field
     * @param type `Array.SubType.ArrayBuffer` or `Array.SubType.String`
     * @param options Fixed-length array options
     * @param typescriptType Type of the field in TypeScript.
     * For example, if this field is a string, you can declare it as a string enum or literal union.
     */
    <
        TName extends PropertyKey,
        TType extends ArrayBufferLikeFieldType,
        TTypeScriptType = TType['valueType'],
        >(
        name: TName,
        type: TType,
        options: FixedLengthArrayBufferLikeFieldOptions,
        typescriptType?: TTypeScriptType,
    ): AddFieldDescriptor<
        TValue,
        TInit,
        TExtra,
        TPostDeserialized,
        TName,
        FixedLengthArrayBufferLikeFieldDefinition<
            TType,
            FixedLengthArrayBufferLikeFieldOptions
        >
    >;

    /**
     * Append a variable-length array to the `Struct`
     */
    <
        TName extends PropertyKey,
        TType extends ArrayBufferLikeFieldType,
        TOptions extends VariableLengthArrayBufferLikeFieldOptions<TInit>,
        TTypeScriptType = TType['valueType'],
        >(
        name: TName,
        type: TType,
        options: TOptions,
        typescriptType?: TTypeScriptType,
    ): AddFieldDescriptor<
        TValue,
        TInit,
        TExtra,
        TPostDeserialized,
        TName,
        VariableLengthArrayBufferLikeFieldDefinition<
            TType,
            TOptions
        >
    >;
}

/**
 * Similar to `ArrayBufferLikeFieldCreator`, but bind to a `ArrayBufferLikeFieldType`
 */
interface ArrayBufferTypeFieldDefinitionCreator<
    TValue extends object,
    TInit extends object,
    TExtra extends object,
    TPostDeserialized,
    TType extends ArrayBufferLikeFieldType
    > {
    <
        TName extends PropertyKey,
        TTypeScriptType = TType['valueType'],
        >(
        name: TName,
        options: FixedLengthArrayBufferLikeFieldOptions,
        typescriptType?: TTypeScriptType,
    ): AddFieldDescriptor<
        TValue,
        TInit,
        TExtra,
        TPostDeserialized,
        TName,
        FixedLengthArrayBufferLikeFieldDefinition<
            TType,
            FixedLengthArrayBufferLikeFieldOptions
        >
    >;

    <
        TName extends PropertyKey,
        TLengthField extends KeysOfType<TInit, number | string>,
        TOptions extends VariableLengthArrayBufferLikeFieldOptions<TInit, TLengthField>,
        TTypeScriptType = TType['valueType'],
        >(
        name: TName,
        options: TOptions,
        typescriptType?: TTypeScriptType,
    ): AddFieldDescriptor<
        TValue,
        TInit,
        TExtra,
        TPostDeserialized,
        TName,
        VariableLengthArrayBufferLikeFieldDefinition<
            TType,
            TOptions
        >
    >;
}

export type StructPostDeserialized<TValue, TPostDeserialized> =
    (this: TValue, object: TValue) => TPostDeserialized;

export default class Struct<
    TValue extends object = {},
    TInit extends object = {},
    TExtra extends object = {},
    TPostDeserialized = undefined,
    > {
    public readonly valueType!: TValue;

    public readonly initType!: TInit;

    public readonly extraType!: TExtra;

    public readonly options: Readonly<StructOptions>;

    private _size = 0;
    /**
     * Gets the static size (exclude fields that can change size at runtime)
     */
    public get size() { return this._size; }

    private _fields: [name: PropertyKey, definition: FieldDefinition<any, any, any>][] = [];

    private _extra: PropertyDescriptorMap = {};

    private _postDeserialized?: StructPostDeserialized<TValue, any>;

    public constructor(options?: Partial<StructOptions>) {
        this.options = { ...StructDefaultOptions, ...options };
    }

    /**
     * Appends a `FieldDefinition` to the `Struct
     */
    public field<
        TName extends PropertyKey,
        TDefinition extends FieldDefinition<any, any, any>
    >(
        name: TName,
        definition: TDefinition,
    ): AddFieldDescriptor<
        TValue,
        TInit,
        TExtra,
        TPostDeserialized,
        TName,
        TDefinition
    > {
        this._fields.push([name, definition]);

        const size = definition.getSize();
        this._size += size;

        // Force cast `this` to another type
        return this as any;
    }

    /**
     * Merges (flats) another `Struct`'s fields and extra fields into this one.
     */
    public fields<TOther extends Struct<any, any, any, any>>(
        struct: TOther
    ): Struct<
        TValue & TOther['valueType'],
        TInit & TOther['initType'],
        TExtra & TOther['extraType'],
        TPostDeserialized
    > {
        for (const field of struct._fields) {
            this._fields.push(field);
        }
        this._size += struct._size;
        Object.assign(this._extra, struct._extra);
        return this as any;
    }

    private number<
        TName extends PropertyKey,
        TType extends NumberFieldType = NumberFieldType,
        TTypeScriptType = TType['valueType']
    >(
        name: TName,
        type: TType,
        _typescriptType?: TTypeScriptType,
    ) {
        return this.field(
            name,
            new NumberFieldDefinition(type, _typescriptType),
        );
    }

    /**
     * Appends an `uint8` field to the `Struct`
     */
    public uint8<
        TName extends PropertyKey,
        TTypeScriptType = (typeof NumberFieldType)['Uint8']['valueType']
    >(
        name: TName,
        _typescriptType?: TTypeScriptType,
    ) {
        return this.number(
            name,
            NumberFieldType.Uint8,
            _typescriptType
        );
    }

    /**
     * Appends an `uint16` field to the `Struct`
     */
    public uint16<
        TName extends PropertyKey,
        TTypeScriptType = (typeof NumberFieldType)['Uint16']['valueType']
    >(
        name: TName,
        _typescriptType?: TTypeScriptType,
    ) {
        return this.number(
            name,
            NumberFieldType.Uint16,
            _typescriptType
        );
    }

    /**
     * Appends an `int32` field to the `Struct`
     */
    public int32<
        TName extends PropertyKey,
        TTypeScriptType = (typeof NumberFieldType)['Int32']['valueType']
    >(
        name: TName,
        _typescriptType?: TTypeScriptType,
    ) {
        return this.number(
            name,
            NumberFieldType.Int32,
            _typescriptType
        );
    }

    /**
     * Appends an `uint32` field to the `Struct`
     */
    public uint32<
        TName extends PropertyKey,
        TTypeScriptType = (typeof NumberFieldType)['Uint32']['valueType']
    >(
        name: TName,
        typescriptType?: TTypeScriptType,
    ) {
        return this.number(
            name,
            NumberFieldType.Uint32,
            typescriptType
        );
    }

    /**
     * Appends an `int64` field to the `Struct`
     *
     * Requires native `BigInt` support
     */
    public int64<
        TName extends PropertyKey,
        TTypeScriptType = (typeof NumberFieldType)['Int64']['valueType']
    >(
        name: TName,
        _typescriptType?: TTypeScriptType,
    ) {
        return this.number(
            name,
            NumberFieldType.Int64,
            _typescriptType
        );
    }

    /**
     * Appends an `uint64` field to the `Struct`
     *
     * Requires native `BigInt` support
     */
    public uint64<
        TName extends PropertyKey,
        TTypeScriptType = (typeof NumberFieldType)['Uint64']['valueType']
    >(
        name: TName,
        _typescriptType?: TTypeScriptType,
    ) {
        return this.number(
            name,
            NumberFieldType.Uint64,
            _typescriptType
        );
    }

    private arrayBufferLike: ArrayBufferLikeFieldCreator<TValue, TInit, TExtra, TPostDeserialized> = (
        name: PropertyKey,
        type: ArrayBufferLikeFieldType,
        options: FixedLengthArrayBufferLikeFieldOptions | VariableLengthArrayBufferLikeFieldOptions
    ): any => {
        if ('length' in options) {
            return this.field(
                name,
                new FixedLengthArrayBufferLikeFieldDefinition(type, options),
            );
        } else {
            return this.field(
                name,
                new VariableLengthArrayBufferLikeFieldDefinition(type, options),
            );
        }
    };

    public arrayBuffer: ArrayBufferTypeFieldDefinitionCreator<
        TValue,
        TInit,
        TExtra,
        TPostDeserialized,
        ArrayBufferFieldType
    > = (
        name: PropertyKey,
        options: any
    ): any => {
            return this.arrayBufferLike(name, ArrayBufferFieldType.instance, options);
        };

    public uint8ClampedArray: ArrayBufferTypeFieldDefinitionCreator<
        TValue,
        TInit,
        TExtra,
        TPostDeserialized,
        Uint8ClampedArrayFieldType
    > = (
        name: PropertyKey,
        options: any
    ): any => {
            return this.arrayBufferLike(name, Uint8ClampedArrayFieldType.instance, options);
        };

    public string: ArrayBufferTypeFieldDefinitionCreator<
        TValue,
        TInit,
        TExtra,
        TPostDeserialized,
        StringFieldType
    > = (
        name: PropertyKey,
        options: any
    ): any => {
            return this.arrayBufferLike(name, StringFieldType.instance, options);
        };

    /**
     * Adds some extra fields into every Struct instance.
     *
     * Extra fields will not affect serialize or deserialize process.
     *
     * Multiple calls to `extra` will merge all values together.
     */
    public extra<T extends Record<
        // This trick disallows any keys that are already in `TValue`
        Exclude<
            keyof T,
            Exclude<keyof T, keyof TValue>
        >,
        never
    >>(
        value: T & ThisType<Overwrite<Overwrite<TExtra, T>, TValue>>
    ): Struct<
        TValue,
        TInit,
        Overwrite<TExtra, T>,
        TPostDeserialized
    > {
        Object.assign(this._extra, Object.getOwnPropertyDescriptors(value));
        return this as any;
    }

    /**
     * Registers (or replaces) a custom callback to be run after deserialized.
     *
     * A callback returning `never` (always throw an error)
     * will also change the return type of `deserialize` to `never`.
     */
    public postDeserialize(
        callback: StructPostDeserialized<TValue, never>
    ): Struct<TValue, TInit, TExtra, never>;
    /**
     * Registers (or replaces) a custom callback to be run after deserialized.
     *
     * A callback returning `void` means it modify the result object in-place
     * (or doesn't modify it at all), so `deserialize` will still return the result object.
     */
    public postDeserialize(
        callback?: StructPostDeserialized<TValue, void>
    ): Struct<TValue, TInit, TExtra, undefined>;
    /**
     * Registers (or replaces) a custom callback to be run after deserialized.
     *
     * A callback returning anything other than `undefined`
     * will `deserialize` to return that object instead.
     */
    public postDeserialize<TPostSerialize>(
        callback?: StructPostDeserialized<TValue, TPostSerialize>
    ): Struct<TValue, TInit, TExtra, TPostSerialize>;
    public postDeserialize(
        callback?: StructPostDeserialized<TValue, any>
    ) {
        this._postDeserialized = callback;
        return this as any;
    }

    private initializeObject() {
        const object = createRuntimeObject();
        Object.defineProperties(object, this._extra);
        return object;
    }

    public create(init: TInit, context: StructSerializationContext): Overwrite<TExtra, TValue> {
        const object = this.initializeObject();

        for (const [name, definition] of this._fields) {
            const runtimeValue = definition.createValue(this.options, context, object, (init as any)[name]);
            setRuntimeValue(object, name, runtimeValue);
        }

        return object as any;
    }

    public async deserialize(
        context: StructDeserializationContext
    ): Promise<TPostDeserialized extends undefined ? Overwrite<TExtra, TValue> : TPostDeserialized> {
        const object = this.initializeObject();

        for (const [name, definition] of this._fields) {
            const runtimeValue = await definition.deserialize(this.options, context, object);
            setRuntimeValue(object, name, runtimeValue);
        }

        if (this._postDeserialized) {
            const result = this._postDeserialized.call(object as TValue, object as TValue);
            if (result) {
                return result;
            }
        }

        return object as any;
    }

    public serialize(init: TInit, context: StructSerializationContext): ArrayBuffer {
        const object = this.create(init, context) as any;

        let structSize = 0;
        const fieldsInfo: { runtimeValue: FieldRuntimeValue, size: number; }[] = [];

        for (const [name] of this._fields) {
            const runtimeValue = getRuntimeValue(object, name);
            const size = runtimeValue.getSize();
            fieldsInfo.push({ runtimeValue, size });
            structSize += size;
        }

        const buffer = new ArrayBuffer(structSize);
        const dataView = new DataView(buffer);
        let offset = 0;
        for (const { runtimeValue, size } of fieldsInfo) {
            runtimeValue.serialize(dataView, offset, context);
            offset += size;
        }

        return buffer;
    }
}