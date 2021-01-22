// linking path
const path = require('path');
// linking webpack
const webpack = require("webpack");

// exporting main object
module.exports = {
  entry: './assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      }),
  ],
  mode: 'development'
};