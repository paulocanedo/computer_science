var queue = require('../src/queue');
var q = queue.create();

var assert = require("assert");
describe('Queue', function() {
  describe('#enqueue(obj)', function() {
    it('should be size 3', function() {
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      assert.equal(3, q.size());
    });
  });
  describe('#toString()', function() {
    it('should return 1, 2, 3', function() {
      assert.equal('1, 2, 3', q.toString());
    });
  });
  describe('#dequeue()', function() {
    it('should return 1 -> 2 -> 3', function() {
      assert.equal(1, q.dequeue());
      assert.equal(2, q.dequeue());
      assert.equal(3, q.dequeue());
    });
  });
  describe('#isEmpty()', function() {
    it('should be empty now', function() {
      assert.equal(true, q.isEmpty());
    });
  });
});