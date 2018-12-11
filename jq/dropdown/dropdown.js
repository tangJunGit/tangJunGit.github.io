;(function($, window, undefined) {
    var Default = {};
    
    var Selector = {
        BTN: '.dropdown-toggle',            // 按钮
    };
	
	var Attribute = {
        OPEN: 'open',                       // dropdown 显示下拉菜单的样式
        CARET: 'caret',                     // 三角
    };

	var Dropdown = function(element, options) {
        var _this = this;

        _this.options = options;
        _this.element = element;

		_this.init();
	};

	Dropdown.prototype = {
	    constructor: Dropdown,

        /**
		 * 初始化函数
		 * 
		 */
	    init: function(){
            this.addEventListeners();
        },

        /**
		 * 事件监听
		 * 
		 */
        addEventListeners: function(){
            var _this = this,
                _options = _this.options,
                _element = _this.element,
                _btn = _element.find(Selector.BTN);
            
            _btn.on('click', function(){
                _element.toggleClass(Attribute.OPEN);
            });

            $(document).on('click', function(e){
                // 如果点击的不是 _btn， 就删除 open 样式
                var target = $(e.target),
                    flag = _element.has(target);

                if(!flag) _element.removeClass(Attribute.OPEN);
                e.stopPropagation(); 
            });
        },

        
        

	}

    $.fn.extend({
		dropdown: function(options){
			options = $.extend(Default, options || {});
            
			this.each(function(){
	            new Dropdown($(this), options);
	        });

			return this;
		}
    });
    
})(jQuery, window);