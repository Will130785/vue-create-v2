const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    main: './src/main.js' 
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundled.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
