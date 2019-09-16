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
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  parallel: require('os').cpus().length > 1,

}