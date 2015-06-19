'use strict';

var assert = require('assert');
var target = require('../../module/counter.js');

describe('Module pattern', function() {
    it('increment should return increased counter', function() {
        target.reset();
        var actual = target.increment();
        assert.equal(actual, 1);
    });
    it('reset should return undefined', function() {
        var actual = target.reset();
        assert.equal(actual, undefined);
    });
    it('get should return 0 when first time', function() {
        target.reset();
        var actual = target.get();
        assert.equal(actual, 0);
    });
    it('get should return 1 when after increment', function() {
        target.increment();
        var actual = target.get();
        assert.equal(actual, 1);
    });
});
