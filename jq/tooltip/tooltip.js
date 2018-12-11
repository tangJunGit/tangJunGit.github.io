;(function($, window, undefined) {
    var Default = {
        
	};
	
	var Attribute = {
        CONTENT : 'data-content',               // 提示的内容
        INNER: '.tooltip-inner',				// 内容存放的选择器	
        TOP: 'top',                            	// 向上的样式
        BOTTOM: 'bottom',                      	// 向下的样式	
        DIRECTION : 'data-direction',          	// 方向		
	};
	
	var TEMPLATE = '<div class="tooltip"><div class="tooltip-inner"></div><div class="tooltip-arrow"></div>';

	var Tooltip = function(element, options) {
        var _this = this;

        _this.options = options;
		_this.element = element;
		_this.tooltip = null;					// tooltip 创建的节点
		_this.tooltipTemplate = null;			// tooltip 创建的节点模板
		_this.id = undefined; 					// tooltip 创建的节点的 id

		_this.init();
	};

	Tooltip.prototype = {
	    constructor: Tooltip,

        /**
		 * 初始化函数
		 * 
		 */
	    init: function(){
			var _this = this;
			
			_this.tooltipTemplate = _this.buildFragment(TEMPLATE);

            _this.addEventListeners();
        },

        /**
		 * 事件监听
		 * 
		 */
        addEventListeners: function(){
            var _this = this,
                _element = _this.element;

            _element.on('mouseenter', function(){
                _this.create();
            });
           
            _element.on('mouseleave', function(){
                _this.tooltip.remove();
            });

		},

		/**
		 * 创建 tooltip
		 * 
		 */
		create: function(){
			var _this = this,
				_element = _this.element,
				_tooltip = _this.tooltipTemplate,
				_direction = _element.attr(Attribute.DIRECTION),		// 获取方向属性
				_content = _element.attr(Attribute.CONTENT);			// 获取内容属性

			_this.id = 'tooltip_'+ (new Date()).getTime();				// 设置 id
			_tooltip.attr('id', _this.id).find(Attribute.INNER).html(_content);

			$('body').append(_tooltip);
			_this.tooltip = $('#'+_this.id);

			// 设置样式
			_this.tooltip.addClass(_direction);
			var styles = _this.setStyles(_direction);
			_this.tooltip.removeClass(_direction).css(styles);

			setTimeout(function() {
					_this.tooltip.addClass(_direction);
			}, 20);

		},

		/**
		 * 设置 tooltip 的位置
		 * 
		 * @param {*} direction tooltip 方向
		 */
		setStyles: function(direction){
			var _this = this,
				_element = _this.element,
				_elemOffset = _element.offset(),
				_elemWidth = _element.outerWidth(),
				_elemHeight = _element.outerHeight(),
				_tooltip = _this.tooltip,
				_toolWidth = _tooltip.outerWidth(),
				_toolHeight = _tooltip.outerHeight(),
				_css;


			if(direction === Attribute.TOP){               		
                _css = {top: _elemOffset.top - _toolHeight + 'px'};
            }else if(direction === Attribute.BOTTOM){              
                _css = {top: _elemOffset.top + _elemHeight + 'px'};
			}
			_css.left = _elemOffset.left + _elemWidth/2 - _toolWidth/2 + 'px';

			
			return _css;
		},
		
		/**
		 * 创建文档
		 * 
		 * @param {*} html html字符串
		 */
		buildFragment: function(html){
			if (typeof html !== 'string') return '';
			var temp = document.createElement('div');
			temp.innerHTML = html;

			var frag = document.createDocumentFragment();
			while (temp.firstChild) {
				frag.appendChild(temp.firstChild);
			}

			// 转化成 jq 的数组
			var elements = [],
				childNodes = frag.childNodes,
				len = childNodes.length;

			for (var i = 0; i < len; i++) {
				elements.push(childNodes[i]);
			}
			return $(elements);
		}
        
	}

    $.fn.extend({
		tooltip: function(options){
			options = $.extend(Default, options || {});

			this.each(function(){
	            new Tooltip($(this), options);
	        });

			return this;
		}
    });
    
})(jQuery, window);