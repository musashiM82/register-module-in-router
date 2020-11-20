const pkjson = require('./package.json');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === 'production';
const fileVersion = isProduction ? '.' + pkjson.version : '';

module.exports = {
    configureWebpack: {
        output: {
            filename: '[name]' + fileVersion + '.js',
            chunkFilename: '[name]' + fileVersion + '.js',
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'async'
                    }
                }
            }
        },
    }
}
