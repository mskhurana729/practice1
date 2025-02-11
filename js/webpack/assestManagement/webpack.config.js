const { type } = require("os");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // In order to import a CSS file from within a JavaScript module, you need to install and add the style-loader and css-loader to your module configuration:
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //   Loading Images
      // So now we're pulling in our CSS, but what about our images like backgrounds and icons? As of webpack 5, using the built-in Asset Modules we can easily incorporate those in our system as well:
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      //   Loading Fonts
      // So what about other assets like fonts? The Asset Modules will take any file you load through them and output it to your build directory. This means we can use them for any kind of file, including fonts. Let's update our webpack.config.js to handle font files:
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

// Module loaders can be chained. Each loader in the chain applies transformations to the processed resource. A chain is executed in reverse order. The first loader passes its result (resource with applied transformations) to the next one, and so forth. Finally, webpack expects JavaScript to be returned by the last loader in the chain.

// The above order of loaders should be maintained: 'style-loader' comes first and followed by 'css-loader'. If this convention is not followed, webpack is likely to throw errors.
