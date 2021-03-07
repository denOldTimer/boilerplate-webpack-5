const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _HtmlWebPackPlugin = require("html-webpack-plugin");
const _CopyPlugin = require("copy-webpack-plugin");


const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '../css/[name].bundle.css',
  chunkFilename: '../css/[id].css'
});

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, '.eslintrc'),
  context: path.resolve(__dirname, '../src/js'),
  files: '**/*.js',
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/css'),
  files: '**/*.css',
});

const HtmlWebPackPlugin = new _HtmlWebPackPlugin({
  title: "Home | YourDomain.com",
  template: path.resolve(__dirname, '../src/templates/index.html'),
  filename: "../index.html",
  inject:true
});

const CopyPlugin = new _CopyPlugin({
  patterns: [
    { from: path.resolve(__dirname, '../src/images/'),  to: path.resolve(__dirname, '../../dist/images/'), },
    { from: path.resolve(__dirname, '../src/fonts/'),  to: path.resolve(__dirname, '../../dist/fonts/'), },

  ]
});


module.exports = {
  CleanWebpackPlugin: new CleanWebpackPlugin(),
  CopyPlugin: CopyPlugin,
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  ESLintPlugin: ESLintPlugin,
  HtmlWebPackPlugin: HtmlWebPackPlugin,
  
  
  
};