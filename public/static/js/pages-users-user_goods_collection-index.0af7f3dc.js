(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_goods_collection-index"],{"0b87":function(t,e,i){"use strict";i.r(e);var o=i("ebf7"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"0fba":function(t,e,i){"use strict";var o=i("1e8a"),n=i.n(o);n.a},"1e8a":function(t,e,i){var o=i("bead");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("7a775c27",o,!0,{sourceMap:!1,shadowMode:!1})},"26fc":function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("ade3"));i("d81d"),i("14d9"),i("99af");var a,c=i("2a39"),r=i("26cb"),s=i("86eb"),l=o(i("7992")),d=o(i("3b71")),u=o(i("19b6")),f=i("00a0"),v=(a={components:{recommend:l.default,home:d.default},mixins:[u.default],data:function(){return{imgHost:f.HTTP_REQUEST_URL,ids:[],hostProduct:[],checkbox_show:!1,loadTitle:this.$t("加载更多"),loading:!1,loadend:!1,collectProductList:[],count:0,limit:15,page:1,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,isAllSelect:!1}},computed:(0,r.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.loadend=!1,this.page=1,this.collectProductList=[],this.getUserCollectProduct()):(0,s.toLogin)()},onShow:function(){this.loadend=!1,this.page=1,this.$set(this,"collectProductList",[]),this.getUserCollectProduct()},onReachBottom:function(){this.getUserCollectProduct()},methods:{showRadio:function(){this.checkbox_show=!this.checkbox_show},checkboxChange:function(t){t.detail.value.length<this.ids.length?this.$set(this,"isAllSelect",!1):t.detail.value.length===this.collectProductList.length&&this.$set(this,"isAllSelect",!0),this.$set(this,"ids",t.detail.value)},subDel:function(){var t=this,e=this;if(!this.ids.length)return e.$util.Tips({title:e.$t("请选择商品")});(0,c.collectDel)(e.ids).then((function(i){e.loadend=!1,e.$util.Tips({title:i.msg}),e.page=1,e.collectProductList=[],t.getUserCollectProduct(),t.ids.length=""}))},checkboxAllChange:function(t){var e=t.detail.value;e.length>0?this.setAllSelectValue(1):this.setAllSelectValue(0)},setAllSelectValue:function(t){var e=this,i=[],o=e.collectProductList;if(o.length>0){var n=o.map((function(o){return t?(o.checked=!0,i.push(o.pid),e.isAllSelect=!0):(o.checked=!1,e.isAllSelect=!1),o}));e.$set(e,"collectProductList",n),e.$set(e,"ids",i)}},jump:function(t){t.is_show?uni.navigateTo({url:"/pages/goods_details/index?id="+t.pid}):this.$util.Tips({title:this.$t("该商品已下架")})},onLoadFun:function(){this.loadend=!1,this.page=1,this.$set(this,"collectProductList",[]),this.getUserCollectProduct()},authColse:function(t){this.isShowAuth=t},getUserCollectProduct:function(){var t=this,e=this;this.loading||this.loadend||(e.loading=!0,e.loadTitle="",(0,c.getCollectUserList)({page:e.page,limit:e.limit}).then((function(i){t.count=i.data.count;var o=i.data.list;o.map((function(t){t.checked=!1}));var n=o.length<e.limit;e.collectProductList=e.$util.SplitArray(o,e.collectProductList),e.$set(e,"collectProductList",e.collectProductList),e.loadend=n,e.loadTitle=n?e.$t("我也是有底线的"):e.$t("加载更多"),e.collectProductList.length||1!=e.page||t.get_host_product(),e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle=e.$t("加载更多")})))},get_host_product:function(){var t=this;t.hotScroll||(0,c.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))}}},(0,n.default)(a,"onReachBottom",(function(){this.getUserCollectProduct()})),(0,n.default)(a,"onPageScroll",(function(t){uni.$emit("scroll")})),a);e.default=v},"2a39":function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.collectAdd=function(t,e){return n.default.post("collect/add",{id:t,product:void 0===e?"product":e})},e.collectAll=function(t,e){return n.default.post("collect/all",{id:t,category:void 0===e?"product":e})},e.collectDel=function(t,e){return n.default.post("collect/del",{id:t,category:void 0===e?"product":e})},e.create=function(t){return n.default.post("agent/apply/".concat(t.id),t)},e.deleteVisitList=function(t){return n.default.delete("user/visit",t)},e.getAgentAgreement=function(t){return n.default.get("agent/get_agent_agreement",{},{noAuth:!0})},e.getAttr=function(t,e){return n.default.get("v2/get_attr/"+t+"/"+e)},e.getCategoryList=function(){return n.default.get("category",{},{noAuth:!0})},e.getCodeApi=function(){return n.default.get("verify_code",{},{noAuth:!0})},e.getCollectUserList=function(t){return n.default.get("collect/user",t)},e.getGoodsDetails=function(){return n.default.get("agent/apply/info",{},{noAuth:!0})},e.getGroomList=function(t,e){return n.default.get("groom/list/"+t,e,{noAuth:!0})},e.getHomeProducts=function(t){return n.default.get("home/products",t,{noAuth:!0})},e.getPresellProductDetail=function(t){return n.default.get("advance/detail/"+t)},e.getProductCode=function(t){return n.default.get("product/code/"+t,{})},e.getProductDetail=function(t){return n.default.get("product/detail/"+t,{},{noAuth:!0})},e.getProductHot=function(t,e){return n.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})},e.getProductslist=function(t){return n.default.get("products",t,{noAuth:!0})},e.getReplyConfig=function(t){return n.default.get("reply/config/"+t)},e.getReplyList=function(t,e){return n.default.get("reply/list/"+t,e)},e.getSearchKeyword=function(){return n.default.get("search/keyword",{},{noAuth:!0})},e.getVisitList=function(t){return n.default.get("user/visit_list",t)},e.postCartAdd=function(t){return n.default.post("cart/add",t)},e.postCartNum=function(t){return n.default.post("v2/set_cart_num",t)},e.registerVerify=function(t){return n.default.post("register/verify",t,{noAuth:!0})},e.storeDiscountsList=function(t){return n.default.get("store_discounts/list/"+t,{},{noAuth:!0})},e.storeListApi=function(t){return n.default.get("store_list",t)};var n=o(i("fb81"))},"3b71":function(t,e,i){"use strict";i.r(e);var o=i("8b3c"),n=i("7b1b");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("77b4");var c=i("f0c5"),r=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"5c721f6d",null,!1,o["a"],void 0);e["default"]=r.exports},"5cb5":function(t,e,i){"use strict";var o=i("711a"),n=i.n(o);n.a},6557:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.goPage=function(){return new Promise((function(t){if(0!=o.globalData.isIframe)return!1;t(!0)}))},e.goShopDetail=function(t,e){return new Promise((function(i){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):i(t)}))},i("d3b7"),i("99af");var o=getApp()},"6bac":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={easyLoadimage:i("cad3").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"recommend",style:t.colorStyle},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("热门推荐")))]),i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),i("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,o){return i("v-uni-view",{key:o,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("easy-loadimage",{attrs:{mode:"widthFix","image-src":e.image}}),e.activity&&"1"===e.activity.type&&t.$permission("seckill")?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("秒杀")))]):t._e(),e.activity&&"2"===e.activity.type&&t.$permission("bargain")?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("砍价")))]):t._e(),e.activity&&"3"===e.activity.type&&t.$permission("combination")?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("拼团")))]):t._e()],1),i("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v(t._s(t.$t("￥"))),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1)})),1)],1)},a=[]},"6cbb":function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),a=o(i("19b6")),c=i("00a0"),r={name:"Home",props:{},mixins:[a.default],data:function(){return{top:"545",imgHost:c.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=r},"711a":function(t,e,i){var o=i("839a");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("0990035f",o,!0,{sourceMap:!1,shadowMode:!1})},"77b4":function(t,e,i){"use strict";var o=i("efc4"),n=i.n(o);n.a},7992:function(t,e,i){"use strict";i.r(e);var o=i("6bac"),n=i("0b87");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("0fba");var c=i("f0c5"),r=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"7c3986ba",null,!1,o["a"],void 0);e["default"]=r.exports},"7b1b":function(t,e,i){"use strict";i.r(e);var o=i("6cbb"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"839a":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.collectionGoods[data-v-4b9f6cca]{background-color:#fff;border-top:%?1?% solid #eee}.collectionGoods .item[data-v-4b9f6cca]{margin-left:%?30?%;border-bottom:%?1?% solid #eee;height:%?180?%;display:flex;align-items:center;flex-wrap:nowrap}.left[data-v-4b9f6cca]{display:flex;align-items:center;margin-right:%?20?%}.collectionGoods .item .pictrue[data-v-4b9f6cca]{width:%?130?%;height:%?130?%;margin-left:%?20?%;position:relative}.collectionGoods .item .pictrue .invalid[data-v-4b9f6cca]{position:absolute;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,.4);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);color:#fff}.collectionGoods .item .pictrue uni-image[data-v-4b9f6cca]{width:100%;height:100%;border-radius:%?6?%}.collectionGoods .item .text[data-v-4b9f6cca]{height:%?130?%;flex:1;font-size:%?28?%;color:#282828;padding-right:%?20?%}.collectionGoods .item .text .name[data-v-4b9f6cca]{width:max-contnet}.collectionGoods .item .text .money[data-v-4b9f6cca]{font-size:%?26?%}.collectionGoods .item .text .delete[data-v-4b9f6cca]{font-size:%?26?%;color:#282828;width:%?144?%;height:%?46?%;border:1px solid #bbb;border-radius:%?4?%;text-align:center;line-height:%?46?%}.noCommodity[data-v-4b9f6cca]{background-color:#fff;padding-top:%?1?%;border-top:0}.title-admin[data-v-4b9f6cca]{display:flex;justify-content:space-between;align-items:center;padding:%?20?%;border-bottom:1px solid #f2f2f2}.title-admin .text[data-v-4b9f6cca]{color:var(--view-theme)}.title-admin .admin[data-v-4b9f6cca]{color:var(--view-theme)}.footer[data-v-4b9f6cca]{z-index:999;width:100%;height:%?96?%;background-color:#fafafa;position:fixed;padding:0 %?30?%;box-sizing:border-box;border-top:%?1?% solid #eee;bottom:0}.footer .checkAll[data-v-4b9f6cca]{font-size:%?28?%;color:#282828;margin-left:%?16?%}.footer .money[data-v-4b9f6cca]{font-size:%?30?%}.footer .placeOrder[data-v-4b9f6cca]{color:#fff;font-size:%?30?%;width:%?226?%;height:%?70?%;border-radius:%?50?%;text-align:center;line-height:%?70?%;margin-left:%?22?%}.footer .button .bnt[data-v-4b9f6cca]{font-size:%?28?%;color:#999;border-radius:%?50?%;border:1px solid #999;width:%?160?%;height:%?60?%;text-align:center;line-height:%?60?%}.footer .button uni-form ~ uni-form[data-v-4b9f6cca]{margin-left:%?17?%}',""]),t.exports=e},"840d":function(t,e,i){"use strict";i.r(e);var o=i("26fc"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"8b3c":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},n=[]},"94f6":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[t.collectProductList.length?i("v-uni-view",{staticClass:"collectionGoods"},[i("v-uni-view",{staticClass:"title-admin"},[i("v-uni-view",[t._v(t._s(t.$t("当前共"))),i("v-uni-text",{staticClass:"text"},[t._v(t._s(t.count))]),t._v(t._s(t.$t("件商品")))],1),i("v-uni-view",{staticClass:"admin",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showRadio.apply(void 0,arguments)}}},[t._v(t._s(t.checkbox_show?t.$t("取消"):t.$t("管理")))])],1),i("v-uni-checkbox-group",{on:{change:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},[t._l(t.collectProductList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"item acea-row"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-checkbox",{directives:[{name:"show",rawName:"v-show",value:t.checkbox_show,expression:"checkbox_show"}],attrs:{value:e.pid.toString(),checked:e.checked}}),i("v-uni-view",{staticClass:"pictrue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jump(e)}}},[i("v-uni-image",{attrs:{src:e.image}}),e.is_show?t._e():i("v-uni-view",{staticClass:"invalid acea-row row-center-wrapper"},[t._v("已下架")])],1)],1),i("v-uni-view",{staticClass:"text acea-row row-column-between",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jump(e)}}},[i("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"money font-color"},[t._v(t._s(t.$t("￥"))+t._s(e.price))])],1)],1)],1)})),i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1)],2)],1):!t.collectProductList.length&&t.page>1?i("v-uni-view",{staticClass:"noCommodity"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:t.imgHost+"/statics/images/noCollection.png"}})],1),i("recommend",{attrs:{hostProduct:t.hostProduct}})],1):t._e(),t.checkbox_show&&t.collectProductList.length?i("v-uni-view",{staticClass:"footer acea-row row-between-wrapper"},[i("v-uni-view",[i("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxAllChange.apply(void 0,arguments)}}},[i("v-uni-checkbox",{attrs:{value:"all",checked:!!t.isAllSelect}}),i("v-uni-text",{staticClass:"checkAll"},[t._v(t._s(t.$t("全选"))+"("+t._s(t.ids.length)+")")])],1)],1),i("v-uni-view",{staticClass:"button acea-row row-middle"},[i("v-uni-button",{staticClass:"bnt",attrs:{formType:"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subDel.apply(void 0,arguments)}}},[t._v(t._s(t.$t("取关")))])],1)],1):t._e(),i("home")],1)},n=[]},aae6:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".pictrueBox[data-v-5c721f6d]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-5c721f6d]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-5c721f6d]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-5c721f6d]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important;opacity:.8;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.home .homeCon .iconfont[data-v-5c721f6d]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-5c721f6d]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-5c721f6d]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},b7bc:function(t,e,i){"use strict";i.r(e);var o=i("94f6"),n=i("840d");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("5cb5");var c=i("f0c5"),r=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"4b9f6cca",null,!1,o["a"],void 0);e["default"]=r.exports},bead:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.recommend[data-v-7c3986ba]{background-color:#fff}.recommend .title[data-v-7c3986ba]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-7c3986ba]{margin:0 %?28?%}.recommend .title .iconfont[data-v-7c3986ba]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-7c3986ba]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-7c3986ba]{padding:0 %?30?%}.recommend .recommendList .item[data-v-7c3986ba]{width:%?335?%;margin-bottom:%?30?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?3?% %?10?% %?2?% rgba(0,0,0,.03);padding-bottom:%?10?%}.recommend .recommendList .item .pictrue[data-v-7c3986ba]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue[data-v-7c3986ba] ,\n.recommend .recommendList .item .pictrue[data-v-7c3986ba] uni-image,\n.recommend .recommendList .item .pictrue[data-v-7c3986ba] .easy-loadimage,\n.recommend .recommendList .item .pictrue[data-v-7c3986ba] uni-image{width:100%;height:%?335?%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-7c3986ba]{font-size:%?28?%;color:#282828;margin-top:%?20?%;padding:0 %?10?%;line-height:%?34?%;height:%?68?%}.recommend .recommendList .item .money[data-v-7c3986ba]{font-size:%?20?%;margin-top:%?8?%;padding:0 %?10?% %?0?% %?10?%}.recommend .vip-money[data-v-7c3986ba]{font-size:%?24?%;color:#282828;font-weight:700;display:flex;align-items:center;padding:%?0?% 0 0 %?10?%}.recommend .vip-money uni-image[data-v-7c3986ba]{width:%?46?%;height:%?21?%;margin-left:%?4?%}.recommend .recommendList .item .money .num[data-v-7c3986ba]{font-size:%?28?%}',""]),t.exports=e},ebf7:function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),a=i("6557"),c=o(i("19b6")),r={computed:(0,n.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[c.default],data:function(){return{}},methods:{goDetail:function(t){(0,a.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=r},efc4:function(t,e,i){var o=i("aae6");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("24378372",o,!0,{sourceMap:!1,shadowMode:!1})}}]);