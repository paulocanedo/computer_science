var binary_tree = require('../src/binary_tree');
var tree = binary_tree.create();

var assert = require("assert");
describe('BinaryTree', function() {
  describe('#insert(obj)', function() {
    it('should be size 8', function() {
      tree.insert(5);
      tree.insert(12);
      tree.insert(10);
      tree.insert(15);
      tree.insert(20);
      tree.insert(25);
      tree.insert(8);
      tree.insert(3);
      assert.equal(8, tree.size());
    });
  });
  describe('#toString()', function() {
    it('should return 3, 5, 8, 10, 12, 15, 20, 25', function() {
      assert.equal('3, 5, 8, 10, 12, 15, 20, 25', tree.toString());
    });
  });
  describe('#preOrder()', function() {
    it('should iterate over the array [3, 8, 10, 25, 20, 15, 12, 5]', function() {
      var expectedArray = [3, 8, 10, 25, 20, 15, 12, 5];
      var correct = true;
      var i = 0;

      tree.preOrder(function(element) {
        if(element !== expectedArray[i]) {
          correct = false;
        }
        i++;
      });

      assert.equal(true, correct);
    });
  });
  describe('#inOrder()', function() {
    it('should iterate over the array [3, 5, 8, 10, 12, 15, 20, 25]', function() {
      var expectedArray = [3, 5, 8, 10, 12, 15, 20, 25];
      var correct = true;
      var i = 0;

      tree.inOrder(function(element) {
        if(element !== expectedArray[i]) {
          correct = false;
        }
        i++;
      });

      assert.equal(true, correct);
    });
  });
  describe('#posOrder()', function() {
    it('should iterate over the array [5, 3, 12, 10, 8, 15, 20, 25]', function() {
      var expectedArray = [5, 3, 12, 10, 8, 15, 20, 25];
      var correct = true;
      var i = 0;

      tree.posOrder(function(element) {
        if(element !== expectedArray[i]) {
          correct = false;
        }
        i++;
      });

      assert.equal(true, correct);
    });
  });
  // describe('#pop()', function() {
  //   it('should return 3 -> 2 -> 1', function() {
  //     assert.equal(3, s.pop());
  //     assert.equal(2, s.pop());
  //     assert.equal(1, s.pop());
  //   });
  // });
  // describe('#isEmpty()', function() {
  //   it('should be empty now', function() {
  //     assert.equal(true, tree.isEmpty());
  //   });
  // });
});
