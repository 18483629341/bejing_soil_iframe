(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Ziq1:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=t("mrSG"),o=t("ZZ/e"),i=t("LAMn"),r=function(){function n(n,l,t,u){this.alertController=n,this.nav=l,this.router=t,this.fingerprintAIO=u,this.isShow=!1,this.isToggle=!0}return n.prototype.ngOnInit=function(){this.decideShowToggle()},n.prototype.ionViewWillEnter=function(){this.skinName=localStorage.getItem("skinName")||"blue"},n.prototype.decideShowToggle=function(){var n=this;this.fingerprintAIO.isAvailable().then(function(l){n.isShow=!0}).catch(function(l){n.isToggle="Fingerprint authentication not ready"===l||"Not available\u6307\u7eb9\u4e0d\u53ef\u7528"===l}),this.getIsToggled()},n.prototype.getIsToggled=function(){var n=localStorage.getItem("isToggled");this.isToggle="true"===n},n.prototype.notify=function(n){var l=this;this.isToggle?this.fingerprintAIO.isAvailable().then(function(n){l.isToggle=!0,localStorage.setItem("isToggled",l.isToggle.toString())}).catch(function(n){"Fingerprint authentication not ready"!==n&&"Not available\u6307\u7eb9\u4e0d\u53ef\u7528"!==n||alert("\u60a8\u8fd8\u6ca1\u6709\u5f55\u5165\u6307\u7eb9\uff0c\u8bf7\u60a8\u5148\u5230\u624b\u673a\u8bbe\u7f6e\u4e2d\u53bb\u5f55\u5165\u6307\u7eb9"),l.isToggle=!1,localStorage.setItem("isToggled",l.isToggle.toString())}):(this.isToggle=!1,localStorage.setItem("isToggled",this.isToggle.toString()))},n.prototype.quit=function(){this.presentAlertConfirm("\u786e\u5b9a\u9000\u51fa\u767b\u5f55")},n.prototype.goSkin=function(){this.router.navigate(["skin-set"])},n.prototype.presentAlertConfirm=function(n){return e.b(this,void 0,void 0,function(){var l=this;return e.e(this,function(t){switch(t.label){case 0:return[4,this.alertController.create({message:n,buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(n){}},{text:"\u786e\u5b9a",handler:function(){l.nav.navigateRoot(["login"])}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n}(),b=function(){return function(){}}(),a=t("pMnS"),s=t("oBZk"),g=t("gIcY"),c=t("Ip0R"),h=t("ZYCi"),p=u.ob({encapsulation:0,styles:[[".login-btn[_ngcontent-%COMP%]{width:100%;height:46px;background:#e4e4e4;text-align:center;line-height:46px;color:#333;font-size:1.1rem;outline:0;margin-top:40px}"]],data:{}});function d(n){return u.Ib(0,[(n()(),u.qb(0,0,null,null,11,"ion-item",[],null,null,null,s.kb,s.s)),u.pb(1,49152,null,0,o.J,[u.h,u.k],null,null),(n()(),u.qb(2,0,null,0,2,"ion-label",[],null,null,null,s.lb,s.w)),u.pb(3,49152,null,0,o.P,[u.h,u.k],null,null),(n()(),u.Gb(-1,0,["\u6307\u7eb9\u5bc6\u7801"])),(n()(),u.qb(5,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==u.zb(n,6)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.zb(n,6)._handleIonChange(t.target.checked)&&e),"ngModelChange"===l&&(e=!1!==(o.isToggle=t)&&e),"ionChange"===l&&(e=!1!==o.notify(t)&&e),e},s.Bb,s.M)),u.pb(6,16384,null,0,o.d,[u.k],null,null),u.Db(1024,null,g.g,function(n){return[n]},[o.d]),u.pb(8,671744,null,0,g.l,[[8,null],[8,null],[8,null],[6,g.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Db(2048,null,g.h,null,[g.l]),u.pb(10,16384,null,0,g.i,[[4,g.h]],null,null),u.pb(11,49152,null,0,o.Cb,[u.h,u.k],null,null)],function(n,l){n(l,8,0,l.component.isToggle)},function(n,l){n(l,5,0,u.zb(l,10).ngClassUntouched,u.zb(l,10).ngClassTouched,u.zb(l,10).ngClassPristine,u.zb(l,10).ngClassDirty,u.zb(l,10).ngClassValid,u.zb(l,10).ngClassInvalid,u.zb(l,10).ngClassPending)})}function f(n){return u.Ib(0,[(n()(),u.qb(0,0,null,null,13,"ion-header",[],null,null,null,s.cb,s.n)),u.pb(1,49152,null,0,o.D,[u.h,u.k],null,null),(n()(),u.qb(2,0,null,0,11,"ion-toolbar",[],null,null,null,s.Cb,s.N)),u.pb(3,278528,null,0,c.i,[u.s,u.t,u.k,u.E],{ngClass:[0,"ngClass"]},null),u.Bb(4,{blue:0,green:1,orange:2}),u.pb(5,49152,null,0,o.Db,[u.h,u.k],null,null),(n()(),u.qb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.S,s.d)),u.pb(7,49152,null,0,o.n,[u.h,u.k],null,null),(n()(),u.qb(8,0,null,0,2,"ion-back-button",[["icon","ios-arrow-back"],["mode","ios"],["text",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.zb(n,10).onClick(t)&&e),e},s.Q,s.b)),u.pb(9,49152,null,0,o.i,[u.h,u.k],{mode:[0,"mode"],icon:[1,"icon"],text:[2,"text"]},null),u.pb(10,16384,null,0,o.j,[[2,o.jb],o.Jb],null,null),(n()(),u.qb(11,0,null,0,2,"ion-title",[],null,null,null,s.Ab,s.L)),u.pb(12,49152,null,0,o.Bb,[u.h,u.k],null,null),(n()(),u.Gb(-1,0,["\u8bbe\u7f6e"])),(n()(),u.qb(14,0,null,null,12,"ion-content",[],null,null,null,s.Z,s.k)),u.pb(15,49152,null,0,o.w,[u.h,u.k],null,null),(n()(),u.qb(16,0,null,0,8,"ion-list",[],null,null,null,s.mb,s.x)),u.pb(17,49152,null,0,o.Q,[u.h,u.k],null,null),(n()(),u.hb(16777216,null,0,1,null,d)),u.pb(19,16384,null,0,c.k,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(n()(),u.qb(20,0,null,0,4,"ion-item",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.goSkin()&&u),u},s.kb,s.s)),u.pb(21,49152,null,0,o.J,[u.h,u.k],null,null),(n()(),u.qb(22,0,null,0,2,"ion-label",[],null,null,null,s.lb,s.w)),u.pb(23,49152,null,0,o.P,[u.h,u.k],null,null),(n()(),u.Gb(-1,0,["\u7cfb\u7edf\u76ae\u80a4\u8bbe\u7f6e"])),(n()(),u.qb(25,0,null,0,1,"button",[["class","login-btn"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.quit()&&u),u},null,null)),(n()(),u.Gb(-1,null,["\u9000\u51fa\u767b\u5f55"]))],function(n,l){var t=l.component,u=n(l,4,0,"blue"===t.skinName,"green"===t.skinName,"orange"===t.skinName);n(l,3,0,u),n(l,9,0,"ios","ios-arrow-back",""),n(l,19,0,t.isShow)},null)}function k(n){return u.Ib(0,[(n()(),u.qb(0,0,null,null,1,"app-set-up",[],null,null,null,f,p)),u.pb(1,114688,null,0,r,[o.b,o.Jb,h.m,i.a],null,null)],function(n,l){n(l,1,0)},null)}var m=u.mb("app-set-up",r,k,{},{},[]);t.d(l,"SetUpPageModuleNgFactory",function(){return C});var C=u.nb(b,[],function(n){return u.wb([u.xb(512,u.j,u.cb,[[8,[a.a,m]],[3,u.j],u.x]),u.xb(4608,c.m,c.l,[u.u,[2,c.t]]),u.xb(4608,g.o,g.o,[]),u.xb(4608,o.c,o.c,[u.z,u.g]),u.xb(4608,o.Ib,o.Ib,[o.c,u.j,u.q,c.c]),u.xb(4608,o.Mb,o.Mb,[o.c,u.j,u.q,c.c]),u.xb(1073742336,c.b,c.b,[]),u.xb(1073742336,g.m,g.m,[]),u.xb(1073742336,g.d,g.d,[]),u.xb(1073742336,o.Fb,o.Fb,[]),u.xb(1073742336,h.n,h.n,[[2,h.t],[2,h.m]]),u.xb(1073742336,b,b,[]),u.xb(1024,h.k,function(){return[[{path:"",component:r}]]},[])])})}}]);