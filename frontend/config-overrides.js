const {VanillaExtractPlugin} = require("@vanilla-extract/webpack-plugin");
const {getBabelLoader, removeModuleScopePlugin} = require("customize-cra");

module.exports = {
  webpack: function (config) {
    const loader = getBabelLoader(config);

    loader.exclude = /node_modules/;
    delete loader.include;

    loader.options.plugins.push("@vanilla-extract/babel-plugin");

    config.plugins.push(new VanillaExtractPlugin());
    return removeModuleScopePlugin()(config);
  },
};
