(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6d4d2a3c","chunk-8ccb56cc"],{"0436":function(t,e,a){"use strict";var i={name:"publicSearchFrom",props:{fromList:{type:Array},searchFrom:{type:Object},treeData:{type:Object},isExist:{type:Object}},data:function(){return{date:"全部",withdrawalTxt:"提现状态",paymentTxt:"提现方式"}},computed:{},mounted:function(){},methods:{changeTree:function(){}}};a("80ea"),a=a("2877"),a=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("el-form",{ref:"orderData",staticClass:"tabform",attrs:{"label-width":"85px","label-position":"right"}},[t._l(t.fromList,(function(a,i){return e("el-row",{key:i,attrs:{gutter:24}},[e("el-col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("el-form-item",{attrs:{label:a.title+"："}},[e("el-radio-group",{attrs:{type:"button"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},t._l(a.fromTxt,(function(i,n){return e("el-radio-button",{key:n,attrs:{label:i.text}},[t._v(t._s(i.text)+t._s(a.num))])})),1)],1)],1),a.custom?e("el-col",[e("el-form-item",{staticClass:"tab_data"},[e("el-date-picker",{staticStyle:{width:"200px"},attrs:{editable:!1,"value-format":"yyyy/MM/dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"}})],1)],1):t._e()],1)})),t.isExist.existOne?e("el-row",{attrs:{gutter:24}},[e("el-col",{staticClass:"mr",attrs:{span:"10"}},[e("el-form-item",{attrs:{label:t.searchFrom.title+"：",prop:"real_name","label-for":"real_name"}},[e("el-input",{attrs:{search:"","enter-button":"",placeholder:t.searchFrom.place,"element-id":"name"}})],1)],1),e("el-col",[e("el-button",{staticClass:"mr"},[t._v("导出")]),e("span",{staticClass:"Refresh"},[t._v("刷新")])],1)],1):t._e(),t.isExist.existTwo?e("el-row",{staticClass:"withdrawal",attrs:{gutter:24}},[e("el-col",{staticClass:"item",attrs:{span:"2.5"}},[e("TreeSelect",{staticClass:"perW160",attrs:{data:t.treeData.withdrawal},on:{change:t.changeTree},model:{value:t.withdrawalTxt,callback:function(e){t.withdrawalTxt=e},expression:"withdrawalTxt"}})],1),e("el-col",{staticClass:"item",attrs:{span:"2.5"}},[e("TreeSelect",{staticClass:"perW160",attrs:{data:t.treeData.payment},on:{change:t.changeTree},model:{value:t.paymentTxt,callback:function(e){t.paymentTxt=e},expression:"paymentTxt"}})],1),e("el-col",{staticClass:"item",attrs:{span:6}},[e("el-input",{attrs:{search:"","enter-button":"",placeholder:"微信名称、姓名、支付宝账号、银行卡号","element-id":"name"}})],1)],1):t._e()],2)],1)}),[],!1,null,"0bad4f21",null);e.a=a.exports},1698:function(t,e,a){"use strict";a.d(e,"g",(function(){return n})),a.d(e,"f",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"h",(function(){return o})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return d}));var i=a("6b6c");function n(t){return Object(i.a)({url:"agent/level",method:"get",params:t})}function r(t,e){return Object(i.a)({url:e,method:"get",params:t})}function s(t,e){return Object(i.a)({url:e,method:"get",params:t})}function o(t){return Object(i.a)({url:t,method:"PUT"})}function l(t){return Object(i.a)({url:t,method:"PUT"})}function c(t){return Object(i.a)({url:"agent/level_task",method:"get",params:t})}function u(t,e){return Object(i.a)({url:e,method:"get",params:t})}function d(t,e){return Object(i.a)({url:e,method:"get",params:t})}},"220b":function(t,e,a){"use strict";a("94b8")},"2c3e":function(t,e,a){"use strict";var i=a("83ab"),n=a("9f7f").MISSED_STICKY,r=a("c6b6"),s=a("edd0"),o=a("69f3").get,l=RegExp.prototype,c=TypeError;i&&n&&s(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===r(this))return!!o(this).sticky;throw new c("Incompatible receiver, RegExp required")}}})},3061:function(t,e,a){"use strict";a.r(e),a("b0c0");var i=a("c7eb"),n=a("1da1"),r=a("5530"),s=(a("a15b"),a("a584")),o=a("0436"),l=a("2f62"),c=a("bbbc"),u=a("61f7"),d={name:"promotersList",filters:{formatDate:function(t){if(0!==t)return t=new Date(1e3*t),Object(u.a)(t,"yyyy-MM-dd hh:mm")}},data:function(){return{modals:!1,fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}],fromTxt2:[{text:"全部",val:""},{text:"一级推广人",val:1},{text:"二级推广人",val:2}],fromTxt3:[{text:"全部",val:""},{text:"一级推广人订单",val:1},{text:"二级推广人订单",val:2},{text:"事业部推广订单",val:3},{text:"代理商推广订单",val:4}]},formValidate:{limit:15,page:1,nickname:"",data:"",type:"",order_id:"",uid:0},loading:!1,tabList:[],total:0,timeVal:[],columns4:[],listTitle:""}},computed:Object(r.a)(Object(r.a)({},Object(l.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:{onCancel:function(){this.formValidate={limit:15,page:1,nickname:"",data:"",type:"",order_id:"",uid:0},this.timeVal=[]},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal?this.timeVal.join("-"):"",this.getList(this.rowsList,this.listTitle)},selectChange:function(t){this.formValidate.data=t,this.timeVal=[],this.getList(this.rowsList,this.listTitle)},getList:function(t,e){var a=this;this.listTitle=e,this.rowsList=t,this.loading=!0,e="",e="man"===this.listTitle?"agent/stair":"agent/stair/order";this.formValidate.uid=t.uid,Object(c.n)(e,this.formValidate).then(function(){var t=Object(n.a)(Object(i.a)().mark((function t(e){var n;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.data,a.tabList=n.list,a.total=n.count,a.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){a.loading=!1,a.tabList=[],a.$message.error(t.msg)}))},pageChange:function(){this.getList(this.rowsList,this.listTitle)},userSearchs:function(){this.formValidate.page=1,this.getList(this.rowsList,this.listTitle)}}},m=a("2877"),f=(d=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{visible:t.modals,title:"man"===t.listTitle?"统计推广人列表":"推广订单","close-on-click-modal":!1,width:"1000px"},on:{"update:visible":function(e){t.modals=e},closed:t.onCancel}},[e("div",{staticClass:"table_box"},[e("el-form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"时间选择："}},[e("el-date-picker",{staticStyle:{width:"250px"},attrs:{clearable:"",editable:!1,"value-format":"yyyy/MM/dd",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),e("el-form-item",{attrs:{label:"用户类型："}},[e("el-select",{staticClass:"form_content_width",attrs:{clearable:""},model:{value:t.formValidate.type,callback:function(e){t.$set(t.formValidate,"type",e)},expression:"formValidate.type"}},t._l("man"===t.listTitle?t.fromList.fromTxt2:t.fromList.fromTxt3,(function(t,a){return e("el-option",{key:a,attrs:{value:t.val,label:t.text}})})),1)],1),"man"===t.listTitle?e("el-form-item",{attrs:{label:"搜索："}},[e("el-input",{staticClass:"form_content_width",attrs:{clearable:"",placeholder:"请输入请姓名、电话、UID"},model:{value:t.formValidate.nickname,callback:function(e){t.$set(t.formValidate,"nickname",e)},expression:"formValidate.nickname"}})],1):t._e(),"order"===t.listTitle?e("el-form-item",{attrs:{label:"订单号："}},[e("el-input",{staticClass:"form_content_width",attrs:{clearable:"",placeholder:"请输入请订单号"},model:{value:t.formValidate.order_id,callback:function(e){t.$set(t.formValidate,"order_id",e)},expression:"formValidate.order_id"}})],1):t._e(),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.userSearchs}},[t._v("查询")])],1)],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"selection",attrs:{data:t.tabList,"empty-text":"暂无数据","highlight-current-row":"","max-height":"400"}},["man"===t.listTitle?[e("el-table-column",{attrs:{label:"UID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.uid))])]}}],null,!1,1905034046)}),e("el-table-column",{attrs:{label:"头像","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.avatar||a("7153"),expression:"scope.row.avatar ? scope.row.avatar : require('../../../assets/images/moren.jpg')"}]})])]}}],null,!1,422720524)}),e("el-table-column",{attrs:{label:"用户信息","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.nickname))])]}}],null,!1,611505262)}),e("el-table-column",{attrs:{label:"是否推广员","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.promoter_name))])]}}],null,!1,1147132146)}),e("el-table-column",{attrs:{label:"推广人数","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.spread_count))])]}}],null,!1,2766579147)}),e("el-table-column",{attrs:{label:"订单数","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.order_count))])]}}],null,!1,3370191188)}),e("el-table-column",{attrs:{label:"绑定时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(t._f("formatDate")(a.row.spread_time)))])]}}],null,!1,674438355)})]:[e("el-table-column",{attrs:{label:"订单ID","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.order_id))])]}}])}),e("el-table-column",{attrs:{label:"用户信息","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.user_info))])]}}])}),e("el-table-column",{attrs:{label:"时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row._add_time))])]}}])}),e("el-table-column",{attrs:{label:"返佣金额","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.brokerage_price||0))])]}}])}),1==t.rowsList.division_type?e("el-table-column",{attrs:{label:"事业部返佣金额","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.division_brokerage||0))])]}}],null,!1,4221635584)}):t._e(),2==t.rowsList.division_type?e("el-table-column",{attrs:{label:"代理商返佣金额","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.agent_brokerage||0))])]}}],null,!1,3273219216)}):t._e()]],2),e("div",{staticClass:"acea-row row-right page"},[t.total?e("pagination",{attrs:{total:t.total,page:t.formValidate.page,limit:t.formValidate.limit},on:{"update:page":function(e){return t.$set(t.formValidate,"page",e)},"update:limit":function(e){return t.$set(t.formValidate,"limit",e)},pagination:t.pageChange}}):t._e()],1)],1)],1)}),[],!1,null,"c10aa018",null).exports,a("8c03")),p=a("1698");s={name:"agentManage",components:{cardsData:s.a,searchFrom:o.a,promotersList:d,customerInfo:f.default},data:function(){return{customerShow:!1,promoterShow:!1,modals:!1,spinShow:!1,pickerOptions:this.$timeOptions,rows:{},formValidate:{nickname:"",data:"",page:1,limit:15},date:"all",total:0,cardLists:[],loading:!1,tableList:[],timeVal:[],code_src:"",code_xcx:"",code_h5:"",formInline:{uid:0,spread_uid:0,image:""}}},computed:Object(r.a)(Object(r.a)({},Object(l.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList(),this.getStatistics()},methods:{putSend:function(t){var e=this;this.$refs[t].validate((function(a){if(a){if(!e.formInline.spread_uid)return e.$message.error("请上传用户");Object(c.c)(e.formInline).then((function(a){e.promoterShow=!1,e.$message.success(a.msg),e.getList(),e.$refs[t].resetFields()})).catch((function(t){e.$message.error(t.msg)}))}}))},exports:function(){var t=this,e=this.formValidate;e={data:e.data,nickname:e.nickname};Object(c.p)(e).then((function(t){location.href=t.data[0]})).catch((function(e){t.$message.error(e.msg)}))},changeMenu:function(t,e,a){var i=this;switch(e){case"1":this.promoters(t,"order");break;case"2":this.spreadQR(t);break;case"3":this.editS(t);break;case"4":this.del_parent(t,"清除【 "+t.nickname+" 】的上级推广人",a);break;case"5":this.del_agent(t,"取消【 "+t.nickname+" 】的推广资格",a);break;case"6":this.$modalForm(Object(p.e)({uid:t.uid},"/agent/get_level_form")).then((function(){return i.getList()}))}},editS:function(t){this.promoterShow=!0,this.formInline.uid=t.uid},customer:function(){this.customerShow=!0},imageObject:function(t){this.customerShow=!1,this.formInline.spread_uid=t.uid,this.formInline.image=t.image},del_parent:function(t,e,a){var i=this;e={title:e,num:a,url:"agent/stair/delete_spread/".concat(t.uid),method:"PUT",ids:""};this.$modalSure(e).then((function(t){i.$message.success(t.msg),i.getList()})).catch((function(t){i.$message.error(t.msg)}))},del_agent:function(t,e,a){var i=this;e={title:e,num:a,url:"agent/stair/delete_system_spread/".concat(t.uid),method:"PUT",ids:""};this.$modalSure(e).then((function(t){i.$message.success(t.msg),i.getList()})).catch((function(t){i.$message.error(t.msg)}))},edit:function(t){this.promoterShow=!0,this.formInline.uid=t.uid},cancel:function(t){this.promoterShow=!1,this.$refs[t].resetFields()},promoters:function(t,e){this.$refs.promotersLists.modals=!0,this.$refs.promotersLists.getList(t,e)},getStatistics:function(){var t=this,e={nickname:this.formValidate.nickname,data:this.formValidate.data};Object(c.o)(e).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.cardLists=n.res;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$message.error(e.msg)}))},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal?this.timeVal.join("-"):"",this.formValidate.page=1,t[0]||(this.formValidate.data=""),this.getList(),this.getStatistics()},selectChange:function(t){this.formValidate.page=1,this.formValidate.data=t,this.timeVal=[],this.getList(),this.getStatistics()},getList:function(){var t=this;this.loading=!0,Object(c.b)(this.formValidate).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.tableList=n.list,t.total=a.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))},userSearchs:function(){this.formValidate.page=1,this.getList(),this.getStatistics()},spreadQR:function(t){this.modals=!0,this.rows=t,this.getWeChat(),this.getXcx(),this.getH5()},getWeChat:function(){var t=this,e=(this.spinShow=!0,{uid:this.rows.uid,action:"wechant_code"});Object(c.h)(e).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.code_src=n.code_src,t.spinShow=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$message.error(e.msg)}))},getXcx:function(){var t=this,e=(this.spinShow=!0,{uid:this.rows.uid});Object(c.j)(e).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.code_xcx=n.code_src,t.spinShow=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$message.error(e.msg)}))},getH5:function(){var t=this,e=(this.spinShow=!0,{uid:this.rows.uid});Object(c.i)(e).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.code_h5=n.code_src,t.spinShow=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$message.error(e.msg)}))}}},a("59b9"),o=Object(m.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticClass:"ivu-mb-16",attrs:{bordered:!1,shadow:"never","body-style":{padding:0}}},[e("div",{staticClass:"padding-add"},[e("el-form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"时间选择："}},[e("el-date-picker",{staticClass:"mr20",staticStyle:{width:"250px"},attrs:{clearable:"",type:"daterange",editable:!1,format:"yyyy/MM/dd","value-format":"yyyy/MM/dd","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),e("el-form-item",{attrs:{label:"搜索：","label-for":"status"}},[e("el-input",{staticClass:"form_content_width",attrs:{clearable:"",placeholder:"请输入姓名、电话、UID"},model:{value:t.formValidate.nickname,callback:function(e){t.$set(t.formValidate,"nickname",e)},expression:"formValidate.nickname"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.userSearchs}},[t._v("查询")])],1)],1)],1)]),0<=t.cardLists.length?e("cards-data",{attrs:{cardLists:t.cardLists}}):t._e(),e("el-card",{attrs:{bordered:!1,shadow:"never"}},[e("el-button",{directives:[{name:"auth",rawName:"v-auth",value:["export-userAgent"],expression:"['export-userAgent']"}],staticClass:"export",on:{click:t.exports}},[t._v("导出")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"selection",staticClass:"mt14",attrs:{data:t.tableList,"empty-text":"暂无数据","highlight-current-row":""}},[e("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.uid))])]}}])}),e("el-table-column",{attrs:{label:"商品图片","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.headimgurl||a("7153"),expression:"scope.row.headimgurl ? scope.row.headimgurl : require('../../assets/images/moren.jpg')"}]})])]}}])}),e("el-table-column",{attrs:{label:"用户信息",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"name"},[e("div",{staticClass:"item"},[t._v("昵称:"+t._s(a.row.nickname))]),e("div",{staticClass:"item"},[t._v("姓名:"+t._s(a.row.real_name))]),e("div",{staticClass:"item"},[t._v("电话:"+t._s(a.row.phone))])])]}}])}),e("el-table-column",{attrs:{label:"分销等级","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.agentLevel?a.row.agentLevel.name:"--"))])]}}])}),e("el-table-column",{attrs:{label:"推广用户数量","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.spread_count))])]}}])}),e("el-table-column",{attrs:{label:"推广订单数量","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.spread_order.order_count))])]}}])}),e("el-table-column",{attrs:{label:"推广订单金额","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.spread_order.order_price||"0.00"))])]}}])}),e("el-table-column",{attrs:{label:"佣金总金额","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.brokerage_money))])]}}])}),e("el-table-column",{attrs:{label:"已提现金额","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.extract_count_price))])]}}])}),e("el-table-column",{attrs:{label:"提现次数","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.extract_count_num))])]}}])}),e("el-table-column",{attrs:{label:"未提现金额","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.new_money))])]}}])}),e("el-table-column",{attrs:{label:"上级推广人","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.spread_name))])]}}])}),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{on:{click:function(e){return t.promoters(a.row,"man")}}},[t._v("推广人")]),e("el-divider",{attrs:{direction:"vertical"}}),[e("el-dropdown",{attrs:{size:"small",transfer:!0},on:{command:function(e){return t.changeMenu(a.row,e,a.$index)}}},[e("span",{staticClass:"el-dropdown-link"},[t._v("更多"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"1"}},[t._v("推广订单")]),e("el-dropdown-item",{attrs:{command:"2"}},[t._v("推广二维码")]),e("el-dropdown-item",{attrs:{command:"3"}},[t._v("修改上级推广人")]),a.row.spread_uid?e("el-dropdown-item",{attrs:{command:"4"}},[t._v("清除上级推广人")]):t._e(),e("el-dropdown-item",{attrs:{command:"5"}},[t._v("取消推广资格")]),e("el-dropdown-item",{attrs:{command:"6"}},[t._v("修改分销等级")])],1)],1)]]}}])})],1),e("div",{staticClass:"acea-row row-right page"},[t.total?e("pagination",{attrs:{total:t.total,page:t.formValidate.page,limit:t.formValidate.limit},on:{"update:page":function(e){return t.$set(t.formValidate,"page",e)},"update:limit":function(e){return t.$set(t.formValidate,"limit",e)},pagination:t.getList}}):t._e()],1)],1),e("promoters-list",{ref:"promotersLists"}),e("el-dialog",{attrs:{visible:t.modals,title:"推广二维码","close-on-click-modal":!1,width:"540px"},on:{"update:visible":function(e){t.modals=e}}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.spinShow,expression:"spinShow"}],staticClass:"acea-row row-around"},[e("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[t.code_src?e("div",{staticClass:"QRpic"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.code_src,expression:"code_src"}]})]):t._e(),e("span",{staticClass:"QRpic_sp1 mt10",on:{click:t.getWeChat}},[t._v("公众号推广二维码")])]),e("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[t.code_xcx?e("div",{staticClass:"QRpic"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.code_xcx,expression:"code_xcx"}]})]):t._e(),e("span",{staticClass:"QRpic_sp2 mt10",on:{click:t.getXcx}},[t._v("小程序推广二维码")])]),e("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[t.code_h5?e("div",{staticClass:"QRpic"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.code_h5,expression:"code_h5"}]})]):t._e(),e("span",{staticClass:"QRpic_sp2 mt10",on:{click:t.getH5}},[t._v("H5推广二维码")])])])]),e("el-dialog",{attrs:{visible:t.promoterShow,title:"修改推广人",width:"540px","show-close":!0},on:{"update:visible":function(e){t.promoterShow=e}}},[e("el-form",{ref:"formInline",attrs:{model:t.formInline,"label-width":"100px"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"用户头像：",prop:"image"}},[e("div",{staticClass:"picBox",on:{click:t.customer}},[t.formInline.image?e("div",{staticClass:"pictrue"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formInline.image,expression:"formInline.image"}]})]):e("div",{staticClass:"upLoad acea-row row-center-wrapper"},[e("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"24px"}})])])])],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){return t.cancel("formInline")}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.putSend("formInline")}}},[t._v("提交")])],1)],1),e("el-dialog",{attrs:{visible:t.customerShow,title:"请选择商城用户","show-close":!0,width:"1000px"},on:{"update:visible":function(e){t.customerShow=e}}},[t.customerShow?e("customerInfo",{on:{imageObject:t.imageObject}}):t._e()],1)],1)}),[],!1,null,"461cdd99",null);e.default=o.exports},"34ce":function(t,e,a){},"3fa8":function(t,e,a){},"4d63":function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),r=a("e330"),s=a("94ca"),o=a("7156"),l=a("9112"),c=a("7c73"),u=a("241c").f,d=a("3a9b"),m=a("44e7"),f=a("577e"),p=a("90d8"),h=a("9f7f"),g=a("aeb0"),b=a("cb2d"),v=a("d039"),w=a("1a2d"),_=a("69f3").enforce,x=a("2626"),y=a("b622"),k=a("fce3"),S=a("107c"),O=y("match"),j=n.RegExp,V=j.prototype,C=n.SyntaxError,L=r(V.exec),T=r("".charAt),$=r("".replace),z=r("".indexOf),R=r("".slice),I=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,E=/a/g,M=/a/g,D=(a=new j(E)!==E,h.MISSED_STICKY),N=h.UNSUPPORTED_Y;y=i&&(!a||D||k||S||v((function(){return M[O]=!1,j(E)!==E||j(M)===M||"/a/i"!==String(j(E,"i"))})));if(s("RegExp",y)){for(var P=function(t,e){var a,i,n=d(V,this),r=m(t),s=void 0===e,u=[],h=t;if(!n&&r&&s&&t.constructor===P)return t;if((r||d(V,t))&&(t=t.source,s)&&(e=p(h)),t=void 0===t?"":f(t),e=void 0===e?"":f(e),h=t,r=e=k&&"dotAll"in E&&(a=!!e&&-1<z(e,"s"))?$(e,/s/g,""):e,D&&"sticky"in E&&(i=!!e&&-1<z(e,"y"))&&N&&(e=$(e,/y/g,"")),S&&(t=(s=function(t){for(var e,a=t.length,i=0,n="",r=[],s=c(null),o=!1,l=!1,u=0,d="";i<=a;i++){if("\\"===(e=T(t,i)))e+=T(t,++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:L(I,R(t,i+1))&&(i+=2,l=!0),n+=e,u++;continue;case">"===e&&l:if(""===d||w(s,d))throw new C("Invalid capture group name");s[d]=!0,l=!(r[r.length]=[d,u]),d="";continue}l?d+=e:n+=e}return[n,r]}(t))[0],u=s[1]),s=o(j(t,e),n?this:V,P),(a||i||u.length)&&(e=_(s),a&&(e.dotAll=!0,e.raw=P(function(t){for(var e,a=t.length,i=0,n="",r=!1;i<=a;i++)"\\"===(e=T(t,i))?n+=e+T(t,++i):r||"."!==e?("["===e?r=!0:"]"===e&&(r=!1),n+=e):n+="[\\s\\S]";return n}(t),r)),i&&(e.sticky=!0),u.length)&&(e.groups=u),t!==h)try{l(s,"source",""===h?"(?:)":h)}catch(t){}return s},U=u(j),F=0;U.length>F;)g(P,j,U[F++]);(V.constructor=P).prototype=V,b(n,"RegExp",P,{constructor:!0})}x("RegExp")},"59b9":function(t,e,a){"use strict";a("fd6f")},"61f7":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return c}));var i=a("ade3"),n=a("5530");function r(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var a,i,n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(a in n)new RegExp("(".concat(a,")")).test(e)&&(i=n[a]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?i:("00"+i).substr(i.length)));return e}a("ac1f"),a("00b4"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("498a"),a("d3b7"),a("13d5"),a("b64b"),a("99af");var s={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function o(t,e){t.message=function(t){return e.replace("%s",t||"")}}function l(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)({required:!0,message:t,type:"string"},e)}function c(t){return u.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}o(l,"请输入%s"),o(c,"%s格式不正确");var u=Object.keys(s).reduce((function(t,e){return t[e]=function(t){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},s="range"===e?{min:t[0],max:t[1]}:Object(i.a)({},e,t);return Object(n.a)(Object(n.a)({message:a.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},s),r)},o(t[e],s[e]),t}),{})},"80ea":function(t,e,a){"use strict";a("3fa8")},"8c03":function(t,e,a){"use strict";a.r(e);var i=a("c7eb"),n=a("1da1"),r=(a("a15b"),a("d81d"),a("c73d"),a("90e7")),s={name:"index",data:function(){return{formValidate:{page:1,limit:15,data:"",nickname:""},tableList2:[],timeVal:[],fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},currentid:0,productRow:{},loading2:!1,total2:0}},created:function(){},mounted:function(){this.getListService()},methods:{onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal?this.timeVal.join("-"):"",this.getListService()},selectChange:function(t){this.formValidate.data=t,this.timeVal=[],this.getListService()},getListService:function(){var t=this;this.loading2=!0,Object(r.G)(this.formValidate).then(function(){var e=Object(n.a)(Object(i.a)().mark((function e(a){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.data,t.tableList2=n.list,t.total2=n.count,t.tableList2.map((function(t){t._isChecked=!1})),t.loading2=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading2=!1,t.$message.error(e.msg)}))},userSearchs:function(){this.formValidate.page=1,this.getListService()},currentidRadio:function(t){self.currentid=t.uid,this.productRow=t,this.productRow.uid?"image"===this.$route.query.fodder?(t={image:this.productRow.headimgurl,uid:this.productRow.uid},form_create_helper.set("image",t),form_create_helper.close("image")):this.$emit("imageObject",{image:this.productRow.headimgurl,uid:this.productRow.uid}):this.$message.warning("请先选择商品")}}};a("220b"),a=a("2877"),a=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"customer"},[e("el-form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":"80px",inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"搜索用户："}},[e("el-input",{staticClass:"form_content_width",attrs:{clearable:"",placeholder:"请输入用户UID、昵称或手机号"},model:{value:t.formValidate.nickname,callback:function(e){t.$set(t.formValidate,"nickname",e)},expression:"formValidate.nickname"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.userSearchs}},[t._v("查询")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],ref:"selection",staticClass:"mt15",attrs:{"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",data:t.tableList2,height:"450"}},[e("el-table-column",{attrs:{width:"50"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-radio",{attrs:{disabled:!!a.row.is_del,label:a.row.uid},on:{input:function(){return t.currentidRadio(a.row)}},model:{value:t.currentid,callback:function(e){t.currentid=e},expression:"currentid"}},[t._v(" ")])]}}])}),e("el-table-column",{attrs:{label:"UID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.uid))])]}}])}),e("el-table-column",{attrs:{label:"用户头像","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.headimgurl,expression:"scope.row.headimgurl"}]})])]}}])}),e("el-table-column",{attrs:{label:"用户昵称","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.nickname))]),e("div",{staticStyle:{color:"red"}},[t._v(t._s(a.row.is_del?"用户已注销":""))])]}}])}),e("el-table-column",{attrs:{label:"手机号","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.phone))])]}}])}),e("el-table-column",{attrs:{label:"是否关注公众号","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{domProps:{textContent:t._s(1===a.row.subscribe?"关注":"未关注")}})]}}])}),e("el-table-column",{attrs:{label:"注册时间","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.add_time))])]}}])})],1),e("div",{staticClass:"acea-row row-right page"},[t.total2?e("pagination",{attrs:{total:t.total2,page:t.formValidate.page,limit:t.formValidate.limit},on:{"update:page":function(e){return t.$set(t.formValidate,"page",e)},"update:limit":function(e){return t.$set(t.formValidate,"limit",e)},pagination:t.getListService}}):t._e()],1)],1)}),[],!1,null,"986dc27e",null);e.default=a.exports},"94b8":function(t,e,a){},a584:function(t,e,a){"use strict";a("b0c0");var i={name:"cards",data:function(){return{colsize:{xl:4,lg:8,md:12}}},props:{cardLists:Array},methods:{},created:function(){switch(this.cardLists.length){case 1:this.colsize.xl=24,this.colsize.lg=24,this.colsize.md=24;break;case 2:this.colsize.xl=12,this.colsize.lg=12,this.colsize.md=12;break;case 3:this.colsize.xl=8,this.colsize.lg=8,this.colsize.md=8;break;case 4:this.colsize.xl=6,this.colsize.lg=6,this.colsize.md=12;break;case 5:this.colsize.xl=8,this.colsize.lg=8,this.colsize.md=12;break;default:this.colsize.xl=4,this.colsize.lg=8,this.colsize.md=12}4==this.cardLists.length?this.colsize.lg=6:4==this.cardLists.length&&(this.colsize.lg=8)}};a("dc1f"),a=a("2877"),a=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("el-row",{staticClass:"ivu-mt",attrs:{align:"middle",gutter:24}},t._l(t.cardLists,(function(a,i){return e("el-col",{key:i,staticClass:"ivu-mb",attrs:{xl:a.col||t.colsize.xl,lg:t.colsize.lg,md:t.colsize.md,sm:24,xs:24}},[e("el-card",{staticClass:"card_cent",attrs:{shadow:"never"}},[e("div",{staticClass:"card_box"},[e("div",{staticClass:"card_box_cir",class:{one:i%5==0,two:i%5==1,three:i%5==2,four:i%5==3,five:i%5==4}},[e("div",{staticClass:"card_box_cir1",class:{one1:i%5==0,two1:i%5==1,three1:i%5==2,four1:i%5==3,five1:i%5==4}},[e("span",{staticClass:"iconfont",class:a.className})])]),e("div",{staticClass:"card_box_txt"},[e("span",{staticClass:"sp1",domProps:{textContent:t._s(a.count||0)}}),e("span",{staticClass:"sp2",domProps:{textContent:t._s(a.name)}})])])])],1)})),1)],1)}),[],!1,null,"50f2a66a",null);e.a=a.exports},bbbc:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"o",(function(){return s})),a.d(e,"n",(function(){return o})),a.d(e,"h",(function(){return l})),a.d(e,"j",(function(){return c})),a.d(e,"i",(function(){return u})),a.d(e,"p",(function(){return d})),a.d(e,"l",(function(){return m})),a.d(e,"f",(function(){return f})),a.d(e,"a",(function(){return p})),a.d(e,"e",(function(){return h})),a.d(e,"k",(function(){return g})),a.d(e,"d",(function(){return b})),a.d(e,"g",(function(){return v})),a.d(e,"m",(function(){return w})),a("99af");var i=a("6b6c");function n(t){return Object(i.a)({url:"agent/index",method:"get",params:t})}function r(t){return Object(i.a)({url:"agent/spread",method:"PUT",data:t})}function s(t){return Object(i.a)({url:"agent/statistics",method:"get",params:t})}function o(t,e){return Object(i.a)({url:t,method:"get",params:e})}function l(t){return Object(i.a)({url:"agent/look_code",method:"get",params:t})}function c(t){return Object(i.a)({url:"agent/look_xcx_code",method:"get",params:t})}function u(t){return Object(i.a)({url:"agent/look_h5_code",method:"get",params:t})}function d(t){return Object(i.a)({url:"export/userAgent",method:"get",params:t})}function m(t){return Object(i.a)({url:"agent/division/list",method:"get",params:t})}function f(t){return Object(i.a)({url:"agent/division/agent_apply/list",method:"get",params:t})}function p(t){return Object(i.a)({url:"agent/division/agent/create/".concat(t),method:"get"})}function h(t,e){return Object(i.a)({url:"agent/division/examine_apply/".concat(t,"/").concat(e),method:"get"})}function g(t){return Object(i.a)({url:"agent/division/create/".concat(t),method:"get"})}function b(t){return Object(i.a)({url:"agent/division/down_list",method:"get",params:t})}function v(t){return Object(i.a)({url:"agent/division/set_status/".concat(t.status,"/").concat(t.id),method:"put"})}function w(t){return Object(i.a)({url:"agent/division/staff/create/".concat(t),method:"get"})}},c607:function(t,e,a){"use strict";var i=a("83ab"),n=a("fce3"),r=a("c6b6"),s=a("edd0"),o=a("69f3").get,l=RegExp.prototype,c=TypeError;i&&n&&s(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===r(this))return!!o(this).dotAll;throw new c("Incompatible receiver, RegExp required")}}})},dc1f:function(t,e,a){"use strict";a("34ce")},fd6f:function(t,e,a){}}]);