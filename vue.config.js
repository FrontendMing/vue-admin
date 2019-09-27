const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  css: {
    // extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false,
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: 'http://47.107.127.0:8080/bargain', // 配置一个代理
    // proxy: { // 配置多个代理
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // },
  },
  parallel: require('os').cpus().length > 1,
}