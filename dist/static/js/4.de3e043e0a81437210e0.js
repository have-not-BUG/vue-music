webpackJsonp([4],{559:function(e,t,n){function o(e){n(616)}var i=n(10)(n(585),n(629),o,"data-v-5ddb4135",null);e.exports=i.exports},575:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(197),i=n(199),r=n.n(i);t.default={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,i=this.$refs.slider.clientWidth,r=0;r<this.children.length;r++){var d=this.children[r];n.i(o.b)(d,"slider-item"),d.style.width=i+"px",t+=i}this.loop&&!e&&(t+=2*i),this.$refs.sliderGroup.style.width=t+"px"},_initDots:function(){this.dots=new Array(this.children.length)},_initSlider:function(){var e=this;this.slider=new r.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400}}),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX;e.loop&&(t-=1),e.currentPageIndex=t,e.autoPlay&&(clearTimeout(e.timer),e._sliderPlay())})},_sliderPlay:function(){var e=this,t=this.currentPageIndex+1;this.loop&&(t+=1),this.timer=setTimeout(function(){e.slider.goToPage(t,0,400)},this.interval)}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._sliderPlay()},20),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},destroyed:function(){clearTimeout(this.timer)}}},576:function(e,t,n){"use strict";function o(){var e=c()({},l.c,{platform:"yqq",needNewCode:0,outCharset:"utf-8",jsonpCallback:"getPlaylistTags"});return n.i(A.a)("https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg",e,l.d)}function i(e){var t=c()({},l.c,{picmid:1,rnd:.5334892526345625,g_tk:814876556,outCharset:"utf-8",platform:"yqq",needNewCode:0,categoryId:e,sortId:5,sin:0,ein:29});return C.a.get("/api/getQQDissByTagProxy",{params:t}).then(function(e){return s.a.resolve(e.data)}).catch(function(e){console.log("获取QQ音乐分类标签歌单详情数据出错getQQDissByTagProxy",e)})}function r(e){var t={cat:e};return C.a.get("/api/getWYDissByTagProxy",{params:t}).then(function(e){return s.a.resolve(e.data)}).catch(function(e){console.log("获取网易音乐分类标签歌单详情数据出错getWYDissByTagProxy",e)})}t.c=o,t.a=i,t.b=r;var d=n(67),s=n.n(d),a=n(66),c=n.n(a),A=n(127),l=n(64),m=n(126),C=n.n(m)},580:function(e,t,n){t=e.exports=n(557)(!0),t.push([e.i,'.slider[data-v-5148cdce]{min-height:1px;position:relative;overflow:hidden}.slider .slider-group[data-v-5148cdce]{overflow:hidden;white-space:nowrap}.slider .slider-group[data-v-5148cdce]:after{content:"";display:block;clear:both}.slider .slider-group .slider-item[data-v-5148cdce]{float:left;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center}.slider .slider-group .slider-item img[data-v-5148cdce]{width:100%;display:block}.slider .dots[data-v-5148cdce]{position:absolute;bottom:6px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.slider .dots .dot[data-v-5148cdce]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:3px;margin:0 2.5px;display:inline-block;border-radius:2.5px;background-color:hsla(0,0%,56%,.8)}.slider .dots .dot.active[data-v-5148cdce]{background-color:#ffcd32}',"",{version:3,sources:["C:/vueMusic/src/base/slider/slider.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,kBAAmB,AACnB,eAAiB,CAClB,AACD,uCACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,6CACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,oDACE,WAAY,AACZ,gBAAiB,AACjB,8BAA+B,AACvB,sBAAuB,AAC/B,iBAAmB,CACpB,AACD,wDACE,WAAY,AACZ,aAAe,CAChB,AACD,+BACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,oCACE,8BAA+B,AACvB,sBAAuB,AAC/B,YAAa,AACb,eAAgB,AAChB,qBAAsB,AACtB,oBAAqB,AACrB,kCAAwC,CACzC,AACD,2CACE,wBAA0B,CAC3B",file:"slider.vue",sourcesContent:['\n.slider[data-v-5148cdce] {\n  min-height: 1px;\n  position: relative;\n  overflow: hidden;\n}\n.slider .slider-group[data-v-5148cdce] {\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slider-group[data-v-5148cdce]:after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.slider .slider-group .slider-item[data-v-5148cdce] {\n  float: left;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n}\n.slider .slider-group .slider-item img[data-v-5148cdce] {\n  width: 100%;\n  display: block;\n}\n.slider .dots[data-v-5148cdce] {\n  position: absolute;\n  bottom: 6px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.slider .dots .dot[data-v-5148cdce] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 3px;\n  margin: 0 2.5px;\n  display: inline-block;\n  border-radius: 2.5px;\n  background-color: rgba(144,144,144,0.8);\n}\n.slider .dots .dot.active[data-v-5148cdce] {\n  background-color: #ffcd32;\n}'],sourceRoot:""}])},581:function(e,t,n){var o=n(580);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(558)("4ea9fd32",o,!0)},582:function(e,t,n){function o(e){n(581)}var i=n(10)(n(575),n(583),o,"data-v-5148cdce",null);e.exports=i.exports},583:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"dots"},e._l(e.dots,function(t,o){return n("span",{staticClass:"dot",class:{active:e.currentPageIndex===o}})}))])},staticRenderFns:[]}},585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(38),i=n.n(o),r=n(582),d=n.n(r),s=n(65),a=n.n(s),c=n(196),A=n.n(c),l=n(576),m=n(64),C=n(89),p=n(33);t.default={mixins:[C.c],data:function(){return{recommends:[],hotSongList:[]}},computed:i()({},n.i(p.a)(["category","musicSourceData"])),components:{Slider:d.a,Scroll:a.a,Loading:A.a},methods:i()({goBack:function(){this.$router.back()},chooseItem:function(e){"1"===this.musicSourceData&&(this.setDisc(e),this.$router.push({path:"/category/"+this.category.categoryId+"/"+e.dissid})),"2"===this.musicSourceData&&(this.setDisc(e),this.$router.push({path:"/category/"+this.category.categoryName+"/"+e.id}))},handlePlayList:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},_getQQDissByTag:function(){var e=this;if(!this.category.categoryId)return void this.$router.push("/category");n.i(l.a)(this.category.categoryId).then(function(t){t.code===m.a?e.hotSongList=t.data.list:(console.log("getQQDissByTag里的res.code 不为0"),alert("获取QQ分类数据异常，请刷新重试或联系本人"))}).catch(function(e){console.log("获取QQ音乐标签歌单详情出错了，请刷新重试或者联系本人",e),alert("获取QQ音乐标签歌单详情出错了，请刷新重试或者联系本人",e)})},_getWYDissByTag:function(){var e=this;if(!this.category.categoryName)return void this.$router.push("/category");n.i(l.b)(this.category.categoryName).then(function(t){t.code===m.b?e.hotSongList=t.playlists:(console.log("getWYDissByTag里的res.code 不为0"),alert("获取网易分类数据异常，请刷新重试或联系本人"))}).catch(function(e){console.log("获取网易音乐标签歌单详情出错了，请刷新重试或者联系本人",e),alert("获取网易音乐标签歌单详情出错了，请刷新重试或者联系本人",e)})}},n.i(p.b)({setDisc:"SET_DISC"})),created:function(){"1"===this.musicSourceData&&this._getQQDissByTag(),"2"===this.musicSourceData&&this._getWYDissByTag()}}},604:function(e,t,n){t=e.exports=n(557)(!0),t.push([e.i,".recommend[data-v-5ddb4135]{position:fixed;width:100%;top:0;bottom:0;background:#063;-webkit-box-sizing:border-box;box-sizing:border-box}.recommend .recommend-content[data-v-5ddb4135]{height:100%;overflow:hidden}.recommend .recommend-content div .slider-wrapper[data-v-5ddb4135]{position:relative;width:100%;overflow:hidden}.recommend .recommend-content div .recommend-list[data-v-5ddb4135]{position:relative}.recommend .recommend-content div .recommend-list .recommend-list-title[data-v-5ddb4135]{text-align:center;color:#ffcd32}.recommend .recommend-content div .recommend-list .recommend-list-title h1[data-v-5ddb4135]{height:40px;line-height:40px;font-size:18px;position:relative;background-color:#063}.recommend .recommend-content div .recommend-list .recommend-list-title h1 .icon-back[data-v-5ddb4135]{font-size:22px;position:absolute;left:25px;top:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.recommend .recommend-content div .recommend-list .song-list-ul[data-v-5ddb4135]{padding:0 15px}.recommend .recommend-content div .recommend-list .song-list-ul li[data-v-5ddb4135]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px 0}.recommend .recommend-content div .recommend-list .song-list-ul li img[data-v-5ddb4135]{width:60px;height:60px;margin-right:10px}.recommend .recommend-content div .recommend-list .song-list-ul li p[data-v-5ddb4135]{color:hsla(0,0%,100%,.8);font-size:12px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.recommend .recommend-content .clone-title[data-v-5ddb4135]{position:fixed;top:0;left:0;text-align:center;color:#ffcd32;width:100%;background-color:#174}.recommend .recommend-content .clone-title h1[data-v-5ddb4135]{height:40px;line-height:40px;font-size:18px;position:relative}.recommend .recommend-content .clone-title h1 .icon-back[data-v-5ddb4135]{font-size:22px;position:absolute;left:25px;top:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.recommend .recommend-content .loading-wrapper[data-v-5ddb4135]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}","",{version:3,sources:["C:/vueMusic/src/components/category-detail/category-detail.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,WAAY,AACZ,MAAO,AACP,SAAU,AACV,gBAAiB,AAEjB,8BAA+B,AACvB,qBAAuB,CAChC,AACD,+CACE,YAAa,AACb,eAAiB,CAElB,AACD,mEACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAElB,AACD,mEACE,iBAAmB,CAEpB,AACD,yFACE,kBAAmB,AACnB,aAAe,CAChB,AACD,4FACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,kBAAmB,AACnB,qBAAuB,CACxB,AACD,uGACE,eAAgB,AAChB,kBAAmB,AACnB,UAAW,AACX,MAAO,AACP,kCAAqC,AAC7B,yBAA6B,CACtC,AACD,iFACE,cAAgB,CACjB,AACD,oFACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,aAAe,CAChB,AACD,wFACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,sFACE,yBAA6B,AAC7B,eAAgB,AAChB,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,4DACE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,qBAAuB,CACxB,AACD,+DACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,iBAAmB,CACpB,AACD,0EACE,eAAgB,AAChB,kBAAmB,AACnB,UAAW,AACX,MAAO,AACP,kCAAqC,AAC7B,yBAA6B,CACtC,AACD,gEACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACjC,8BAAiC,CAC1C",file:"category-detail.vue",sourcesContent:["\n.recommend[data-v-5ddb4135] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  background: #063;\n/*border 1px solid #fff*/\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.recommend .recommend-content[data-v-5ddb4135] {\n  height: 100%;\n  overflow: hidden;\n/*border 1px solid red*/\n}\n.recommend .recommend-content div .slider-wrapper[data-v-5ddb4135] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n/*border 1px solid green*/\n}\n.recommend .recommend-content div .recommend-list[data-v-5ddb4135] {\n  position: relative;\n/*border 1px solid blue*/\n}\n.recommend .recommend-content div .recommend-list .recommend-list-title[data-v-5ddb4135] {\n  text-align: center;\n  color: #ffcd32;\n}\n.recommend .recommend-content div .recommend-list .recommend-list-title h1[data-v-5ddb4135] {\n  height: 40px;\n  line-height: 40px;\n  font-size: 18px;\n  position: relative;\n  background-color: #063;\n}\n.recommend .recommend-content div .recommend-list .recommend-list-title h1 .icon-back[data-v-5ddb4135] {\n  font-size: 22px;\n  position: absolute;\n  left: 25px;\n  top: 0;\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%);\n}\n.recommend .recommend-content div .recommend-list .song-list-ul[data-v-5ddb4135] {\n  padding: 0 15px;\n}\n.recommend .recommend-content div .recommend-list .song-list-ul li[data-v-5ddb4135] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 15px 0;\n}\n.recommend .recommend-content div .recommend-list .song-list-ul li img[data-v-5ddb4135] {\n  width: 60px;\n  height: 60px;\n  margin-right: 10px;\n}\n.recommend .recommend-content div .recommend-list .song-list-ul li p[data-v-5ddb4135] {\n  color: rgba(255,255,255,0.8);\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.recommend .recommend-content .clone-title[data-v-5ddb4135] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  color: #ffcd32;\n  width: 100%;\n  background-color: #174;\n}\n.recommend .recommend-content .clone-title h1[data-v-5ddb4135] {\n  height: 40px;\n  line-height: 40px;\n  font-size: 18px;\n  position: relative;\n}\n.recommend .recommend-content .clone-title h1 .icon-back[data-v-5ddb4135] {\n  font-size: 22px;\n  position: absolute;\n  left: 25px;\n  top: 0;\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%);\n}\n.recommend .recommend-content .loading-wrapper[data-v-5ddb4135] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}"],sourceRoot:""}])},616:function(e,t,n){var o=n(604);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(558)("5fc343d0",o,!0)},629:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.hotSongList}},[n("div",[n("div",{staticClass:"recommend-list"},[n("div",{staticClass:"recommend-list-title"},[n("h1")]),e._v(" "),"1"===e.musicSourceData?n("ul",{staticClass:"song-list-ul"},e._l(e.hotSongList,function(t){return n("li",{on:{click:function(n){e.chooseItem(t)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{alt:t.dissname}}),e._v(" "),n("p",{domProps:{innerHTML:e._s(t.dissname)}})])})):e._e(),e._v(" "),"2"===e.musicSourceData?n("ul",{staticClass:"song-list-ul"},e._l(e.hotSongList,function(t){return n("li",{on:{click:function(n){e.chooseItem(t)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.coverImgUrl,expression:"item.coverImgUrl"}],attrs:{alt:t.name}}),e._v(" "),n("p",{domProps:{innerHTML:e._s(t.name)}})])})):e._e()])]),e._v(" "),n("div",{staticClass:"clone-title"},[n("h1",[n("i",{staticClass:"icon-back",on:{click:e.goBack}}),e._v(e._s(e.category.categoryName)+"推荐歌单")])]),e._v(" "),e.hotSongList.length?e._e():n("div",{staticClass:"loading-wrapper"},[n("loading")],1)]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.de3e043e0a81437210e0.js.map