'use strict';

/**
 * @param {Object} buffer
 * @param {string} encoding
 * @param {Function} next
 */
function trim(buffer, encoding, next) {
    var input = buffer.toString('utf8').trim();
    this.push(input);
    next();
}

module.exports = trim;
