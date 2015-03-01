'use strict';
var uglifyJs = require('uglify-js');

/**
 * @param {Object} buffer
 * @param {string} encoding
 * @param {Function} next
 */
function uglify(buffer, encoding, next) {
    var input = buffer.toString('utf8');
    input = uglifyJs.minify(input, {
        fromString: true,
        output: {
            comments: /^!|@preserve|@license|@cc_on/i
        },
        compress: true,
        mangle: true
    });
    this.push(input.code);
    next();
}

module.exports = uglify;
