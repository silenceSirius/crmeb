(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_combination_details-index~pages-activity-goods_combination_status-index~pages-a~162f3e48"],{2135:function(t,e,i){t.exports=i.p+"static/img/svip.bbb3b36a.gif"},"2a39":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.collectAdd=function(t,e){return a.default.post("collect/add",{id:t,product:void 0===e?"product":e})},e.collectAll=function(t,e){return a.default.post("collect/all",{id:t,category:void 0===e?"product":e})},e.collectDel=function(t,e){return a.default.post("collect/del",{id:t,category:void 0===e?"product":e})},e.create=function(t){return a.default.post("agent/apply/".concat(t.id),t)},e.deleteVisitList=function(t){return a.default.delete("user/visit",t)},e.getAgentAgreement=function(t){return a.default.get("agent/get_agent_agreement",{},{noAuth:!0})},e.getAttr=function(t,e){return a.default.get("v2/get_attr/"+t+"/"+e)},e.getCategoryList=function(){return a.default.get("category",{},{noAuth:!0})},e.getCodeApi=function(){return a.default.get("verify_code",{},{noAuth:!0})},e.getCollectUserList=function(t){return a.default.get("collect/user",t)},e.getGoodsDetails=function(){return a.default.get("agent/apply/info",{},{noAuth:!0})},e.getGroomList=function(t,e){return a.default.get("groom/list/"+t,e,{noAuth:!0})},e.getHomeProducts=function(t){return a.default.get("home/products",t,{noAuth:!0})},e.getPresellProductDetail=function(t){return a.default.get("advance/detail/"+t)},e.getProductCode=function(t){return a.default.get("product/code/"+t,{})},e.getProductDetail=function(t){return a.default.get("product/detail/"+t,{},{noAuth:!0})},e.getProductHot=function(t,e){return a.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})},e.getProductslist=function(t){return a.default.get("products",t,{noAuth:!0})},e.getReplyConfig=function(t){return a.default.get("reply/config/"+t)},e.getReplyList=function(t,e){return a.default.get("reply/list/"+t,e)},e.getSearchKeyword=function(){return a.default.get("search/keyword",{},{noAuth:!0})},e.getVisitList=function(t){return a.default.get("user/visit_list",t)},e.postCartAdd=function(t){return a.default.post("cart/add",t)},e.postCartNum=function(t){return a.default.post("v2/set_cart_num",t)},e.registerVerify=function(t){return a.default.post("register/verify",t,{noAuth:!0})},e.storeDiscountsList=function(t){return a.default.get("store_discounts/list/"+t,{},{noAuth:!0})},e.storeListApi=function(t){return a.default.get("store_list",t)};var a=n(i("fb81"))},4149:function(t,e,i){"use strict";var n=i("a5ec"),a=i.n(n);a.a},"6b31":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("14d9");var a=n(i("19b6")),o={mixins:[a.default],props:{attr:{type:Object,default:function(){}},limitNum:{type:Number,value:0},minQty:{type:Number,value:0},isShow:{type:Number,value:0},iSbnt:{type:Number,value:0},iSplus:{type:Number,value:0},iScart:{type:Number,value:0},is_vip:{type:Number,value:0},is_virtual:{type:Number,value:0},type:{type:String,default:""},unitName:{type:String,default:""}},data:function(){return{bottomVal:""}},mounted:function(){},methods:{inputBindFocus:function(t){this.bottomVal="40rpx"},inputBindBlur:function(){this.bottomVal="0px"},moveHandle:function(){},getpreviewImage:function(){uni.previewImage({urls:this.attr.productSelect.image.split(","),current:this.attr.productSelect.image})},goCat:function(){this.$emit("goCat")},bindCode:function(t){this.$emit("iptCartNum",t)},closeAttr:function(){this.$emit("myevent")},CartNumDes:function(){this.$emit("ChangeCartNum",!1)},CartNumAdd:function(){this.$emit("ChangeCartNum",!0)},tapAttr:function(t,e){this.$emit("attrVal",{indexw:t,indexn:e}),this.$set(this.attr.productAttr[t],"index",this.attr.productAttr[t].attr_values[e]);var i=this.getCheckedValue().join(",");this.$emit("ChangeAttr",i),1==this.limitNum&&(this.attr.productSelect.quota>0?this.attr.productSelect.cart_num=1:this.attr.productSelect.cart_num=0)},getCheckedValue:function(){for(var t=this.attr.productAttr,e=[],i=0;i<t.length;i++)for(var n=0;n<t[i].attr_values.length;n++)t[i].index===t[i].attr_values[n]&&e.push(t[i].attr_values[n]);return e},showImg:function(){this.$emit("getImg")}}};e.default=o},"6cd4":function(t,e,i){"use strict";i.r(e);var n=i("f3ff"),a=i("e1a3");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4149");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"b0cb7dde",null,!1,n["a"],void 0);e["default"]=c.exports},a5ec:function(t,e,i){var n=i("e6a3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("14dc685e",n,!0,{sourceMap:!1,shadowMode:!1})},e1a3:function(t,e,i){"use strict";i.r(e);var n=i("6b31"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e6a3:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.vip-money[data-v-b0cb7dde]{color:#282828;font-size:%?28?%;font-weight:700;margin-left:%?6?%}.vipImg[data-v-b0cb7dde]{width:%?68?%;height:%?27?%}.vipImg uni-image[data-v-b0cb7dde]{width:100%;height:100%}.product-window[data-v-b0cb7dde]{position:fixed;bottom:0;width:100%;left:0;background-color:#fff;z-index:100;border-radius:%?16?% %?16?% 0 0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9);padding-bottom:%?140?%;padding-bottom:calc(140rpx+ constant(safe-area-inset-bottom));padding-bottom:calc(%?140?% + env(safe-area-inset-bottom))}.product-window.on[data-v-b0cb7dde]{-webkit-transform:translateZ(0);transform:translateZ(0)}.product-window.join[data-v-b0cb7dde]{padding-bottom:%?30?%}.product-window.joinCart[data-v-b0cb7dde]{padding-bottom:%?30?%;z-index:10000}.product-window .textpic[data-v-b0cb7dde]{padding:0 %?80?% 0 %?30?%;margin-top:%?29?%;position:relative}.product-window .textpic .pictrue[data-v-b0cb7dde]{width:%?150?%;height:%?150?%}.product-window .textpic .pictrue uni-image[data-v-b0cb7dde]{width:100%;height:100%;border-radius:%?10?%}.product-window .textpic .text[data-v-b0cb7dde]{width:%?470?%;font-size:%?28?%;color:#202020}.product-window .textpic .text .money[data-v-b0cb7dde]{font-size:%?24?%;margin-top:%?10?%}.product-window .textpic .text .money .num[data-v-b0cb7dde]{font-size:%?36?%}.product-window .textpic .text .money .stock[data-v-b0cb7dde]{color:#999;margin-left:%?6?%;margin-right:%?20?%}.product-window .textpic .iconfont[data-v-b0cb7dde]{position:absolute;right:%?30?%;top:%?-5?%;font-size:%?35?%;color:#8a8a8a}.product-window .rollTop[data-v-b0cb7dde]{max-height:%?500?%;overflow:auto;margin-top:%?36?%}.product-window .productWinList .item ~ .item[data-v-b0cb7dde]{margin-top:%?36?%}.product-window .productWinList .item .title[data-v-b0cb7dde]{font-size:%?30?%;color:#999;padding:0 %?30?%}.product-window .productWinList .item .listn[data-v-b0cb7dde]{padding:0 %?30?% 0 %?16?%}.product-window .productWinList .item .listn .itemn[data-v-b0cb7dde]{border:1px solid #f2f2f2;font-size:%?26?%;color:#282828;padding:%?7?% %?33?%;border-radius:%?25?%;margin:%?20?% 0 0 %?14?%;background-color:#f2f2f2}.product-window .productWinList .item .listn .itemn.on[data-v-b0cb7dde]{color:var(--view-theme);background:var(--view-minorColorT);border-color:var(--view-theme)}.product-window .productWinList .item .listn .itemn.limit[data-v-b0cb7dde]{color:#999;text-decoration:line-through}.product-window .cart[data-v-b0cb7dde]{margin-top:%?36?%;padding:0 %?30?%;align-items:center}.product-window .cart .title[data-v-b0cb7dde]{font-size:%?30?%;color:#999}.product-window .cart .carnum[data-v-b0cb7dde]{height:%?54?%}.product-window .cart .carnum .stock[data-v-b0cb7dde]{font-size:%?20?%;line-height:%?54?%;color:#aaa}.product-window .cart .carnum .line[data-v-b0cb7dde]{padding:0 %?6?%}.product-window .cart .carnum .iconfont[data-v-b0cb7dde]{font-size:%?25?%}.product-window .cart .carnum uni-view[data-v-b0cb7dde]{width:%?84?%;text-align:center;height:100%;line-height:%?54?%;color:#282828;font-size:%?45?%}.product-window .cart .carnum .reduce[data-v-b0cb7dde]{border-right:0;border-radius:%?6?% 0 0 %?6?%;line-height:%?48?%;font-size:%?60?%}.product-window .cart .carnum .reduce.on[data-v-b0cb7dde]{color:#dedede}.product-window .cart .carnum .plus[data-v-b0cb7dde]{border-left:0;border-radius:0 %?6?% %?6?% 0;line-height:%?46?%}.product-window .cart .carnum .plus.on[data-v-b0cb7dde]{color:#dedede}.product-window .cart .carnum .num[data-v-b0cb7dde]{background:#f2f2f2;color:#282828;font-size:%?28?%}.product-window .joinBnt[data-v-b0cb7dde]{font-size:%?30?%;width:%?620?%;height:%?86?%;border-radius:%?50?%;text-align:center;line-height:%?86?%;color:#fff;margin:%?21?% auto 0 auto}.product-window .joinBnt.on[data-v-b0cb7dde]{background-color:#bbb;color:#fff}',""]),t.exports=e},f3ff:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"product-window",class:(!0===t.attr.cartAttr?"on":"")+" "+(t.iSbnt?"join":"")+" "+(t.iScart?"joinCart":""),style:{bottom:t.bottomVal}},[n("v-uni-view",{staticClass:"textpic acea-row row-between-wrapper",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pictrue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showImg()}}},[n("v-uni-image",{attrs:{src:t.attr.productSelect.image}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"line2 store-name"},[t._v(t._s(t.attr.productSelect.store_name))]),n("v-uni-view",{staticClass:"money font-color"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[t._v(t._s(t.$t("￥"))),n("v-uni-text",{staticClass:"num"},[t._v(t._s(t.attr.productSelect.price))]),t.is_vip>0&&t.attr.productSelect.vip_price?n("v-uni-text",{staticClass:"vip-money"},[t._v(t._s(t.$t("￥"))+t._s(t.attr.productSelect.vip_price))]):t._e(),t.is_vip>0&&t.attr.productSelect.vip_price?n("v-uni-view",{staticClass:"vipImg"},[n("v-uni-image",{attrs:{src:i("2135")}})],1):t._e()],1),t.isShow&&!t.type?n("v-uni-text",{staticClass:"stock"},[t._v(t._s(t.$t("库存"))+" "+t._s(t.attr.productSelect.stock+t.unitName))]):t._e(),t.limitNum&&t.type?n("v-uni-text",{staticClass:"stock"},[t._v(t._s(t.$t("库存"))+" "+t._s(t.attr.productSelect.quota+t.unitName))]):t._e(),t.minQty>1&&t.is_virtual?n("v-uni-text",{staticClass:"stock"},[t._v(t._s(t.$t("起购"))+" "+t._s(t.minQty+t.unitName))]):t._e()],1)],1),n("v-uni-view",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAttr.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"rollTop"},[n("v-uni-view",{staticClass:"productWinList"},t._l(t.attr.productAttr,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t(e.attr_name)))]),n("v-uni-view",{staticClass:"listn acea-row row-middle"},t._l(e.attr_value,(function(a,o){return n("v-uni-view",{key:o,staticClass:"itemn",class:e.index===a.attr?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapAttr(i,o)}}},[t._v(t._s(t.$t(a.attr)))])})),1)],1)})),1),t.is_virtual?t._e():n("v-uni-view",{staticClass:"cart acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("数量")))]),n("v-uni-view",{staticClass:"carnum acea-row row-left"},[t.limitNum&&!t.type?n("v-uni-text",{staticClass:"stock"},[t._v(t._s(t.$t("限购"))+t._s(t.limitNum+t.unitName))]):t._e(),t.limitNum&&!t.type&&t.minQty>1?n("v-uni-text",{staticClass:"stock line"},[t._v("|")]):t._e(),t.minQty>1?n("v-uni-text",{staticClass:"stock"},[t._v(t._s(t.$t("起购"))+t._s(t.minQty+t.unitName))]):t._e(),t.attr.productSelect.cart_num<=t.minQty?n("v-uni-view",{staticClass:"item reduce acea-row row-center-wrapper",class:t.attr.productSelect.cart_num<=t.minQty?"on":""},[n("v-uni-text",{staticClass:"iconfont icon-shangpinshuliang-jian"})],1):n("v-uni-view",{staticClass:"item reduce acea-row row-center-wrapper",class:t.attr.productSelect.cart_num<=t.minQty?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CartNumDes.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-shangpinshuliang-jian"})],1),n("v-uni-view",{staticClass:"item num acea-row row-middle"},[n("v-uni-input",{attrs:{type:"number","data-name":"productSelect.cart_num"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindCode(t.attr.productSelect.cart_num)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.inputBindFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.inputBindBlur.apply(void 0,arguments)}},model:{value:t.attr.productSelect.cart_num,callback:function(e){t.$set(t.attr.productSelect,"cart_num",e)},expression:"attr.productSelect.cart_num"}})],1),t.iSplus?n("v-uni-view",{staticClass:"item plus acea-row row-center-wrapper",class:t.attr.productSelect.cart_num>=t.attr.productSelect.stock||t.limitNum&&t.attr.productSelect.cart_num>=t.limitNum?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CartNumAdd.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-shangpinshuliang-jia"})],1):n("v-uni-view",{staticClass:"item plus",class:t.attr.productSelect.cart_num>=t.attr.productSelect.quota||t.attr.productSelect.cart_num>=t.attr.productSelect.product_stock||t.attr.productSelect.cart_num>=t.attr.productSelect.num||"seckill"==t.type&&t.attr.productSelect.cart_num>=t.attr.productSelect.once_num?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CartNumAdd.apply(void 0,arguments)}}},[t._v("+")])],1)],1)],1),t.iSbnt&&t.attr.productSelect.product_stock>0&&t.attr.productSelect.quota>0?n("v-uni-view",{staticClass:"joinBnt bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCat.apply(void 0,arguments)}}},[t._v(t._s(t.$t("我要参团")))]):t.iSbnt&&t.attr.productSelect.quota<=0||t.iSbnt&&t.attr.productSelect.product_stock<=0?n("v-uni-view",{staticClass:"joinBnt on"},[t._v(t._s(t.$t("已售罄")))]):t._e(),t.iScart&&t.attr.productSelect.stock?n("v-uni-view",{staticClass:"joinBnt bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCat.apply(void 0,arguments)}}},[t._v(t._s(t.$t("确定")))]):t.iScart&&!t.attr.productSelect.stock?n("v-uni-view",{staticClass:"joinBnt on"},[t._v(t._s(t.$t("已售罄")))]):t._e()],1),n("v-uni-view",{staticClass:"mask",attrs:{hidden:!1===t.attr.cartAttr},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAttr.apply(void 0,arguments)}}})],1)},a=[]}}]);