
function isHashNode(node, range) {
	 var node$range = document.createRange();
	 node$range.selectNode(node);
	 
	 var stoe = range.compareBoundaryPoints(Range.START_TO_END, node$range); // 1代表在node$range之后， -1 代表node$range之前；
	  //还未写完
}

/**
 * 粗体设置
 */
teditor.addPlugin("bold", function() {

	var range = this.selection.getRangeAt(0);
	var walk = new NodeWalker(range.commonAncestorContainer, SHOW_ELEMENT
			| SHOW_TEXT);

	var startNode = range.startContainer;
	var endNode = range.endContainer;
	var startOffset = range.startOffset;
	var endOffset = range.endOffset;

	console.log(startNode.parentNode.style.fontWeight)
	this.doc.body.focus();
	if (range.collapsed && !(startNode.parentNode.style.fontWeight)) {
		var span = this.doc.createElement("span");
		span.style.fontWeight = "bold";
		span.innerHTML = "&nbsp;";
		range.insertNode(span);
		span.focus();

		range.setStart(span, 1);
		range.collapse(true);
		this.selection.collapse(span, 1);

	} else { 
		do { 
			node = walk.currentNode;
			console.log(node)
		} while (walk.nextNode())

	}

	// this.changeFormat("span", {fontWeight: "bold"});
})
