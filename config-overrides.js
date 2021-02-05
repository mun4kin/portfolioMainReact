/* config-overrides.js */
const path = require('path');
const SRC = path.resolve(__dirname, 'src/main/js');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  const rule = {
    test: /\.(png|jpg|jpeg|gif|mp3|svg)$/,
    include: SRC,
    loader: 'file-loader'
  };

  config.module.rules = [...config.module.rules, rule];
  return config;
};
