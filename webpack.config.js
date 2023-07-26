// webpack.config.js

module.exports = {
  // Otras configuraciones de Webpack...
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify")
    }
  }
};
