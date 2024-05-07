"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5909],{9195:(v,g,i)=>{i.d(g,{g:()=>e});let e=(()=>{var u;class m{}return(u=m).catalogItems=[{id:1,name:"Chips",image:"https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800"},{id:2,name:"Tortilla",image:"https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Next-level-Spanish-tortilla-1a79751.jpg?quality=90&resize=556,505",isFavourite:!0,colour:"#afafaf"},{id:3,name:"Beans",image:"https://static01.nyt.com/images/2014/04/16/dining/16JPEASTER2/16JPEASTER2-superJumbo.jpg"},{id:4,name:"Potato",image:"https://www.allrecipes.com/thmb/qcZxB4VshYreKE0aOnocvXUlfUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24332-ultimate-twice-baked-potato-DDMFS-4x3-1643-94592bde74914b7498d59c19c2d5e5ab.jpg"},{id:5,name:"Ham",image:"https://urbanmerchants.co.uk/wp-content/uploads/2022/11/honey-roasted-ham-slices-main-500px.jpg"},{id:6,name:"Apple",image:"https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg",isFavourite:!0},{id:7,name:"Orange",image:"https://images.immediate.co.uk/production/volatile/sites/30/2017/06/oranges-85fb2b6.jpg?quality=90&resize=556,505",colour:"#48afdf"},{id:8,name:"Bacon",image:"https://assets.epicurious.com/photos/630386df4eaa77f49a537aa5/1:1/w_2560%2Cc_limit/Brown_Sugar_Bacon_RECIPE_081722_38635.jpg"},{id:9,name:"Burger",image:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg",isFavourite:!0},{id:10,name:"Chocolate things",isFolder:!0,colour:"rgb(5, 255, 26)",childIds:[2,3,4,5,6]},{id:11,name:"Jamon iberico"},{id:12,name:"Strawberry",colour:"#48afdf"},{id:13,name:"Frozen",image:"https://lh6.googleusercontent.com/proxy/iDA98JUgES3jkSOSH5NY7wKOhAQMkv8hjEo43BAoGWN_ihjxEUZ3V_JrOUFOag9ZN0UrF7TC1xxoY3odCpDLMhux7s-Z8cJCVMecAlxWng",isFolder:!0,isFavourite:!0,colour:"#48afdf",childIds:[7,8,9,10,6,5]},{id:14,name:"Toast"},{id:15,name:"Nuttella toast"},{id:16,name:"Jelly babies",image:"https://oldestsweetshop.co.uk/cdn/shop/products/jelly_babies_1_648x.jpg?v=1600869372"},{id:17,name:"Doritos"},{id:18,name:"Jam",image:"https://media-cdn2.greatbritishchefs.com/media/xhfjzhwv/img74897.whqc_768x512q80.jpg"},{id:19,name:"Eat the bird meal",isGroup:!0,image:"https://media-cdn2.greatbritishchefs.com/media/xhfjzhwv/img74897.whqc_768x512q80.jpg",colour:"#df4882"}],u.portions=[{id:1,name:"small",catalogItemId:1,carbs:100},{id:2,name:"medium",catalogItemId:1,carbs:200},{id:3,name:"large",catalogItemId:1,carbs:300}],m})()},8385:(v,g,i)=>{i.d(g,{g:()=>p});var e=i(4438),u=i(3819);function m(l,h){if(1&l&&(e.j41(0,"p")(1,"b"),e.EFF(2),e.k0s()()),2&l){const d=e.XpG();e.R7$(2),e.SpI("",d.selectedItems.length," items selected")}}function f(l,h){if(1&l&&(e.j41(0,"p")(1,"b"),e.EFF(2),e.k0s()()),2&l){const d=e.XpG();e.R7$(2),e.SpI("",d.selectedPortions.length," portions selected")}}let p=(()=>{var l;class h{constructor(t){this.modalController=t,this.title="Catalog",this.canAddItems=!1,this.canSelectItems=!1,this.canSelectPortions=!1,this.returnData={},this.selectedItems=[],this.selectedPortions=[]}ngOnInit(){}dismiss(){return this.modalController.dismiss(this.constructReturnData("dismiss"))}confirm(){return this.modalController.dismiss(this.constructReturnData("confirmSelection"))}itemSelected(t){-1==this.selectedItems.indexOf(t)&&this.selectedItems.push(t)}portionSelected(t){-1==this.selectedPortions.indexOf(t)&&this.selectedPortions.push(t)}constructReturnData(t){let a={...this.returnData};return a.returnedItems=this.selectedItems,a.returnedPortions=this.selectedPortions,a}}return(l=h).\u0275fac=function(t){return new(t||l)(e.rXU(u.W3))},l.\u0275cmp=e.VBU({type:l,selectors:[["app-food-catalog-modal"]],decls:23,vars:9,consts:[["catalog",""],["slot","end"],["color","medium",3,"click"],["name","close"],[3,"translucent"],["headerMode","none",3,"segmentChanged"],[3,"fullscreen"],[3,"onItemSelected","onPortionSelected","canAddItems","canSelectPortions","canSelectItems"],[3,"searchTermChanged"],[4,"ngIf"],[3,"click","strong"]],template:function(t,a){if(1&t){const n=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-buttons",1)(5,"ion-button",2),e.bIt("click",function(){return e.eBV(n),e.Njj(a.dismiss())}),e.nrm(6,"ion-icon",3),e.k0s()()()(),e.j41(7,"ion-header",4)(8,"app-food-catalog-header",5),e.bIt("segmentChanged",function(o){e.eBV(n);const r=e.sdS(11);return e.Njj(r.handleSegmentChanged(o))}),e.k0s()(),e.j41(9,"ion-content",6)(10,"app-food-catalog",7,0),e.bIt("onItemSelected",function(o){return e.eBV(n),e.Njj(a.itemSelected(o))})("onPortionSelected",function(o){return e.eBV(n),e.Njj(a.portionSelected(o))}),e.k0s()(),e.j41(12,"ion-footer")(13,"app-food-catalog-footer",8),e.bIt("searchTermChanged",function(o){e.eBV(n);const r=e.sdS(11);return e.Njj(r.handleSearchTermChanged(o))}),e.k0s()(),e.j41(14,"ion-footer")(15,"ion-toolbar"),e.DNE(16,m,3,1,"p",9)(17,f,3,1,"p",9),e.j41(18,"ion-buttons",1)(19,"ion-button",2),e.bIt("click",function(){return e.eBV(n),e.Njj(a.dismiss())}),e.EFF(20," Cancel "),e.k0s(),e.j41(21,"ion-button",10),e.bIt("click",function(){return e.eBV(n),e.Njj(a.confirm())}),e.EFF(22,"Confirm"),e.k0s()()()()}2&t&&(e.R7$(3),e.JRh(a.title),e.R7$(4),e.Y8G("translucent",!0),e.R7$(2),e.Y8G("fullscreen",!0),e.R7$(),e.Y8G("canAddItems",a.canAddItems)("canSelectPortions",a.canSelectPortions)("canSelectItems",a.canSelectItems),e.R7$(6),e.Y8G("ngIf",a.canSelectItems),e.R7$(),e.Y8G("ngIf",a.canSelectPortions),e.R7$(4),e.Y8G("strong",!0))}}),h})()},9275:(v,g,i)=>{i.d(g,{y:()=>p});var e=i(4412),u=i(4438),m=i(8581),f=i(2038);let p=(()=>{var l;class h{constructor(t,a){this.databaseService=t,this.loadingService=a,this.dataReady=new e.t(!1),this.subscriptions=[],this.setupTableData(),this.setupDefaultData(),this.subscribeToEvents()}restoreDefaultData(){return new Promise(t=>{this.deleteDefaultData().then(()=>(this.setupDefaultData(!0),t()))})}subscribeToEvents(){this.subscriptions.push(this.databaseService.$deleteDefaultData.subscribe(t=>{t&&this.loadingService.addToQueue(this.deleteDefaultData())})),this.subscriptions.push(this.databaseService.$restoreDefaultData.subscribe(t=>{t&&this.loadingService.addToQueue(this.restoreDefaultData())}))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}getAll(t){let a=this.getValidateTableName(t);return new Promise((n,s)=>{this.databaseService.getDatabase().then(o=>o.getAll(a)).then(o=>{n(o)})})}getAllForIndex(t,a,n){let s=this.getValidateTableName(n);return new Promise((o,r)=>{this.databaseService.getDatabase().then(c=>c.getAllFromIndex(s,t,a)).then(c=>o(c))})}getAllOrderedByIndex(t,a="asc",n){let s=this.getValidateTableName(n);return new Promise((o,r)=>{this.databaseService.getDatabase().then(c=>c.getAllFromIndex(s,t)).then(c=>(c="desc"===a?c.reverse():c,o(c)))})}getByKey(t,a){let n=this.getValidateTableName(a);return new Promise((s,o)=>{this.databaseService.getDatabase().then(r=>r.get(n,t)).then(r=>s(r))})}getPropertyByKey(t,a){return new Promise(n=>{this.getByKey(t).then(s=>{var o;return n(null!==(o=null==s?void 0:s[a])&&void 0!==o?o:void 0)})})}saveItemToDB(t,a="id"){let n,s=this.getValidateTableName();return new Promise(o=>{this.databaseService.getDatabase().then(r=>(n=r,t[a]?this.updateEntityInDB(n,t):this.createEntityInDB(n,t))).then(r=>n.get(s,r)).then(r=>(r||console.error("Tried to get saved item but not found"),o(r)))})}updateEntityInDB(t,a){let n=this.getValidateTableName();return t.put(n,a)}createEntityInDB(t,a){let n=this.getValidateTableName();return t.add(n,a)}deleteEntityFromDB(t){if(null==t)throw console.log("Error - tried to delete item with no id"),"Error - tried to delete item with no id";let a,n=this.getValidateTableName();return new Promise(s=>{this.databaseService.getDatabase().then(o=>(a=o,a.delete(n,t))).then(()=>{s()})})}getValidateTableName(t){let a=null!=t?t:this.tableName;return null==a&&console.error("Class extending AbstractDataService has not set tablename","this must be setup in the service constructor"),null!=a?a:"no valid name supplied"}}return(l=h).\u0275fac=function(t){return new(t||l)(u.KVO(m.BP),u.KVO(f.U))},l.\u0275prov=u.jDH({token:l,factory:l.\u0275fac,providedIn:"root"}),h})()},4569:(v,g,i)=>{i.d(g,{H:()=>t});var e=i(467),u=i(8581),m=i(9195),f=i(9275),p=i(8385),l=i(4438),h=i(3819),d=i(2038);let t=(()=>{var a;class n extends f.y{constructor(o,r,c){super(r,c),this.modalController=o,this.databaseService=r,this.loadingService=c}deleteDefaultData(){var o=this;let r=m.g.catalogItems;return new Promise(c=>{let _=0;r.forEach(function(){var D=(0,e.A)(function*(b){if(yield o.deleteEntityFromDB(b.id),_++,_>=r.length)return c()});return function(b){return D.apply(this,arguments)}}())})}setupTableData(){this.tableName=u.jj.CATALOG_ITEM}setupDefaultData(o){var r=this;return(0,e.A)(function*(){let c;r.databaseService.getDatabase().then(_=>(c=_,c.count(u.jj.CATALOG_ITEM))).then(_=>{_<=0||o?m.g.catalogItems.forEach(function(){var D=(0,e.A)(function*(b){yield r.createEntityInDB(c,b),m.g.catalogItems.indexOf(b)>=m.g.catalogItems.length-1&&r.dataReady.next(!0)});return function(b){return D.apply(this,arguments)}}()):r.dataReady.next(!0)})})()}openFoodCatalog(o){this.modalController.create({component:p.g,showBackdrop:!0,backdropDismiss:!1,canDismiss:(r,c)=>new Promise(_=>{o.callback&&o.callback(r),this.handleModalClosed(r),_(!0)}),componentProps:{title:o.title,canSelectItems:o.canSelectItems,canSelectPortions:o.canSelectPortions,canAddItems:o.canAddItems}}).then(r=>{r.present()})}handleModalClosed(o){}}return(a=n).\u0275fac=function(o){return new(o||a)(l.KVO(h.W3),l.KVO(u.BP),l.KVO(d.U))},a.\u0275prov=l.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),n})()},5293:(v,g,i)=>{i.d(g,{t:()=>h});var e=i(467),u=i(8581),m=i(9195),f=i(9275),p=i(4438),l=i(2038);let h=(()=>{var d;class t extends f.y{constructor(n,s){super(n,s),this.databaseService=n,this.loadingService=s}deleteDefaultData(){var n=this;let s=m.g.portions;return new Promise(o=>{let r=0;s.forEach(function(){var c=(0,e.A)(function*(_){if(yield n.deleteEntityFromDB(_.id),r++,r>=s.length)return o()});return function(_){return c.apply(this,arguments)}}())})}setupTableData(){this.tableName=u.jj.PORTION}setupDefaultData(n){var s=this;return(0,e.A)(function*(){var o;let r,c=null!==(o=s.tableName)&&void 0!==o?o:"ERROR",_=m.g.portions;s.databaseService.getDatabase().then(D=>(r=D,r.count(c))).then(D=>{D<=0||n?_.forEach(function(){var b=(0,e.A)(function*(E){yield s.createEntityInDB(r,E),_.indexOf(E)>=_.length-1&&s.dataReady.next(!0)});return function(E){return b.apply(this,arguments)}}()):s.dataReady.next(!0)})})()}}return(d=t).\u0275fac=function(n){return new(n||d)(p.KVO(u.BP),p.KVO(l.U))},d.\u0275prov=p.jDH({token:d,factory:d.\u0275fac,providedIn:"root"}),t})()}}]);