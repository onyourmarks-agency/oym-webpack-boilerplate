import {Configuration} from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import preprocess from 'svelte-preprocess';
import {RetryChunkLoadPlugin} from 'webpack-retry-chunk-load-plugin';
import SvelteCheckPlugin from 'svelte-check-plugin';
import {WebpackApplicationConfiguration} from '../_declaration/config-types';

const scssAliases = (aliases: Record<string, string>): any => {
  return (url: string) => {
    for (const [alias, aliasPath] of Object.entries(aliases)) {
      if (url.indexOf(alias) === 0) {
        return {
          file: url.replace(alias, aliasPath),
        };
      }
    }
    return url;
  };
};


export default function (webpack: Configuration, config: WebpackApplicationConfiguration) {
  const babelPresets = [
    [
      '@babel/preset-typescript',
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

  webpack.module.rules.push(
    {
      test: /(\.([tj])s?$)|(\.svelte$)/,
      exclude: /(node_modules|bower_components)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: babelPresets,
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-runtime',
            ]
          },
        },
      ],
    },
    {
      test: /\.svelte$/,
      exclude: /node_modules\/@babel/,
      use: [
        {
          loader: 'svelte-loader',
          options: {
              preprocess: preprocess({
                scss: {
                  importer: [scssAliases(config.aliases)],
                },
              }),

            emitCss: true,
          },
        },
      ],
    }, {
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false // https://github.com/graphql/graphql-js/issues/2721#issuecomment-723008284
      },
    });

  webpack.optimization.minimizer.push(
    new TerserPlugin({
      parallel: 4,
      test: /\.[tj]s($|\?)/i,
      terserOptions: {
        keep_classnames: true,
      },
    })
  );

  if (config.debug) {
    webpack.plugins.push(
      new SvelteCheckPlugin({}),
    );
  }
};
