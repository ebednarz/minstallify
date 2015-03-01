'use strict';
var included = require('./library/included');
var through2 = require('through2');

function minify(modulePath, options) {
    var transform = included(modulePath, options.exclude) ?
        require('./library/uglify') :
        require('./library/trim');
    var stream = through2(transform);
    return stream;
}

module.exports = minify;
