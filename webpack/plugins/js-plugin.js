/* eslint-disable import/no-extraneous-dependencies */
const TerserPlugin = require('terser-webpack-plugin');
const preprocess = require('svelte-preprocess');
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin');

module.exports = function (webpack, config) {
  const babelPresets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            "last 1 version",
            "> 1%",
            "not dead",
          ],
        },
        debug: true,
      },
    ],
  ];

  // Retry chunk load
  webpack.plugins.push(
    new RetryChunkLoadPlugin({
      retryDelay: 2500,
      maxRetries: 5,
    }),
  );

  webpack.module.rules.push({
    test: /(\.js?$)|(\.svelte$)/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: babelPresets,
          plugins: [
            '@babel/plugin-syntax-dynamic-import'
          ]
        },
      },
    ],
  }, {
    test: /\.svelte$/,
    exclude: /node_modules\/@babel/,
    use: [
      {
        loader: 'svelte-loader',
        options: {
          preprocess: preprocess(),
        },
      },
    ],
  }, {
    test: /\.mjs$/,
    resolve: {
      fullySpecified: false // https://github.com/graphql/graphql-js/issues/2721#issuecomment-723008284
    },
  });

  webpack.optimization.minimizer.push(new TerserPlugin({
    test: /\.js($|\?)/i,
  }));
};
