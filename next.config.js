// Increase the max num of event listeners to support image optimization.
// @see {@link https://bit.ly/2ST9m2w}
process.setMaxListeners(50);

const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  reactStrictMode: true,
  webpack(config, { isServer }) {
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
});
