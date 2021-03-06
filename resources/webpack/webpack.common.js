const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const webpack = require('webpack'); // to access built-in plugins


module.exports = {
  entry: [
    path.resolve(__dirname, "../src/js/app.js")
  ],
    
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "../../dist"),
  },
  
  
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader,
      loaders.FileLoader,
    ]
  },
    
  
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
  ],
};