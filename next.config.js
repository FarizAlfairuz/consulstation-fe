const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://consulstation-api.herokuapp.com/api/:path*',
      },
    ]
  },
});
