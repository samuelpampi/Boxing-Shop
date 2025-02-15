const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/css", to: "css" },
        { from: "./src/img", to: "img" },
      ],
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
    })
  ],
};