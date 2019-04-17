'use strict'

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

/**
 * base configuration object
 */
const config = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [
            /\.vue$/
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.tsx',
      '.ts'
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = config
