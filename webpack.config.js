'use strict'

const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR           = path.resolve(__dirname, 'src');
const BUILD_DIR         = path.resolve(__dirname, 'dist');

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: './js/[name].js',
  },
  cache: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'PortfolioV2.1',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root-container'
    }),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
      })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
        },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
        },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
        },
      {
        test: /\.(eot|svg|ttf|woff|woff2)?$/,
        use: 'file-loader?name=/fonts/[name].[ext]'
      },
    ]
  }
}
