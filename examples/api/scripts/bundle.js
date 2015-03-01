'use strict';
var browserify = require('browserify');
var fs = require('fs');
var mkdirp = require('mkdirp');

mkdirp('./target/');

browserify()
    .add('./source/beep.js')
    .transform('minstallify', {
        global: true,
        exclude: [

        ]
    })
    .bundle()
    .on('error', function (error) {
        console.error(error.message);
    })
    .pipe(fs.createWriteStream('./target/beep.js', 'utf8'));
