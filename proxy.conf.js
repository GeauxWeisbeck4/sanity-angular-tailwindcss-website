const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://tarymg9j.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;