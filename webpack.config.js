const type = process.env.NODE_BUILD || 'default';

module.exports = require('./webpack.config.' + type);