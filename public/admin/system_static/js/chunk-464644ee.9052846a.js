(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-464644ee"],{"33c3":function(t,e,a){},"845a":function(t,e,a){"use strict";a("33c3")},b90a:function(t,e,a){"use strict";a.r(e);var i=a("c7eb"),n=a("1da1"),o=a("5530"),r=(a("d3b7"),a("14d9"),a("d81d"),a("a15b"),a("a434"),a("2f62")),s=a("c276"),l=a("90e7");o={name:"index",filters:{typeFilter:function(t){return{wechat:"微信用户",routine:"小程序用户"}[t]}},computed:Object(o.a)(Object(o.a)(Object(o.a)({},Object(r.d)("media",["isMobile"])),Object(r.d)("userLevel",["categoryId"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{isChat:!0,formValidate3:{page:1,limit:15},total3:0,loading3:!1,modals3:!1,tableList3:[],formValidate5:{page:1,limit:15,uid:0,to_uid:0,id:0},total5:0,loading5:!1,tableList5:[],FromData:null,formValidate:{page:1,limit:15,data:"",type:"",nickname:""},tableList2:[],modals:!1,total:0,tableFrom:{page:1,limit:15},timeVal:[],fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},loading:!1,tableList:[],loading2:!1,total2:0,addFrom:{uids:[]},selections:[],rows:{},rowRecord:{},eidtLoading:!1}},created:function(){this.getList()},methods:{goChat:function(t){var e=this;Object(l.D)(t.id).then((function(t){var a,i="";t.data.token&&(a=e.getExpiresTime(t.data.exp_time),Object(s.o)("kefu_token",t.data.token,a),Object(s.o)("kefu_uuid",t.data.kefuInfo.uid,a),Object(s.o)("kefu_expires_time",t.data.exp_time,a),Object(s.o)("kefuInfo",t.data.kefuInfo,a),i=e.$store.state.media.isMobile?window.location.protocol+"//"+window.location.host+"/kefu/mobile_list":window.location.protocol+"//"+window.location.host+"/kefu/pc_list",window.open(i,"_blank"))})).catch((function(t){e.$message.error(t.msg)}))},getExpiresTime:function(t){var e=Math.round(new Date/1e3);return parseFloat(parseFloat(parseFloat((t-e)/60)/60)/24)},cancel:function(){this.formValidate={page:1,limit:10,data:"",type:"",nickname:""}},handleReachBottom:function(){var t=this;return new Promise((function(e){t.formValidate.page=t.formValidate.page+1,setTimeout((function(){Object(l.G)(t.formValidate).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n,o;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0<(n=a.data).list.length)for(o=0;o<n.list.length;o++)t.tableList2.push(n.list[o]);t.total2=n.count,t.loading2=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading2=!1,t.$message.error(e.msg)})),e()}),2e3)}))},look:function(t){this.isChat=!1,this.rowRecord=t,this.getChatlist()},getChatlist:function(){var t=this;this.loading5=!0,this.formValidate5.uid=this.rows.uid,this.formValidate5.to_uid=this.rowRecord.uid,this.formValidate5.id=this.rows.id,Object(l.y)(this.formValidate5).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.tableList5=n.list,t.total5=n.count,t.loading5=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading5=!1,t.$message.error(e.msg)}))},submitFail:function(){this.getList()},record:function(t){this.rows=t,this.modals3=!0,this.isChat=!0,this.getListRecord()},getListRecord:function(){var t=this;this.loading3=!0,Object(l.E)(this.formValidate3,this.rows.id).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.tableList3=n.list||[],t.total3=n.count,t.loading3=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading3=!1,t.$message.error(e.msg)}))},edit:function(t){var e=this;this.eidtLoading||(this.eidtLoading=!0,this.$modalForm(Object(l.z)(t.id)).then((function(){e.getList(),e.eidtLoading=!1})).catch((function(){e.eidtLoading=!1})))},add:function(){var t=this;this.$modalForm(Object(l.F)()).then((function(){return t.getList()}))},onSelectTab:function(t){this.selections=t;var e=[];this.selections.map((function(t){e.push(t.uid)})),this.addFrom.uids=e},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal?this.timeVal.join("-"):"",this.formValidate.page=1,this.getListService()},selectChange:function(t){this.formValidate.data=t,this.timeVal=[],this.formValidate.page=1,this.getListService()},getListService:function(){var t=this;this.loading2=(!0)(this.formValidate).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.tableList2=n.list,t.total2=n.count,t.tableList2.map((function(t){t._isChecked=!1})),t.loading2=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){tkefucreateApihis.loading2=!1,t.$message.error(e.msg)}))},pageChange2:function(t){this.formValidate.page=t,this.getListService(),this.addFrom.uids=[]},userSearchs:function(){this.formValidate.page=1,this.getListService()},del:function(t,e,a){var i=this;e={title:e,num:a,url:"app/wechat/kefu/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){i.$message.success(t.msg),i.tableList.splice(a,1)})).catch((function(t){i.$message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(l.C)(this.tableFrom).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.tableList=n.list,t.total=a.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))},onchangeIsShow:function(t){var e=this;t={id:t.id,status:t.status};Object(l.H)(t).then(function(){var t=Object(n.a)(Object(i.a)().mark((function t(a){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$message.success(a.msg),e.getList();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.msg)}))},putRemark:function(){var t=this;if(0===this.addFrom.uids.length)return this.$message.warning("请选择要添加的客服");Object(l.x)(this.addFrom).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$message.success(a.msg),t.modals=!1,t.getList();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))}}},a("845a"),r=a("2877"),a=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[e("el-row",{staticClass:"mb20"},[e("el-col",{attrs:{span:24}},[e("el-button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-store_service-add"],expression:"['setting-store_service-add']"}],staticClass:"mr10",attrs:{type:"primary"},on:{click:t.add}},[t._v("添加客服")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableList,"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[e("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.id))])]}}])}),e("el-table-column",{attrs:{label:"客服头像","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.avatar,expression:"scope.row.avatar"}]})])]}}])}),e("el-table-column",{attrs:{label:"客服名称","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.wx_name))])]}}])}),e("el-table-column",{attrs:{label:"客服状态","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{staticClass:"defineSwitch",attrs:{"active-value":1,"inactive-value":0,value:a.row.status,size:"large","active-text":"开启","inactive-text":"关闭"},on:{change:function(e){return t.onchangeIsShow(a.row)}},model:{value:a.row.status,callback:function(e){t.$set(a.row,"status",e)},expression:"scope.row.status"}})]}}])}),e("el-table-column",{attrs:{label:"添加时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.add_time))])]}}])}),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{on:{click:function(e){return t.edit(a.row)}}},[t._v("编辑")]),e("el-divider",{attrs:{direction:"vertical"}}),e("a",{on:{click:function(e){return t.del(a.row,"删除客服",a.$index)}}},[t._v("删除")]),a.row.status?e("el-divider",{attrs:{direction:"vertical"}}):t._e(),a.row.status?e("a",{on:{click:function(e){return t.goChat(a.row)}}},[t._v("进入工作台")]):t._e()]}}])})],1),e("div",{staticClass:"acea-row row-right page"},[t.total?e("pagination",{attrs:{total:t.total,page:t.tableFrom.page,limit:t.tableFrom.limit},on:{"update:page":function(e){return t.$set(t.tableFrom,"page",e)},"update:limit":function(e){return t.$set(t.tableFrom,"limit",e)},pagination:t.getList}}):t._e()],1)],1),e("el-dialog",{attrs:{visible:t.modals3,title:"聊天记录",width:"720px"},on:{"update:visible":function(e){t.modals3=e}}},[t.isChat?e("div",{staticClass:"modelBox"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading3,expression:"loading3"}],attrs:{"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",data:t.tableList3}},[e("el-table-column",{attrs:{label:"用户名称",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.nickname))])]}}],null,!1,611505262)}),e("el-table-column",{attrs:{label:"客服头像","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.headimgurl,expression:"scope.row.headimgurl"}]})])]}}],null,!1,3422487116)}),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{on:{click:function(e){return t.look(a.row)}}},[t._v("查看对话")])]}}],null,!1,1528424256)})],1),e("div",{staticClass:"acea-row row-right page"},[t.total3?e("pagination",{attrs:{total:t.total3,page:t.formValidate3.page,limit:t.formValidate3.limit},on:{"update:page":function(e){return t.$set(t.formValidate3,"page",e)},"update:limit":function(e){return t.$set(t.formValidate3,"limit",e)},pagination:t.getListRecord}}):t._e()],1)],1):t._e(),t.isChat?t._e():e("div",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isChat=!0}}},[t._v("返回聊天记录")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading5,expression:"loading5"}],staticClass:"mt14",attrs:{"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",data:t.tableList5}},[e("el-table-column",{attrs:{label:"用户名称","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.nickname))])]}}],null,!1,611505262)}),e("el-table-column",{attrs:{label:"用户头像","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.avatar,expression:"scope.row.avatar"}]})])]}}],null,!1,3475710540)}),e("el-table-column",{attrs:{label:"发送消息","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.msn))])]}}],null,!1,2342793974)}),e("el-table-column",{attrs:{label:"发送时间","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.add_time))])]}}],null,!1,1404972237)})],1),e("div",{staticClass:"acea-row row-right page"},[t.total5?e("pagination",{attrs:{total:t.total5,page:t.formValidate5.page,limit:t.formValidate5.limit},on:{"update:page":function(e){return t.$set(t.formValidate5,"page",e)},"update:limit":function(e){return t.$set(t.formValidate5,"limit",e)},pagination:t.getChatlist}}):t._e()],1)],1)])],1)}),[],!1,null,"29b81348",null);e.default=a.exports}}]);