const withOptimizedImages = require('next-optimized-images');

// Increase the max num of event listeners to support image optimization.
// @see {@link https://github.com/cyrilwanner/next-optimized-images/issues/120#issuecomment-694440787}
process.setMaxListeners(20);

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
