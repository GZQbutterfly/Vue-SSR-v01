let baseConfig = require('./webpack.base.conf');
const path = require('path');
const merge = require('webpack-merge');




module.exports = merge(baseConfig, {
    mode: 'production',
    entry: {
        'main': path.join(__dirname, '../src/pages/index.js')
    }
});