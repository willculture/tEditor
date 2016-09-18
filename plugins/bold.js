/**
 * 粗体设置
 */
teditor.addPlugin("bold", function() {

    var range = this.selection.getRangeAt(0);
	var walk = new NodeWalker(
			range.commonAncestorContainer, SHOW_ELEMENT
					| SHOW_TEXT);
	 
	var startNode = range.startContainer;
	var endNode = range.endContainer;
	var startOffset = range.startOffset;
	var endOffset = range.endOffset;
	
	if(range.collapsed) {
		var span = document.createElement("span");
		span.style.fontWeight = "bold";
		span.appendChild(document.createTextNode(" "))
		range.insertNode(span);
		range.selectNode(span)
		this.selection.collapse(span, true);
	}
	
	/*
	do {
		
		node = walk.currentNode;
		console.log(node)
		
	} while (walk.nextNode()) */
	
	
	// this.changeFormat("span", {fontWeight: "bold"});

})
