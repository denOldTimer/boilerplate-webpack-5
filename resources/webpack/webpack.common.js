const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const webpack = require('webpack'); // to access built-in plugins


module.exports = {
  entry: {

    index:[
      path.resolve(__dirname, "../src/js/app.js"),
      path.resolve(__dirname, "../src/css/app.css")
    ],

  },
    
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../../dist/js"),
  },
  
  
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader,
      loaders.HtmlLoader,
      loaders.ImageLoader,
      loaders.FontsLoader,
    ]
  },
    
  
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,  
    plugins.CopyPlugin,
    plugins.HtmlWebPackPlugin,      
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    
    
    
  ],
};