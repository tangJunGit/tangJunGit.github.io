;(function($, window,undefined) {
	// 默认参数
	var Default = {
        index: 0,                  	// 第几张幻灯片    
        loop: true,                	// 幻灯片是否循环
        interval: undefined,       	// 幻灯片自动播放时间
		effect: 'fade',         	// 幻灯片切换效果
		animTime: 15,				// 动画时间
        pause: true,        		// 鼠标 mouseover 时暂停
    };

    // 选择器
    var Selector = {
        PREV: '.prev',              // 幻灯片向左切换按钮
        NEXT: '.next',              // 幻灯片向右切换按钮
        ITEM: '.item',          	// 幻灯片的类名
        NAV : '.nav',           	// 导航按钮
    };

     // class 类
    var DATA = 'data-';
    var Attribute = {
        ACTIVE: 'active',           // 当前幻灯片的样式 .active
        INDEX: DATA+'index',		// 导航点的索引属性 data-index
    };
    
    // 滑动方向
    var Direction = {
        L: 'prev',                  // 调用 prev 方法
        R: 'next',                  // 调用 next 方法
    };

    // 动画
    var Animation = {
    	FADE: 'fade',              	// fade 动画效果
    	SLIDE: 'slide',           	// slide 动画效果
    	SEAMLESS: 'seamless',      	// seamless 动画效果
    };

	var Carousel = function(element, options) {
		var _this = this;

		_this.options = options;
		_this.index = options.index;					// 当前的幻灯片的 index
		_this.element = element;						// 当前 element
        _this.items = element.find(Selector.ITEM);		// 幻灯片的节点数组
		_this.nav = element.find(Selector.NAV);			// 导航的节点数组
		_this.isAnimation = false;						// 是否还在动画中
		_this.prevIndex = options.index;				// 上个幻灯片的 index

		_this.init();
	};

	Carousel.prototype = {
	    constructor: Carousel,

		/**
		 * 初始化函数
		 * 
		 */
	    init: function(){
	    	var _this = this;

			_this.setStyle();
	    	_this.handler(_this.index);
			_this.addEventListeners();
		},
		
		/**
		 * 设定样式
		 * 
		 */
		setStyle: function(){
			var _this = this;

			// 设置 items 的宽度
			_this.items.css({'width': _this.element.width() + 'px'});

			// 给导航添加 data-index 属性
            _this.nav.each(function(i){
                $(this).attr(Attribute.INDEX, i);
			});
		},

		/**
		 * 事件监听
		 * 
		 */
	    addEventListeners: function(){
	    	var _this = this,
	    		_element = _this.element,
	    		_prev = _element.find(Selector.PREV),
	    		_next = _element.find(Selector.NEXT);


            // 自动播放
            if(typeof _this.options.interval === 'number'){
            	var pauseElems = $(Selector.PREV+','+Selector.NEXT+','+Selector.NAV);		// 默认暂停播放的 element

            	_this.cycle();

            	// 鼠标移上去，暂停播放
            	if(_this.options.pause) pauseElems = _this.element;

        		pauseElems
                    .on('mouseover', function(){
                        _this.pause();
                    })
                    .on('mouseout', function(){
                        _this.cycle();
                    });
            }


	    	// 上一张幻灯片按钮
            _prev.on('click', function(){
                _this.jump(Direction.L);
            });

            // 下一张幻灯片按钮
            _next.on('click', function(){
                _this.jump(Direction.R);
            });

           	// 点击导航
           	_this.nav.on('click', function(){
           		_this.index = $(this).attr(Attribute.INDEX);
           		if(_this.index) _this.handler(_this.index);
           	});
	    },

		/**
		 * 跳到第几张幻灯片
		 * 
		 * @param {*} direction 滑动的方向
		 */
	    jump: function(direction){
	    	var _this = this,
	    		_options = _this.options;

			// 获取页码
			_this.index = _this[direction](_this.prevIndex, _this.items.length, _options.loop); 	
			if(_this.index == _this.prevIndex) return;

			// 判断是否在动画中，如果是就返回，不执行
			if(_this.isAnimation){
				return;
			}else{
				_this.isAnimation = true;
			} 
	    	
	    	_this.handler(_this.index, direction);
	    },

		/**
		 * 执行幻灯片
		 * 
		 * @param {*} index 当前幻灯片的 index
		 * @param {*} direction 滑动的方向
		 */
	    handler: function(index, direction){
	    	var _this = this,
	    		_effect = _this.options.effect || Animation.FADE;

	    	var options = {
				index: index
			};
					
			// 判断幻灯片移动的方向
			if(!direction) direction =  _this.prevIndex > index ? Direction.L : Direction.R;

			// 动画处理
	    	if(!_this.animation){
	    		_this.element.addClass(_effect);				// 添加动画的 class

	    		// 创建幻灯片动画
	    		switch(_effect){
					case Animation.SEAMLESS:
						_this.animation = new Seamless(_this.items, options);
						break;
					case Animation.SLIDE:
						_this.animation = new Slide(_this.items, options);
						break;
	    			case Animation.FADE:
	    			default:
	    				_this.animation = new Fade(_this.items, options);			
	    				break;
	    		}
	    	}else{
	    		_this.animation.exec(index, _this.prevIndex, direction);			// 执行动画效果
			}

			_this.prevIndex = index;		// 赋值给上个幻灯片 index
			
			// 结束动画的状态
			setTimeout(function() {
				_this.isAnimation = false;
			}, _this.options.animTime);

			//　导航的样式
            if(_this.nav) _this.nav.removeClass(Attribute.ACTIVE).eq(index).addClass(Attribute.ACTIVE);
	    },

		/**
		 * 循环播放
		 * 
		 */
	    cycle: function(){
	    	var _this = this;

            _this.isInterval = setInterval(function(){
				                    _this.jump(Direction.R);
				                }, _this.options.interval);
	    },

		/**
		 * 暂停播放
		 * 
		 */
        pause: function(){
            var _this = this;
            
            clearInterval(_this.isInterval);
        },

		/**
		 * 返回下一页的页码
		 * 
		 * @param {*} page  页码
		 * @param {*} length 幻灯片的长度
		 * @param {*} loop 幻灯片是否循环
		 */
        next: function(page, length, loop){
            page++;
            if(page >= length){
                page = loop ? 0 : length - 1;
            }
            return page;
        },

		/**
		 * 返回上一页的页码
		 * 
		 * @param {*} page  页码
		 * @param {*} length 幻灯片的长度
		 * @param {*} loop 幻灯片是否循环
		 */
        prev: function(page, length, loop){
            page--;
            if(page < 0){
                page = loop ? length - 1 : 0;
            }
            return page;
        },
	}
	
	$.fn.extend({
		carousel: function(options){
			options = $.extend(Default, options || {});

			this.each(function(){
	            new Carousel($(this), options);
	        });

			return this;
		}
	});

})(jQuery, window);