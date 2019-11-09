/* global require __dirname module */
let path = require('path');

let conf = {
  entry: './es6/lesson7/index.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'main.js',
    publicPath: 'js/'
  },
  devServer: {
    overlay: true,
    proxy: {
      '/api/**': {
        target: 'http://js-6-api/auth.php',
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
        // exclude: '/node_modules/'
      }
    ]
  }
};

module.exports = (env, options) => {
  conf.devtool = options.mode === 'production' ? false : 'cheap-module-eval-source-map';

  return conf;
};
