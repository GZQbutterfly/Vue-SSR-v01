let baseConfig = require('./webpack.base.conf');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = merge(baseConfig, {
    mode: 'development',
    entry: {
        'main': path.join(__dirname, '../src/pages/index.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader?cacheDirectory'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/pages/index.html'),
            filename: 'index.html',
            minify: {
                removeComments: true
            },
            hash: true,
            inject: 'body'
        })
    ]
});