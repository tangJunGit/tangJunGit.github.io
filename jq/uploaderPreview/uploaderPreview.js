;(function($, window, undefined) {
    var Default = {
        url: '/',
        asyn: true,                                 // 是否异步  默认 true
        drag: false,                                // 是否可以拖拽
        filterFile: function(files, selectFile) {   // 过滤后的文件返回 
            return selectFile;
        },             
        onSelect: function(files, selectFile){},    // 文件选择后
        onDelete: function(files, delFiles) {},     // 文件删除后  files:删除之后的文件
        onSuccess: function(files, respond){},      // 文件上传成功时
        onFailure: function(files, respond){},      // 文件上传失败时,
        onComplete: function(files, respond){},     // 文件全部上传完毕时
    };
    
    var Selector = {
        SELECT: '.selectFile',                      // 选择文件按钮 button
        UPLAOD: '.uploadBtn',                       // 上传文件按钮 button  
        PREVIEW: '.preview',                        // 预览文件的框
        DRAG: '.drag',                              // 拖拽的盒子
    };
	
	var Attribute = {
       	INDEX: 'data-index',                        // 文件的索引，删除时有用
        DRAPHOVER: 'drag-hover',                    // 拖拽到框里的样式
        FILEID: 'file-',                            // 设置文件的 id
        SUCCESS: 'success-',                        // 设置成功的 id
        ERROR: 'error-',                            // 设置失败的 id
        PHOTO: ['fix-width', 'fix-height'],         // 图片的的样式
    };

    var TemplateSelector = {
        LIST: '.upload-list',                       // 每个列表
        NAME: '.file-name',                         // 文件名
        DELETE: '.delete',                          // 删除按钮
        PHOTO: '.photo',                            // 图片
        SUCCESS: '.file-success',                   // 成功提示
        ERROR: '.file-error',                       // 失败提示
    }
    
    var TEMPLATE = '<div class="upload-list">'+
                        '<div class="file-bar">'+
                            '<p class="file-name" title=""></p>'+
                            '<button type="button" class="close file-del delete" title="删除"><span>×</span></button>'+
                    '</div>'+
                        '<a href="javascript:void(0)" class="photo">'+
                            '<img src="#">'+
                        '</a>'+
                        '<p class="file-success"></p>'+
                        '<p class="file-error">上传失败，请重试</p>'+
                    '</div>';
	

	var UploadPreview = function(element, options) {
        var _this = this;

        _this.options = options;
        _this.element = element;
        _this.preview = element.find(Selector.PREVIEW);
        _this.filePicker = element.find('input[type="file"]');
        _this.uploadFileList = [];           // 待上传的文件

		_this.init();
	};

	UploadPreview.prototype = {
	    constructor: UploadPreview,

        /**
		 * 初始化函数
		 * 
		 */
	    init: function(){
            var _this = this,
                _style = _this.setPreviewStyle();
            
            // 预显示的图片
            _this.element.find(TemplateSelector.LIST).css(_style);

            _this.addEventListeners();
        },

        /**
		 * 事件监听
		 * 
		 */
        addEventListeners: function(){
            var _this = this,
                _options = _this.options,
                _element = _this.element,
                _filePicker = _this.filePicker,
                _selectFile = _element.find(Selector.SELECT),
                _uploadBtn = _element.find(Selector.UPLAOD),
                _drag = _element.find(Selector.DRAG);

            // 触发文件控件
            _selectFile.on('click', function(e){
                _filePicker[0].click();
                e.preventDefault();
            });

            // 选择文件
            _filePicker.on('change', function(e){
                _this.getFile(e);
            });
            
            //删除文件
            _element.on('click', TemplateSelector.DELETE, function(e){
                var index = $(this).attr(Attribute.INDEX);
                _this.deleteFile(index);
                $('#'+ Attribute.FILEID + index).remove();
            });

            // 上传文件
            _uploadBtn.on('click', function(e){
                _this.uploadFile();
                e.preventDefault();
            });

            // 拖动窗口
            $(window).on('resize', function(){
                var _style = _this.setPreviewStyle();
                _this.element.find(TemplateSelector.LIST).css(_style);
            });

            // 拖拽事件触发
            if (_options.drag) {
                _drag.on("dragover", function(e) { 
                    $(this).addClass(Attribute.DRAPHOVER);
                    e.preventDefault();
                });
                _drag.on("dragleave", function(e) { 
                    $(this).removeClass(Attribute.DRAPHOVER);
                    e.preventDefault();
                });
                _drag.on("click", function(e) { 
                    _filePicker[0].click();
                });

                _drag.get(0).addEventListener("drop", function(e) { 
                    _this.getFile(e);
                    $(this).removeClass(Attribute.DRAPHOVER);
                    e.preventDefault();         
                    e.stopPropagation();          
                 }, false);
                // 阻止浏览器默认打开
                $(document.body).on('dragover drop', function(e){
                    e.preventDefault(); 
                    e.stopPropagation();            //火狐下使用此语句来阻止浏览器的默认处理
                });
            }
        
        },

        /**
         * 获取文件
         * 
         * @param e
         */
        getFile: function(e){
            var _this = this,
                _options = _this.options,
                _selectFiles = $.toArray(e.target.files || e.dataTransfer.files),           // 从事件中获取选中的所有文件
                _filterFiles = _options.filterFile(_this.uploadFileList, _selectFiles);     // 过滤后，需要添加的文件

            _filterFiles = _this.dealFiles(_filterFiles);                       // 处理选中文件
            _this.uploadFileList = _this.uploadFileList.concat(_filterFiles);   // 添加过滤后的文件到待上传数组中
            
            _this.options.onSelect(_this.uploadFileList, _filterFiles);         // 执行选择回调


            // 读取文件
            $.each(_filterFiles, function(i, file){
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    _this.creatPreview(file, e);                    // 创建预览文件
                }
           });

        },


        /**
         * 处理选中文件
         * 
         * @param files
         */
        dealFiles: function(files){
            var flag = 0;
            return $.map(files, function(i, file){
                file.index =  new Date().getTime()+ '' + flag;                // 增加唯一索引值 index
                flag++;
                return file;
            });
        },

        /**
         * 删除文件
         * 
         * @param index 文件索引值
         */
        deleteFile: function(index){
            var _this = this, _i, file,
                _uploadFileList = _this.uploadFileList,
                _len = _uploadFileList.length;
            
            for(_i = 0; _i < _len; _i++){
                file = _uploadFileList[_i];
                if(file.index == index){
                    _this.uploadFileList.splice(_i, 1);

                    _this.options.onDelete(_this.uploadFileList, file);

                    return;
                }
            };

        },

        /**
         * 创建预览文件
         * 
         * @param file
         */
        creatPreview: function(file, e){
            var _this = this,
                _creatPreview = _this.buildFragment(TEMPLATE),
                _style = _this.setPreviewStyle();

            // 添加属性
            _creatPreview.attr('id', Attribute.FILEID + file.index).css(_style);
            _creatPreview.find(TemplateSelector.NAME).text(file.name).attr('title', file.name);
            _creatPreview.find(TemplateSelector.PHOTO).css(_style);
            _creatPreview.find(TemplateSelector.PHOTO+'>img').attr('src', e.target.result);
            _creatPreview.find(TemplateSelector.SUCCESS).attr('id', Attribute.SUCCESS + file.index);
            _creatPreview.find(TemplateSelector.ERROR).attr('id', Attribute.ERROR + file.index);
            _creatPreview.find(TemplateSelector.DELETE).attr(Attribute.INDEX, file.index);

            // 设置图片宽高
            _this.setPhotoClass(e.target.result, function(photoClass){
                _creatPreview.find(TemplateSelector.PHOTO+'>img').addClass(photoClass);
                _this.preview.prepend(_creatPreview);                       // 创建
            })

            
        },

        /**
         * 判断图片的宽高，给不同的样式
         * 
         * @param src       图片路径
         */
        setPhotoClass: function(src, callback){
            var _img = new Image();
            _img.src = src;

            _img.onload =function(){  
                var _class = _img.width > _img.height ? Attribute.PHOTO[0] : Attribute.PHOTO[1];
                callback(_class);
            }  
        },


        /**
         * 根据图片上传预览，设置图片列表的宽度
         */
        setPreviewStyle: function(){
            var _this = this,
                _width = _this.element.find(Selector.PREVIEW).innerWidth(),
                _scale = 4/3,           // 宽高比例
                _count;                 // 每行显示个数          

            if(_width > 1200){
                _count = 8;
            }else if(_width > 992){
                _count = 6; 
            }else if(_width> 768){
                _count = 5; 
            }else{
                _count = 4; 
            }

            return {
                width: _width/_count + 'px',
                height: _width/_count*_scale + 'px'
            };
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
        },

        /**
         * 上传文件
         */
        uploadFile: function(){
            var _this = this,
                _name = _this.filePicker[0].name,
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
		uploadPreview: function(options){
			options = $.extend(Default, options || {});
            
			this.each(function(){
	            new UploadPreview($(this), options);
	        });

			return this;
		}
    });
    
})(jQuery, window);