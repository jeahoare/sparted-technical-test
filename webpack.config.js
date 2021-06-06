const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path:path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      }
}