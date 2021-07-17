const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'scripts.js',
    },
    module: {
        rules: [
          {
            test: /\.(s[ac]|c)ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|webp|git|svg|)$/i,
            use: [
              {
                loader: 'img-optimize-loader',
              },
            ],
          },
          {
            test: /\.(woff|woff2)$/,
            use: {
              loader: 'url-loader',
            },
          },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: "style.css"
        }),
        new RemovePlugin({
            before: {
              test: [
                {
                  folder: './dist',
                  method: () => true
                }
              ],
              exclude: [
                './dist/index.html',
              ]
            }
          })
    ],
    devtool: "source-map",
};
