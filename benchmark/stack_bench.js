var stack = require('../src/stack');
var s = stack.create();

module.exports = function() {
	for(var j=0; j<10000; j++) {
		s.push(Math.random());
	}

	while(!s.isEmpty()) {
		s.pop();
	}
};