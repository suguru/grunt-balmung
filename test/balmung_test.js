'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var fs = require('fs');

exports.balmung = {

  png: function(test) {

    test.expect(1);

    var original = fs.statSync('test/fixtures/img/beta/buki_l.png');
    var actual = fs.statSync('tmp/fixtures/img/beta/buki_l_30.png');

    test.ok(actual.size < original.size, 'should minify png image');

    [
      'tmp/fixtures/img/beta/buki_l_10.png',
      'tmp/fixtures/img/beta/buki_l_13.png',
      'tmp/fixtures/img/beta/buki_l_15.png',
      'tmp/fixtures/img/beta/buki_l_20.png',
      'tmp/fixtures/img/beta/buki_l_30.png',
    ].forEach(fs.statSync);

    test.done();

  }

};
