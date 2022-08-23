const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: '/dist',
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
    ],
  },
};
