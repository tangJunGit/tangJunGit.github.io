;(function(window, undefined){
	// 默认值
	var defaultOption = {
		str: '', 		// 换行的文字
		x: 0,			// text的x坐标
		y: 0,			// text的y坐标
		width: 14,   	// text的宽度
		fontsize: 14 	// text的字体大小
	};

	// 多行文本构造器
	var AppendMultiText = function(nodes, option){
		if(!option.str) return;
		this.nodes = nodes;
		this.option = this.extend({}, defaultOption, option);
		return this.init();
	};
	// 方法
	AppendMultiText.prototype = {
		constructor: AppendMultiText,

		init: function(){
			this.tspans = this.splitByLine();
			return this.append();
		},

		// 创建文本节点
		append: function(){
			var option =  this.option;
			var mulText = this.nodes.append("text")
									.attr("x", option.x)
									.attr("y", option.y)
									.style("font-size", option.fontsize);
			
			mulText.selectAll("tspan")
				.data(this.tspans)
				.enter()
				.append("tspan")
				.attr("x", option.x)
				.attr("dy", "1em")
				.text(function(d){
					return d;
				});

			return mulText;
		},

		// 将文本字符串转化成换行的数组
		splitByLine: function(){
			var option =  this.option,
				str = option.str,
				curLen = 0,				// 当前文字的像素宽度
				start = 0, 				// 截取字符串的开始位置
				end = 0,				// 截取字符串的结尾位置
				result = [];

			for(var i=0, len = str.length; i<len; i++){
				var code = str.charCodeAt(i);
				var pixelLen = code > 255 ? option.fontsize : option.fontsize/2;    // 字符占位的像素
				curLen += pixelLen;

				// 如果文字宽度超出width，则需要换行
				if(curLen > option.width){				
					end = i;
					result.push(str.substring(start, end));
					start = i;
					curLen = pixelLen;
				}

				// 截取最后一行的字符串
				if( i === str.length - 1 ){
					end = i;
					result.push(str.substring(start, end+1));
				}
			}
			return result;
		},

		// 覆盖属性
		extend: function(){
			var object = {},
				length = arguments.length;
		  	if (!length) return object;

		  	for (var index = 0; index < length; index++) {
			    var source = arguments[index],
			    	keys = [];
			    for (key in source) {
			    	if(source.hasOwnProperty(key)) keys.push(key);   
			    }
			    for (var i = 0, l = keys.length; i < l; i++) {
			      	var key = keys[i];
			      	object[key] = source[key];
			    }
			}
		    return object;
		}
	};

	window.AppendMultiText = AppendMultiText;

}(window));
