/* eslint-disable indent */
const
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    ManifestPlugin = require('webpack-manifest-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier'),
    FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
    SvgStore = require('webpack-svgstore-plugin')
;

const paths = {
    BASE_TEMPLATE: path.resolve(__dirname, 'templates'),
    SRC: path.resolve(__dirname, 'assets'),
    JS: path.resolve(__dirname, 'assets/js'),
    SVG: path.resolve(__dirname, 'assets/svg'),
    STYLE: path.resolve(__dirname, 'assets/style'),
    DIST_PRIVATE: path.resolve(__dirname, 'public/assets'),
    DIST_PUBLIC: '/',
};

const isDebug = process.env.NODE_ENV !== 'production';

const plugins = [
    new CleanWebpackPlugin([paths.DIST_PRIVATE]),
    new ExtractTextPlugin({
        filename: 'css/[name].bundle.css',
        allChunks: true,
    }),
    new ManifestPlugin(),
    new WebpackNotifierPlugin({
        alwaysNotify: true,
        contentImage: path.join(__dirname, 'ZiggoSport.png')
    }),
    new FriendlyErrorsWebpackPlugin(),
    new SvgStore(path.join(paths.SVG, '*.svg'), 'svg', {
        name: 'sprite.svg',
        chunk: 'app',
        svgoOptions: {
            plugins: [{
                removeTitle: true
            }]
        }
    })
];

if (!isDebug) {
    plugins.push(new UglifyJSPlugin({
        test: /\.js($|\?)/i
    }));

    plugins.push(new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: {removeAll: true } },
        canPrint: true
    }));
}

var entries = [
    path.join(paths.JS, 'app.js'),
    path.join(paths.STYLE, 'app.scss')
];

// entries = entries.concat(glob.sync(paths.SVG + '/*.svg'));

module.exports = {
    devtool: isDebug ? 'inline-source-map' : false,
    entry: entries,
    output: {
        path: paths.DIST_PRIVATE,
        filename: 'js/[name].[hash:6].js',
        publicPath: paths.DIST_PUBLIC
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {
            //         failOnWarning: false,
            //         failOnError: false,
            //         eslint: {
            //             configFile: path.join(__dirname, '.eslintrc'),
            //             cache: false
            //         }
            //     }
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|(assets\/svg))/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: plugins
};