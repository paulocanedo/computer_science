/**
*** BinaryTree JavaScript implementation
*** The functionalities implemented are:
***
*** insert:    insert element
*** remove:    remove element
*** preOrder:  iterate pre order
*** inOrder:   iterate in order
*** posOrder:  iterate pos order
**/

var nodeBuilder = require('./node');

var binaryTree = (function() {
	return {
		create: BinaryTree
	};
})();

function BinaryTree() {
	var size = 0;
	var root = null;

	var insertNode = function(lastNode, newNode) {
		if(lastNode !== null) {
			if(newNode.element < lastNode.element) {
				if(lastNode.left) {
					insertNode(lastNode.left, newNode);
				} else {
					lastNode.left = newNode;
					size++;
				}
			} else {
				if(newNode.element > lastNode.element) {
					if(lastNode.right) {
						insertNode(lastNode.right, newNode);
					} else {
						lastNode.right = newNode;
						size++;
					}
				}
				return null;
			}
		} else {
			lastNode = newNode;
		}
		return lastNode;
	};

	var navigatePreOrder = function(lastNode, callback) {
		if(lastNode) {
			navigatePreOrder(lastNode.left, callback);
			navigatePreOrder(lastNode.right, callback);
			callback(lastNode.element);
		}
	};

	var navigateInOrder = function(lastNode, callback) {
		if(lastNode) {
			navigateInOrder(lastNode.left, callback);
			callback(lastNode.element);
			navigateInOrder(lastNode.right, callback);
		}
	};

	var navigatePosOrder = function(lastNode, callback) {
		if(lastNode) {
			callback(lastNode.element);
			navigateInOrder(lastNode.left, callback);
			navigateInOrder(lastNode.right, callback);
		}
	};

	return {
		insert: function(element) {
			var node = nodeBuilder.create({
				element: element,
				left: null,
				right: null
			});

			if(root === null) {
				root = node;
			} else {
				insertNode(root, node);
			}
		},
		remove: function(element) {

		},
		preOrder: function(callback) {
			navigatePreOrder(root, callback);
		},
		inOrder: function(callback) {
			navigateInOrder(root, callback);
		},
		posOrder: function(callback) {
			navigatePosOrder(root, callback);
		},
		isEmpty: function() {
			return root === null;
		},
		size: function() {
			return size;
		},
		toString: function() {
			if(self.isEmpty()) {
				return 'empty binary_tree';
			}
		}
	};
}

module.exports = binaryTree;

var tree = binaryTree.create();
tree.insert(5);
tree.insert(12);
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(25);
tree.insert(8);
tree.insert(3);

console.log('size', tree.size());

tree.posOrder(function(elem) {
	console.log(elem);
});
