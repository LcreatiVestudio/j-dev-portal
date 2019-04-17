'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin')

const webpackBaseConfig = require('./webpack.base')

/**
 * Configuration object
 */
const config = merge(webpackBaseConfig, {
  mode: 'production',
  plugins: [
    new LodashModuleReplacementPlugin(),
    // eslint-disable-next-line no-useless-escape
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          // eslint-disable-next-line no-useless-escape
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})

module.exports = config
