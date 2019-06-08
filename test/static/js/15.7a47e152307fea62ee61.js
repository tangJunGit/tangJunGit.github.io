webpackJsonp([15],{wTV3:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("QmSG"),n={data:function(){return{pageSizes:a.e,pageSize:a.d,currentPage:1,total:0,tableData:[{id:1,name1:"01001",name2:"勤工楼",name3:"四川理工学院黄岭校区",name4:"多媒体教室",name5:"120",name6:"是",name7:"是",name8:"使用"},{id:2,name1:"01002",name2:"勤学楼",name3:"四川理工学院黄岭校区",name4:"普通教室",name5:"80",name6:"否",name7:"否",name8:"使用"}],isSelectAll:!1,multipleSelection:[]}},methods:{handleSizeChange:function(e){this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e},del:function(e){var t=this;this.$confirm("此操作将删除【"+e.name1+"】数据， 是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message.success("删除成功")}).catch(function(){})},delMulti:function(){console.log(this.multipleSelection)},selectAll:function(){this.$refs.table.toggleAllSelection()},handleSelectionChange:function(e){this.multipleSelection=e,this.isSelectAll=this.tableData.length===this.multipleSelection.length},gotoAdd:function(){this.$router.push({name:"classroom-add"})},gotoEdit:function(e){this.$router.push({name:"classroom-edit",params:{id:e.id}})}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-card",{staticClass:"t-box-card"},[l("div",{staticClass:"t-box-card-header",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("教室列表")]),e._v(" "),l("div",{staticClass:"t-operate-buttons"},[l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("导入")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.gotoAdd()}}},[e._v("新增")])],1)]),e._v(" "),l("el-table",{ref:"table",staticClass:"t-table-list",attrs:{border:"",stripe:"",size:"small","tooltip-effect":"dark",data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),l("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name1",label:"教室编号","show-overflow-tooltip":!0,align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name2",label:"建筑物名称","show-overflow-tooltip":!0,align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name3",label:"所属校区","show-overflow-tooltip":!0,align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name4",label:"教室类型","show-overflow-tooltip":!0,align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name5",label:"容量","show-overflow-tooltip":!0,align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name6",label:"网络状态","show-overflow-tooltip":!0,align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name7",label:"多媒体状态","show-overflow-tooltip":!0,align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name8",label:"是否可用","show-overflow-tooltip":!0,align:"center"}}),e._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){e.gotoEdit(t.row)}}},[e._v("编辑")]),e._v(" "),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){e.del(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("div",{staticClass:"t-operate-footer"},[l("div",{staticClass:"t-batch-operate"},[l("el-checkbox",{staticClass:"t-select-all",on:{change:function(t){e.selectAll()}},model:{value:e.isSelectAll,callback:function(t){e.isSelectAll=t},expression:"isSelectAll"}},[e._v("全选")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",disabled:!this.multipleSelection.length},on:{click:e.delMulti}},[e._v("删除")])],1),e._v(" "),l("el-pagination",{staticClass:"t-table-pagination",attrs:{small:"",background:"","current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]},i=l("VU/8")(n,o,!1,null,null,null);t.default=i.exports}});