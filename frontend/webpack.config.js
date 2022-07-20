const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VanillaExtractPlugin} = require("@vanilla-extract/webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.js"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["react-refresh/babel"],
            presets: ["@babel/preset-env", ["@babel/preset-react", {runtime: "automatic"}]],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new ReactRefreshWebpackPlugin(),
    new VanillaExtractPlugin(),
  ],
};
