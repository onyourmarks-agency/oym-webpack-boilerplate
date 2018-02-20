const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (webpack, config) {
    webpack.module.rules.push(
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: config.debug,
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: config.debug,
                        config: {
                            path: path.resolve(__dirname, '../config/external/postcss.config.js'),
                        }
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: config.debug,
                    }
                }],
                fallback: 'style-loader',
            })
        }
    );

    webpack.plugins.push(
        new ExtractTextPlugin({
            filename: config.components.css.fileMask,
            allChunks: true,
        })
    );

    if (!config.debug) {
        webpack.plugins.push(
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: {removeAll: true}
                },
                canPrint: true
            })
        );
    }
};
