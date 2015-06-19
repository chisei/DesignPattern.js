'use strict';

var assert = require('assert');
var Car = require('../../constructor/car.js');

describe('Constructor pattern', function() {
    it('constructor', function() {
        var target = new Car('foo', 2015, 5);
        var actual = target.toString();
        assert.equal(actual, 'foo has done 5 miles');
    });
    it('constructor model', function() {
        var target = new Car('foo', 2015, 5);
        assert.equal(target.model, 'foo');
    });
    it('constructor year', function() {
        var target = new Car('foo', 2015, 5);
        assert.equal(target.year, 2015);
    });
    it('constructor miles', function() {
        var target = new Car('foo', 2015, 5);
        assert.equal(target.miles, 5);
    });
});
