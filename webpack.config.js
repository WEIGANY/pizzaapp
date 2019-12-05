const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build/');
const SOURCE_DIR = path.resolve(__dirname, 'src/');

module.exports = {
  entry: `${SOURCE_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      }],
    }, {
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SOURCE_DIR}/index.html`,
    }),
  ],
};
