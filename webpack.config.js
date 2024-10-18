// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser', // Polyfill for 'process'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader'
      },
    ],
  },
  resolve: {
    fallback: {
      "child_process": false, // Node.js module, not needed in browser
      "path": require.resolve("path-browserify"), // Polyfill for 'path'
      "fs": false, // Node.js module, not needed in browser
      "util": require.resolve("util/"),
      "process": require.resolve("process/browser"),
    }
  },
};
