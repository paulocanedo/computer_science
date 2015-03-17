/**
*** Queue JavaScript implementation without using javascript native collections
*** The functionalities implemented are:
***
*** enqueue: insert an element before the last inserted
*** dequeue: remove the first element of the collection
*** isEmpty: query if the collection is empty
**/

//it is better use a pointer to previous element, 
//if u do a pointer to next element u will have to 
//iterate collection to find second node
//using previous pointer is much faster

var queue = (function() {
	return {
		create: QueueWithNextPointer
	};
})();

function QueueWithNextPointer() {
	var size = 0;
	var first = null;
	var last  = null;

	var createNode = function(element, nextElement) {
		return {
			element: element,
			nextElement: nextElement
		};
	};

	var self = {
		enqueue: function(element) { // O(1)
			var node = createNode(element, last);

			if(self.isEmpty()) {
				first = node;
			}

			size++;
			last = node;
			return element;
		},
		dequeue: function() { // O(n)
			if(self.isEmpty()) {
				throw new Error('empty queue, cant dequeue...');
			}

			var temp = first;
			var newFirst = last;
			for(var i = 1; i < size - 1; i++) {
				newFirst = newFirst.nextElement;
			}

			size--;
			if(self.isEmpty()) {
				first = last = null;
			} else {
				first = newFirst;
				first.nextElement = null;
			}
			return temp.element;
		},
		size: function() {
			return size;
		},
		isEmpty: function() {
			return size === 0;
		},
		toString: function() {
			
		}
	};

	return self;
}

module.exports = queue;