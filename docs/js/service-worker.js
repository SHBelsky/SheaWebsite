"use strict";var precacheConfig=[["/css/styles.css","ecfcee110ca55d467f04e2e7d252c5dc"],["/img/0270f371b18a459e75ab57b8b0afbbc1.png","0270f371b18a459e75ab57b8b0afbbc1"],["/img/0815ed1f72e315cb78e69f859233b9c6.jpg","0815ed1f72e315cb78e69f859233b9c6"],["/img/11bcee4f8b16d8741577a7a2f02df749.png","11bcee4f8b16d8741577a7a2f02df749"],["/img/1cb14f07459c6b0cc120062fe4adde41.png","1cb14f07459c6b0cc120062fe4adde41"],["/img/2daa851e51e08a39a6b1d3f285705ba0.png","2daa851e51e08a39a6b1d3f285705ba0"],["/img/3c51a5a1538c7c6823ecea9a530d39c1.png","3c51a5a1538c7c6823ecea9a530d39c1"],["/img/432e6a34aef002b4954734614c63f3c6.jpg","432e6a34aef002b4954734614c63f3c6"],["/img/448d78fe6c4f6b76b432b64eb9813d78.png","448d78fe6c4f6b76b432b64eb9813d78"],["/img/45b9f1063fdc14955c3b034e58b8efb6.jpg","45b9f1063fdc14955c3b034e58b8efb6"],["/img/510808f01f3ebc8220b30050015647c7.png","510808f01f3ebc8220b30050015647c7"],["/img/569e410b4f9f8fcc0b0cb6b274fc36d2.jpg","569e410b4f9f8fcc0b0cb6b274fc36d2"],["/img/577903eea1fc7ad73b5d90a211e17d0e.png","577903eea1fc7ad73b5d90a211e17d0e"],["/img/639aed5d91d114de267e25cbfca57005.png","639aed5d91d114de267e25cbfca57005"],["/img/63ad1cf1b079b7173be3e9bc7f209410.png","63ad1cf1b079b7173be3e9bc7f209410"],["/img/69119b465620bc7a4edb756ce6568cde.png","69119b465620bc7a4edb756ce6568cde"],["/img/6f9c944385f4b3386a83819ff74be6a3.jpg","6f9c944385f4b3386a83819ff74be6a3"],["/img/7e515b88e9e3110f63b9946d8ea89265.png","7e515b88e9e3110f63b9946d8ea89265"],["/img/82e09d840109b512f3bb9489f3cc6f5e.png","82e09d840109b512f3bb9489f3cc6f5e"],["/img/95fd01e286c89e9d85ac05e662a1fc93.png","95fd01e286c89e9d85ac05e662a1fc93"],["/img/9cce5a8622b832b1530bfe0d8d712a68.png","9cce5a8622b832b1530bfe0d8d712a68"],["/img/9d0c591587c866e6b3a590ec24aea062.png","9d0c591587c866e6b3a590ec24aea062"],["/img/Shea-H-Belsky-Resume.pdf","ecd4d5eeba9145ac4172b5ce1bb449ac"],["/img/aca0c9262e33f636896b79a0149f0daa.png","aca0c9262e33f636896b79a0149f0daa"],["/img/b7256ff5e785da7ee2ea76a25e8fe58c.png","b7256ff5e785da7ee2ea76a25e8fe58c"],["/img/b981a3b6184e9c9b109ef0e81de478e5.jpg","b981a3b6184e9c9b109ef0e81de478e5"],["/img/c08d58f305ffad08bbeb3629357aa059.png","c08d58f305ffad08bbeb3629357aa059"],["/img/c33c99c10c1019a2c14ef3c39733462d.png","c33c99c10c1019a2c14ef3c39733462d"],["/img/e131962afa08a405d7654462da67cc56.png","e131962afa08a405d7654462da67cc56"],["/img/fa4354da101d17b63b7c6bcc89c0eaba.png","fa4354da101d17b63b7c6bcc89c0eaba"],["/img/favicon.ico","4698306267466158adb441fe86b19c3a"],["/img/fb16e62ca5ee369c345aa676f6ebd97a.png","fb16e62ca5ee369c345aa676f6ebd97a"],["/js/bundle.js","d90834b1cef4f3daac7f37d55ba25b07"]],cacheName="sw-precache-v3-shea-belsky-website-1.1-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,n){var t=new URL(e);return n&&t.pathname.match(n)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],n=new URL(a,self.location),t=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("https://sheabels.ky//docs/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});