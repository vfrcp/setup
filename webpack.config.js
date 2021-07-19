const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
      path: path.resolve(__dirname, 'app/js'),
      filename: 'scripts.js',
    },         
    devtool: "source-map",
};
