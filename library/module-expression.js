'use strict';
var HEAD = '(?:^|/)node_modules/';

/**
 * @param {string} tail
 * @returns {RegExp}
 */
function getEpression(tail) {
    var string = tail ? (HEAD + tail) : HEAD;
    var expression = new RegExp(string);
    return expression;
}

module.exports = getEpression;
