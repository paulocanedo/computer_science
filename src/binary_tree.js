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

var binaryTree = (function() {
	return {
		create: BinaryTree
	};
})();

function BinaryTree() {
	var size = 0;
	var root = null;

	var createNode = function(element) {
		return {
			element: element,
			left:    null,
			right:   null
		};
	};

	var insertNode = function(node, lastNode) {
		if(lastNode !== null) {
			if(node.element < lastNode.element) {
				lastNode.left = insertNode(node, lastNode.left);
			} else {
				if(node.element > lastNode.element) {
					lastNode.right = insertNode(node, lastNode.right);
				}
				return null;
			}
		} else {
			lastNode = node;
		}
		return lastNode;
	};

// 	void tree::insert(cliente* newData, treeNode** nodePtr)
// {
//         if(!*nodePtr)
//         {
//                 *nodePtr = new treeNode(newData);
//                 ShowMessage("Inserido com sucesso!");
//         }
//         else
//                 if(newData->getNome() < (*nodePtr)->data->getNome())
//                         insert(newData,&((*nodePtr)->leftPtr));
//                 else
//                         if(newData->getNome() > ((*nodePtr)->data->getNome()))
//                                 insert(newData, &((*nodePtr)->rightPtr));
//                         else
//                                 ShowMessage("Já existe: "+(*nodePtr)->data->getNome());
// }

	// var insertNode = function(node, parentNode) {
	// 	if(root === null) {
	// 		root = node;
	// 		return root;
	// 	}

	// 	if(parentNode === null) {
	// 		parentNode = root;
	// 	}

	// 	if(parentNode.left === null) {
	// 		return (parentNode.left = node);
	// 	} else if(parentNode.right === null) {
	// 		return (parentNode.right = node);
	// 	}

	// 	if(node.element > parentNode.left.element) {
	// 		return insertNode(node, parentNode.left);
	// 	} else {
	// 		return insertNode(node, parentNode.right);
	// 	}
	// };

	var navigatePreOrder = function(lastNode, callback) {
		if(lastNode !== null) {
			navigatePreOrder(lastNode.left, callback);
			navigatePreOrder(lastNode.right, callback);
			callback(lastNode.element);
		}
	};

	var self = {
		insert: function(element) {
			var node = createNode(element);
			if(root === null) {
				root = node;
			} else {
				insertNode(node, root);
			}

		},
		remove: function(element) {

		},
		preOrder: function(callback) {
			if(root != null) {
				navigatePreOrder(root, callback);
			}
		},
		inOrder: function(callback) {

		},
		posOrder: function(callback) {

		},
		isEmpty: function() {

		},
		size: function() {
			return size;
		},
		toString: function() {
			if(self.isEmpty()) {
				return 'empty binary_tree';
			}
		},
		root: function() {
			return root;
		}
	};

	return self;
}

module.exports = binaryTree;

var tree = binaryTree.create();
tree.insert(2);
tree.insert(7);
tree.insert(5);
tree.insert(1);
tree.insert(6);
// tree.insert(9);
// tree.insert(3);
// tree.insert(11);
// tree.insert(4);

// tree.insert(2);
// tree.insert(7);
// tree.insert(5);
// tree.insert(2);
// tree.insert(6);
// tree.insert(9);
// tree.insert(5);
// tree.insert(11);
// tree.insert(4);

tree.preOrder(function(elem) {
	console.log(elem);
});

// console.log(tree.root());
