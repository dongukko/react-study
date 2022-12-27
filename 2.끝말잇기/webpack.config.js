const path = require("path");
const refreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "wordrelay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3000,
  },
  entry: {
    app: ["./client"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  devServer: {
    devMiddleware: { publicPath: "/dist/" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
  plugins: [new refreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  }, // 출력
};
