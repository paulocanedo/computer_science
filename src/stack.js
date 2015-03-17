/**
*** Stack JavaScript implementation without using javascript native collections
*** The functionalities implemented are:
***
*** push:    insert element at top of the stack
*** pop:     remove the most top element
*** peek:    just see the most top element, dont change anything
*** isEmpty: query if the collection is empty
**/

var stack = (function() {
	return {
		create: Stack
	};
})();

function Stack() {
	var size = 0;
	var head = null;

	var createNode = function(element, underElement) {
		return {
			element: element, 
			underElement: underElement
		};
	}

	var self = {
		push: function(element) {
			var node = createNode(element, head);
			head = node;
			
			size++;
			return head.element;
		},
		pop: function() {
			if(self.isEmpty()) {
				throw new Error('stack empty, cant pop anymore...');
			}

			var element = head.element;
			head = head.underElement;

			size--;
			return element;
		},
		peek: function() {
			if(self.isEmpty()) {
				throw new Error('stack empty...');
			}

			return head.element;
		},
		isEmpty: function() {
			return size === 0;
		},
		size: function() {
			return size;
		},
		toString: function() {
			if(self.isEmpty()) {
				return 'empty stack';
			}

			var temp = head;
			var astring = '';
			while(temp !== null) {
				astring += temp.element;

				if(temp.underElement !== null) {
					astring += ', ';
				}
				temp = temp.underElement;
			}
			return astring;
		}
	};

	return self;
}

module.exports = stack;