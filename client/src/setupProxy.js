const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'http://localhost:5000',
      target: 'http://18.189.29.190:5000',
      changeOrigin: true,
    }),
  );
};
