
var selection = window.getSelection();

document.documentElement.onmouseup = function () {
var range = selection.getRangeAt(0);
if(range) {
	
	console.log(range)
	
}
}