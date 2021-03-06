(function() {

	var teditor = function(ele) {
		this.editor = document.querySelector("#" + ele);
		return this.init();
	}

	/**
	 * 添加插件
	 * 
	 * @param {String}
	 *            name 名称
	 * @param {Function}
	 *            fn 函数
	 */
	teditor.addPlugin = function(name, fn) {
		teditor.fn.fnlist[name] = fn;
	}

	teditor.fn = {

		/**
		 * 获取选中得节点
		 */
		getSelectNode : function() {
			var range = this.selection.getRangeAt(0);
			var sc = range.startContainer;
			var ec = range.endContainer;
			var select = [];
			// 开始和结束是同一个节点
			if (sc == ec) {
				select.push(sc);
				return select;
			}

			// 不同得
			var parent = range.commonAncestorContainer;
			var jage = false;
			var childs = parent.childNodes;
			for (var i = 0; i < childs.length; i++) {
				if (childs[i].contains(sc)) {
					jage = true;
				}
				if (jage) {
					select.push(childs[i]);
				}
				if (childs[i].contains(ec)) {
					jage = false;
					break;
				}
			}
			return select;

		},
		// 函数功能块
		fnlist : {},
		// 初始化
		init : function() {
			this.frame = this.editor.querySelector(".teditor-frame");
			this.doc = this.framedoc = this.frame.contentDocument;
			this.framebd = this.framedoc.body;
			this.framebd.style.height = "100%";
			this.framebd.innerHTML = "<strong>hello</strong><h3><span>中国是个<em>社会fsdf</em><i>123456</i></span></h3> 90877"
			this.framebd.setAttribute("contenteditable", "true");

			// 初始化焦点
			this.selection = this.frame.contentWindow.getSelection();
			this.selection.collapse(this.framebd.firstChild, 1)
			this.framedoc.onmmouseup = function() {

			}

			// 初始化工具
			this.tool = this.editor.querySelector(".teditor-box-tool");
			var item = this.tool.querySelectorAll("a");
			var self = this;
			for (var i = 0; i < item.length; i++) {
				var single = item[i];
				single.onclick = self.fnlist[single.getAttribute("type")]
						.bind(self);
			}

			return this;
		},
		changeFormat : function(tag, attrs) {
			_changeFormat.call(this, tag, attrs);
		}

	}

	/**
	 * 
	 * @param tag
	 * @param attrs
	 * @returns
	 */
	function _changeFormat(tag, attrs) {
		var tag_ele = this.doc.createElement(tag);
		var range = this.selection.getRangeAt(0);
		for ( var k in attrs) {
			tag_ele.style[k] = attrs[k];
		}
		var df = range.extractContents();
		tag_ele.appendChild(df);
		range.insertNode(tag_ele);

	}

	/**
	 * 比较两个range
	 * @param range
	 * @param node
	 * @param jade
	 * @returns
	 */
	function isNodeContainedInRange(range, node, jade) {
		var node_range = node.ownerDocument.createRange;
		node_range.selectNode(node);
	    
		
		
		
	}
	
	
	
	
	//////
	teditor.prototype = teditor.fn;

	window.teditor = teditor;

})();