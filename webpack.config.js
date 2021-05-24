const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname,"public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js",".jsx"],
  },
  performance: {
    //  development 
    //hints: false,
       
    // Production
    hints: 'error',   
    maxEntrypointSize: 580000,
    maxAssetSize: 580000,
     },
  //ambiente: development
  //devtool: 'eval-cheap-module-source-map',

  //ambiente production
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
