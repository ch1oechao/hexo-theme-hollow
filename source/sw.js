"use strict";
(function() {
  var cacheVersion = "-180503";
  var staticCacheName = "asset" + cacheVersion;
  var maxEntries = 100;
  self.importScripts("https://cdn.jsdelivr.net/npm/sw-toolbox@3.6.0/sw-toolbox.js");

  self.toolbox.options.debug = false;
  self.toolbox.options.networkTimeoutSeconds = 1;

  /* staticImageCache */
  self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    cache: {
      name: staticCacheName,
      maxEntries: maxEntries
    }
  });
})();
