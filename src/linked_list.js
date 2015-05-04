var nodeBuilder = require('./node_builder');

/**
*** LinkedList JavaScript implementation without using javascript native collections
*** The functionalities implemented are:
***
*** push: insert at last position
*** pop:  remove the last element
*** size: query the list size
*** indexOf: find the index of an element
*** insertAt: insert at a specific position
*** removeAt: remove at a specific positon
**/

var linkedList = (function() {
	return {
		create: LinkedList
	};
})();

function LinkedList() {
	var size  = 0;
	var first = null;
	var last  = null;

	var removeLast = function() {
		if(size === 1) {
			first = last = null;
		} else {
			var beforeLast = null;
			for(var it = first; it.next !== null; it = it.next) {
				beforeLast = it;
			}
			last = beforeLast;
			last.next = null;
		}
	};

	var insertAfter = function(node, element) {
		var newNode = nodeBuilder.create({
			element: element,
			next: current
		});

		if(node === last) {
			last = newNode;
		}

		newNode.next = node.next;
		node.next = newNode;
	};

	var insertBeginning = function(element) {

	};

	return {
		push: function(element) { // O(1)
			var node = nodeBuilder.create({
				element: element,
				next: null
			});

			if(this.isEmpty()) {
				first = last = node;
			} else {
				last.next = node;
				last = node;
			}
			size++;
		},
		pop: function() {
			if(this.isEmpty()) {
				throw Error('linked list is is empty, cant pop');
			}

			var toRemoveElement = last;
			removeLast();

			size--;
			return toRemoveElement.element;
		},
		size: function() {
			return size;
		},
		indexOf: function(element) {
			var current = first;
			for(var i = 0; i < size; i++) {
				if(current.element === element) {
					return i;
				}
				current = current.next;
			}

			return -1;
		},
		insertAt: function(index, element) {
			if(index < 0 || index > size) {
				throw Error('index position to insert must be 0 <= index <= size, provided: ' + index);
			}

			if(index === size) {
				return this.push(element);
			}

			var current = first;
			for(var i = 0; i < size; i++) {
				if(index === i) {
					// insertBefore(current, element);
					break;
				}
				current = current.next;
			}
			size++;
		},
		removeAt: function(index) {
			throw Error('not implemented yet');
		},
		isEmpty: function() {
			return size === 0;
		},
		join: function(separator) {
			var astring = '';
			if(this.size === 1) {
				return first.element;
			}

			for(var it = first; it.next !== null; it = it.next) {
				astring += it.element + separator;
			}
			return astring + last.element;
		},
		toString: function() {
			return this.join(', ');
		}
	};
}

var ll = linkedList.create();
ll.push(1);
ll.push(2);
ll.push(3);
ll.insertAt(0, 10);
ll.insertAt(4, 11);

console.log(ll.toString());

module.exports = linkedList;
