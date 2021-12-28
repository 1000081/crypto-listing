
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./common')({
    mode: 'development',

    entry: [
        require.resolve('babel-polyfill'),
        path.join(process.cwd(), './src/index.js')
    ],
    devServer: {
        contentBase: './src',
        compress: true,
        hot: true,
        historyApiFallback: true,
        disableHostCheck: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './index.html'
        }),
        new CircularDependencyPlugin({
            exculde: /a\.js|node_modules/,
            failOnError: false
        })
    ],
    devtool: 'eval-source-map',
    performance: {
        hints: false
    },
    module: {
        rules: [
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: { minimize: true },
              },
            ],
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          },
        ],
      }
});