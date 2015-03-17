var stack = require('../src/stack');
var s = stack.create();

var assert = require("assert");
describe('Stack', function() {
  describe('#push(obj)', function() {
    it('should be size 3', function() {
      s.push(1);
      s.push(2);
      s.push(3);
      assert.equal(3, s.size());
    });
  });
  describe('#toString()', function() {
    it('should return 3, 2, 1', function() {
      assert.equal('3, 2, 1', s.toString());
    });
  });
  describe('#pop()', function() {
    it('should return 3 -> 2 -> 1', function() {
      assert.equal(3, s.pop());
      assert.equal(2, s.pop());
      assert.equal(1, s.pop());
    });
  });
  describe('#isEmpty()', function() {
    it('should be empty now', function() {
      assert.equal(true, s.isEmpty());
    });
  });
});