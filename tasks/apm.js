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

  var afterExec = function(err, stdout, stderr, done) {
    var hasFailed = (err && err.code !== 0);
    console.log(hasFailed ? stderr : stdout);
    done(hasFailed);
  };

  grunt.registerTask('apm-link', 'Create a symlink for the package in ~/.atom/packages.', function() {
    var done = this.async();

    exec('apm link .', function(err, stdout, stderr) {
      afterExec(err, stdout, stderr, done);
    });
  });

  grunt.registerTask('apm-test', 'Runs the package\'s tests contained within the spec directory.', function() {
    var done = this.async();

    exec('apm test', function(err, stdout, stderr) {
      afterExec(err, stdout, stderr, done);
    });
  });

  grunt.registerTask('apm-unlink', 'Delete the symlink in ~/.atom/packages for the package.', function() {
    var done = this.async();

    exec('apm unlink .', function(err, stdout, stderr) {
      afterExec(err, stdout, stderr, done);
    });
  });

};
