var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: './src/index.js',
    vendor: ['vue', 'vue-router', 'vue-resource']
  },
  dist: './dist',
  template: './src/index.html',

  devServer: {
    port: 8081,
    publicPath: '/',
    log: false
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    require('postcss-import')({
      addDependencyTo: require('webpack')
    }),
    require('postcss-px2rem'),
    require('postcss-nested'),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'iOS >= 7', 'Android >= 4.0']
    })
  ],
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    src: path.join(__dirname, 'src'),
    vue: 'vue/dist/vue.js'
  },
  extends: ['vue2', 'lint', 'sass']
});

cooking.add('resolve.root', [
  path.join(__dirname, 'src/assets/')
]);
module.exports = cooking.resolve();
