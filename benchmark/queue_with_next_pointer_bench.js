module.exports = function() {
	var queue = require('../src/bad_practices/queue_with_next_pointer');
	var q = queue.create();

	for(var j=0; j<1000; j++) {
		q.enqueue(Math.random());
	}

	while(!q.isEmpty()) {
		q.dequeue();
	}
};
