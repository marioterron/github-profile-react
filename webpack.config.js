const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: '/'
  },

  module: {
    loaders: [
      { 
        test: /(\.js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel' 
      },
      { 
        test: /\.css$/,
        loader: `style-loader!css-loader?${cssModules}` 
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}
