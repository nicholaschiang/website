const withImages = require('next-images');
const withPrefresh = require('@prefresh/next');

module.exports = withPrefresh(
  withImages({
    reactStrictMode: true,
    webpack(config, { dev, isServer }) {
      // PREACT SUPPORT
      // Configuration extensions taken directly from the Next.js example.
      // @see {@link https://github.com/vercel/next.js/blob/canary/examples/using-preact}
      const splitChunks =
        config.optimization && config.optimization.splitChunks;
      if (splitChunks) {
        const cacheGroups = splitChunks.cacheGroups;
        const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
        if (cacheGroups.framework) {
          cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
            test,
          });
        }
      }
      if (isServer)
        config.externals.push(
          /^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/
        );
      const aliases = config.resolve.alias || (config.resolve.alias = {});
      aliases.react = aliases['react-dom'] = 'preact/compat';
      if (dev && !isServer) {
        const entry = config.entry;
        config.entry = () =>
          entry().then((entries) => {
            entries['main.js'] = ['preact/debug'].concat(
              entries['main.js'] || []
            );
            return entries;
          });
      }

      // BUNDLE ANALYZER
      if (!isServer && process.env.ANALYZE === 'true') {
        // Only run the bundle analyzer for the client-side chunks.
        // @see {@link https://github.com/vercel/next.js/issues/15481}
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: './analyze/client.html',
            generateStatsFile: true,
          })
        );
      }

      return config;
    },
  })
);
