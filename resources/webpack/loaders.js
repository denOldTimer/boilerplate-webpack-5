
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const JSLoader = {
  test: /\.js$/i,
  exclude: [
    path.resolve(__dirname, '/node_modules/'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};


const CSSLoader = {
  test: /\.css$/i,
  exclude: [
    path.resolve(__dirname, '/node_modules/'),
  ],
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: path.resolve(__dirname, '../dist/css/')
      }
    },
    {
      loader: 'css-loader',
      options: {importLoaders: 1},
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js'),
        },
      },
    },
  ],
};

const HtmlLoader = {
  test: /\.html$/,
  exclude: [
    path.resolve(__dirname, '/node_modules/'),
  ],
  use: [
    {
      loader: "html-loader",
      options: {
        minimize: true
      }
    }
  ]
}


const ImageLoader = {
  test: /\.(svg|png|jpe?g|gif)$/i,
  exclude: [
    path.resolve(__dirname, '/node_modules/'),
    [/fonts/],
  ],
  use: [
    {
      loader: "file-loader",
      options: {
        name: "../../[path][name].[ext]",
      }
    }
  ]
};

const FontsLoader = {
  test: /\.(svg|eot|ttf|woff|woff2)$/,
  exclude: [
    path.resolve(__dirname, './node_modules'),
    [/img/],
  ],
  use: [
    {
      loader: "file-loader",
      options: {
        name: "../../[path][name].[ext]",
      }
    }
  ]
};


module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoader,
  HtmlLoader: HtmlLoader,
  ImageLoader: ImageLoader,
  FontsLoader: FontsLoader,
};