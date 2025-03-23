const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false
  },
  experiments: {
    topLevelAwait: true, // Enables better async handling
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "featureModule",
      filename: "remoteEntry.js",
      exposes: {
        "./FeatureModule": "./src/app/feature/feature.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: false, requiredVersion: '^19.2.0' },
        "@angular/common": { singleton: true, strictVersion: false, requiredVersion: '^19.2.0' },
        "@angular/router": { singleton: true, strictVersion: false, requiredVersion: '^19.2.0' },
      }
    })
  ],
};
