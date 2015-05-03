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

	var navigate = function(lastNode, orderType, callback) {
		if(lastNode) {
			if(orderType === 'pos') callback(lastNode.element);
			navigate(lastNode.left, orderType, callback);
			if(orderType === 'in') callback(lastNode.element);
			navigate(lastNode.right, orderType, callback);
			if(orderType === 'pre') callback(lastNode.element);
		}
	};

	return {
		insert: function(element) {
			var node = nodeBuilder.create({
				element: element,
				left: null,
				right: null
			});

			if(!root) {
				root = node;
			} else {
				insertNode(root, node);
			}
		},
		remove: function(element) {

		},
		preOrder: function(callback) {
			navigate(root, 'pre', callback);
		},
		inOrder: function(callback) {
			navigate(root, 'in', callback);
		},
		posOrder: function(callback) {
			navigate(root, 'pos', callback);
		},
		biggest: function() {
			var current = root;
			while(current) {
				if(current.right) {
					current = current.right;
				} else {
					return current.element;
				}
			}
			return null;
		},
		smallest: function() {
			var current = root;
			while(current) {
				if(current.left) {
					current = current.left;
				} else {
					return current.element;
				}
			}
			return null;
		},
		isEmpty: function() {
			return root === null;
		},
		size: function() {
			return this.isEmpty() ? 0 : (1 + size);
		},
		toString: function() {
			if(this.isEmpty()) {
				return 'empty binary_tree';
			}

			var text = '';
			var first = true;
			(function iterate(lastNode) {
				if(lastNode) {
					iterate(lastNode.left);
					text += first ? '' : ', ';
					text += lastNode.element;
					first = false;
					iterate(lastNode.right);
				}
				return '';
			})(root);

			return text;
		}
	};
}

module.exports = binaryTree;
