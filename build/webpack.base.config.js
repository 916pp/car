var webpack = require('webpack');
var path = require('path');
var utils = require('./utils');

function resolve(relPath) {
    return path.resolve(__dirname, relPath);
}

module.exports = {
    devtool:'eval-source-map',
    entry: { app: resolve('../src/main.js'),login:resolve('../src/login.js') },
    output: {
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: "babel-loader",
                include: [resolve('../src')]
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: utils.vueLoaderOptions()
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }]
            }
        ]
    }
}
