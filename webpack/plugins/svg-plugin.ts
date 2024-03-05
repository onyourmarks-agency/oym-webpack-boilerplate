import SvgPlugin from '@onyourmarks/webpack-svg-plugin';
import path from 'path';
import {Configuration} from 'webpack';
import {WebpackApplicationConfiguration} from '../_declaration/config-types';
import {SvgOptionsType} from '@onyourmarks/webpack-svg-plugin/dist/_types/options';

export default function (webpack: Configuration, config: WebpackApplicationConfiguration) {
  webpack.plugins.push(new SvgPlugin(config.components.svg.source, {
    mode: {
      symbol: {
        inline: false,
      },
    },
    dest: path.join(config.components.svg.dist),
  } as SvgOptionsType));
};
