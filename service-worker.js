"use strict";var precacheConfig=[["/index.html","47702e937c4f4567d5139312e4c78f68"],["/static/css/main.e03932ac.css","edd5373654a15e71634213f5b22edd93"],["/static/js/main.61f25d28.js","ebad2e74023b912629059e06d4858c94"],["/static/media/Bottle.4b21d91e.png","4b21d91e664fde55e64640bb2fc4cc2e"],["/static/media/Header.36cb7bb0.png","36cb7bb040d6ed387b238b4d7a596237"],["/static/media/Relax.6e0f40b3.jpg","6e0f40b3b62ad6c81a1d2f493d13522e"],["/static/media/check-square.67d03585.svg","67d03585622a6be4e1dbd2fda7471215"],["/static/media/lato-latin-100.752c2022.woff","752c20224144760a496fb9e19a62f616"],["/static/media/lato-latin-100.f8028e61.woff2","f8028e61362a54aa64dcb26e8063d0d7"],["/static/media/lato-latin-100italic.6ea83803.woff","6ea8380326f67e10380953b188d96a2b"],["/static/media/lato-latin-100italic.ef884f11.woff2","ef884f11c6adb5df51c446911612e7af"],["/static/media/lato-latin-300.ba2452bd.woff","ba2452bdc790a4fee05202eac3c092b3"],["/static/media/lato-latin-300.bbbd26ae.woff2","bbbd26aeee9c5b967e35933bce02d358"],["/static/media/lato-latin-300italic.06eb177e.woff","06eb177ee6c1960bcd79f1cf8c812000"],["/static/media/lato-latin-300italic.7d718d72.woff2","7d718d7299ab7f9fab17d7d4f13ded57"],["/static/media/lato-latin-400.62fb51e9.woff","62fb51e9e645f63599238881b9de15dd"],["/static/media/lato-latin-400.f1a4a058.woff2","f1a4a058fbba1e35a406188ae7eddaf8"],["/static/media/lato-latin-400italic.b45e52f3.woff2","b45e52f342dc29c8553f51a99f924871"],["/static/media/lato-latin-400italic.c4082958.woff","c4082958a18f04bd32a3d3e1f5e390a5"],["/static/media/lato-latin-700.7fbbfd16.woff2","7fbbfd1610770d594aef639cfefdd0b0"],["/static/media/lato-latin-700.96759e32.woff","96759e32fdc800c78b527a3e53fe2be6"],["/static/media/lato-latin-700italic.0a06ba1b.woff","0a06ba1bdf385495f2679324cfbedd13"],["/static/media/lato-latin-700italic.c66215e0.woff2","c66215e09d2420885ad1a1f3eb2bac37"],["/static/media/lato-latin-900.d79dd066.woff","d79dd0661ba130ec7a7e7c060fcb7e09"],["/static/media/lato-latin-900.f2de2c6e.woff2","f2de2c6ec69b0c11f1bc44c5348c2f35"],["/static/media/lato-latin-900italic.e792d6c6.woff","e792d6c62329e025ca1cbea793ba8de5"],["/static/media/lato-latin-900italic.fd67cf72.woff2","fd67cf72cde7716bdadf8a3992b37fa2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});