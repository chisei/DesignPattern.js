'use strict';

var assert = require('assert');
var target = require('../../facade/facade.js');

describe('Facade pattern', function() {
    it('facade', function() {
        console.log(target);
        var actual = target.facade({val: 10});
        assert.equal(actual, 'current value:10');
    });
});
