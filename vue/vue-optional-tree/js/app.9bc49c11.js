(function(e){function t(t){for(var r,i,a=t[0],s=t[1],l=t[2],h=0,u=[];h<a.length;h++)i=a[h],o[i]&&u.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(u.length)u.shift()();return d.push.apply(d,l||[]),n()}function n(){for(var e,t=0;t<d.length;t++){for(var n=d[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(d.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},d=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=s;d.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("5c96"),d=n.n(o),i=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("optional-tree",{ref:"tree",attrs:{data:e.data,"show-checkbox":"","node-key":"id","check-strictly":!0,"default-expand-all":""}}),n("el-button",{on:{click:e.getCheckedKeys}},[e._v("获取")])],1)}),a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-tree",class:{"el-tree--highlight-current":e.highlightCurrent,"is-dragging":!!e.dragState.draggingNode,"is-drop-not-allow":!e.dragState.allowDrop,"is-drop-inner":"inner"===e.dragState.dropType},attrs:{role:"tree"}},[e._l(e.root.childNodes,function(t){return n("el-tree-node",{key:e.getNodeKey(t),attrs:{node:t,props:e.props,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent},on:{"node-expand":e.handleNodeExpand}})}),e.isEmpty?n("div",{staticClass:"el-tree__empty-block"},[n("span",{staticClass:"el-tree__empty-text"},[e._v(e._s(e.emptyText))])]):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dragState.showDropIndicator,expression:"dragState.showDropIndicator"}],ref:"dropIndicator",staticClass:"el-tree__drop-indicator"})],2)},l=[],c=(n("ac6a"),n("c5f6"),n("a3a8")),h=n("69d5"),u=function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.node.visible,expression:"node.visible"}],ref:"node",staticClass:"el-tree-node",class:{"is-expanded":t.expanded,"is-current":t.node.isCurrent,"is-hidden":!t.node.visible,"is-focusable":!t.node.disabled,"is-checked":!t.node.disabled&&t.node.checked},attrs:{role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.draggable},on:{click:function(e){return e.stopPropagation(),t.handleClick(e)},contextmenu:function(t){return e.handleContextMenu(t)},dragstart:function(e){return e.stopPropagation(),t.handleDragStart(e)},dragover:function(e){return e.stopPropagation(),t.handleDragOver(e)},dragend:function(e){return e.stopPropagation(),t.handleDragEnd(e)},drop:function(e){return e.stopPropagation(),t.handleDrop(e)}}},[r("div",{staticClass:"el-tree-node__content",style:{"padding-left":(t.node.level-1)*t.tree.indent+"px"}},[r("span",{class:[{"is-leaf":t.node.isLeaf,expanded:!t.node.isLeaf&&t.expanded},"el-tree-node__expand-icon",t.tree.iconClass?t.tree.iconClass:"el-icon-caret-right"],on:{click:function(e){return e.stopPropagation(),t.handleExpandIconClick(e)}}}),t.showCheckbox?r("el-checkbox",{attrs:{indeterminate:t.node.indeterminate,disabled:!!t.node.disabled},on:{change:t.handleCheckChange},nativeOn:{click:function(e){e.stopPropagation()}},model:{value:t.node.checked,callback:function(e){t.$set(t.node,"checked",e)},expression:"node.checked"}}):t._e(),t.node.loading?r("span",{staticClass:"el-tree-node__loading-icon el-icon-loading"}):t._e(),r("node-content",{attrs:{node:t.node}})],1),r("el-collapse-transition",[!t.renderAfterExpand||t.childNodeRendered?r("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"expanded"}],staticClass:"el-tree-node__children",attrs:{role:"group","aria-expanded":t.expanded}},t._l(t.node.childNodes,function(e){return r("el-tree-node",{key:t.getNodeKey(e),attrs:{"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:e},on:{"node-expand":t.handleChildNodeExpand}})}),1):t._e()])],1)},f=[],p=n("f308"),g=n("9c1a"),y=n("f6f4"),x={name:"ElTreeNode",componentName:"tree-node",mixins:[y["a"]],props:{node:{default:function(){return{}}},props:{},renderContent:Function,renderAfterExpand:{type:Boolean,default:!0},showCheckbox:{type:Boolean,default:!1}},components:{ElCollapseTransition:p["a"],ElCheckbox:g["a"],NodeContent:{props:{node:{required:!0}},render:function(e){var t=this.$parent,n=t.tree,r=this.node,o=r.data,d=r.store;return t.renderContent?t.renderContent.call(t._renderProxy,e,{_self:n.$vnode.context,node:r,data:o,store:d}):n.$scopedSlots.default?n.$scopedSlots.default({node:r,data:o}):e("span",{class:"el-tree-node__label"},[r.label])}}},data:function(){return{tree:null,expanded:!1,childNodeRendered:!1,oldChecked:null,oldIndeterminate:null}},watch:{"node.indeterminate":function(e){this.handleSelectChange(this.node.checked,e)},"node.checked":function(e){this.handleSelectChange(e,this.node.indeterminate)},"node.expanded":function(e){var t=this;this.$nextTick(function(){return t.expanded=e}),e&&(this.childNodeRendered=!0)}},methods:{getNodeKey:function(e){return Object(h["c"])(this.tree.nodeKey,e.data)},handleSelectChange:function(e,t){this.oldChecked!==e&&this.oldIndeterminate!==t&&this.tree.$emit("check-change",this.node.data,e,t),this.oldChecked=e,this.indeterminate=t},handleClick:function(){var e=this.tree.store;e.setCurrentNode(this.node),this.tree.$emit("current-change",e.currentNode?e.currentNode.data:null,e.currentNode),this.tree.currentNode=this,this.tree.expandOnClickNode&&this.handleExpandIconClick(),this.tree.checkOnClickNode&&!this.node.disabled&&this.handleCheckChange(null,{target:{checked:!this.node.checked}}),this.tree.$emit("node-click",this.node.data,this.node,this)},handleContextMenu:function(e){this.tree._events["node-contextmenu"]&&this.tree._events["node-contextmenu"].length>0&&(e.stopPropagation(),e.preventDefault()),this.tree.$emit("node-contextmenu",e,this.node.data,this.node,this)},handleExpandIconClick:function(){this.node.isLeaf||(this.expanded?(this.tree.$emit("node-collapse",this.node.data,this.node,this),this.node.collapse()):(this.node.expand(),this.$emit("node-expand",this.node.data,this.node,this)))},handleCheckChange:function(e,t){var n=this,r=function e(t,n){for(var r=0;r<t.length;r++){var o=t[r];o.checked=n,o.childNodes&&e(o.childNodes,n)}};if(this.tree.checkStrictly){var o=this.node.childNodes.every(function(e){return!0===e.checked});!e&&o&&this.node.childNodes.length>0?this.node.checked=!0:this.node.checked=e,r(this.node.childNodes,e)}else this.node.setChecked(t.target.checked,!this.tree.checkStrictly);this.$nextTick(function(){var e=n.tree.store;n.tree.$emit("check",n.node.data,{checkedNodes:e.getCheckedNodes(),checkedKeys:e.getCheckedKeys(),halfCheckedNodes:e.getHalfCheckedNodes(),halfCheckedKeys:e.getHalfCheckedKeys()})})},handleChildNodeExpand:function(e,t,n){this.broadcast("ElTreeNode","tree-node-expand",t),this.tree.$emit("node-expand",e,t,n)},handleDragStart:function(e){this.tree.draggable&&this.tree.$emit("tree-node-drag-start",e,this)},handleDragOver:function(e){this.tree.draggable&&(this.tree.$emit("tree-node-drag-over",e,this),e.preventDefault())},handleDrop:function(e){e.preventDefault()},handleDragEnd:function(e){this.tree.draggable&&this.tree.$emit("tree-node-drag-end",e,this)}},created:function(){var e=this,t=this.$parent;t.isTree?this.tree=t:this.tree=t.tree;var n=this.tree;n||console.warn("Can not find node's tree.");var r=n.props||{},o=r["children"]||"children";this.$watch("node.data.".concat(o),function(){e.node.updateChildren()}),this.node.expanded&&(this.expanded=!0,this.childNodeRendered=!0),this.tree.accordion&&this.$on("tree-node-expand",function(t){e.node!==t&&e.node.collapse()})}},k=x,b=n("2877"),v=Object(b["a"])(k,u,f,!1,null,null,null),C=v.exports,m=n("9206"),N=n("526f"),w={name:"ElTree",mixins:[y["a"]],components:{ElTreeNode:C},data:function(){return{store:null,root:null,currentNode:null,treeItems:null,checkboxItems:[],dragState:{showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0}}},props:{data:{type:Array},emptyText:{type:String,default:function(){return Object(m["a"])("el.tree.emptyText")}},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{default:function(){return{children:"children",label:"label",disabled:"disabled"}}},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},iconClass:String},computed:{children:{set:function(e){this.data=e},get:function(){return this.data}},treeItemArray:function(){return Array.prototype.slice.call(this.treeItems)},isEmpty:function(){var e=this.root.childNodes;return!e||0===e.length||e.every(function(e){var t=e.visible;return!t})}},watch:{defaultCheckedKeys:function(e){this.store.setDefaultCheckedKey(e)},defaultExpandedKeys:function(e){this.store.defaultExpandedKeys=e,this.store.setDefaultExpandedKeys(e)},data:function(e){this.store.setData(e)},checkboxItems:function(e){Array.prototype.forEach.call(e,function(e){e.setAttribute("tabindex",-1)})},checkStrictly:function(e){this.store.checkStrictly=e}},methods:{filter:function(e){if(!this.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");this.store.filter(e)},getNodeKey:function(e){return Object(h["c"])(this.nodeKey,e.data)},getNodePath:function(e){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");var t=this.store.getNode(e);if(!t)return[];var n=[t.data],r=t.parent;while(r&&r!==this.root)n.push(r.data),r=r.parent;return n.reverse()},getCheckedNodes:function(e,t){return this.store.getCheckedNodes(e,t)},getCheckedKeys:function(e){return this.store.getCheckedKeys(e)},getCurrentNode:function(){var e=this.store.getCurrentNode();return e?e.data:null},getCurrentKey:function(){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");var e=this.getCurrentNode();return e?e[this.nodeKey]:null},setCheckedNodes:function(e,t){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");this.store.setCheckedNodes(e,t)},setCheckedKeys:function(e,t){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");this.store.setCheckedKeys(e,t)},setChecked:function(e,t,n){this.store.setChecked(e,t,n)},getHalfCheckedNodes:function(){return this.store.getHalfCheckedNodes()},getHalfCheckedKeys:function(){return this.store.getHalfCheckedKeys()},setCurrentNode:function(e){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");this.store.setUserCurrentNode(e)},setCurrentKey:function(e){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");this.store.setCurrentNodeKey(e)},getNode:function(e){return this.store.getNode(e)},remove:function(e){this.store.remove(e)},append:function(e,t){this.store.append(e,t)},insertBefore:function(e,t){this.store.insertBefore(e,t)},insertAfter:function(e,t){this.store.insertAfter(e,t)},handleNodeExpand:function(e,t,n){this.broadcast("ElTreeNode","tree-node-expand",t),this.$emit("node-expand",e,t,n)},updateKeyChildren:function(e,t){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");this.store.updateChildren(e,t)},initTabIndex:function(){this.treeItems=this.$el.querySelectorAll(".is-focusable[role=treeitem]"),this.checkboxItems=this.$el.querySelectorAll("input[type=checkbox]");var e=this.$el.querySelectorAll(".is-checked[role=treeitem]");e.length?e[0].setAttribute("tabindex",0):this.treeItems[0]&&this.treeItems[0].setAttribute("tabindex",0)},handleKeydown:function(e){var t=e.target;if(-1!==t.className.indexOf("el-tree-node")){var n=e.keyCode;this.treeItems=this.$el.querySelectorAll(".is-focusable[role=treeitem]");var r,o=this.treeItemArray.indexOf(t);[38,40].indexOf(n)>-1&&(e.preventDefault(),r=38===n?0!==o?o-1:0:o<this.treeItemArray.length-1?o+1:0,this.treeItemArray[r].focus()),[37,39].indexOf(n)>-1&&(e.preventDefault(),t.click());var d=t.querySelector('[type="checkbox"]');[13,32].indexOf(n)>-1&&d&&(e.preventDefault(),d.click())}}},created:function(){var e=this;this.isTree=!0,this.store=new c["a"]({key:this.nodeKey,data:this.data,lazy:this.lazy,props:this.props,load:this.load,currentNodeKey:this.currentNodeKey,checkStrictly:this.checkStrictly,checkDescendants:this.checkDescendants,defaultCheckedKeys:this.defaultCheckedKeys,defaultExpandedKeys:this.defaultExpandedKeys,autoExpandParent:this.autoExpandParent,defaultExpandAll:this.defaultExpandAll,filterNodeMethod:this.filterNodeMethod}),this.root=this.store.root;var t=this.dragState;this.$on("tree-node-drag-start",function(n,r){if("function"===typeof e.allowDrag&&!e.allowDrag(r.node))return n.preventDefault(),!1;n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain","")}catch(o){}t.draggingNode=r,e.$emit("node-drag-start",r.node,n)}),this.$on("tree-node-drag-over",function(n,r){var o=Object(h["b"])(n.target,"ElTreeNode"),d=t.dropNode;d&&d!==o&&Object(N["b"])(d.$el,"is-drop-inner");var i=t.draggingNode;if(i&&o){var a=!0,s=!0,l=!0,c=!0;"function"===typeof e.allowDrop&&(a=e.allowDrop(i.node,o.node,"prev"),c=s=e.allowDrop(i.node,o.node,"inner"),l=e.allowDrop(i.node,o.node,"next")),n.dataTransfer.dropEffect=s?"move":"none",(a||s||l)&&d!==o&&(d&&e.$emit("node-drag-leave",i.node,d.node,n),e.$emit("node-drag-enter",i.node,o.node,n)),(a||s||l)&&(t.dropNode=o),o.node.nextSibling===i.node&&(l=!1),o.node.previousSibling===i.node&&(a=!1),o.node.contains(i.node,!1)&&(s=!1),(i.node===o.node||i.node.contains(o.node))&&(a=!1,s=!1,l=!1);var u,f=o.$el.getBoundingClientRect(),p=e.$el.getBoundingClientRect(),g=a?s?.25:l?.45:1:-1,y=l?s?.75:a?.55:0:1,x=-9999,k=n.clientY-f.top;u=k<f.height*g?"before":k>f.height*y?"after":s?"inner":"none";var b=o.$el.querySelector(".el-tree-node__expand-icon").getBoundingClientRect(),v=e.$refs.dropIndicator;"before"===u?x=b.top-p.top:"after"===u&&(x=b.bottom-p.top),v.style.top=x+"px",v.style.left=b.right-p.left+"px","inner"===u?Object(N["a"])(o.$el,"is-drop-inner"):Object(N["b"])(o.$el,"is-drop-inner"),t.showDropIndicator="before"===u||"after"===u,t.allowDrop=t.showDropIndicator||c,t.dropType=u,e.$emit("node-drag-over",i.node,o.node,n)}}),this.$on("tree-node-drag-end",function(n){var r=t.draggingNode,o=t.dropType,d=t.dropNode;if(n.preventDefault(),n.dataTransfer.dropEffect="move",r&&d){var i={data:r.node.data};"none"!==o&&r.node.remove(),"before"===o?d.node.parent.insertBefore(i,d.node):"after"===o?d.node.parent.insertAfter(i,d.node):"inner"===o&&d.node.insertChild(i),"none"!==o&&e.store.registerNode(i),Object(N["b"])(d.$el,"is-drop-inner"),e.$emit("node-drag-end",r.node,d.node,o,n),"none"!==o&&e.$emit("node-drop",r.node,d.node,o,n)}r&&!d&&e.$emit("node-drag-end",r.node,null,o,n),t.showDropIndicator=!1,t.draggingNode=null,t.dropNode=null,t.allowDrop=!0})},mounted:function(){this.initTabIndex(),this.$el.addEventListener("keydown",this.handleKeydown)},updated:function(){this.treeItems=this.$el.querySelectorAll("[role=treeitem]"),this.checkboxItems=this.$el.querySelectorAll("input[type=checkbox]")}},K=w,$=Object(b["a"])(K,s,l,!1,null,null,null),E=$.exports,_={data:function(){return{data:[{id:1,label:"一级 1",children:[{id:11,label:"二级 1-1",children:[{id:111,label:"三级 1-1-1"},{id:112,label:"三级 1-1-2"}]},{id:12,label:"二级 1-2",children:[{id:121,label:"二级 1-2-1"},{id:122,label:"二级 1-2-2"}]}]},{id:2,label:"一级 2",children:[{id:21,label:"二级 2-1"},{id:22,label:"二级 2-2"}]}]}},methods:{getCheckedKeys:function(){console.log(this.$refs.tree.getCheckedKeys())}},components:{optionalTree:E}},D=_,S=(n("034f"),Object(b["a"])(D,i,a,!1,null,null,null)),T=S.exports;r["default"].use(d.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(T)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.9bc49c11.js.map