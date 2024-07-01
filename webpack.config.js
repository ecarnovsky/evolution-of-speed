const path = require('path');

module.exports = {
  entry: './ts/main.ts',
  module: {
    rules: [
      {
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
};