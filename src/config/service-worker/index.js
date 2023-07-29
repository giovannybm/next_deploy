import { skipWaiting, clientsClaim } from 'workbox-core';
import { cleanupOutdatedCaches, PrecacheController } from 'workbox-precaching';


const manifest = self.__WB_MANIFEST;

// Do whatever you want with `manifest`:
if (manifest) {
    console.log('precached', manifest);
    PrecacheController.addToCacheList(manifest);
}
skipWaiting();
clientsClaim();
cleanupOutdatedCaches();

