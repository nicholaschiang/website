module.exports = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    // Specify the image sizes used for `layout='fill'` on the photography page.
    // These are used in tandem with the `sizes` property for three breakpoints:
    // 1. Less than or equal to 448px viewport width, use 400px images.
    // 2. Between 449px - 548px viewport width, use 500px images.
    // 3. Between 549px - 648px viewport width, use 600px images.
    // 4. Between 649px - 748px viewport width, use 700px images.
    // 5. Between 749px - 848px viewport width, use 800px images.
    // 6. Greater than 848px viewport width, use 500px images (two columns).
    deviceSizes: [400, 500, 600, 700, 800],
    // Specify the image sizes used for `layout='fixed'` on the research page.
    imageSizes: [300],
  },
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
};
