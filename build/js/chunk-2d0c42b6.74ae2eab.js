(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c42b6"],{"3a4f":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"category"};function l(e,t,n,l,c,r){var i=Object(a["resolveComponent"])("page-search"),p=Object(a["resolveComponent"])("page-content");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(i,{searchConfig:e.searchFormConfig,onQueryBtnClick:e.handleQueryClick,onResetBtnClick:e.handleResetClick},null,8,["searchConfig","onQueryBtnClick","onResetBtnClick"]),Object(a["createVNode"])(p,{ref:"pageContentRef",pageName:"category",contentConfig:e.contentTableConfig},null,8,["contentConfig"])])}var c=n("3835"),r=n("fe8c"),i=n("3573"),p=n("b120"),d={formItems:[{field:"name",type:"input",label:"类别名称",placeHolder:"请输入类别名称",rules:[]},{field:"createAt",type:"datepicker",label:"创建时间",rules:[],otherOption:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}],labelWidth:"100px",itemStyle:{padding:"10px 40px"}},s={title:"类别列表",propList:[{prop:"name",label:"角色名称",minWidth:"120"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"create"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"update"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0},C=Object(a["defineComponent"])({name:"category",components:{PageSearch:r["a"],PageContent:i["a"]},setup:function(){var e=Object(p["a"])(),t=Object(c["a"])(e,3),n=t[0],a=t[1],o=t[2];return{searchFormConfig:d,contentTableConfig:s,pageContentRef:n,handleQueryClick:a,handleResetClick:o}}});C.render=l;t["default"]=C}}]);
//# sourceMappingURL=chunk-2d0c42b6.74ae2eab.js.map