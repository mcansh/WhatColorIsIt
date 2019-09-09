const withOffline = require('next-offline');
const withSourceMaps = require('@zeit/next-source-maps')();

const nextConfig = {
  target: 'serverless',
  env: {
    VERSION: require('./package.json').version,
  },

  dontAutoRegisterSw: true,
  workboxOpts: {
    swDest: 'static/sw.js',
    runtimeCaching: [
      {
        handler: 'StaleWhileRevalidate',
        urlPattern: /[.](webp|png|jpg|svg|css)/,
      },
      {
        handler: 'NetworkFirst',
        urlPattern: /^https?.*/,
      },
    ],
  },
};

module.exports = withOffline(withSourceMaps(nextConfig));
