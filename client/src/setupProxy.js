const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      // target: 'http://ec2-18-189-29-190.us-east-2.compute.amazonaws.com:5000',
      changeOrigin: true,
    }),
  );
};
