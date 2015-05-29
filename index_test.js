'use strict';
var included = require('./library/included');

module.exports = require('testifix')({
    'included': {
        'is a function': function (resolve) {
            resolve('function' === typeof included);
        },

        'returns a boolean': function (resolve) {
            resolve('boolean' === typeof included('beep'));
        },

        'excludes names': {
            'with leading underscores': function (resolve) {
                resolve(!included('node_modules/_beep/boop.js'));
            },

            'with leading dots': function (resolve) {
                resolve(!included('node_modules/.beep/boop.js'));
            },

            'with non-url-safe characters': function (resolve) {
                resolve(!included('node_modules/be$ep/boop.js'));
            },

            'that are marked excluded': function (resolve) {
                resolve(!included('node_modules/beep/boop.js', ['beep']));
            }
        },
        'includes names': {
            'that are not marked excluded': function (resolve) {
                resolve(included('node_modules/beep/boop.js', []));
            }
        }
    }
});
