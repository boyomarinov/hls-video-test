'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
            ' Licensed <%= pkg.license %> */\n',
        qunit: {
            files: 'test/**/*.html'
        },
        jshint: {
            gruntfile: {
                options: {
                    node: true
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: ['js/**/*.js']
            },
            test: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: ['test/**/*.js']
            }
        },
        connect: {
            dev: {
                options: {
                    hostname: '*',
                    port: 9999,
                    keepalive: true
                }
            }
        },
        open : {
            dev : {
                path: 'http://127.0.0.1:<%= connect.dev.options.port %>/index.html',
                app: 'Google Chrome'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

//    grunt.registerTask('default', ['jshint', 'qunit','connect', 'open']);
    grunt.registerTask('default', ['jshint','connect', 'open']);
};
