require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/components/verify/verify"],{4819:function(e,n,t){"use strict";var i=t("63af"),o=t.n(i);o.a},"58c9":function(e,n,t){},"63af":function(e,n,t){},cb91:function(e,n,t){"use strict";t.r(n);var i=t("f6bb"),o=t.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n["default"]=o.a},d505:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var i=function(){var e=this,n=e.$createElement,t=(e._self._c,parseInt(e.imgSize.width));e._isMounted||(e.e0=function(n){e.clickShow=!1}),e.$mp.data=Object.assign({},{$root:{m0:t}})},o=[]},ebc6:function(e,n,t){"use strict";var i=t("58c9"),o=t.n(i);o.a},f628:function(e,n,t){"use strict";t.r(n);var i=t("d505"),o=t("cb91");for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("ebc6"),t("4819");var c=t("f0c5"),a=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=a.exports},f6bb:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"Vue2Verify",props:{captchaType:{type:String,required:!0},figure:{type:Number},arith:{type:Number},mode:{type:String,default:"pop"},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object,default:function(){return{width:"50px",height:"50px"}}},barSize:{type:Object}},data:function(){return{clickShow:!1,verifyType:void 0,componentType:void 0,defaultImg:""}},mounted:function(){this.uuid()},methods:{success:function(e){this.$emit("success",e)},uuid:function(){for(var n=[],t=0;t<36;t++)n[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);n[14]="4",n[19]="0123456789abcdef".substr(3&n[19]|8,1),n[8]=n[13]=n[18]=n[23]="-";var i="slider-"+n.join(""),o="point-"+n.join("");e.getStorageSync("slider")||e.setStorageSync("slider",i),e.getStorageSync("point")||e.setStorageSync("point",o)},refresh:function(){this.instance.refresh&&this.instance.refresh()},show:function(){"pop"==this.mode&&(this.clickShow=!0)},hide:function(){"pop"==this.mode&&(this.clickShow=!1)}},computed:{instance:function(){return this.$refs.instance||{}},showBox:function(){return"pop"!=this.mode||this.clickShow}},watch:{captchaType:{immediate:!0,handler:function(e){switch(e.toString()){case"blockPuzzle":this.verifyType="2",this.componentType="VerifySlide";break;case"clickWord":this.verifyType="",this.componentType="VerifyPoints";break}}}},components:{VerifySlide:function(){Promise.all([t.e("common/vendor"),t.e("pages/annex/common/vendor"),t.e("pages/annex/components/verify/verifySlider/verifySlider")]).then(function(){return resolve(t("3258"))}.bind(null,t)).catch(t.oe)},VerifyPoint:function(){Promise.all([t.e("common/vendor"),t.e("pages/annex/common/vendor"),t.e("pages/annex/components/verify/verifyPoint/verifyPoint")]).then(function(){return resolve(t("6a64"))}.bind(null,t)).catch(t.oe)},verifySliderPc:function(){Promise.all([t.e("common/vendor"),t.e("pages/annex/common/vendor"),t.e("pages/annex/components/verify/verifySlider/verifySliderPc")]).then(function(){return resolve(t("d34e"))}.bind(null,t)).catch(t.oe)}}};n.default=i}).call(this,t("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/annex/components/verify/verify-create-component',
    {
        'pages/annex/components/verify/verify-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f628"))
        })
    },
    [['pages/annex/components/verify/verify-create-component']]
]);