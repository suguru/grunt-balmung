/*
 * grunt-balmung
 * https://github.com/suguru/grunt-balmung
 *
 * Copyright (c) 2014 Suguru Namura
 * Licensed under the MIT license.
 */

'use strict';

var balmung = require('balmung');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('balmung', 'Grunt task to run balmung image optimizer.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var done = this.async();
    var data = this.data;
    var config = data.config || {};

    var tools = balmung.createTools({
      config: config
    });

    var list = [];

    var resize = function(done) {
      var resizer = tools.resizer;
      resizer.resize();
      resizer.on('resize', function(task) {
        list.push(task);
      });
      resizer.on('error', done);
      resizer.on('finish', done);
    };

    var optimize = function(done) {
      var optimizer = tools.optimizer;
      list.forEach(function(task) {
        optimizer.optimize(task.base, task.file, task.ratio);
      });
      if (list.length === 0) {
        done();
      } else {
        optimizer.on('error', done);
        optimizer.on('finish', done);
      }
    };

    tools.settings.load(tools.config, function(err) {
      if (err) {
        return done(err);
      }
      resize(function(err) {
        if (err) {
          return done(err);
        }
        optimize(function(err) {
          if (err) {
            return done(err);
          }
          done();
        });
      });
    });

  });

};
