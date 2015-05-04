var linkedList = require('../src/linked_list');
var ll = linkedList.create();

var assert = require("assert");
describe('LinkedList', function() {
  describe('#push(obj)', function() {
    it('should be size 3', function() {
      ll.push(1);
      ll.push(2);
      ll.push(3);
      assert.equal(3, ll.size());
    });
  });
  describe('#indexOf(obj)', function() {
    it('should return 2', function() {
      assert.equal(2, ll.indexOf(3));
    });
  });
  describe('#pop()', function() {
    it('should return 3 -> 2 -> 1', function() {
      assert.equal(3, ll.pop());
      assert.equal(2, ll.pop());
      assert.equal(1, ll.pop());
    });
  });
  describe('#isEmpty()', function() {
    it('should be empty now', function() {
      assert.equal(true, ll.isEmpty());
    });
  });
});