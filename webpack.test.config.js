var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
process.env.NODE_ENV = 'base'

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    // mode: 'production',
    // entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    devtool: '#source-map',
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'istanbul-instrumenter-loader',
            //         options: {esModules: true}
            //     },
            //     enforce: 'pre',
            //     exclude: /(node_modules|\*\.spec\.js$)/
            // },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')],
                // options: {
                //     presets: ['es2015'],
                //     plugins: ['istanbul']
                // },
                exclude: /(node_modules|\*\.spec\.js$)/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    },
                    postLoaders: {
                        js: 'istanbul-instrumenter-loader?esModules=true'
                    }
                }
            }
        ]
    },
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        })
    ]
};