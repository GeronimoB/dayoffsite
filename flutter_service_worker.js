'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5d97f11f988d26c5cfeacf673ac53561",
"assets/AssetManifest.bin.json": "ef1f654ef3aa7f1db53f4fefb8186369",
"assets/AssetManifest.json": "a7458ed40c6e106579abd7186f861003",
"assets/assets/images/animacion.mp4": "c2b669cdf2e55a400ff51e19fb641baf",
"assets/assets/images/calendario.png": "b2c6098c212e8e922e2366c51d517869",
"assets/assets/images/calendarioFin.png": "bef7ae34192104eb847594a515588bdb",
"assets/assets/images/chat_logo.png": "8c46b0e77a62d3d6e097b0f9ede355f1",
"assets/assets/images/contrato.png": "ee208ff09389a81607fff45d53235934",
"assets/assets/images/dash.png": "aee1f56dc11b79954b438773dc934e6a",
"assets/assets/images/dayoff.mp4": "799627b0569ccfb7293ccb3c31a42dfa",
"assets/assets/images/default-avatar.png": "022f61ffa0fba2365db199c4e3fe920e",
"assets/assets/images/documento.png": "48dded327e4ef354fc68d96047b9a325",
"assets/assets/images/enviar.png": "d2293424d7835f0e79632e7538800a00",
"assets/assets/images/flutterfire_300x.png": "4b238781c9e5348944f6325cc4a4d3c8",
"assets/assets/images/Fondo.mp4": "e519afc58bf0363dc9df8a528074c067",
"assets/assets/images/google-48.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/images/grupo-de-usuarios.png": "52d5549274df70cad5cb0678c7878e3b",
"assets/assets/images/logo-sepla.png": "5da9f35deff66b031a7912b4231af22b",
"assets/assets/images/LogoChatGpt.png": "ae9176cfc73e42e0beff580a220da58e",
"assets/assets/images/LogoDayOff.PNG": "efb7cfddee33d88fb26cf86cf12eb85e",
"assets/assets/images/LogoFin.png": "90a3ba8384eeb70870bf2011d6a41f07",
"assets/assets/images/LogoFin1.png": "7769ab5f3bee7c2b1906abc2561464cb",
"assets/assets/images/paso-del-tiempo.png": "decbd77242f08720088f79b5eeccc0b5",
"assets/assets/images/person.png": "b2d7b168f9b243fb5eff855bc85b441b",
"assets/assets/images/portafolio.png": "eaa561bbd26748da47471ebd0902c6b9",
"assets/assets/images/tiempo-parcial.png": "c08d218f4d1662eb4f68e5249a612ed7",
"assets/assets/images/tiempo-restante.png": "cdc165b00635ea37b1f0064a37430683",
"assets/assets/images/usuario.png": "72c59b77ff20c36deb8a202b5d007837",
"assets/assets/images/video.png": "7012a9994b58f3fa0aba28a07ec9c2c3",
"assets/FontManifest.json": "09cf96bc88279d3c077e3c39e71e0b3e",
"assets/fonts/MaterialIcons-Regular.otf": "25f30c00c9f8bfd61ae9d71e09d8d94e",
"assets/fuentes/MuseoSans_500.otf": "62c0135163427c652ae397f327f85010",
"assets/fuentes/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/NOTICES": "065de89b8f24ece58c855303974c1677",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e14d4247c0221552f79bf5629127cff4",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "9e96d8940f514213a73840721f0b5c1d",
"assets/packages/flutter_osm_web/src/asset/map.js": "c69b4d778b3081d4d3b353d1786a9ea8",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "8ac7e3bf937ae11469e21265b15709eb",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bbc6f85de8411002d3d68a9b1518baa",
"/": "5bbc6f85de8411002d3d68a9b1518baa",
"main.dart.js": "f94aa38e7aa5a8a9ec284eb24ec579cf",
"manifest.json": "d89a022027c024cf77f4c899d728299f",
"version.json": "b41428058e7c419f4249dfd31bb77016"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
