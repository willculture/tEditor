var DOCUMENT_POSITION_PRECEDING = 2; // Node.DOCUMENT_POSITION_PRECEDING
var ELEMENT_NODE = 1; // Node.ELEMENT_NODE;
var TEXT_NODE = 3; // Node.TEXT_NODE;
var DOCUMENT_NODE = 9; // Node.DOCUMENT_NODE;
var DOCUMENT_FRAGMENT_NODE = 11; // Node.DOCUMENT_FRAGMENT_NODE;
var SHOW_ELEMENT = 1; // NodeFilter.SHOW_ELEMENT;
var SHOW_TEXT = 4; // NodeFilter.SHOW_TEXT;

var START_TO_START = 0; // Range.START_TO_START
var START_TO_END = 1; // Range.START_TO_END
var END_TO_END = 2; // Range.END_TO_END
var END_TO_START = 3; // Range.END_TO_START

var typeToBitArray = {
	// ELEMENT_NODE
	1 : 1,
	// ATTRIBUTE_NODE
	2 : 2,
	// TEXT_NODE
	3 : 4,
	// COMMENT_NODE
	8 : 128,
	// DOCUMENT_NODE
	9 : 256,
	// DOCUMENT_FRAGMENT_NODE
	11 : 1024
};

var NodeWalker = function(root, nodetype) {
	this.root = this.currentNode = root;
	this.nodeType = nodetype;
}

NodeWalker.prototype.nextNode = function() {
	var current = this.currentNode, root = this.root, nodeType = this.nodeType, node;
	while (true) {
		node = current.firstChild;
		while (!node && current) {
			if (current === root) {
				break;
			}
			node = current.nextSibling;
			if (!node) {
				current = current.parentNode;
			}
		}
		if (!node) {
			return null;
		}
		if ((typeToBitArray[node.nodeType] & nodeType)) {
			this.currentNode = node;
			return node;
		}
		current = node;
	}

}

NodeWalker.prototype.prevNode = function() {
	var current = this.currentNode, root = this.root, nodeType = this.nodeType, node;
	while (true) {
		if (current === root) {
			return null;
		}
		node = current.previousSibling;
		if (node) {
			while (current = node.lastChild) {
				node = current;
			}
		} else {
			node = current.parentNode;
		}
		if (!node) {
			return null;
		}
		if ((typeToBitArray[node.nodeType] & nodeType)) {
			this.currentNode = node;
			return node;
		}
		current = node;
	}

}