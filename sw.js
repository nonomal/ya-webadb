if(!self.define){let e,a={};const b=(b,i)=>(b=new URL(b+".js",i).href,a[b]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=b,e.onload=a,document.head.appendChild(e)}else e=b,importScripts(b),a()})).then((()=>{let e=a[b];if(!e)throw new Error(`Module ${b} didn’t register its module`);return e})));self.define=(i,t)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let c={};const s=e=>b(e,d),f={module:{uri:d},exports:c,require:s};a[d]=Promise.all(i.map((e=>f[e]||s(e)))).then((e=>(t(...e),c)))}}define(["./workbox-8c8aeaed"],(function(e){"use strict";importScripts("fallback-aTManAcit2tFp_eW6Sibo.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/ya-webadb/StreamSaver/mitm.html",revision:"a2b5e7a3088071fbd9eda05828f0b650"},{url:"/ya-webadb/StreamSaver/sw.js",revision:"407f39df9acb3c1933d32191f35e28bd"},{url:"/ya-webadb/_next/static/aTManAcit2tFp_eW6Sibo/_buildManifest.js",revision:"9196ad7081e268441aaddd90c435a9d4"},{url:"/ya-webadb/_next/static/aTManAcit2tFp_eW6Sibo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/ya-webadb/_next/static/chunks/191.cc7f96fa1e9e489c.js",revision:"cc7f96fa1e9e489c"},{url:"/ya-webadb/_next/static/chunks/191.cc7f96fa1e9e489c.js.map",revision:"4c48690838006914cd23fc910caf30b0"},{url:"/ya-webadb/_next/static/chunks/352-9dedc91d95c351ad.js",revision:"9dedc91d95c351ad"},{url:"/ya-webadb/_next/static/chunks/352-9dedc91d95c351ad.js.map",revision:"36f04eb5009a85e738e1ff53b9407769"},{url:"/ya-webadb/_next/static/chunks/360-d91e05ec665efaa7.js",revision:"d91e05ec665efaa7"},{url:"/ya-webadb/_next/static/chunks/360-d91e05ec665efaa7.js.map",revision:"9d8f2b81f4f1fc957ae394ac2a522244"},{url:"/ya-webadb/_next/static/chunks/3ffe8190-ad1746b296e28c9b.js",revision:"ad1746b296e28c9b"},{url:"/ya-webadb/_next/static/chunks/450.14e7db5ef8e70f07.js",revision:"14e7db5ef8e70f07"},{url:"/ya-webadb/_next/static/chunks/450.14e7db5ef8e70f07.js.map",revision:"35f6b2b5772b649f3790389c8f6d0460"},{url:"/ya-webadb/_next/static/chunks/507.4cd1a4c5e997c704.js",revision:"4cd1a4c5e997c704"},{url:"/ya-webadb/_next/static/chunks/507.4cd1a4c5e997c704.js.map",revision:"8bf122e348a60b7bdfad385bd416f399"},{url:"/ya-webadb/_next/static/chunks/688-d7702a8bc07729f7.js",revision:"d7702a8bc07729f7"},{url:"/ya-webadb/_next/static/chunks/688-d7702a8bc07729f7.js.map",revision:"f5b9d3f85226322b9a01a446b5207c71"},{url:"/ya-webadb/_next/static/chunks/890-d102243f63c42e6f.js",revision:"d102243f63c42e6f"},{url:"/ya-webadb/_next/static/chunks/890-d102243f63c42e6f.js.map",revision:"69ae371214ddc3f8fc54ecec7f847d90"},{url:"/ya-webadb/_next/static/chunks/926.662e169850b2b21b.js",revision:"662e169850b2b21b"},{url:"/ya-webadb/_next/static/chunks/926.662e169850b2b21b.js.map",revision:"f55dca90d73fdcc49566ac98f75e7bb2"},{url:"/ya-webadb/_next/static/chunks/99.5a4474a18e5df588.js",revision:"5a4474a18e5df588"},{url:"/ya-webadb/_next/static/chunks/99.5a4474a18e5df588.js.map",revision:"8234946e65469abbac845624f9fd9b42"},{url:"/ya-webadb/_next/static/chunks/ec7f8751.6208c729892bf370.js",revision:"6208c729892bf370"},{url:"/ya-webadb/_next/static/chunks/ec7f8751.6208c729892bf370.js.map",revision:"ffa41733b9bee9b8c494d23abf6d68d8"},{url:"/ya-webadb/_next/static/chunks/framework-f4f6a0f452aa2fa0.js",revision:"f4f6a0f452aa2fa0"},{url:"/ya-webadb/_next/static/chunks/framework-f4f6a0f452aa2fa0.js.map",revision:"48e5bb9d215b904776baacf39968e834"},{url:"/ya-webadb/_next/static/chunks/main-2317a90210558ddc.js",revision:"2317a90210558ddc"},{url:"/ya-webadb/_next/static/chunks/main-2317a90210558ddc.js.map",revision:"3f1b11ca4d5ed82ba76f921bf5242318"},{url:"/ya-webadb/_next/static/chunks/pages/_app-780d218f776e996e.js",revision:"780d218f776e996e"},{url:"/ya-webadb/_next/static/chunks/pages/_error-1cf44a4f3d53f577.js",revision:"1cf44a4f3d53f577"},{url:"/ya-webadb/_next/static/chunks/pages/_error-1cf44a4f3d53f577.js.map",revision:"60bba62bbde1c46f23f6a91b77c379a7"},{url:"/ya-webadb/_next/static/chunks/pages/_offline-73862d5af8d9b38c.js",revision:"73862d5af8d9b38c"},{url:"/ya-webadb/_next/static/chunks/pages/_offline-73862d5af8d9b38c.js.map",revision:"f28a5bd6c934ced8f1844453289424cf"},{url:"/ya-webadb/_next/static/chunks/pages/audio-2a799e0c4b8ba9a7.js",revision:"2a799e0c4b8ba9a7"},{url:"/ya-webadb/_next/static/chunks/pages/audio-2a799e0c4b8ba9a7.js.map",revision:"e9430931d29c69a9ee56461d5e1c4445"},{url:"/ya-webadb/_next/static/chunks/pages/bug-report-ae26874c8246e415.js",revision:"ae26874c8246e415"},{url:"/ya-webadb/_next/static/chunks/pages/bug-report-ae26874c8246e415.js.map",revision:"f50f39be8f85c6020e8e8cb553b2aed2"},{url:"/ya-webadb/_next/static/chunks/pages/chrome-devtools-1bcb3590ab888c22.js",revision:"1bcb3590ab888c22"},{url:"/ya-webadb/_next/static/chunks/pages/chrome-devtools-1bcb3590ab888c22.js.map",revision:"62a0a27f1b5bf917c9deba1040be60e4"},{url:"/ya-webadb/_next/static/chunks/pages/chrome-devtools-frame-65a355f5fe3c87bc.js",revision:"65a355f5fe3c87bc"},{url:"/ya-webadb/_next/static/chunks/pages/chrome-devtools-frame-65a355f5fe3c87bc.js.map",revision:"5137c41ce63b3b7c6d6185a92feba8d2"},{url:"/ya-webadb/_next/static/chunks/pages/device-info-e373b65b37245a98.js",revision:"e373b65b37245a98"},{url:"/ya-webadb/_next/static/chunks/pages/device-info-e373b65b37245a98.js.map",revision:"ff6af81bf86ef872e73f112fe66b453d"},{url:"/ya-webadb/_next/static/chunks/pages/file-manager-188cdb8002974fcf.js",revision:"188cdb8002974fcf"},{url:"/ya-webadb/_next/static/chunks/pages/file-manager-188cdb8002974fcf.js.map",revision:"068fb536f4e1f39f1dc2758f2733e9a7"},{url:"/ya-webadb/_next/static/chunks/pages/framebuffer-d122830252d818e5.js",revision:"d122830252d818e5"},{url:"/ya-webadb/_next/static/chunks/pages/framebuffer-d122830252d818e5.js.map",revision:"8074a6ba3c9d8bda568fa1098ab057ee"},{url:"/ya-webadb/_next/static/chunks/pages/index-e0eac6fc41f4fe3c.js",revision:"e0eac6fc41f4fe3c"},{url:"/ya-webadb/_next/static/chunks/pages/index-e0eac6fc41f4fe3c.js.map",revision:"af1bf0252d39a24ff09a0bff9f778b36"},{url:"/ya-webadb/_next/static/chunks/pages/install-52f323dfdca640dc.js",revision:"52f323dfdca640dc"},{url:"/ya-webadb/_next/static/chunks/pages/install-52f323dfdca640dc.js.map",revision:"c13b9f6ef0f9d08056aca4f7a6f02c58"},{url:"/ya-webadb/_next/static/chunks/pages/logcat-4650ea21f5e3d17d.js",revision:"4650ea21f5e3d17d"},{url:"/ya-webadb/_next/static/chunks/pages/logcat-4650ea21f5e3d17d.js.map",revision:"cfecafaa29062e2966ef9869876847b8"},{url:"/ya-webadb/_next/static/chunks/pages/packet-log-d191847c100969fb.js",revision:"d191847c100969fb"},{url:"/ya-webadb/_next/static/chunks/pages/packet-log-d191847c100969fb.js.map",revision:"35796f4154b4d0a82a38cef6ce27a594"},{url:"/ya-webadb/_next/static/chunks/pages/power-500829740a1c7b16.js",revision:"500829740a1c7b16"},{url:"/ya-webadb/_next/static/chunks/pages/power-500829740a1c7b16.js.map",revision:"a5084fd9d39602fea045cfde8966af1b"},{url:"/ya-webadb/_next/static/chunks/pages/reverse-0477f376f400239d.js",revision:"0477f376f400239d"},{url:"/ya-webadb/_next/static/chunks/pages/reverse-0477f376f400239d.js.map",revision:"8ce4322df70c28d34c6cd4a94794b9da"},{url:"/ya-webadb/_next/static/chunks/pages/scrcpy-0150b72302784fd5.js",revision:"0150b72302784fd5"},{url:"/ya-webadb/_next/static/chunks/pages/scrcpy-0150b72302784fd5.js.map",revision:"6f2924c4d5fe2fb52e8ed81938f3daad"},{url:"/ya-webadb/_next/static/chunks/pages/shell-ef759e40173b9fc3.js",revision:"ef759e40173b9fc3"},{url:"/ya-webadb/_next/static/chunks/pages/shell-ef759e40173b9fc3.js.map",revision:"42470877b171e621403a31aeb9cf6648"},{url:"/ya-webadb/_next/static/chunks/pages/tcpip-a1d253dfa86e03ff.js",revision:"a1d253dfa86e03ff"},{url:"/ya-webadb/_next/static/chunks/pages/tcpip-a1d253dfa86e03ff.js.map",revision:"1c1c0c7eb3d03b4d27c42451bd551aea"},{url:"/ya-webadb/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/ya-webadb/_next/static/chunks/webpack-ba2e3c371053d18d.js",revision:"ba2e3c371053d18d"},{url:"/ya-webadb/_next/static/chunks/webpack-ba2e3c371053d18d.js.map",revision:"1d7851ef5fb93a3817e9508e3d42ea9f"},{url:"/ya-webadb/_next/static/css/b6853f0190ea9f57.css",revision:"b6853f0190ea9f57"},{url:"/ya-webadb/_next/static/css/b6853f0190ea9f57.css.map",revision:"ec127053c82204d0bd9cbcaa83120bea"},{url:"/ya-webadb/_next/static/media/016b4a6cdced82ab3aa1.9a905705.ttf",revision:"9a905705"},{url:"/ya-webadb/_next/static/media/0fb0dd0fab644ec3cc0f.7b186e19.ttf",revision:"7b186e19"},{url:"/ya-webadb/_next/static/media/106decef28ab53592d15.b648a008.ttf",revision:"b648a008"},{url:"/ya-webadb/_next/static/media/1656862c40fcbb6aab38.921f7599.woff",revision:"921f7599"},{url:"/ya-webadb/_next/static/media/18626a93841302f40cd4.cbcbb1ab.ttf",revision:"cbcbb1ab"},{url:"/ya-webadb/_next/static/media/1ad4ee9ac5342aa9517b.b89888da.otf",revision:"b89888da"},{url:"/ya-webadb/_next/static/media/1e0985b2379656710502.45d743c0.ttf",revision:"45d743c0"},{url:"/ya-webadb/_next/static/media/1ef673311d0999bd0845.32a7b1f9.ttf",revision:"32a7b1f9"},{url:"/ya-webadb/_next/static/media/1f375102559ff28a260c.2ec5e7b1.woff",revision:"2ec5e7b1"},{url:"/ya-webadb/_next/static/media/22a8b6aa2704c6bc2a4e.99910057.otf",revision:"99910057"},{url:"/ya-webadb/_next/static/media/22df9e5063a397d85418.393064cf.woff2",revision:"393064cf"},{url:"/ya-webadb/_next/static/media/25b9e2c8d4bf7fb66c96.808b57a1.woff2",revision:"808b57a1"},{url:"/ya-webadb/_next/static/media/27ac247f8440c60ebd5b.c2847f05.ttf",revision:"c2847f05"},{url:"/ya-webadb/_next/static/media/2a8e5dd1b9561e93b029.73b8dbbf.ttf",revision:"73b8dbbf"},{url:"/ya-webadb/_next/static/media/2bf28c5593cdd4dfd27e.dfca5f1f.woff",revision:"dfca5f1f"},{url:"/ya-webadb/_next/static/media/30077e5bcbe0f99ce6fd.bf587806.woff",revision:"bf587806"},{url:"/ya-webadb/_next/static/media/365af7decd96084858a6.04b9e27a.otf",revision:"04b9e27a"},{url:"/ya-webadb/_next/static/media/3d8ce8a444d136a226e2.d27554e6.otf",revision:"d27554e6"},{url:"/ya-webadb/_next/static/media/3fa75838b460518713c4.024875f6.ttf",revision:"024875f6"},{url:"/ya-webadb/_next/static/media/401c6a99118ff20c7c70.90cd4a41.woff",revision:"90cd4a41"},{url:"/ya-webadb/_next/static/media/41b74324bfe1f53a495f.bea3d345.woff2",revision:"bea3d345"},{url:"/ya-webadb/_next/static/media/45a6c12e9479ab2ce2f5.0f7f058f.woff",revision:"0f7f058f"},{url:"/ya-webadb/_next/static/media/49a90b213bad86846471.c4b2fa89.otf",revision:"c4b2fa89"},{url:"/ya-webadb/_next/static/media/4a0ad4e3ea89dd9af350.6e3363f1.ttf",revision:"6e3363f1"},{url:"/ya-webadb/_next/static/media/4c6a2c7db318c13f10e9.a2485f51.ttf",revision:"a2485f51"},{url:"/ya-webadb/_next/static/media/50701fbb8177c2dde530.67a0fb74.ttf",revision:"67a0fb74"},{url:"/ya-webadb/_next/static/media/5142ce8ec19107b657f9.ee0bec4b.ttf",revision:"ee0bec4b"},{url:"/ya-webadb/_next/static/media/519fd21aa0cf770e7f3a.49eef996.ttf",revision:"49eef996"},{url:"/ya-webadb/_next/static/media/58396b19537299d2a628.2a525d18.ttf",revision:"2a525d18"},{url:"/ya-webadb/_next/static/media/594eed08cee0747e8a14.2552c056.otf",revision:"2552c056"},{url:"/ya-webadb/_next/static/media/5a045f9f2ad411b60d44.a691338e.otf",revision:"a691338e"},{url:"/ya-webadb/_next/static/media/5d3cf303e2513a6745bc.65fd4ef5.woff",revision:"65fd4ef5"},{url:"/ya-webadb/_next/static/media/5de9284534ba6d7076c7.d552a650.woff2",revision:"d552a650"},{url:"/ya-webadb/_next/static/media/5edb0990cb43ec9bafb8.d3eb2f70.woff2",revision:"d3eb2f70"},{url:"/ya-webadb/_next/static/media/5f784100ecc582db5544.7cc50ac6.ttf",revision:"7cc50ac6"},{url:"/ya-webadb/_next/static/media/637f599a4c8ebbbafcca.d5ce640d.woff",revision:"d5ce640d"},{url:"/ya-webadb/_next/static/media/69040ef72f7672a1de84.2de5c979.otf",revision:"2de5c979"},{url:"/ya-webadb/_next/static/media/6aab4805c74d8daada2c.61fc827d.woff",revision:"61fc827d"},{url:"/ya-webadb/_next/static/media/6e9afcf5ca9ac5124040.dceb393d.woff2",revision:"dceb393d"},{url:"/ya-webadb/_next/static/media/712bbf0d6d466fa7245b.20a397db.woff2",revision:"20a397db"},{url:"/ya-webadb/_next/static/media/7294701ba6f27fd0a489.6747fa8b.woff",revision:"6747fa8b"},{url:"/ya-webadb/_next/static/media/7692fdfb2d88e22bb70f.dac5c963.ttf",revision:"dac5c963"},{url:"/ya-webadb/_next/static/media/7b9d00a3bbdf9cbd61e2.c8dbac02.woff2",revision:"c8dbac02"},{url:"/ya-webadb/_next/static/media/7cb14a9ed9ec10da7ae2.1c14a74b.ttf",revision:"1c14a74b"},{url:"/ya-webadb/_next/static/media/7d079312e0f1c11f173d.ebc5b4e2.woff",revision:"ebc5b4e2"},{url:"/ya-webadb/_next/static/media/7d14038b9f0566ca8800.47e75337.otf",revision:"47e75337"},{url:"/ya-webadb/_next/static/media/83aaa30b42f593efae5a.072b2215.woff2",revision:"072b2215"},{url:"/ya-webadb/_next/static/media/840ab830abe7ba35963b.8ff31b53.ttf",revision:"8ff31b53"},{url:"/ya-webadb/_next/static/media/878f31251d960bd6266f.b6033b54.woff2",revision:"b6033b54"},{url:"/ya-webadb/_next/static/media/8835b1108ce8188deff8.b20eec2f.woff2",revision:"b20eec2f"},{url:"/ya-webadb/_next/static/media/8b0392773e38a1168f72.3decd2e3.woff",revision:"3decd2e3"},{url:"/ya-webadb/_next/static/media/8d9d5753c196e807ad7b.71644f90.otf",revision:"71644f90"},{url:"/ya-webadb/_next/static/media/8f49426703194bc223c1.ad043973.otf",revision:"ad043973"},{url:"/ya-webadb/_next/static/media/908e2cef05212cb71b3d.b9c9b60f.woff2",revision:"b9c9b60f"},{url:"/ya-webadb/_next/static/media/92717c9fd4c0ab9b09ab.3f597dc8.ttf",revision:"3f597dc8"},{url:"/ya-webadb/_next/static/media/93737f51488de810dcc0.dd1c7d9c.ttf",revision:"dd1c7d9c"},{url:"/ya-webadb/_next/static/media/9424ad3f683c9a5a5c75.74633253.woff2",revision:"74633253"},{url:"/ya-webadb/_next/static/media/95316d52e3669e9327d2.21c27488.woff2",revision:"21c27488"},{url:"/ya-webadb/_next/static/media/964fada96abed2b04cc9.21967822.woff2",revision:"21967822"},{url:"/ya-webadb/_next/static/media/97fe0eebfdd152f7b499.855342ce.woff2",revision:"855342ce"},{url:"/ya-webadb/_next/static/media/983e21420fc690c961e3.5ead4fb7.otf",revision:"5ead4fb7"},{url:"/ya-webadb/_next/static/media/9a2d1789d072bcb58d66.fd69729e.woff2",revision:"fd69729e"},{url:"/ya-webadb/_next/static/media/9a46e37e0a2cf5e048b1.ae00d4e8.otf",revision:"ae00d4e8"},{url:"/ya-webadb/_next/static/media/9a542e40c824951b2f0c.61c446f4.woff2",revision:"61c446f4"},{url:"/ya-webadb/_next/static/media/9ca90bd56aa2d7adc0e8.7ecb824c.otf",revision:"7ecb824c"},{url:"/ya-webadb/_next/static/media/9f9050a0c1ca64390e6f.b28cbdfa.woff",revision:"b28cbdfa"},{url:"/ya-webadb/_next/static/media/a43044d3166461762fad.19735a91.woff",revision:"19735a91"},{url:"/ya-webadb/_next/static/media/a4e747b9a12a4dd24101.8eabbc03.ttf",revision:"8eabbc03"},{url:"/ya-webadb/_next/static/media/a57305681411f183f5e5.d6987c0c.woff",revision:"d6987c0c"},{url:"/ya-webadb/_next/static/media/a865dc036728b0cb49ed.bc914ff7.otf",revision:"bc914ff7"},{url:"/ya-webadb/_next/static/media/a9a074b46b3bb0615a65.a738c428.woff2",revision:"a738c428"},{url:"/ya-webadb/_next/static/media/a9fa4663ee8128b8478b.90c6bedf.woff",revision:"90c6bedf"},{url:"/ya-webadb/_next/static/media/ac04032587d9e8e9f1b9.fa23e907.ttf",revision:"fa23e907"},{url:"/ya-webadb/_next/static/media/ac3c0d6660d55a57bacf.2116151a.woff2",revision:"2116151a"},{url:"/ya-webadb/_next/static/media/b041b1fa4fe241b23445.3580b4a9.woff2",revision:"3580b4a9"},{url:"/ya-webadb/_next/static/media/b0e68feb2f44e3886c55.584152e3.otf",revision:"584152e3"},{url:"/ya-webadb/_next/static/media/b57645f54ae71ae816e3.a3b82214.otf",revision:"a3b82214"},{url:"/ya-webadb/_next/static/media/b6879d41b0852f01ed5b.fd0b155c.woff2",revision:"fd0b155c"},{url:"/ya-webadb/_next/static/media/bb58b232c4e94c8a64a5.f13b5160.otf",revision:"f13b5160"},{url:"/ya-webadb/_next/static/media/bda28cfdf039b0a44ab4.fa0cd9e1.otf",revision:"fa0cd9e1"},{url:"/ya-webadb/_next/static/media/c7124c5838a0bb9d0718.b782c4c7.woff2",revision:"b782c4c7"},{url:"/ya-webadb/_next/static/media/c9b042f019fd819523ab.29c7fc51.otf",revision:"29c7fc51"},{url:"/ya-webadb/_next/static/media/cabd53cde475af03a6fb.3564b89e.woff",revision:"3564b89e"},{url:"/ya-webadb/_next/static/media/ce3c2230777d7089b045.2ac19c41.otf",revision:"2ac19c41"},{url:"/ya-webadb/_next/static/media/d2a3dc0c299e305e0bad.9b02b7f9.woff2",revision:"9b02b7f9"},{url:"/ya-webadb/_next/static/media/d2b4d257658ba4562673.7b2d688e.ttf",revision:"7b2d688e"},{url:"/ya-webadb/_next/static/media/d4420e97eacc0df955b3.bace3b3f.woff2",revision:"bace3b3f"},{url:"/ya-webadb/_next/static/media/d75e3fd1eb12e9bd6655.6a8db53d.ttf",revision:"6a8db53d"},{url:"/ya-webadb/_next/static/media/d817d3e3a593d890c8f5.5772f054.woff",revision:"5772f054"},{url:"/ya-webadb/_next/static/media/d9a4e145d3544a7a2783.0b8a1a0a.woff",revision:"0b8a1a0a"},{url:"/ya-webadb/_next/static/media/da57122c34ed6fa52a23.0e143532.woff2",revision:"0e143532"},{url:"/ya-webadb/_next/static/media/dd625a9906a10c1b3413.2a4fe377.otf",revision:"2a4fe377"},{url:"/ya-webadb/_next/static/media/de4e0fc9b0bb0ff02b2f.b265883e.woff2",revision:"b265883e"},{url:"/ya-webadb/_next/static/media/df70c3a856c8c1c52191.350e6772.woff",revision:"350e6772"},{url:"/ya-webadb/_next/static/media/e0e421f4bf0049d41f79.3a237112.ttf",revision:"3a237112"},{url:"/ya-webadb/_next/static/media/e15ee88415532a1c43d2.dfa23ab5.ttf",revision:"dfa23ab5"},{url:"/ya-webadb/_next/static/media/e6c6564831dfb20a0ed2.f0217849.woff",revision:"f0217849"},{url:"/ya-webadb/_next/static/media/e81d2ca2c3db2b47db15.11c18d74.otf",revision:"11c18d74"},{url:"/ya-webadb/_next/static/media/e971dc6d589b81462070.90cb3c06.ttf",revision:"90cb3c06"},{url:"/ya-webadb/_next/static/media/e9d58bd792b9db2ed236.5617af1a.woff",revision:"5617af1a"},{url:"/ya-webadb/_next/static/media/eab95f5575c95b9e2bb7.d7a1d9dd.woff",revision:"d7a1d9dd"},{url:"/ya-webadb/_next/static/media/f342a7ec779d4d7a2ee6.dbbdbe9e.otf",revision:"dbbdbe9e"},{url:"/ya-webadb/_next/static/media/f43111427dc2551a4949.396caab8.woff",revision:"396caab8"},{url:"/ya-webadb/_next/static/media/f6a2b0356ab13865c0a1.88eee35b.otf",revision:"88eee35b"},{url:"/ya-webadb/_next/static/media/f7d81feaf5e375cfa94d.6051446a.woff",revision:"6051446a"},{url:"/ya-webadb/_next/static/media/f93136b36638d97e57ec.3f16e821.woff",revision:"3f16e821"},{url:"/ya-webadb/_next/static/media/fadd9f2bded6c92e70b1.42e53ea6.woff2",revision:"42e53ea6"},{url:"/ya-webadb/_next/static/media/fb731c620f945b0a3be7.816746fe.woff2",revision:"816746fe"},{url:"/ya-webadb/_next/static/media/fbf7ea7c287a976450cc.4870fae1.ttf",revision:"4870fae1"},{url:"/ya-webadb/_next/static/media/ffe4954a8c837444aecb.3713f8ad.otf",revision:"3713f8ad"},{url:"/ya-webadb/_next/static/media/llhttp.a92ee3b9.wasm",revision:"a92ee3b9"},{url:"/ya-webadb/_next/static/media/llhttp_simd.920bfad7.wasm",revision:"920bfad7"},{url:"/ya-webadb/_next/static/media/server.e05cfb58.bin",revision:"e05cfb58"},{url:"/ya-webadb/_next/static/media/worker.403c83a2.js",revision:"403c83a2"},{url:"/ya-webadb/_offline",revision:"aTManAcit2tFp_eW6Sibo"},{url:"/ya-webadb/favicon-256.png",revision:"476c6aafa56d0b94a9faa9b18bfc547b"},{url:"/ya-webadb/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/ya-webadb/manifest.json",revision:"ddd970893d3f37b17d65d820519b6061"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/ya-webadb",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:b,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
//# sourceMappingURL=sw.js.map