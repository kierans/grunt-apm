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

  var afterExec = function(err, stdout, stderr) {
    var hasSucceed = !(err && err.code !== 0);
    console.log(hasSucceed ? stdout : stderr);
    return hasSucceed;
  };

  grunt.registerTask('apm-link', 'Create a symlink for the package in ~/.atom/packages.', function() {
    var done = this.async();

    exec('apm link .', function(err, stdout, stderr) {
      done(afterExec(err, stdout, stderr));
    });
  });

  grunt.registerTask('apm-test', 'Runs the package\'s tests contained within the spec directory.', function() {
    var done = this.async();

    exec('apm test', function(err, stdout, stderr) {
      done(afterExec(err, stdout, stderr));
    });
  });

  grunt.registerTask('apm-unlink', 'Delete the symlink in ~/.atom/packages for the package.', function() {
    var done = this.async();

    exec('apm unlink .', function(err, stdout, stderr) {
      done(afterExec(err, stdout, stderr));
    });
  });

};
