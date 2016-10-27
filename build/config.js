'use strict'
const pkg = require('../package')

module.exports = {
  port: 4000,
  title: 'xiansda-vue2',
  vendor: Object.keys(pkg.dependencies),
  babel: {
    babelrc: false,
    presets: [
      ['es2015', {modules: false}],
      'stage-1'
    ],
    plugins: [
      'transform-vue-jsx'
    ]
  },
  postcss: [
    require('autoprefixer')({
      // Vue does not support ie 8 and below
      browsers: ['last 2 versions', 'ie > 8']
    }),
    require('postcss-nested'),
    require('postcss-custom-properties')({
      variables: require(paths.client('assets/variables'))
    }),    
  ],
  cssModules: true,
}
