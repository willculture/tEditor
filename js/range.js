var selection = window.getSelection();

document.documentElement.onmouseup = function() {
	var range = selection.getRangeAt(0);
	if (range) {

		console.log(range)

	}
}

function insertNode() {
	var range = selection.getRangeAt(0);
	var st = document.createElement("strong");
	st.appendChild(document.createTextNode("this is test"))
	range.insertNode(st);
	// range.collapse(true);
	selection.collapse(st, true);
}



