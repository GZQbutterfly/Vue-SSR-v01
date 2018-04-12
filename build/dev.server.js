let webpack = require('webpack');
let webpackConfig = require('./dev.js');


const WebpackDevServer = require('webpack-dev-server');

let port = 3003,
    pathname = '127.0.0.1';


new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '../dist',
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    compress: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    },
    disableHostCheck: false
}).listen(port, pathname, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log(`Listening at http://${pathname}:${port}`);
    }
});


