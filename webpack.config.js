const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/app.ts'),
  output: {
    filename: 'app.js',
    path: __dirname + '/html'
  },
  devServer: {
    contentBase: path.join(__dirname, 'html'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
