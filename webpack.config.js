/**
 * Created by Administrator on 2015/11/26.
 */
var webpack = require("webpack");


module.exports = {
    entry : "./src/index.js",
    output : {
        filename: "./js/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
};