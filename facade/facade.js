'use strict';

var Facade = (function() {
    var _private = {
        i:5,
        get: function() {
            return "current value:" + this.i;
        },
        set: function(val) {
            this.i = val;
        },
    };

    return {
        facade: function(args) {
            _private.set(args.val);
            return _private.get();
        }
    };
}());

module.exports = Facade;
