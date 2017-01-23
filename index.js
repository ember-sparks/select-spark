/* jshint node: true */
'use strict';

var nesting = require('postcss-nesting');
var autoprefixer = require('autoprefixer');

module.exports = {
  name: 'ember-select-spark',

  options: {
    cssModules: {
      plugins: [
        nesting(),
        autoprefixer('last 2 versions'),
      ]
    },
  },
};
