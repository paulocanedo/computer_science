/**
*** A PriorityQueue JavaScript implementation using DualLinkedList
*** The functionalities implemented are:
***
**/

var priorityQueue = (function() {
	return {
		create: PriorityQueue
	};
})();

function PriorityQueue() {
	var size = 0;
	var first = null;
	var last  = null;
	var highestPriorityElement = null;

	var createNode = function(element, priority, prevElement, nextElement) {
		return {
			element: element,
			prevElement: prevElement,
			nextElement: nextElement,
			priority: priority
		};
	};

	var unlinkPrevElement = function(element) {
		var prevElement = element.prevElement;

		if(prevElement !== null) {
			prevElement.nextElement = element.nextElement;
		} else {
			last = element.nextElement;
		}
	};

	var unlinkNextElement = function(element) {
		var nextElement = element.nextElement;

		if(nextElement !== null) {
			nextElement.prevElement = element.prevElement;
		} else {
			first = element.prevElement;
		}
	};

	var insertElement = function(element) {
		last.prevElement = element;
		element.nextElement = last;
		last = element;

		if(element.priority > highestPriorityElement.priority) {
			highestPriorityElement = element;
		}
	};

	var removeElement = function(element) {
		unlinkPrevElement(element);
		unlinkNextElement(element);

		return element;
	};

	var findHighestPriorityElement = function() {
		var temp = first;
		var highestPriorityElement = first;

		while(temp !== null) {
			if(temp.priority > highestPriorityElement.priority) {
				highestPriorityElement = temp;
			}
			temp = temp.prevElement;
		}
		return highestPriorityElement;
	};

	var self = {
		insertWithPriority: function(element, priority) {
			var node = createNode(element, priority, null, null); // O(1)

			if(self.isEmpty()) {
				first = last = highestPriorityElement = node;
			} else {
				insertElement(node); // O(1)
			}

			size++;
			return element;
		},
		pullHighestPriorityElement: function() {
			if(self.isEmpty()) {
				throw new Error('empty queue, cant pull...');
			}

			var oldHighest = removeElement(highestPriorityElement); // O(1)
			highestPriorityElement = findHighestPriorityElement();  // O(n)

			size--;
			return oldHighest.element;
		},
		peek: function() {
			if(self.isEmpty()) {
				throw new Error('empty queue, cant peek...');
			}

			return highestPriorityElement.element;
		},
		isEmpty: function() {
			return size === 0;
		}
	};

	return self;
}

module.exports = priorityQueue;
