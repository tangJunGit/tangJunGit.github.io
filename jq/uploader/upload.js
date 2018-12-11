;(function($, window, undefined) {
    var Default = {
        url: '/',
        asyn: true,                                 // 是否异步  默认 true
        fileInput: undefined,                       // 文件控件 input.file
        textInput: undefined,                       // 文本控件 input.text
        selectFile: undefined,                      // 选择文件按钮 button
        uploadBtn: undefined,                       // 上传文件按钮 button
        onSelect: function(files){},                // 文件选择后
        onSuccess: function(files, respond){},      // 文件上传成功时
        onFailure: function(files, respond){},      // 文件上传失败时,
        onComplete: function(files, respond){},     // 文件全部上传完毕时
    };
    
    var Selector = {
        FILE: 'input.fileInput',                    // 文件控件 input.file
        TEXT: 'input.textInput',                    // 文本控件 input.text 
        SELECT: '.selectFile',                      // 选择文件按钮 button
        UPLAOD: '.uploadBtn',                       // 上传文件按钮 button
    };

	var Uploader = function(element, options) {
        var _this = this;

        _this.options = options;
        _this.element = element;
        _this.fileInput = element.find(options.fileInput || Selector.FILE);
        _this.textInput = element.find(options.textInput || Selector.TEXT);
        _this.uploadFileList = [];                    // 准备上传的文件数组

		_this.init();
	};

	Uploader.prototype = {
	    constructor: Uploader,

        /**
		 * 初始化函数
		 * 
		 */
	    init: function(){
			var _this = this;

            _this.addEventListeners();
        },

        /**
		 * 事件监听
		 * 
		 */
        addEventListeners: function(){
            var _this = this,
                _element = _this.element,
                _selectFile = _element.find(_this.options.selectFile || Selector.SELECT),
                _uploadBtn = _element.find(_this.options.uploadBtn || Selector.UPLAOD);

            // 触发文件控件
            _selectFile.on('click', function(e){
                _this.fileInput[0].click();
                e.preventDefault();
            });

            // 选择文件
            _this.fileInput.on('change', function(e){
                _this.getFile(e);
            }); 

            // 上传文件
            _uploadBtn.on('click', function(e){
                _this.uploadFile();
                e.preventDefault();
            });
        },
        
        /**
         * 获取文件
         * 
         * @param {} e  
         */
        getFile: function(e){
            var _this = this,
                _files = e.target.files || e.dataTransfer.files;            // 从事件中获取选中的所有文件

            _files = $.toArray(_files);
            _this.uploadFileList = _files;

            _this.options.onSelect(_files);

            _this.setFileName();
        },

        /**
         * 设置文件名并显示
         */
        setFileName: function(){
            var _this = this, 
                _fileNames = $.map(_this.uploadFileList, function(i, v){    // 提取文件名
                    return v.name;
                }).join(';');

            _this.textInput.val(_fileNames);            // 显示文件名
        },

        /**
         * 文件上传
         */
        uploadFile: function(){
            var _this = this,
                _name = _this.fileInput[0].name,
                _options = _this.options,
                _FormData;
            
            if(_options.asyn){
                $.each(_this.uploadFileList, function(i, file){
                    _FormData = new FormData();
                    _FormData.append(_name, file);
                    _this.sendAjax(file, _FormData, _options);
                });
            }else{
                _FormData = new FormData();
                $.each(_this.uploadFileList, function(i, file){
                    _FormData.append(_name, file);
                });
                _this.sendAjax(_this.uploadFileList, _FormData, _options);
            }
        },

        /**
         * ajax
         * 
         * @param formData
         */
        sendAjax: function(files, formData, options){
            $.ajax({
                url: options.url,
                type: 'GET',
                data: formData,
                success: function(respond){
                    options.onSuccess(files, respond);
                },
                error: function(respond){
                    options.onFailure(files, respond);
                },
                complete: function(respond){
                    options.onComplete(files, respond);
                }
            });
        }

	}

    $.fn.extend({
		uploader: function(options){
			options = $.extend(Default, options || {});

			this.each(function(){
	            new Uploader($(this), options);
	        });

			return this;
		}
    });
    
})(jQuery, window);