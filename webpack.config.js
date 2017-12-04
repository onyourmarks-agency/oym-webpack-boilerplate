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
    SvgStore = require('tde-webpack-svg-plugin'),
    MjmlStore = require('tde-webpack-mjml-plugin')
;

const paths = {
    BASE_TEMPLATE: path.resolve(__dirname, 'templates'),
    SRC: path.resolve(__dirname, 'assets'),
    JS: path.resolve(__dirname, 'assets/js'),
    SVG: path.resolve(__dirname, 'assets/svg'),
    MJML: path.resolve(__dirname, 'assets/mjml'),
    CSS: path.resolve(__dirname, 'assets/css'),
    DIST_PRIVATE: path.resolve(__dirname, 'build'),
    DIST_PUBLIC: '/',
};

const isDebug = process.env.NODE_ENV !== 'production';

const plugins = [
    new CleanWebpackPlugin([paths.DIST_PRIVATE] + '/', {
        exclude: ['svg', 'manifest.json'],
        watch: true,
        verbose: true
    }),
    new ExtractTextPlugin({
        filename: 'css/[name].bundle.css',
        allChunks: true
    }),
    new ManifestPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new SvgStore(paths.SVG, {
        mode: {
            symbol: {
                inline: true,
            },
        },
        dest: paths.DIST_PRIVATE + '/svg'
    }),
    new MjmlStore(paths.MJML, {
        extension: '.twig',
        outputPath: paths.DIST_PRIVATE + '/mjml'
    }),
    new WebpackNotifierPlugin({
        alwaysNotify: true,
        contentImage: path.join(__dirname, 'webpack.notifierlogo.png')
    }),
];

const entries = {
    'js-app': path.join(paths.JS, 'app.js'),
    'css-main': path.join(paths.CSS, 'app.scss')
};

if (!isDebug) {
    plugins.push(new UglifyJSPlugin({
        test: /\.js($|\?)/i
    }));

    plugins.push(new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    }));
}

module.exports = {
    devtool: isDebug ? 'eval-cheap-source-map' : false,
    entry: entries,
    output: {
        path: paths.DIST_PRIVATE,
        filename: 'js/[name].bundle.js',
        publicPath: paths.DIST_PUBLIC
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babel-preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader'
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