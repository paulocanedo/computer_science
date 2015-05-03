var binary_tree = require('../src/binary_tree');
var tree = binary_tree.create();


module.exports = function() {
	for(var j=0; j<1000; j++) {
		tree.insert(Math.random());
	}

	// while(!s.isEmpty()) {
	// 	s.pop();
	// }
};
