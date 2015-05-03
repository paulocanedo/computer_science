var queue = require('../src/queue');
var q = queue.create();

module.exports = function() {

	for(var j=0; j<1000; j++) {
		q.enqueue(Math.random());
	}

	while(!q.isEmpty()) {
		q.dequeue();
	}
};
