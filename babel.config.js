/**
 * Custom Babel configuration that automatically optimizes images.
 * @see {@link https://github.com/cyrilwanner/next-optimized-images/tree/canary#installation}
 */
module.exports = {
  presets: ['next/babel'],
  plugins: ['react-optimized-image/plugin'],
};
