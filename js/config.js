/*! videojs-test - v0.1.0 - 2015-2-8
 * Copyright (c) 2015 Boyan Marinov
 * Licensed under the Apache-2.0 license. */
(function(window, videojs) {
    'use strict';

    var defaults = {
            option: true
        },
        VideoJSTest;


    /**
     * @param options (optional) {object} configuration for the plugin
     */
    VideoJSTest = function(options) {
        options.flash.swf = 'node_modules/video.js/dist/video-js/video-js.swf';
        // TODO: extend player options

        var settings = videojs.util.mergeOptions(defaults, options),
            player = this;
    };

    videojs.plugin('VideoJSTest', VideoJSTest);
})(window, window.videojs);
