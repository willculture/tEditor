/**
 * 粗体设置
 */
teditor.addPlugin("unbold", function() {

	var snode = this.getSelectNode();

	snode.forEach(function(item) {

		var strong = null;
		 
		//判断节点类型
		if (item.nodeName.toLowerCase() == "strong") {
			strong = [ item ];
		} else if (item.nodeType == Node.TEXT_NODE
				&& item.parentNode.nodeName.toLowerCase() == "strong") {
			strong = [ item.parentNode ];
		} else if (item.nodeType == Node.ELEMENT_NODE) {
			strong = item.getElementsByTagName("strong");
		}
		//处理strong节点 
		if (strong && strong.length > 0) {
			for (var i = 0; i < strong.length; i++) {
				var si = strong[i];
				var fs = document.createDocumentFragment();
				si.childNodes.forEach(function(ci) {
					fs.appendChild(ci.cloneNode(true));
				})

				si.parentNode.replaceChild(fs, si);
			}

		}
	});

});




teditor.addPlugin("bold", function () {
	 console.log(this)
	 var node = this.selection.getRangeAt(0).commonAncestorContainer;
	 console.log(node)
	 //
	 if (node.nodeType == Node.ELEMENT_NODE && node.nodeName.toLowerCase() == "strong") return;
	 var nodechild = node.childNodes;
	 nodechild = Array.prototype.slice.call(nodechild);
	 var df = document.createElement("strong");
	 nodechild.forEach(function (item) {
		 df.appendChild(item.cloneNode(true));
		 node.removeChild(item);
	 })
	 node.appendChild(df);
})


//
teditor.addPlugin("bold2", function () {
	this.framedoc.execCommand("bold","strong");
})