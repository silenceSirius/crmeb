(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-98173ed8"],{"41cf":function(t,e,i){"use strict";i("e1f8")},"448b":function(t,e,i){"use strict";i.r(e),i("b0c0");var n=i("c7eb"),o=i("1da1"),a=i("5530"),s=(i("14d9"),i("a434"),i("d81d"),i("d3b7"),i("159b"),i("a9e3"),i("2f62")),r=i("a9e7"),d=i("c2c6"),c=i("c276"),l=i("d708");a={data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},formValidate:{page:1,limit:20,title:""},styles:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:"53px",position:"static"},loading:!1,pwdModal:!1,buildModals:!1,pwd:"",tabList:[],codeBuildList:[],total:0,columns1:[{title:"ID",key:"id",width:80},{title:"菜单名",key:"name",minWidth:130},{title:"表名",key:"table_name",minWidth:130},{title:"字符集",key:"table_collation",minWidth:130},{title:"表备注",key:"table_comment",minWidth:130},{title:"添加时间",key:"add_time",minWidth:130},{title:"操作",slot:"action",fixed:"right",minWidth:150}],FromData:null,titleFrom:"",groupId:0,addId:"",editorList:[],indexEditor:0,code:"",contextData:null,fileType:"",className:"",spinShow:!1,modals:!1,editor:"",editorIndex:[],title:"",editId:0}},computed:Object(a.a)(Object(a.a)({},Object(s.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.getList()},beforeDestroy:function(){this.source&&this.source.close()},methods:{crudSaveFile:function(){var t=this,e={filepath:this.editorIndex[this.indexEditor].pathname,comment:this.editorList[this.indexEditor].editor.getValue(),pwd:this.pwd};Object(r.k)(this.editId,e).then((function(e){t.pwd="",t.$message.success(e.msg)})).catch((function(e){t.$message.error(e.msg)}))},downLoad:function(t){Object(r.g)(t.id).then((function(t){window.open(t.data.download_url,"_blank")}))},buildCode:function(){var t;this.buildModals=!0,"undefined"!=typeof EventSource&&(t=l.a.apiBaseURL+"/system/crud/npm?token="+Object(c.c)("token"),this.source=new EventSource(t),this.source.onopen=function(t){},this.source.onmessage=function(t){},this.source.onerror=function(t){})},goList:function(t){this.$router.push({path:this.$routeProStr+"/system/config/system_group/list/"+t.id})},getList:function(){var t=this;this.loading=!0,Object(r.i)(this.formValidate).then(function(){var e=Object(o.a)(Object(n.a)().mark((function e(i){var o;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=i.data,t.tabList=o.list,t.total=o.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))},userSearchs:function(){this.formValidate.page=1,this.getList()},groupAdd:function(){this.$router.push({name:"system_code_generation"})},del:function(t,e,i){var n=this;e={title:e,num:i,url:"system/crud/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){n.$message.success(t.msg),n.tabList.splice(i,1),n.getList()})).catch((function(t){n.$message.error(t.msg)}))},edit:function(t){var e=this;this.spinShow=!0,this.title=t.name,this.$nextTick((function(i){e.openfile(t.id,!1)}))},editItem:function(t){this.$router.push({name:"system_code_generation",query:{id:t.id}})},openfile:function(t){var e=this;try{this.editId=t;var i=this;this.editorIndex=[],this.editorList=[],Object(r.f)(t).then(function(){var t=Object(o.a)(Object(n.a)().mark((function t(o){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.data.file[0],o.data.file.map((function(t,n){var o=t;e.editorIndex.push({tab:!0,index:n+"",title:o.name,file_name:o.file_name,pathname:o.path}),i.code=o.content,e.initEditor(n,o.content),e.$nextTick((function(t){i.editorList[n].path=o.path,i.editorList[n].oldCode=i.content,i.editorIndex[n].title=o.name,i.editorIndex[n].file_name=o.file_name}))})),i.modals=!0,i.spinShow=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){i.catchFun(t)}))}catch(t){}},winChanges:function(){this.className?this.className="":this.className="diy-fullscreen"},initEditor:function(t,e){try{var i=this;i.$nextTick((function(){i.editor=d.editor.create(document.getElementById("container_"+t),{value:e,language:"sql",automaticLayout:!0,theme:"vs",foldingStrategy:"indentation",overviewRulerBorder:!1,scrollbar:{verticalScrollbarSize:4,horizontalScrollbarSize:10},autoIndent:!0,tabSize:4,autoClosingOvertype:"always",readOnly:!1}),i.editorList.push({editor:i.editor,oldCode:i.code,path:"",index:t})}))}catch(t){}},catchFun:function(t){t.status&&(400==t.status&&this.$message.error(t.msg),110008==t.status)&&(this.isShowLogn=!0,this.isShowList=!1,this.loading=!1),this.spinShow&&(this.spinShow=!1),this.loading&&(this.loading=!1)},editModalChange:function(){var t=this;t.editorList.forEach((function(e,i){t.editorList[i].editor.dispose(),t.editorList[i].editor=null})),t.modals=!1,t.editor="",t.editorIndex=[{tab:!0,index:"0",title:"",icon:""}],t.editorList=[],t.indexEditor="0",t.code="",t.contextData=null},toggleEditor:function(t){t=Number(t),this.code=this.editorList[t].oldCode,this.editor=this.editorList[t].editor},handleTabRemove:function(t){this.editorIndex[t].tab=!1}}},i("41cf"),s=i("2877"),i=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.spinShow,expression:"spinShow"}],staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[e("el-button",{staticClass:"mr20",attrs:{type:"primary"},on:{click:function(e){return t.groupAdd()}}},[t._v("添加功能")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"mt14",attrs:{data:t.tabList,"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[e("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("span",[t._v(t._s(i.row.id))])]}}])}),e("el-table-column",{attrs:{label:"菜单名","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("span",[t._v(t._s(i.row.name))])]}}])}),e("el-table-column",{attrs:{label:"表名","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("span",[t._v(t._s(i.row.table_name))])]}}])}),e("el-table-column",{attrs:{label:"表备注","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("span",[t._v(t._s(i.row.table_comment))])]}}])}),e("el-table-column",{attrs:{label:"添加时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("span",[t._v(t._s(i.row.add_time))])]}}])}),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("a",{on:{click:function(e){return t.edit(i.row,"编辑")}}},[t._v("查看代码")]),e("el-divider",{attrs:{direction:"vertical"}}),e("a",{on:{click:function(e){return t.editItem(i.row)}}},[t._v("编辑")]),e("el-divider",{attrs:{direction:"vertical"}}),e("a",{on:{click:function(e){return t.downLoad(i.row)}}},[t._v("下载")]),e("el-divider",{attrs:{direction:"vertical"}}),e("a",{on:{click:function(e){return t.del(i.row,"删除",i.$index)}}},[t._v("删除")])]}}])})],1),e("div",{staticClass:"acea-row row-right page"},[t.total?e("pagination",{attrs:{total:t.total,page:t.formValidate.page,limit:t.formValidate.limit},on:{"update:page":function(e){return t.$set(t.formValidate,"page",e)},"update:limit":function(e){return t.$set(t.formValidate,"limit",e)},pagination:t.getList}}):t._e()],1)],1),e("el-drawer",{attrs:{visible:t.modals,"custom-class":t.className,title:"Create",size:"80%",wrapperClosable:!1,styles:t.styles},on:{"update:visible":function(e){t.modals=e},closed:t.editModalChange}},[e("p",{ref:"diyHeader",staticClass:"diy-header",attrs:{slot:"header"},slot:"header"},[e("span",[t._v(t._s(t.title))])]),e("div",{staticClass:"file",staticStyle:{height:"100%"}},[e("el-button",{staticClass:"save",attrs:{type:"primary"},on:{click:function(e){t.pwdModal=!0}}},[t._v("保存")]),e("div",{staticClass:"file-box"},[e("div",{staticClass:"file-fix"}),e("div",{staticClass:"file-content"},[e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.toggleEditor},model:{value:t.indexEditor,callback:function(e){t.indexEditor=e},expression:"indexEditor"}},t._l(t.editorIndex,(function(i){return e("el-tab-pane",{key:i.index},[e("span",{attrs:{slot:"label"},slot:"label"},[e("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:i.title,placement:"top"}},[e("span",[t._v(t._s(i.file_name))])])],1),e("div",{ref:"container",refInFor:!0,staticStyle:{height:"100%","min-height":"calc(100vh - 110px)"},attrs:{id:"container_"+i.index}})])})),1)],1)])],1)]),e("el-dialog",{attrs:{visible:t.buildModals,title:"终端","show-close":!0,"close-on-click-modal":!1,width:"720px"},on:{"update:visible":function(e){t.buildModals=e},close:t.editModalChange}},[e("el-alert",{attrs:{type:"warning",title:"当前终端未运行于安装服务下，部分命令可能无法执行."}}),e("div",t._l(t.codeBuildList,(function(i,n){return e("div",{key:n},[t._v(t._s(i))])})),0)],1),e("el-dialog",{attrs:{visible:t.pwdModal,width:"470px",title:"文件管理密码","show-close":!0,"close-on-click-modal":!1},on:{"update:visible":function(e){t.pwdModal=e}}},[e("el-input",{attrs:{type:"password",placeholder:"请输入文件管理密码"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}}),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.pwdModal=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.crudSaveFile}},[t._v("确 定")])],1)],1)],1)}),[],!1,null,"e31fab1a",null);e.default=i.exports},a9e7:function(t,e,i){"use strict";i.d(e,"j",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"h",(function(){return s})),i.d(e,"i",(function(){return r})),i.d(e,"f",(function(){return d})),i.d(e,"g",(function(){return c})),i.d(e,"d",(function(){return l})),i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return f})),i.d(e,"e",(function(){return h})),i.d(e,"l",(function(){return m})),i.d(e,"k",(function(){return p}));var n=i("6b6c");function o(){return Object(n.a)({url:"/system/crud/menus",method:"get"})}function a(){return Object(n.a)({url:"/system/crud/column_type",method:"get"})}function s(t){return Object(n.a)({url:"/system/crud/file_path",method:"post",data:t})}function r(t){return Object(n.a)({url:"/system/crud",method:"get",params:t})}function d(t){return Object(n.a)({url:"/system/crud/".concat(t),method:"get"})}function c(t){return Object(n.a)({url:"/system/crud/download/".concat(t),method:"get"})}function l(t){return Object(n.a)({url:"/system/crud/data_dictionary",method:"get",params:t})}function u(){return Object(n.a)({url:"/system/crud/association_table",method:"get"})}function f(t){return Object(n.a)({url:"/system/crud/association_table/".concat(t),method:"get"})}function h(t){return Object(n.a)({url:"/system/crud/data_dictionary/".concat(t),method:"get"})}function m(t,e){return Object(n.a)({url:"/system/crud/data_dictionary/".concat(t),method:"post",data:e})}function p(t,e){return Object(n.a)({url:"/system/crud/save_file/".concat(t),method:"post",data:e})}},e1f8:function(t,e,i){}}]);