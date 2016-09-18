var selection = window.getSelection();
/*
document.documentElement.onmouseup = function() {
	var range = selection.getRangeAt(0);
	if (range) {

		console.log(range)

	}
}*/

function insertNode() {
	var range = selection.getRangeAt(0);
	var st = document.createElement("strong");
	st.appendChild(document.createTextNode("this is test"))
	range.insertNode(st);
	// range.collapse(true);
	selection.collapse(st, true);
}

function excontent() {
	var range = selection.getRangeAt(0);
	console.log(range.extractContents())
	console.log(range)
		var st = document.createElement("strong");
	st.appendChild(document.createTextNode("this is test"))
	range.insertNode(st)
}


function clientRect() {
	var range = selection.getRangeAt(0);
	console.log(range.getClientRects());
}

function compRange(type) {
	var range = selection.getRangeAt(0);
	var node = document.querySelector("strong");
   
	var crange = node.ownerDocument.createRange();
	
	crange.selectNode(node);
	var index = range.compareBoundaryPoints(type, crange);
	console.log(index)
	return index;
}
