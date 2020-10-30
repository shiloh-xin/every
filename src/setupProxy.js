// 反向代理
const { createProxyMiddleware: proxy } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        '/api', //虚拟的前缀
        proxy({
            target: 'https://api.i-lynn.cn/', //具体的访问前缀
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};
