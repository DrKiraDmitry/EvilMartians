const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssOptions = require("./postcss.config");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico",
    }),
    require("autoprefixer"),
    require("postcss-nested"),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              [
                "@babel/preset-typescript",
                {
                  tsconfig: "./tsconfig.json",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                ...postcssOptions,
                config: false,
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        type: "asset",
        generator: {
          filename: "[path][name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".*", ".js", ".jsx", ".tsx", ".ts"],
  },
};
