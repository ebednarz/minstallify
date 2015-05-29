'use strict';
var isPackageFile = require('is-package-file');
var moduleExpression = require('./module-expression');

/**
 * @param {string} modulePath
 * @param {Array} [exclude]
 * @returns {boolean}
 */
function included(modulePath, exclude) {
    if (!isPackageFile(modulePath)) {
        return false;
    }

    if (!Array.isArray(exclude)) {
        return true;
    }

    return !exclude.some(function (name) {
        return moduleExpression(name + '/').test(modulePath);
    });
}

module.exports = included;
