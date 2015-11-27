/**
 * Created by Administrator on 2015/11/26.
 */
var webpack = require("webpack");


module.exports = {
    entry : "./src/index.jsx",
    output : {
        filename: "./js/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader!jsx-loader?harmony'
        },{
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};