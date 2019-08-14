const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    site: ['./source/javascripts/site.js', './source/stylesheets/site.scss']
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       configFile: '.eslintrc'
      //     },
      //   }
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: __dirname + '/stylesheets/',
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: __dirname + '/postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      }
    ]
  },
  output: {
    filename: 'javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[name].css',
      chunkFilename: '[id].css'
    })
  ],
};
