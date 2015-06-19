'use strict';

var CounterModule = (function () {
    var counter = 0;
    return {
        increment: function() {
            return ++counter;
        },

        reset: function () {
            counter = 0;
        },

        get: function () {
            return counter;
        }
    };
})();

module.exports = CounterModule
