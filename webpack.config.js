/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');


module.exports = {
  devtool: "eval-source-map",
  mode: "development",
  entry: path.resolve(__dirname, './src/index.ts'),
  devServer: {
    watchFiles: ["./src"],
    liveReload: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'build'),
    },
  },
  module: {
    rules: [
      //ts loader
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")]
      },
      //json loader
      {
        test: /\.(json)$/i,
        type: "asset/resource",
        generator: {
          filename: 'resources/[name][ext]'
        }
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
  }),
    new EslintPlugin({ extensions: 'ts' }),
],
};
