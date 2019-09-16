module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  productionSourceMap: false,
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