"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/build/0cb9dbb0766685e99e9269a2dd2659a7.png","0cb9dbb0766685e99e9269a2dd2659a7"],["/build/0f23411eef08408ffbf090dc0266d6ad.jpg","0f23411eef08408ffbf090dc0266d6ad"],["/build/107a7eca9183916056c252424d3651ba.jpg","107a7eca9183916056c252424d3651ba"],["/build/107d2e9f378fe57e057ef26a36a7b413.jpg","107d2e9f378fe57e057ef26a36a7b413"],["/build/17db257e04e70260913393245da2251f.png","17db257e04e70260913393245da2251f"],["/build/18acb8dc6d59a6ff441cba41c816f03d.png","18acb8dc6d59a6ff441cba41c816f03d"],["/build/234bb9ff02522df6ec9dcd4e469fcafc.png","234bb9ff02522df6ec9dcd4e469fcafc"],["/build/56e61ed9c17be1b42cb8362ee6780334.png","56e61ed9c17be1b42cb8362ee6780334"],["/build/58583fac76b63c1298fabe89e286bc1e.jpg","58583fac76b63c1298fabe89e286bc1e"],["/build/624118ca0b5df9a6cece68a765922d37.png","624118ca0b5df9a6cece68a765922d37"],["/build/6783071fca526d9dd2cc3e9ee107e7c3.png","6783071fca526d9dd2cc3e9ee107e7c3"],["/build/77483c06ccffa3b1715335d233f4b268.png","77483c06ccffa3b1715335d233f4b268"],["/build/7e39760fb3aaae192e29513d61a2f63b.jpg","7e39760fb3aaae192e29513d61a2f63b"],["/build/84d7bfa4a3ce8ddb53ce29906693f251.jpg","84d7bfa4a3ce8ddb53ce29906693f251"],["/build/8500973a8f0b39703ce0811f0acebb49.jpg","8500973a8f0b39703ce0811f0acebb49"],["/build/Shea-H-Belsky-Resume.pdf","531ebc8facb99e6e184ac51f9ea20b2f"],["/build/a20fad427bc7e6695ae6b82e71444f2c.jpg","a20fad427bc7e6695ae6b82e71444f2c"],["/build/a86f4fef2a7b51dd9a1c946ef4e49728.png","a86f4fef2a7b51dd9a1c946ef4e49728"],["/build/b0ca54341d8999d742259b8464aedbb4.png","b0ca54341d8999d742259b8464aedbb4"],["/build/bf102b0e6cca2244d8b517f7ef4c4652.jpg","bf102b0e6cca2244d8b517f7ef4c4652"],["/build/bundle.js","de4877383eef5c9840370b7d1c5b1a6e"],["/build/c4a5b5b1ceb30d3e5cf0acca8d5bfdbe.jpg","c4a5b5b1ceb30d3e5cf0acca8d5bfdbe"],["/build/c9af69a7426f834af4b6db756c80eef2.jpg","c9af69a7426f834af4b6db756c80eef2"],["/build/cd12ce93072a855d667eba2d7d41d9a2.png","cd12ce93072a855d667eba2d7d41d9a2"],["/build/d8ceebdd2aaaa18f72e04e71d0a2015a.jpg","d8ceebdd2aaaa18f72e04e71d0a2015a"],["/build/ddac9188350c36c5a14bc45c58c78ec6.png","ddac9188350c36c5a14bc45c58c78ec6"],["/build/e09a7af7e5161cd8761cec69ed78d216.png","e09a7af7e5161cd8761cec69ed78d216"],["/build/e7b9c1a68742422a4c3a16261fa4e415.png","e7b9c1a68742422a4c3a16261fa4e415"],["/build/ebe856175fd81ee7a39a58abbd65cb01.jpg","ebe856175fd81ee7a39a58abbd65cb01"],["/build/f023e1920a20900954de4a3658b1fee8.png","f023e1920a20900954de4a3658b1fee8"],["/build/f0849664beecc2eda98d8f87ac857a29.png","f0849664beecc2eda98d8f87ac857a29"],["/build/favicon.ico","4698306267466158adb441fe86b19c3a"],["/build/styles.css","32210728919740cf34b4cebc94499e83"]],cacheName="sw-precache-v3-shea-belsky-website-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,n){var t=new URL(e);return n&&t.pathname.match(n)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],n=new URL(a,self.location),t=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),t]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("http://sheabelsky.me/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});