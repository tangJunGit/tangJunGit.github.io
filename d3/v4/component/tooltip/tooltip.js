;(function(window, undefined){
    // 默认值
    var defaultOption = {
        tooltip: undefined,         // tooltip 选择器
        duration: 200,            // 延迟时间
        html: function(d){},        // tooltip 的提示的内容        
    };

    // 多行文本构造器
    var Tooltip = function(nodes, option){
        if(!option.tooltip) return;
        this.nodes = nodes;
        this.option = this.extend({}, defaultOption, option);
        return this.init();
    };
    // 方法
    Tooltip.prototype = {
        constructor: Tooltip,

        init: function(){
            this.events();
            return this.nodes;
        },

        // 事件监听
        events: function(){
            var option = this.option,
                html = option.html,
                tooltip = d3.select(option.tooltip);

            this.nodes.on('mouseover',function(d){
                    tooltip.html(html(d))
                            .style('left', (d3.event.pageX) + 'px')
                            .style('top', (d3.event.pageY + 20) + 'px')
                            .transition()
                            .duration(option.duration)
                            .style('opacity', '0.8');
                })
                .on('mouseout',function(d){
                    tooltip.transition()
                            .duration(option.duration/2)
                            .style('opacity', '0');
                });
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

    window.Tooltip = Tooltip;

}(window));
