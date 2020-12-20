const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/app.js',
    vendor: './src/vendor.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  mode: 'development',
  // mode: 'production',
  plugins: [
    new html({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
