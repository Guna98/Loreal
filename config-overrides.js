const { override, addWebpackAlias } = require('react-app-rewired');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
  // You can add more custom configurations here if needed
);
