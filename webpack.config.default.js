module.exports = function () {
  const fs = require('fs');
  const path = require('path');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');
  const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');
  const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
  const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  const ManifestPlugin = require('webpack-manifest-plugin');
  const WebpackNotifierPlugin = require('webpack-notifier');
  const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
  const SvgPlugin = require('tde-webpack-svg-plugin');

  const { paths } = JSON.parse(fs.readFileSync('./package.json')).config;
  const isDebug = process.env.NODE_ENV !== 'production';
  const source = {};
  const dist = {};
  // const craft = {};

  // Todo, this can be much better
  // Build new craft
  // Object.keys(paths.craft).forEach(function (key) {
  //   craft[key] = path.resolve(__dirname, paths.craft[key]);
  // });

  // Build new source
  Object.keys(paths.source).forEach(function (key) {
    source[key] = path.resolve(__dirname, paths.source[key]);
  });

  // Build new source
  Object.keys(paths.dist).forEach(function (key) {
    dist[key] = path.resolve(__dirname, paths.dist[key]);
  });

  const plugins = [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      contentImage: path.join(__dirname, 'webpack.notifierlogo.png')
    }),
    new CleanWebpackPlugin(
        [dist.private], {
          exclude: ['svg', 'manifest.json'],
          watch: !isDebug,
          verbose: true
        }
    ),
    new ExtractTextPlugin({
      filename: isDebug ? 'css/[name].dev.css' : 'css/[name].[hash:6].css',
      allChunks: true
    }),
    new ManifestPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new ExtraneousFileCleanupPlugin({
      extensions: ['.js'],
      minBytes: 20,
      manifestJsonName: 'manifest.json'
    }),
    new SvgPlugin(source.svg, {
      mode: {
          symbol: {
              inline: false
          }
      },
      dest: path.join(dist.private + '/svg')
    })
  ];

  const entries = {
    'js-app': path.join(source.js, 'app.js'),
    'css-main': path.join(source.css, 'styles.scss')
  };

  const buildRules = {
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
            loader: 'css-loader',
            options: {
              sourceMap: isDebug
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDebug
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: isDebug
            }
          }],
          fallback: 'style-loader'
        })
      }
    ]
  };

  if (!isDebug) {
    plugins.push(
      new UglifyJSPlugin({
        test: /\.js($|\?)/i
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardComments: {removeAll: true}
        },
        canPrint: true
      })
    );
  }

  return {
    devtool: isDebug ? 'eval-cheap-source-map' : false,
    entry: entries,
    output: {
      path: dist.private,
      filename: isDebug ? 'js/[name].dev.js' : 'js/[name].[hash:6].js',
      publicPath: paths.dist.public
    },
    module: buildRules,
    plugins: plugins
  };
};