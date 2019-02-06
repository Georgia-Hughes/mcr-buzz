const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const config = {
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    target: 'web',
    mode: argv.mode,
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'app.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s?css$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.otf$|\.eot$|\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                context: path.join(__dirname, 'src'),
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname),
      historyApiFallback: true,
    },
    node: {
      fs: 'empty',
    },
  };

  if (argv.mode === 'development') {
    config.plugins.push(new Dotenv());
  } else {
    config.plugins.push(new webpack.EnvironmentPlugin(['API_URL']));
  }

  return config;
};
