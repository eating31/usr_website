"use strict";(globalThis["webpackChunkweb"]=globalThis["webpackChunkweb"]||[]).push([[190],{7704:(e,a,l)=>{l.d(a,{T:()=>m});var n=l(4587),t=l.n(n);function m(e){const a=t().map("leaflet-map").setView([25.056057,121.118849],14);t().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}).addTo(a),e.forEach((e=>{const l=`<div>\n      <a href="/#/longterm/${e.id}/${e.name}/${e.number}">\n        <b>${e.id}.${e.name}<br>(${e.number})</b>\n      </a></div>`,n="\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 20px;\n      height: 20px;\n      background-color: #4572B6;\n      border-radius: 50%;\n      color: white;\n      font-size: 12px;",m=t().divIcon({className:"custom-icon",html:`<span style="${n}">${e.id}</span>`});t().marker(e.local,{title:e.name,icon:m}).addTo(a).bindPopup(l)}))}},7557:(e,a,l)=>{l.d(a,{A:()=>t});var n=l(499);const t=(0,n.iH)([{id:1,name:"成功路二段之一 ",number:10605260677,local:[25.0428733,121.1059416]},{id:2,name:"工業七路之一 ",number:10605561745,local:[25.05554,121.1037596]},{id:3,name:"工業七路之二 ",number:10606216061,local:[25.0506438,121.1079635]},{id:4,name:"國建三路之一 ",number:10604019880,local:[25.0583648,121.1066816]},{id:5,name:"國建三路之二 ",number:10607619833,local:[25.0618705,121.1114958]},{id:6,name:"工業五路 ",number:10606080586,local:[25.0557956,121.116104]},{id:7,name:"經建七路 ",number:10606791192,local:[25.0637683,121.1137465]},{id:8,name:"經建六路之一 ",number:10600992447,local:[25.064804,121.1212996]},{id:9,name:"經建六路之二 ",number:10606521585,local:[25.0621433,121.1149825]},{id:10,name:"經建三路 ",number:10607952090,local:[25.0618571,121.1254425]},{id:11,name:"經建四路之一 ",number:10607724246,local:[25.059183,121.1168746]},{id:12,name:"經建四路之二 ",number:10603726902,local:[25.0614241,121.1223373]},{id:13,name:"經建三路 ",number:10599319281,local:[25.0588396,121.121315]},{id:14,name:"經建一路之一 ",number:10604686736,local:[25.0543936,121.1174926]},{id:15,name:"經建一路之二 ",number:10603668681,local:[25.0557211,121.1204756]},{id:16,name:"經建一路之三 ",number:10601302002,local:[25.057598,121.1250838]},{id:17,name:"經建二路 ",number:10605151824,local:[25.0607813,121.1258238]},{id:18,name:"工業二路之一 ",number:10605427617,local:[25.0678558,121.1239241]},{id:19,name:"工業二路之二 ",number:10607054865,local:[25.062601,121.128517]},{id:20,name:"工業一路 ",number:10605788250,local:[25.0664443,121.1277236]},{id:21,name:"成功路二段之二 ",number:10599287416,local:[25.060357,121.118849]},{id:22,name:"成功路二段之三 ",number:10602689216,local:[25.0476321,121.1123351]},{id:23,name:"成功路一段之一 ",number:10602868637,local:[25.0527686,121.1195296]},{id:24,name:"成功路一段之二 ",number:10612031741,local:[25.055072,121.127096]},{id:25,name:"榮工北路 ",number:10600397665,local:[25.0583228,121.1298293]},{id:26,name:"工業六路 ",number:10600025221,local:[25.0484313,121.1161726]},{id:27,name:"大同二路 ",number:10606666685,local:[25.0487823,121.1348036]},{id:28,name:"大同一路之一 ",number:10602079644,local:[25.0509241,121.1272353]},{id:29,name:"大同一路之二 ",number:10607422041,local:[25.0459708,121.1328581]},{id:30,name:"榮工南路 ",number:10601018051,local:[25.0529078,121.130432]}])},7190:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Z});var n=l(9835),t=l(6970);const m=(0,n._)("img",{src:"https://i.imgur.com/ERQf7FQ.png"},null,-1),i=(0,n._)("strong",null,"地點｜Locations",-1),r={class:"example-col-gutter-vertical text-bold"},o={class:"row q-col-gutter-y-none"},u=(0,n._)("img",{src:"https://i.imgur.com/ERQf7FQ.png"},null,-1),c=(0,n._)("strong",null,"地圖｜Map",-1),d=(0,n._)("div",{id:"leaflet-map",style:{width:"100%",height:"400px"}},null,-1);function s(e,a,l,s,b,p){const w=(0,n.up)("q-avatar"),g=(0,n.up)("q-item-section"),f=(0,n.up)("q-item-label"),_=(0,n.up)("q-item"),v=(0,n.up)("q-list"),q=(0,n.up)("q-separator"),h=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v,{separator:""},{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,{avatar:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{square:"",size:"md",class:"q-mt-sm"},{default:(0,n.w5)((()=>[m])),_:1})])),_:1}),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"text-subtitleText1 q-mt-md"},{default:(0,n.w5)((()=>[i])),_:1})])),_:1})])),_:1})])),_:1}),(0,n._)("div",r,[(0,n._)("div",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.titleList,(a=>((0,n.wg)(),(0,n.j4)(_,{key:a.id,onClick:l=>e.navigateToTitle(a.id,a.name,a.number),clickable:"",class:"col-4 my-content2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(a.id)+"."+(0,t.zw)(a.name)+"("+(0,t.zw)(a.number)+") ",1)])),_:2},1032,["onClick"])))),128))])]),(0,n.Wm)(q,{class:"q-itemider",size:"25px",color:"transparent"}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,{avatar:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{square:"",size:"md",class:"q-mt-sm"},{default:(0,n.w5)((()=>[u])),_:1})])),_:1}),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"text-subtitleText1 q-mt-md"},{default:(0,n.w5)((()=>[c])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(q,{class:"q-itemider",size:"15px",color:"transparent"}),(0,n._)("div",null,[(0,n.Wm)(v,{class:"q-ml-md q-mr-xl q-pr-md"},{default:(0,n.w5)((()=>[d])),_:1})]),(0,n.Wm)(q,{class:"q-itemider",size:"50px",color:"transparent"})])),_:1})}l(9665);var b=l(8339),p=l(7557),w=l(7704);const g=(0,n.aZ)({name:"LongTerm",setup(){const e=(0,b.tv)();(0,n.bv)((()=>{(0,w.T)(p.A.value)}));const a=(a,l,n)=>{e.push({name:"LongtermPicture",params:{id:a,name:l,number:n}})};return{titleList:p.A,navigateToTitle:a}}});var f=l(1639),_=l(9885),v=l(3246),q=l(490),h=l(1233),x=l(1357),W=l(3115),T=l(926),k=l(9984),Q=l.n(k);const z=(0,f.Z)(g,[["render",s]]),Z=z;Q()(g,"components",{QPage:_.Z,QList:v.Z,QItem:q.Z,QItemSection:h.Z,QAvatar:x.Z,QItemLabel:W.Z,QSeparator:T.Z})}}]);