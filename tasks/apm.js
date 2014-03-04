/*
 * grunt-apm
 * https://github.com/aymericbeaumet/grunt-apm
 *
 * Copyright (c) 2014 Aymeric Beaumet
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var exec = require('child_process').exec;

  grunt.registerTask('apm-link', 'Create a symlink for the package in ~/.atom/packages.', function() {
    var done = this.async();

    exec('apm link .', function(err, stdout, stderr) {
      console.log((err) ? stderr : stdout);
      done(!err || err.code === 0);
    });
  });

  grunt.registerTask('apm-unlink', 'Delete the symlink in ~/.atom/packages for the package.', function() {
    var done = this.async();

    exec('apm unlink .', function(err, stdout, stderr) {
      console.log((err) ? stderr : stdout);
      done(!err || err.code === 0);
    });
  });

};
