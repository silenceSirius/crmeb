(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_addcart/order_addcart"],{"3ffa":function(t,e,i){},6534:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.canShow?t.$t("100%正品保证"):null),a=t.canShow?t.$t("所有商品精挑细选"):null,n=t.canShow?t.$t("售后无忧"):null,r=t.canShow?t.$t("购物数量"):null,c=t.canShow?t.cartList.valid.length>0||t.cartList.invalid.length>0:null,s=t.canShow&&c&&t.footerswitch?t.$t("管理"):null,o=t.canShow&&c&&!t.footerswitch?t.$t("取消"):null,u=t.canShow?(t.cartList.valid.length>0||t.cartList.invalid.length>0)&&t.canShow:null,l=t.canShow&&u?t.__map(t.cartList.valid,(function(e,i){var a=t.__get_orig(e),n=e.productInfo.attrInfo?t.$t("属性"):null,r=e.attrStatus?t.$t("￥"):null,c=e.attrStatus?null:t.$t("请重新选择商品规格"),s=e.attrStatus?null:t.$t("重选");return{$orig:a,m6:n,m7:r,m8:c,m9:s}})):null,h=t.canShow&&u?t.cartList.invalid.length:null,d=t.canShow&&u&&h>0?t.$t("失效商品"):null,f=t.canShow&&u&&h>0?t.$t("清空"):null,g=t.canShow&&u&&h>0?t.__map(t.cartList.invalid,(function(e,i){var a=t.__get_orig(e),n=t.$t("失效"),r=e.productInfo.attrInfo?t.$t("属性"):null,c=t.$t("该商品已失效");return{$orig:a,m12:n,m13:r,m14:c}})):null,m=t.canShow&&u?t.cartList.invalid.length&&t.loadend:null,p=t.canShow?0==t.cartList.valid.length&&0==t.cartList.invalid.length&&t.canShow:null,v=t.canShow&&p?t.$t("暂无商品"):null,S=t.canShow&&p?t.hostProduct.length:null,$=t.canShow?t.cartList.valid.length>0&&t.canShow:null,_=t.canShow&&$?t.$t("全选"):null,w=t.canShow&&$?t.selectValue.length:null,L=t.canShow&&$&&1==t.footerswitch?t.$t("￥"):null,I=t.canShow&&$&&1==t.footerswitch?t.$t("立即下单"):null,b=t.canShow&&$&&1!=t.footerswitch?t.$t("收藏"):null,C=t.canShow&&$&&1!=t.footerswitch?t.$t("删除"):null;t.$mp.data=Object.assign({},{$root:{m0:i,m1:a,m2:n,m3:r,g0:c,m4:s,m5:o,g1:u,l0:l,g2:h,m10:d,m11:f,l1:g,g3:m,g4:p,m15:v,g5:S,g6:$,m16:_,g7:w,m17:L,m18:I,m19:b,m20:C}})},n=[]},"7a05":function(t,e,i){"use strict";(function(t,a){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,c=n(i("2eee")),s=n(i("9523")),o=n(i("c973")),u=i("39ed"),l=i("2a39"),h=i("86eb"),d=i("26cb"),f=n(i("19b6")),g=i("00a0"),m={components:{pageFooter:function(){Promise.all([i.e("common/vendor"),i.e("components/pageFooter/index")]).then(function(){return resolve(i("605d"))}.bind(null,i)).catch(i.oe)},recommend:function(){Promise.all([i.e("common/vendor"),i.e("components/recommend/index")]).then(function(){return resolve(i("7992"))}.bind(null,i)).catch(i.oe)},productWindow:function(){i.e("components/productWindow/index").then(function(){return resolve(i("6cd4"))}.bind(null,i)).catch(i.oe)},tabBar:function(){Promise.all([i.e("common/vendor"),i.e("pages/index/visualization/components/tabBar")]).then(function(){return resolve(i("8632"))}.bind(null,i)).catch(i.oe)},authorize:function(){i.e("components/Authorize").then(function(){return resolve(i("ad23"))}.bind(null,i)).catch(i.oe)}},mixins:[f.default],data:function(){return{imgHost:g.HTTP_REQUEST_URL,is_diy:t.getStorageSync("is_diy"),canShow:!1,cartCount:0,goodsHidden:!0,footerswitch:!0,hostProduct:[],cartList:{valid:[],invalid:[]},isAllSelect:!1,selectValue:[],selectCountPrice:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,loading:!1,loadend:!1,loadTitle:this.$t("我也是有底线的"),page:1,limit:20,loadingInvalid:!1,loadendInvalid:!1,loadTitleInvalid:this.$t("加载更多"),pageInvalid:1,limitInvalid:20,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],storeInfo:{},attrValue:"",attrTxt:this.$t("请选择"),cartId:0,product_id:0,sysHeight:0,newData:{},activeRouter:"",is_diy_set:!1,adding:!1}},computed:(0,d.mapGetters)(["isLogin"]),onLoad:function(e){t.hideTabBar();var i=getCurrentPages(),a=i[i.length-1].route;this.activeRouter="/"+a},onShow:function(){this.isLogin||(0,h.toLogin)(),this.canShow=!1,1==this.isLogin&&(this.hotPage=1,this.hostProduct=[],this.hotScroll=!1,this.getHostProduct(),this.loadend=!1,this.page=1,this.cartList.valid=[],this.getCartList(1),this.loadendInvalid=!1,this.pageInvalid=1,this.cartList.invalid=[],this.getInvalidList(),this.goodsHidden=!0,this.footerswitch=!0,this.hostProduct=[],this.hotScroll=!1,this.hotPage=1,this.hotLimit=10,this.cartList={valid:[],invalid:[]},this.isAllSelect=!1,this.selectValue=[],this.selectCountPrice=0,this.cartCount=0,this.isShowAuth=!1)},methods:(r={authColse:function(t){this.isShowAuth=t},reGoCat:function(){var t=this,e=t.productValue[this.attrValue];if(t.attr.productAttr.length&&void 0===e)return t.$util.Tips({title:t.$t("产品库存不足，请选择其它")});var i={id:t.cartId,product_id:t.product_id,num:t.attr.productSelect.cart_num,unique:void 0!==t.attr.productSelect?t.attr.productSelect.unique:""};(0,u.getResetCart)(i).then((function(e){t.attr.cartAttr=!1,t.$util.Tips({title:t.$t("添加购物车成功"),success:function(){t.loadend=!1,t.page=1,t.cartList.valid=[],t.getCartList(),t.getCartNum()}})})).catch((function(e){return t.$util.Tips({title:e.msg})}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},reElection:function(t){this.getGoodsDetails(t)},getGoodsDetails:function(e){t.showLoading({title:this.$t("加载中"),mask:!0});var i=this;i.cartId=e.id,i.product_id=e.product_id,(0,l.getProductDetail)(e.product_id).then((function(e){t.hideLoading(),i.attr.cartAttr=!0;var a=e.data.storeInfo;i.$set(i,"storeInfo",a),i.$set(i.attr,"productAttr",e.data.productAttr),i.$set(i,"productValue",e.data.productValue),i.DefaultSelect()})).catch((function(e){t.hideLoading()}))},ChangeAttr:function(t){var e=this.productValue[t];e&&e.stock>0?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t),this.$set(this,"attrTxt",this.$t("已选择"))):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var i in this.productValue)if(this.productValue[i].stock>0){e=this.attr.productAttr.length?i.split(","):[];break}for(var a=0;a<t.length;a++)this.$set(t[a],"index",e[a]);var n=this.productValue[e.sort().join(",")];n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",n.image),this.$set(this.attr.productSelect,"price",n.price),this.$set(this.attr.productSelect,"stock",n.stock),this.$set(this.attr.productSelect,"unique",n.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",e.sort().join(",")),this.$set(this,"attrTxt",this.$t("已选择"))):!n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择"))):n||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var i=e.stock||0,a=this.attr.productSelect;t?(a.cart_num++,a.cart_num>i&&(this.$set(this.attr.productSelect,"cart_num",i||1),this.$set(this,"cart_num",i||1))):(a.cart_num--,a.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},subDel:function(t){var e=this,i=e.selectValue;if(!(i.length>0))return e.$util.Tips({title:e.$t("请选择产品")});(0,u.cartDel)(i).then((function(t){e.loadend=!1,e.page=1,e.cartList.valid=[],e.getCartList(),e.getCartNum()}))},getSelectValueProductId:function(){var t=this.cartList.valid,e=this.selectValue,i=[];if(e.length>0)for(var a in t)this.inArray(t[a].id,e)&&i.push(t[a].product_id);return i},subCollect:function(t){var e=this,i=e.selectValue;if(!(i.length>0))return e.$util.Tips({title:e.$t("请选择产品")});e.getSelectValueProductId();(0,l.collectAll)(e.getSelectValueProductId().join(",")).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"})})).catch((function(t){return e.$util.Tips({title:t})}))},subOrder:function(e){var i=this.selectValue;if(!(i.length>0))return this.$util.Tips({title:this.$t("请选择产品")});t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+i.join(",")})},checkboxAllChange:function(t){var e=t.detail.value;e.length>0?this.setAllSelectValue(1):this.setAllSelectValue(0)},setAllSelectValue:function(t){var e=this,i=[],a=e.cartList.valid;if(a.length>0){var n=a.map((function(a){return t?(e.footerswitch?a.attrStatus?(a.checked=!0,i.push(a.id)):a.checked=!1:(a.checked=!0,i.push(a.id)),e.isAllSelect=!0):(a.checked=!1,e.isAllSelect=!1),a}));e.$set(e.cartList,"valid",n),e.selectValue=i,e.switchSelect()}},checkboxChange:function(t){var e=this,i=t.detail.value,a=e.cartList.valid,n=[],r=[],c=[],s=a.map((function(t){return e.inArray(t.id,i)?e.footerswitch?t.attrStatus?(t.checked=!0,n.push(t)):t.checked=!1:(t.checked=!0,n.push(t)):(t.checked=!1,r.push(t)),t}));e.footerswitch&&(c=r.filter((function(t){return!t.attrStatus}))),e.$set(e.cartList,"valid",s),e.isAllSelect=s.length===n.length+c.length,e.selectValue=i,e.switchSelect()},inArray:function(t,e){for(var i in e)if(e[i]==t)return!0;return!1},switchSelect:function(){var t=this.cartList.valid,e=this.selectValue,i=0;if(e.length<1)this.selectCountPrice=i;else{for(var a in t)this.inArray(t[a].id,e)&&(i=this.$util.$h.Add(i,this.$util.$h.Mul(t[a].cart_num,t[a].truePrice)));this.selectCountPrice=i}}},(0,s.default)(r,"iptCartNum",(function(t){var e=this.cartList.valid[t];e.cart_num&&this.setCartNum(e.id,e.cart_num),this.switchSelect()})),(0,s.default)(r,"blurInput",(function(t){var e=this.cartList.valid[t];e.cart_num||(e.cart_num=1,this.$set(this.cartList,"valid",this.cartList.valid))})),(0,s.default)(r,"subCart",(function(t){var e=this,i=!1,a=e.cartList.valid[t];a.cart_num=Number(a.cart_num)-1,a.cart_num<1&&(i=!0),a.cart_num<=1?(a.cart_num=1,a.numSub=!0):(a.numSub=!1,a.numAdd=!1),0==i&&e.setCartNum(a.id,a.cart_num,(function(i){e.cartList.valid[t]=a,e.getCartNum(),e.switchSelect()}),(function(){a.cart_num=Number(a.cart_num)+1}))})),(0,s.default)(r,"addCart",(function(t){var e=this;if(!this.adding){var i=e.cartList.valid[t];i.cart_num=Number(i.cart_num)+1;var a=i.productInfo;a.hasOwnProperty("attrInfo")&&i.cart_num>=i.productInfo.attrInfo.stock?(i.cart_num=i.productInfo.attrInfo.stock,i.numAdd=!0,i.numSub=!1):(i.numAdd=!1,i.numSub=!1),e.setCartNum(i.id,i.cart_num,(function(a){e.cartList.valid[t]=i,e.getCartNum(),e.switchSelect()}),(function(){i.cart_num=Number(i.cart_num)-1}))}})),(0,s.default)(r,"setCartNum",(function(t,e,i,a){var n=this;(0,u.changeCartNum)(t,e).then((function(t){i&&i(t.data)})).catch((function(t){return a&&a(),n.$util.Tips({title:t})}))})),(0,s.default)(r,"getCartNum",(function(){var t=this,e=this;(0,u.getCartCounts)().then((function(i){e.cartCount=i.data.count,t.adding=!1,t.$store.commit("indexData/setCartNum",i.data.count>99?"..":i.data.count),i.data.count>0?a.setTabBarBadge({index:2,text:i.data.count+""}):a.hideTabBarRedDot({index:2})}))})),(0,s.default)(r,"getCartData",(function(t){var e=this;return new Promise((function(i,a){(0,u.getCartList)(t).then((function(t){i(t.data)})).catch((function(t){e.loading=!1,e.canShow=!0,e.$util.Tips({title:t})}))}))})),(0,s.default)(r,"getCartList",(function(e){var i=this;return(0,o.default)(c.default.mark((function n(){var r,s;return c.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.showLoading({title:i.$t("加载中"),mask:!0}),r=i,s={page:r.page,limit:r.limit,status:1},(0,u.getCartCounts)().then(function(){var n=(0,o.default)(c.default.mark((function n(o){var u,l,h,d,f,g,m,p;return c.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r.cartCount=o.data.count,e&&(i.adding=!1,i.$store.commit("indexData/setCartNum",o.data.count>99?"..":o.data.count),o.data.count>0?a.setTabBarBadge({index:2,text:o.data.count+""}):a.hideTabBarRedDot({index:2})),u=0;case 3:if(!(u<Math.ceil(o.data.ids.length/r.limit))){n.next=21;break}return n.next=6,i.getCartData(s);case 6:if(l=n.sent,s.page=s.page+1,h=l.valid,d=r.$util.SplitArray(h,r.cartList.valid),[{numSub:!0},{numSub:!1}],[{numAdd:!0},{numAdd:!1}],f=[],d.length>0)for(g in d)1==d[g].cart_num?d[g].numSub=!0:d[g].numSub=!1,m=d[g].productInfo,m.hasOwnProperty("attrInfo")&&d[g].cart_num==d[g].productInfo.attrInfo.stock||d[g].cart_num==d[g].productInfo.stock?d[g].numAdd=!0:d[g].numAdd=!1,d[g].attrStatus?(d[g].checked=!0,f.push(d[g].id)):d[g].checked=!1;r.$set(r.cartList,"valid",d),r.selectValue=f,p=d.filter((function(t){return t.attrStatus})),r.isAllSelect=p.length==f.length&&p.length,r.switchSelect();case 18:u++,n.next=3;break;case 21:r.loading=!1,i.canShow=!0,t.hideLoading();case 24:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}());case 4:case"end":return n.stop()}}),n)})))()})),(0,s.default)(r,"getInvalidList",(function(){var t=this;if(this.loadendInvalid)return!1;if(this.loadingInvalid)return!1;var e={page:t.pageInvalid,limit:t.limitInvalid,status:0};(0,u.getCartList)(e).then((function(e){var i=e.data,a=i.invalid,n=a.length<t.limitInvalid,r=t.$util.SplitArray(a,t.cartList.invalid);t.$set(t.cartList,"invalid",r),t.loadendInvalid=n,t.loadTitleInvalid=n?t.$t("我也是有底线的"):t.$t("加载更多"),t.pageInvalid=t.pageInvalid+1,t.loadingInvalid=!1})).catch((function(e){t.loadingInvalid=!1,t.loadTitleInvalid=t.$t("加载更多")}))})),(0,s.default)(r,"getHostProduct",(function(){var t=this;t.hotScroll||(0,l.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))})),(0,s.default)(r,"goodsOpen",(function(){this.goodsHidden=!this.goodsHidden})),(0,s.default)(r,"goRouter",(function(e){var i=getCurrentPages(),a=i[i.length-1].$page.fullPath;e.link!=a&&t.switchTab({url:e.link,fail:function(i){t.redirectTo({url:e.link})}})})),(0,s.default)(r,"manage",(function(){var t=this;t.footerswitch=!t.footerswitch;var e=[],i=[],a=t.cartList.valid.map((function(a){return t.footerswitch?a.attrStatus?a.checked&&e.push(a.id):(a.checked=!1,i.push(a)):a.checked&&e.push(a.id),a}));t.cartList.valid=a,t.footerswitch?t.isAllSelect=a.length===e.length+i.length:t.isAllSelect=a.length===e.length,t.selectValue=e,t.switchSelect()})),(0,s.default)(r,"unsetCart",(function(){for(var t=this,e=[],i=0,a=t.cartList.invalid.length;i<a;i++)e.push(t.cartList.invalid[i].id);(0,u.cartDel)(e).then((function(e){t.$util.Tips({title:t.$t("清除成功")}),t.$set(t.cartList,"invalid",[]),t.getCartNum()})).catch((function(t){}))})),r),onReachBottom:function(){this.loadend&&this.getInvalidList(),0==this.cartList.valid.length&&0==this.cartList.invalid.length&&this.getHostProduct()},onPageScroll:function(e){t.$emit("scroll")}};e.default=m}).call(this,i("543d")["default"],i("bc2e")["default"])},"9a57":function(t,e,i){"use strict";i.r(e);var a=i("7a05"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a75c:function(t,e,i){"use strict";var a=i("3ffa"),n=i.n(a);n.a},d488:function(t,e,i){"use strict";i.r(e);var a=i("6534"),n=i("9a57");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("a75c");var c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"a36bfbb8",null,!1,a["a"],void 0);e["default"]=s.exports},e611:function(t,e,i){"use strict";(function(t,e){var a=i("4ea4");i("4789");a(i("66fd"));var n=a(i("d488"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(n.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])}},[["e611","common/runtime","common/vendor"]]]);