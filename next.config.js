/** @type {import('next').NextConfig} */
const WorkboxPlugin = require("workbox-webpack-plugin");
const nextConfig = {
  webpack: (
    config,
    options
  ) => {
    if (!options.isServer) {
      console.log("********")
      const SWConfig = new WorkboxPlugin.InjectManifest({
        swSrc: "./src/config/service-worker/index.js",
        swDest: "../public/service-worker.js",
        // In dev, exclude everything.
        // This avoids irrelevant warnings about chunks being too large for caching.
        // In non-dev, use the default `exclude` option, don't override.
        ...(options.dev ? { exclude: [/./] } : undefined),
      })
      if (options.dev) {
        console.log("/////////")
        Object.defineProperty(SWConfig, "alreadyCalled", {
          get() {
            return false;
          },
          set() {
            // do nothing; the internals try to set it to true, which then results in a warning
            // on the next run of webpack.
          },
        });
      }
      config.plugins.push(SWConfig);
    }

    
    return config;
  },
};

module.exports = nextConfig;
