'use strict';
var moduleExpression = require('./module-expression');

/**
 * @param {string} name
 * @returns {boolean}
 */
function isUrlSafe(name) {
    return (name === encodeURIComponent(name));
}

function isPackageDirectory(modulePath) {
    var match = moduleExpression('([^/]+)/').exec(modulePath);
    return match && isUrlSafe(match[1]);
}

/**
 * @param {string} modulePath
 * @param {Array} [exclude]
 * @returns {boolean}
 */
function included(modulePath, exclude) {
    if (!moduleExpression().test(modulePath) ||
        moduleExpression('[._]').test(modulePath) ||
        !isPackageDirectory(modulePath)
    ) {
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
