/**
*** Queue JavaScript implementation without using javascript native collections
*** The functionalities implemented are:
***
*** enqueue: insert an element before the last inserted
*** dequeue: remove the first element of the collection
**/

//it is better use a pointer to previous element, 
//if u do a pointer to next element u will have to 
//iterate collection to find second node

var queue = (function() {
	return {
		create: Queue
	};
})();

function Queue() {
	var size = 0;
	var first = null;
	var last  = null;

	var createNode = function(element, prevElement) {
		return {
			element: element,
			prevElement: prevElement
		};
	};

	var self = {
		enqueue: function(element) { // O(1)
			var node = createNode(element, null); // O(1)

			if(self.isEmpty()) {
				first = last = node;
			} else {
				last.prevElement = node;
				last = node;
			}

			size++;
			return element;
		},
		dequeue: function() { // O(1)
			if(self.isEmpty()) {
				throw new Error('empty queue, cant dequeue...');
			}

			var temp = first;
			first = first.prevElement;

			size--;
			if(self.isEmpty()) {
			 	last = null;
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
			var temp = first;
			var astring = '';
			while(temp !== null) {
				astring += temp.element;

				if(temp.prevElement !== null) {
					astring += ', ';
				}
				temp = temp.prevElement;
			}
			return astring;
		}
	};

	return self;
}

module.exports = queue;
