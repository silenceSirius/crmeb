(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-97c9717a"],{"277f":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return n})),a("99af");var s=a("6b6c");function i(t){return Object(s.a)({url:"setting/notification/index?type=".concat(t),method:"get"})}function l(t,e){return Object(s.a)({url:"setting/notification/info?id=".concat(t,"&type=").concat(e),method:"get"})}function o(t){return Object(s.a)({url:"setting/notification/save",method:"post",data:t})}function r(t,e,a){return Object(s.a)({url:"setting/notification/set_status/".concat(t,"/").concat(e,"/").concat(a),method:"put"})}function n(t){return Object(s.a)({url:"setting/notification/not_form/".concat(t),method:"get"})}},"5bcb":function(t,e,a){"use strict";a("8cfa")},6401:function(t,e,a){},"8cfa":function(t,e,a){},"9d9f":function(t,e,a){"use strict";a.r(e),a("ac1f"),a("14d9"),a("a434"),a("d81d");var s=a("277f"),i=(a("498a"),{props:{keyList:{type:Array,required:!0},variableList:{type:Array,required:!0}},methods:{add:function(){this.$emit("add")},remove:function(t){this.$emit("remove",t)}}}),l=(a("ef0d"),a("2877"));i={components:{keysList:Object(l.a)(i,(function(){var t=this,e=t._self._c;return e("div",[t._l(t.keyList,(function(a,s){return e("div",{key:s,staticClass:"virtual-data mb10"},[e("el-input",{staticClass:"mr10",staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"请输入字段名称",disabled:""},model:{value:a.key,callback:function(e){t.$set(a,"key","string"==typeof e?e.trim():e)},expression:"item.key"}}),e("span",{staticClass:"mr10 virtual-title"},[t._v("->")]),e("el-select",{attrs:{placeholder:"请选择"},model:{value:a.value,callback:function(e){t.$set(a,"value",e)},expression:"item.value"}},t._l(t.variableList,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)})),e("div",{staticClass:"add-more"})],2)}),[],!1,null,"93988d56",null).exports},data:function(){return{tabs:[{title:"系统通知",slot:"is_system"},{title:"短信通知",slot:"is_sms"},{title:"微信模板消息",slot:"is_wechat"},{title:"微信小程序提醒",slot:"is_routine"},{title:"企业微信",slot:"is_ent_wechat"}],tabsList:[],formData:{},id:0,loading:!0,tagName:"is_system",ruleValidate:{name:[{required:!0,message:"请输入通知场景",trigger:"blur"}],title:[{required:!0,message:"请输入通知场景",trigger:"blur"}],content:[{required:!0,message:"请输入通知内容",trigger:"blur"}]},keyList:[]}},created:function(){this.id=this.$route.query.id,this.getData(this.id,this.tagName,1)},methods:{handleContentChange:function(t){if(3==this.formData.type_n){var e,a=/{{(.*?)\./g;for(this.keyList=[];e=a.exec(t);)this.keyList.push({key:e[1],value:""})}},handleRemove:function(t){this.keyList.splice(t,1)},handleAdd:function(){this.keyList.push({key:"",value:""})},changeTabs:function(){this.getData(this.id,this.tagName)},getData:function(t,e,a){var i=this;this.loading=!0,this.formData={},Object(s.a)(t,e).then((function(s){i.tabsList.length||i.tabs.map((function(t){s.data[t.slot]&&i.tabsList.push(t)})),a&&(i.tagName=i.tabsList[0].slot),i.formData=s.data,i.formData.type_n=s.data.type,i.formData.type=e,i.formData.id=t,i.keyList=s.data.key_list||[],i.loading=!1})).catch((function(t){i.$message.error(t.msg)}))},handleSubmit:function(t){var e=this;this.formData.key_list=this.keyList,Object(s.c)(this.formData).then((function(t){e.$message.success("设置成功")})).catch((function(t){e.$message.error(t)}))},handleReset:function(t){this.$emit("close")},changeValue:function(t){var e=document.getElementById("system_text"),a=e.selectionStart;this.formData.system_text=this.formData.system_text.substring(0,a)+t+this.formData.system_text.substring(a),this.$nextTick((function(){e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus()}))}}},a("5bcb"),a=Object(l.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edit"},[e("pages-header",{ref:"pageHeader",attrs:{title:t.$route.meta.title,backUrl:t.$routeProStr+"/setting/notification/index"}}),e("div",{staticClass:"tabs mt16"},[e("el-row",{attrs:{gutter:32}},[e("el-col",{staticClass:"demo-tabs-style1",staticStyle:{padding:"16px"},attrs:{span:32}},[e("el-tabs",{on:{"tab-click":t.changeTabs},model:{value:t.tagName,callback:function(e){t.tagName=e},expression:"tagName"}},t._l(t.tabsList,(function(a,s){return e("el-tab-pane",{key:s,attrs:{name:a.slot,label:a.title}},[e("el-form",{ref:"formData",refInFor:!0,staticClass:"form-sty",attrs:{model:t.formData,rules:t.ruleValidate,"label-width":"85px"}},["is_system"!==a.slot||t.loading?t._e():e("div",[e("el-form-item",{attrs:{label:"通知标题："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入通知标题"},model:{value:t.formData.system_title,callback:function(e){t.$set(t.formData,"system_title",e)},expression:"formData.system_title"}})],1),e("el-form-item",{attrs:{label:"通知内容："}},[e("div",{staticClass:"content"},[e("el-input",{ref:"system_text",refInFor:!0,staticStyle:{width:"500px"},attrs:{id:"system_text",type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入通知内容"},model:{value:t.formData.system_text,callback:function(e){t.$set(t.formData,"system_text",e)},expression:"formData.system_text"}}),3==t.formData.type_n?e("div",{staticClass:"value-list"},[e("el-popover",{attrs:{placement:"right",width:"200",trigger:"click"}},[e("div",{staticClass:"variable"},t._l(t.formData.custom_variable,(function(a,s){return e("div",{key:s,staticClass:"item",on:{click:function(e){return t.changeValue(a.value)}}},[t._v("\n                            "+t._s(a.label)+"\n                          ")])})),0),e("i",{staticClass:"el-icon-link",attrs:{slot:"reference"},slot:"reference"})])],1):t._e()],1),e("div",{staticClass:"tips-info"},[t._v("\n                    可点击右下角图标,插入自定义变量\n                  ")])]),e("el-form-item",{attrs:{label:"状态：",prop:"is_system"}},[e("el-radio-group",{model:{value:t.formData.is_system,callback:function(e){t.$set(t.formData,"is_system",e)},expression:"formData.is_system"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1),"is_sms"!==a.slot||t.loading?"is_wechat"!==a.slot||t.loading?"is_routine"!==a.slot||t.loading?"is_ent_wechat"!==a.slot||t.loading?t._e():e("div",[e("el-form-item",{attrs:{label:"通知内容："}},[e("div",{staticClass:"content"},[e("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入通知内容"},model:{value:t.formData.ent_wechat_text,callback:function(e){t.$set(t.formData,"ent_wechat_text",e)},expression:"formData.ent_wechat_text"}}),3==t.formData.type_n?e("div",{staticClass:"value-list"},[e("el-popover",{attrs:{placement:"right",width:"200",trigger:"click"}},[e("div",{staticClass:"variable"},t._l(t.formData.custom_variable,(function(a,s){return e("div",{key:s,staticClass:"item",on:{click:function(e){return t.changeValue(a.value)}}},[t._v("\n                            "+t._s(a.label)+"\n                          ")])})),0),e("i",{staticClass:"el-icon-link",attrs:{slot:"reference"},slot:"reference"})])],1):t._e()],1),e("div",{staticClass:"tips-info"},[t._v("\n                    可点击右下角图标,插入自定义变量\n                  ")])]),e("el-form-item",{attrs:{label:"机器人链接："}},[e("div",{staticClass:"content"},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入机器人链接"},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1)]),e("el-form-item",{attrs:{label:"状态：",prop:"is_ent_wechat"}},[e("el-radio-group",{model:{value:t.formData.is_ent_wechat,callback:function(e){t.$set(t.formData,"is_ent_wechat",e)},expression:"formData.is_ent_wechat"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1):e("div",[e("el-form-item",{attrs:{label:"模板编号："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{disabled:3!==t.formData.type_n,placeholder:"请输入通模板编号"},model:{value:t.formData.tempkey,callback:function(e){t.$set(t.formData,"tempkey",e)},expression:"formData.tempkey"}})],1),e("el-form-item",{attrs:{label:"模板ID："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入模板ID"},model:{value:t.formData.tempid,callback:function(e){t.$set(t.formData,"tempid",e)},expression:"formData.tempid"}})],1),e("el-form-item",{attrs:{label:"模板："}},[e("div",{staticClass:"content"},[e("el-input",{staticStyle:{width:"500px"},attrs:{disabled:3!==t.formData.type_n,type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入模板"},on:{input:t.handleContentChange},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1)]),3==t.formData.type_n&&t.keyList.length?e("el-form-item",{attrs:{label:"字段："}},[e("div",{staticClass:"content"},[e("keys-list",{attrs:{"key-list":t.keyList,variableList:t.formData.custom_variable},on:{add:t.handleAdd,remove:t.handleRemove}})],1)]):t._e(),e("el-form-item",{attrs:{label:"跳转链接："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入模版跳转链接，可携带参数"},model:{value:t.formData.routine_link,callback:function(e){t.$set(t.formData,"routine_link",e)},expression:"formData.routine_link"}})],1),e("el-form-item",{attrs:{label:"状态：",prop:"is_routine"}},[e("el-radio-group",{model:{value:t.formData.is_routine,callback:function(e){t.$set(t.formData,"is_routine",e)},expression:"formData.is_routine"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1):e("div",[e("el-form-item",{attrs:{label:"模板编号："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{disabled:3!==t.formData.type_n,placeholder:"请输入通模板编号"},model:{value:t.formData.tempkey,callback:function(e){t.$set(t.formData,"tempkey",e)},expression:"formData.tempkey"}})],1),e("el-form-item",{attrs:{label:"模板ID："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入模板ID"},model:{value:t.formData.tempid,callback:function(e){t.$set(t.formData,"tempid",e)},expression:"formData.tempid"}})],1),e("el-form-item",{attrs:{label:"模板："}},[e("div",{staticClass:"content"},[e("el-input",{staticStyle:{width:"500px"},attrs:{disabled:3!==t.formData.type_n,type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入模板"},on:{input:t.handleContentChange},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1)]),3==t.formData.type_n&&t.keyList.length?e("el-form-item",{attrs:{label:"字段："}},[e("div",{staticClass:"content"},[e("keys-list",{attrs:{"key-list":t.keyList,variableList:t.formData.custom_variable},on:{add:t.handleAdd,remove:t.handleRemove}})],1)]):t._e(),e("el-form-item",{attrs:{label:"跳转链接："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入模版跳转链接，可携带参数"},model:{value:t.formData.wechat_link,callback:function(e){t.$set(t.formData,"wechat_link",e)},expression:"formData.wechat_link"}})],1),e("el-form-item",{attrs:{label:"跳转小程序：",prop:"wechat_to_routine"}},[e("el-radio-group",{model:{value:t.formData.wechat_to_routine,callback:function(e){t.$set(t.formData,"wechat_to_routine",e)},expression:"formData.wechat_to_routine"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:0}},[t._v("关闭")])],1),e("div",{staticClass:"tips-info"},[t._v("\n                    开启之后，点击模版消息，跳转小程序对应的页面，需要小程序已经审核上线才可使用\n                  ")])],1),e("el-form-item",{attrs:{label:"状态：",prop:"is_wechat"}},[e("el-radio-group",{model:{value:t.formData.is_wechat,callback:function(e){t.$set(t.formData,"is_wechat",e)},expression:"formData.is_wechat"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1):e("div",[e("el-form-item",{attrs:{label:"短信模版ID："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"短信模版ID"},model:{value:t.formData.sms_id,callback:function(e){t.$set(t.formData,"sms_id",e)},expression:"formData.sms_id"}})],1),e("el-form-item",{attrs:{label:"通知内容："}},[e("div",{staticClass:"content"},[e("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",disabled:3!=t.formData.type_n,autosize:{minRows:5,maxRows:8},placeholder:"请输入通知内容"},model:{value:t.formData.sms_text,callback:function(e){t.$set(t.formData,"sms_text",e)},expression:"formData.sms_text"}}),3==t.formData.type_n?e("div",{staticClass:"value-list"},[e("el-popover",{attrs:{placement:"right",width:"200",trigger:"click"}},[e("div",{staticClass:"variable"},t._l(t.formData.custom_variable,(function(a,s){return e("div",{key:s,staticClass:"item",on:{click:function(e){return t.changeValue(a.value)}}},[t._v("\n                            "+t._s(a.label)+"\n                          ")])})),0),e("i",{staticClass:"el-icon-link",attrs:{slot:"reference"},slot:"reference"})])],1):t._e()],1),e("div",{staticClass:"tips-info"},[t._v("\n                    可点击右下角图标,插入自定义变量\n                  ")])]),e("el-form-item",{attrs:{label:"状态：",prop:"is_sms"}},[e("el-radio-group",{model:{value:t.formData.is_sms,callback:function(e){t.$set(t.formData,"is_sms",e)},expression:"formData.is_sms"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formData")}}},[t._v("提交")])],1)],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,"7803ca98",null);e.default=a.exports},ef0d:function(t,e,a){"use strict";a("6401")}}]);