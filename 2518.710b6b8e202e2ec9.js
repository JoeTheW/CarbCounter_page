"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2518],{2518:(O,u,l)=>{l.r(u),l.d(u,{ViewEntriesPageModule:()=>G});var c=l(177),P=l(4341),i=l(3819),f=l(9858),_=l(8581),e=l(4438),E=l(7225),F=l(2038),w=l(9385);let C=(()=>{var n;class a{transform(o,r=0,p="down"){return("down"===p?Math.floor:Math.ceil)(o*10**r)/10**r}}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275pipe=e.EJ8({name:"toFixed",type:n,pure:!0}),a})();function v(n,a){if(1&n){const t=e.RV6();e.j41(0,"ion-button",6),e.bIt("click",function(){e.eBV(t);const r=e.XpG(2);return e.Njj(r.incrementPage(-1))}),e.nrm(1,"ion-icon",7),e.k0s()}}function I(n,a){if(1&n){const t=e.RV6();e.j41(0,"ion-button",6),e.bIt("click",function(){e.eBV(t);const r=e.XpG(2);return e.Njj(r.incrementPage(1))}),e.nrm(1,"ion-icon",8),e.k0s()}}function j(n,a){if(1&n&&(e.j41(0,"ion-toolbar")(1,"ion-row",1)(2,"ion-col",2),e.DNE(3,v,2,0,"ion-button",3),e.k0s(),e.j41(4,"ion-col",4)(5,"p"),e.EFF(6),e.nI1(7,"toFixed"),e.k0s()(),e.j41(8,"ion-col",5),e.DNE(9,I,2,0,"ion-button",3),e.k0s()()()),2&n){let t;const o=e.XpG();e.R7$(3),e.Y8G("ngIf",o.pageable.page-1>0),e.R7$(3),e.Lme("page ",o.pageable.page," of ",e.brH(7,4,o.pageable.totalElements?o.pageable.totalElements/o.pageable.size:o.pageable.page,0,"up"),""),e.R7$(3),e.Y8G("ngIf",(null!==(t=o.pageable.totalElements)&&void 0!==t?t:o.pageable.size)>o.pageable.page*o.pageable.size)}}let V=(()=>{var n;class a{constructor(){this.pageableChange=new e.bkB,this.onPageChanged=new e.bkB}ngOnInit(){}incrementPage(o){this.pageable.page+=o,this.pageableChange.emit(this.pageable),this.onPageChanged.emit(this.pageable)}}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["app-paging"]],inputs:{pageable:"pageable"},outputs:{pageableChange:"pageableChange",onPageChanged:"onPageChanged"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"flex","justify-content-between"],[1,"flex","justify-content-start"],["fill","clear",3,"click",4,"ngIf"],[1,"flex","justify-content-center"],[1,"flex","justify-content-end"],["fill","clear",3,"click"],["color","medium","slot","icon-only","name","chevron-back"],["color","medium","slot","icon-only","name","chevron-forward"]],template:function(o,r){1&o&&e.DNE(0,j,10,8,"ion-toolbar",0),2&o&&e.Y8G("ngIf",r.pageable)},dependencies:[c.bT,i.Jm,i.hU,i.iq,i.ln,i.ai,C]}),a})(),y=(()=>{var n;class a{constructor(o){this.datePipe=o}transform(o,r="EE",p="dd",s="MMM, hh:mm a"){const m=this.datePipe.transform(o,s),b=this.datePipe.transform(o,p);if(!b||!m)return"";const g=parseInt(b,10);let d="th";g%10==1&&11!==g?d="st":g%10==2&&12!==g?d="nd":g%10==3&&13!==g&&(d="rd");const h=this.datePipe.transform(o,r);return h?`${h} ${g}${d} ${m}`:""}}return(n=a).\u0275fac=function(o){return new(o||n)(e.rXU(c.vh,16))},n.\u0275pipe=e.EJ8({name:"ordinalDate",type:n,pure:!0}),a})();function R(n,a){if(1&n&&(e.j41(0,"ion-row")(1,"p"),e.EFF(2),e.k0s()()),2&n){const t=e.XpG().$implicit;e.R7$(2),e.JRh(t.note)}}function T(n,a){if(1&n&&(e.j41(0,"ion-card",12)(1,"ion-card-content",13),e.nrm(2,"app-portion",14),e.k0s()()),2&n){const t=a.$implicit;e.R7$(2),e.Y8G("portionId",t)("allowDBDeletion",!1)("allowEdit",!1)}}function $(n,a){if(1&n&&(e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-row")(3,"ion-card-subtitle"),e.EFF(4),e.nI1(5,"ordinalDate"),e.k0s()(),e.j41(6,"ion-row")(7,"ion-card-title"),e.EFF(8),e.k0s()()(),e.j41(9,"ion-card-content"),e.DNE(10,R,3,1,"ion-row",6),e.j41(11,"ion-row")(12,"h1"),e.EFF(13),e.k0s()(),e.j41(14,"ion-row")(15,"ion-accordion-group",7)(16,"ion-accordion",8)(17,"ion-item",9)(18,"ion-card-subtitle"),e.EFF(19),e.k0s()(),e.j41(20,"div",10),e.DNE(21,T,3,3,"ion-card",11),e.k0s()()()()()()),2&n){const t=a.$implicit;e.R7$(4),e.JRh(e.bMT(5,7,t.date)),e.R7$(4),e.JRh(t.name),e.R7$(2),e.Y8G("ngIf",t.note),e.R7$(3),e.SpI("Carbs: ",t.carbs,"g"),e.R7$(6),e.Lme("",t.portionIds.length," portion",t.portionIds.length>1?"s":"",""),e.R7$(2),e.Y8G("ngForOf",t.portionIds)}}const D=[{path:"",component:(()=>{var n;class a{constructor(o,r){this.foodLogService=o,this.loadingService=r,this.pageable={page:1,size:5}}ngOnInit(){this.loadFoodLogs()}loadFoodLogs(){this.loadingService.addToQueue(this.foodLogService.getAllOrderedByIndexPaged(_.$I.FOOD_LOG_TBL_DATE,this.pageable,"desc").then(o=>{this.foodLogs=o}))}pageChanged(o){this.loadFoodLogs()}}return(n=a).\u0275fac=function(o){return new(o||n)(e.rXU(E.i),e.rXU(F.U))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-view-entries"]],decls:11,vars:4,consts:[[3,"translucent"],["slot","start"],["size","large"],[3,"fullscreen"],[4,"ngFor","ngForOf"],[3,"pageableChange","onPageChanged","pageable"],[4,"ngIf"],[1,"w-full"],["value","first"],["slot","header"],["slot","content"],["class","portion-card",4,"ngFor","ngForOf"],[1,"portion-card"],[1,"no-padding"],[3,"portionId","allowDBDeletion","allowEdit"]],template:function(o,r){1&o&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-menu-button"),e.k0s(),e.j41(4,"ion-title",2),e.EFF(5,"Entries"),e.k0s()()(),e.j41(6,"ion-content",3),e.DNE(7,$,22,9,"ion-card",4),e.k0s(),e.j41(8,"ion-footer")(9,"ion-toolbar")(10,"app-paging",5),e.mxI("pageableChange",function(s){return e.DH7(r.pageable,s)||(r.pageable=s),s}),e.bIt("onPageChanged",function(s){return r.pageChanged(s)}),e.k0s()()()),2&o&&(e.Y8G("translucent",!0),e.R7$(6),e.Y8G("fullscreen",!0),e.R7$(),e.Y8G("ngForOf",r.foodLogs),e.R7$(3),e.R50("pageable",r.pageable))},dependencies:[c.Sq,c.bT,i.xk,i.YH,i.QW,i.b_,i.I9,i.ME,i.HW,i.tN,i.W9,i.M0,i.eU,i.uz,i.MC,i.ln,i.BC,i.ai,w.x,V,y]}),a})()}];let M=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[f.iI.forChild(D),f.iI]}),a})();var k=l(1815),x=l(4683);let G=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[c.MD,P.YN,i.bv,M,k.U,x.Y]}),a})()}}]);