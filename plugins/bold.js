/**
 * 粗体设置
 */
teditor.addPlugin("bold", function() {
	// var sl = utils.getSelectedNodes(this.selection);
	var node = this.getSelectNode();

	node.forEach(function(item) {
		 var df = document.createDocumentFragment();
		 var clone = item.cloneNode();
		 var child = item.getELementsByTagName("strong");
		 for (var i = 0; i < child.length; i++) {
			 
			 clone.appendChild()
		 }
		 
	})

})
