(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_seckill-index"],{"3b71":function(t,e,i){"use strict";i.r(e);var a=i("8b3c"),n=i("7b1b");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("77b4");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5c721f6d",null,!1,a["a"],void 0);e["default"]=r.exports},4647:function(t,e,i){"use strict";i.r(e);var a=i("dcf8"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"67a2":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.colorStyle},[a("v-uni-view",{staticClass:"flash-sale"},[a("v-uni-view",{staticClass:"saleBox"}),t.timeList.length>0?a("v-uni-view",{staticClass:"header"},[a("v-uni-image",{attrs:{src:t.timeList[t.active].slide}})],1):t._e(),a("v-uni-view",{staticClass:"seckillList acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"priceTag"},[a("v-uni-image",{attrs:{src:i("c1bb")}})],1),a("v-uni-view",{staticClass:"timeLsit"},[a("v-uni-scroll-view",{staticClass:"scroll-view_x",staticStyle:{width:"auto",overflow:"hidden",height:"106rpx"},attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft,"scroll-into-view":t.intoindex}},[t._l(t.timeList,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"item",class:t.active==i?"on":"",attrs:{id:"sort"+i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.settimeList(e,i)}}},[a("v-uni-view",{staticClass:"time"},[t._v(t._s(e.time))]),a("v-uni-view",{staticClass:"state"},[t._v(t._s(t.$t(e.state)))])],1)]}))],2)],1)],1),a("v-uni-view",{staticClass:"list"},[t._l(t.seckillList,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(e)}}},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:e.image}})],1),a("v-uni-view",{staticClass:"text acea-row row-column-around"},[a("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"money font-color"},[t._v(t._s(t.$t("￥"))),a("v-uni-text",{staticClass:"num font-color"},[t._v(t._s(e.price))]),a("v-uni-text",{staticClass:"y_money"},[t._v(t._s(t.$t("￥"))+t._s(e.ot_price))])],1),a("v-uni-view",{staticClass:"limit"},[t._v(t._s(t.$t("限量"))),a("v-uni-text",{staticClass:"limitPrice"},[t._v(t._s(e.quota_show)+t._s(t.$t(e.unit_name)||""))])],1),a("v-uni-view",{staticClass:"progress"},[a("v-uni-view",{staticClass:"bg-reds",style:"width:"+e.percent+"%;"}),a("v-uni-view",{staticClass:"piece"},[t._v(t._s(t.$t("已抢"))+t._s(e.percent)+"%")])],1)],1),1==t.status?a("v-uni-view",{staticClass:"grab bg-color"},[t._v(t._s(t.$t("抢购中")))]):2==t.status?a("v-uni-view",{staticClass:"grab bg-color"},[t._v(t._s(t.$t("未开始")))]):a("v-uni-view",{staticClass:"grab bg-color-hui"},[t._v(t._s(t.$t("已结束")))])],1)]}))],2)],1),0!=t.seckillList.length||1==t.page&&0!=t.active?t._e():a("v-uni-view",{staticClass:"noCommodity"},[a("v-uni-view",{staticClass:"emptyBox"},[a("v-uni-image",{attrs:{src:t.imgHost+"/statics/images/no-thing.png"}}),a("v-uni-view",{staticClass:"tips"},[t._v(t._s(t.$t("暂无商品，去看点别的吧")))])],1)],1),a("home")],1)},n=[]},"6cbb":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),o=a(i("19b6")),s=i("00a0"),r={name:"Home",props:{},mixins:[o.default],data:function(){return{top:"545",imgHost:s.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=r},"77b4":function(t,e,i){"use strict";var a=i("efc4"),n=i.n(a);n.a},"7b1b":function(t,e,i){"use strict";i.r(e);var a=i("6cbb"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"84d8":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getBargainDetail=function(t,e){return n.default.get("bargain/detail/".concat(t,"?bargainUid=").concat(e))},e.getBargainList=function(t){return n.default.get("bargain/list",t,{noAuth:!0})},e.getBargainPoster=function(t){return n.default.post("bargain/poster",t)},e.getBargainPosterData=function(t){return n.default.get("bargain/poster_info/"+t)},e.getBargainUserCancel=function(t){return n.default.post("bargain/user/cancel",t)},e.getBargainUserList=function(t){return n.default.get("bargain/user/list",t)},e.getCombinationBannerList=function(t){return n.default.get("combination/banner_list",t,{noAuth:!0})},e.getCombinationDetail=function(t){return n.default.get("combination/detail/"+t)},e.getCombinationList=function(t){return n.default.get("combination/list",t,{noAuth:!0})},e.getCombinationPink=function(t){return n.default.get("combination/pink/"+t)},e.getCombinationPoster=function(t){return n.default.post("combination/poster",t)},e.getCombinationPosterData=function(t){return n.default.get("combination/poster_info/"+t)},e.getIntegralOrderList=function(t){return n.default.get("store_integral/order/list",t)},e.getIntegralProductDetail=function(t){return n.default.get("store_integral/detail/"+t,{},{noAuth:!0})},e.getLogisticsDetails=function(t){return n.default.get("store_integral/order/express/".concat(t))},e.getPink=function(t){return n.default.get("pink",t,{noAuth:!0})},e.getPresellList=function(t){return n.default.get("advance/list",t)},e.getSeckillDetail=function(t,e){return n.default.get("seckill/detail/"+t,e)},e.getSeckillIndexTime=function(){return n.default.get("seckill/index",{},{noAuth:!0})},e.getSeckillList=function(t,e){return n.default.get("seckill/list/"+t,e,{noAuth:!0})},e.getStoreIntegralList=function(t){return n.default.get("store_integral/list",t)},e.integralOrderConfirm=function(t){return n.default.post("store_integral/order/confirm",t)},e.integralOrderCreate=function(t){return n.default.post("store_integral/order/create",t)},e.integralOrderDetails=function(t){return n.default.get("store_integral/order/detail/".concat(t))},e.orderDel=function(t){return n.default.post("store_integral/order/del",t)},e.orderTake=function(t){return n.default.post("store_integral/order/take",t)},e.postBargainHelp=function(t){return n.default.post("bargain/help",t)},e.postBargainHelpCount=function(t){return n.default.post("bargain/help/count",t)},e.postBargainHelpList=function(t){return n.default.post("bargain/help/list",t)},e.postBargainHelpPrice=function(t){return n.default.post("bargain/help/price",t)},e.postBargainShare=function(t){return n.default.post("bargain/share",{bargainId:t})},e.postBargainStart=function(t){return n.default.post("bargain/start",{bargainId:t})},e.postBargainStartUser=function(t){return n.default.post("bargain/start/user",t)},e.postCombinationRemove=function(t){return n.default.post("combination/remove",t)},e.scombinationCode=function(t){return n.default.get("combination/code/"+t)},e.seckillCode=function(t,e){return n.default.get("seckill/code/"+t,e)},i("99af");var n=a(i("fb81"))},"8b3c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},n=[]},"8cb6":function(t,e,i){"use strict";var a=i("ebca"),n=i.n(a);n.a},"918e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-350c8ebc]{background-color:#f5f5f5!important}body.?%PAGE?%[data-v-350c8ebc]{background-color:#f5f5f5!important}.noCommodity[data-v-350c8ebc]{padding-bottom:%?30?%;padding:%?200?% 0}.noCommodity .emptyBox[data-v-350c8ebc]{text-align:center;padding-top:%?20?%}.noCommodity .emptyBox .tips[data-v-350c8ebc]{color:#aaa;font-size:%?26?%}.noCommodity .emptyBox uni-image[data-v-350c8ebc]{width:%?414?%;height:%?304?%}.flash-sale .header[data-v-350c8ebc]{width:%?710?%;height:%?300?%;margin:%?-215?% auto 0 auto;border-radius:%?20?%}.flash-sale .header uni-image[data-v-350c8ebc]{width:100%;height:100%;border-radius:%?20?%}.flash-sale .seckillList[data-v-350c8ebc]{padding:0 %?20?%}.flash-sale .seckillList .priceTag[data-v-350c8ebc]{width:%?75?%;height:%?70?%}.flash-sale .seckillList .priceTag uni-image[data-v-350c8ebc]{width:100%;height:100%}.flash-sale .timeLsit[data-v-350c8ebc]{width:%?610?%;white-space:nowrap;margin:%?10?% 0}.flash-sale .timeLsit .item[data-v-350c8ebc]{display:inline-block;font-size:%?20?%;color:#666;text-align:center;padding:%?11?% 0;box-sizing:border-box;height:%?96?%;margin-right:%?35?%}.flash-sale .timeLsit .item .time[data-v-350c8ebc]{width:%?120?%;font-size:%?36?%;font-weight:600;color:#333}.flash-sale .timeLsit .item.on .time[data-v-350c8ebc]{color:var(--view-theme)}.flash-sale .timeLsit .item.on .state[data-v-350c8ebc]{width:%?120?%;height:%?30?%;line-height:%?30?%;border-radius:%?15?%;background:var(--view-theme);color:#fff}.flash-sale .countDown[data-v-350c8ebc]{height:%?92?%;border-bottom:%?1?% solid #f0f0f0;margin-top:%?-14?%;font-size:%?28?%;color:#282828}.flash-sale .countDown .num[data-v-350c8ebc]{font-size:%?28?%;font-weight:700;background-color:#ffcfcb;padding:%?4?% %?7?%;border-radius:%?3?%}.flash-sale .countDown .text[data-v-350c8ebc]{font-size:%?28?%;color:#282828;margin-right:%?13?%}.flash-sale .list .item[data-v-350c8ebc]{height:%?230?%;position:relative;width:%?710?%;margin:0 auto %?20?% auto;background-color:#fff;border-radius:%?20?%;padding:0 %?25?%}.flash-sale .list .item .pictrue[data-v-350c8ebc]{width:%?180?%;height:%?180?%;border-radius:%?10?%}.flash-sale .list .item .pictrue uni-image[data-v-350c8ebc]{width:100%;height:100%;border-radius:%?10?%}.flash-sale .list .item .text[data-v-350c8ebc]{width:%?460?%;font-size:%?30?%;color:#333;height:%?200?%}.flash-sale .list .item .text .name[data-v-350c8ebc]{width:100%}.flash-sale .list .item .text .money[data-v-350c8ebc]{font-size:%?30?%}.flash-sale .list .item .text .money .num[data-v-350c8ebc]{font-size:%?40?%;font-weight:500;font-family:Guildford Pro}.flash-sale .list .item .text .money .y_money[data-v-350c8ebc]{font-size:%?24?%;color:#999;-webkit-text-decoration-line:line-through;text-decoration-line:line-through;margin-left:%?15?%}.flash-sale .list .item .text .limit[data-v-350c8ebc]{font-size:%?22?%;color:#999;margin-bottom:%?5?%}.flash-sale .list .item .text .limit .limitPrice[data-v-350c8ebc]{margin-left:%?10?%}.flash-sale .list .item .text .progress[data-v-350c8ebc]{overflow:hidden;background-color:#ffefef;width:%?260?%;border-radius:%?18?%;height:%?18?%;position:relative}.flash-sale .list .item .text .progress .bg-reds[data-v-350c8ebc]{width:0;height:100%;transition:width .6s ease;background:linear-gradient(90deg,#e93323,#ff8933)}.flash-sale .list .item .text .progress .piece[data-v-350c8ebc]{position:absolute;left:8%;-webkit-transform:translateY(-50%);transform:translateY(-50%);top:49%;font-size:%?16?%;color:#ffb9b9}.flash-sale .list .item .grab[data-v-350c8ebc]{font-size:%?28?%;color:#fff;width:%?150?%;height:%?54?%;border-radius:%?27?%;text-align:center;line-height:%?54?%;position:absolute;right:%?30?%;bottom:%?30?%;background:#bbb}.flash-sale .saleBox[data-v-350c8ebc]{width:100%;height:%?230?%;background:var(--view-theme);border-radius:0 0 %?50?% %?50?%}',""]),t.exports=e},a501:function(t,e,i){"use strict";i.r(e);var a=i("67a2"),n=i("4647");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8cb6");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"350c8ebc",null,!1,a["a"],void 0);e["default"]=r.exports},aae6:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-5c721f6d]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-5c721f6d]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-5c721f6d]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-5c721f6d]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important;opacity:.8;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.home .homeCon .iconfont[data-v-5c721f6d]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-5c721f6d]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-5c721f6d]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},c1bb:function(t,e,i){t.exports=i.p+"static/img/priceTag.42c0f06d.png"},dcf8:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af");var n=i("84d8"),o=a(i("3b71")),s=a(i("19b6")),r=i("00a0"),c={components:{home:o.default},mixins:[s.default],data:function(){return{imgHost:r.HTTP_REQUEST_URL,topImage:"",seckillList:[],timeList:[],active:5,scrollLeft:0,interval:0,status:1,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",page:1,limit:8,loading:!1,loadend:!1,pageloading:!1,intoindex:""}},onLoad:function(){this.getSeckillConfig()},methods:{getSeckillConfig:function(){var t=this;(0,n.getSeckillIndexTime)().then((function(e){t.topImage=e.data.lovely,t.timeList=e.data.seckillTime,t.active=e.data.seckillTimeIndex,t.$nextTick((function(){t.intoindex="sort"+e.data.seckillTimeIndex})),t.timeList.length&&(t.scrollLeft=100*(t.active-1.37),setTimeout((function(){t.loading=!0}),2e3),t.seckillList=[],t.page=1,t.status=t.timeList[t.active].status,t.getSeckillList())}))},getSeckillList:function(){var t=this,e={page:t.page,limit:t.limit};t.loadend||t.pageloading||(this.pageloading=!0,(0,n.getSeckillList)(t.timeList[t.active].id,e).then((function(e){var i=e.data,a=i.length<t.limit;t.page++,t.seckillList=t.seckillList.concat(i),t.page=t.page,t.pageloading=!1,t.loadend=a})).catch((function(e){t.pageloading=!1})))},settimeList:function(t,e){this.active=e,this.interval&&(clearInterval(this.interval),this.interval=null),this.interval=0,this.countDownHour="00",this.countDownMinute="00",this.countDownSecond="00",this.status=this.timeList[this.active].status,this.loadend=!1,this.page=1,this.seckillList=[],this.getSeckillList()},goDetails:function(t){uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id="+t.id})}},onReachBottom:function(){this.getSeckillList()}};e.default=c},ebca:function(t,e,i){var a=i("918e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("303f4258",a,!0,{sourceMap:!1,shadowMode:!1})},efc4:function(t,e,i){var a=i("aae6");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("24378372",a,!0,{sourceMap:!1,shadowMode:!1})}}]);