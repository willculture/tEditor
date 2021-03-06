(function() {

	/**
	 * 下面是获取选择得node
	 */
	function nextNode(node) {
		if (node.hasChildNodes()) {
			return node.firstChild;
		} else {
			while (node && !node.nextSibling) {
				node = node.parentNode;
			}
			if (!node) {
				return null;
			}
			return node.nextSibling;
		}
	}

	function getRangeSelectedNodes(range) {
		var node = range.startContainer;
		var endNode = range.endContainer;

		// Special case for a range that is contained within a single node
		if (node == endNode) {
			return [ node ];
		}

		// Iterate nodes until we hit the end container
		var rangeNodes = [];
		while (node && node != endNode) {
			rangeNodes.push(node = nextNode(node));
		}

		// Add partially selected nodes at the start of the range
		node = range.startContainer;
		while (node && node != range.commonAncestorContainer) {
			rangeNodes.unshift(node);
			node = node.parentNode;
		}

		return rangeNodes;
	}

	function getSelectedNodes(selection) {
		if (!selection.isCollapsed) {
			return getRangeSelectedNodes(selection.getRangeAt(0));
		}

		return [];
	}

	var utils = function() {};
	utils.getSelectedNodes = getSelectedNodes;
	window.utils = utils;

	//
})();
