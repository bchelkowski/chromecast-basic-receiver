const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    filename: 'assets/[name].js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(tsx?|js)?$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    port: 8080,
  },
};
