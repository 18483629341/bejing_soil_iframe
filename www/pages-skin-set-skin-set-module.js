(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-skin-set-skin-set-module"],{

/***/ "./src/app/pages/skin-set/skin-set.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/skin-set/skin-set.module.ts ***!
  \***************************************************/
/*! exports provided: SkinSetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkinSetPageModule", function() { return SkinSetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _skin_set_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skin-set.page */ "./src/app/pages/skin-set/skin-set.page.ts");







var routes = [
    {
        path: '',
        component: _skin_set_page__WEBPACK_IMPORTED_MODULE_6__["SkinSetPage"]
    }
];
var SkinSetPageModule = /** @class */ (function () {
    function SkinSetPageModule() {
    }
    SkinSetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_skin_set_page__WEBPACK_IMPORTED_MODULE_6__["SkinSetPage"]]
        })
    ], SkinSetPageModule);
    return SkinSetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/skin-set/skin-set.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/skin-set/skin-set.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>皮肤设置</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group>\n      <ion-item>\n        <ion-label>\n          <span class=\"square blue-square\"></span>蓝色</ion-label>\n        <ion-radio mode=\"ios\" slot=\"end\" value=\"blue\" [checked]=\"skinName==='blue'\" (ionSelect)=\"select($event)\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <span class=\"square green-square\"></span>绿色</ion-label>\n        <ion-radio mode=\"ios\" slot=\"end\" value=\"green\" [checked]=\"skinName==='green'\" (ionSelect)=\"select($event)\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <span class=\"square orange-square\"></span>橙色</ion-label>\n        <ion-radio mode=\"ios\" slot=\"end\" value=\"orange\" [checked]=\"skinName==='orange'\" (ionSelect)=\"select($event)\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/skin-set/skin-set.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/skin-set/skin-set.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-block {\n  display: flex;\n  display: -moz-flex; }\n\n.flex1 {\n  flex: 1; }\n\nspan {\n  display: inline-block; }\n\n.square {\n  width: 16px;\n  height: 16px;\n  margin-right: 16px; }\n\n.blue-square {\n  background: #20A4EC; }\n\n.green-square {\n  background: #00c393; }\n\n.orange-square {\n  background: #FFA500; }\n\nion-radio {\n  --color:red; }\n\nion-radio[value=\"blue\"] {\n  --color-checked:#20A4EC; }\n\nion-radio[value=\"green\"] {\n  --color-checked:#00c393; }\n\nion-radio[value=\"orange\"] {\n  --color-checked:#FFA500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbi1zZXQvRTpcXHdvcmtcXHByb2plY3RzXFxiZWlqaW5nX3NvaWxfYXBwMjAxOTA1MDVcXEJKV1JBUFAvc3JjXFxhcHBcXHBhZ2VzXFxza2luLXNldFxcc2tpbi1zZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUViLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLE9BQU8sRUFBQTs7QUFFWDtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLFdBQVc7RUFDWCxZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBRUksV0FBUSxFQUFBOztBQUdaO0VBQ0ksdUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksdUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksdUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9za2luLXNldC9za2luLXNldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbn1cclxuLmZsZXgxe1xyXG4gICAgZmxleDogMTtcclxufVxyXG5zcGFue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc3F1YXJle1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6MTZweDtcclxuICAgIG1hcmdpbi1yaWdodDoxNnB4O1xyXG59XHJcbi5ibHVlLXNxdWFyZXtcclxuICAgIGJhY2tncm91bmQ6ICMyMEE0RUM7XHJcbn1cclxuXHJcbi5ncmVlbi1zcXVhcmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBjMzkzO1xyXG59XHJcblxyXG4ub3JhbmdlLXNxdWFyZXtcclxuICAgIGJhY2tncm91bmQ6ICNGRkE1MDA7XHJcbn1cclxuaW9uLXJhZGlve1xyXG4gICAgLy8gLS1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIC0tY29sb3I6cmVkO1xyXG59XHJcblxyXG5pb24tcmFkaW9bdmFsdWU9XCJibHVlXCJde1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiMyMEE0RUM7XHJcbn1cclxuXHJcbmlvbi1yYWRpb1t2YWx1ZT1cImdyZWVuXCJde1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiMwMGMzOTM7XHJcbn1cclxuXHJcbmlvbi1yYWRpb1t2YWx1ZT1cIm9yYW5nZVwiXXtcclxuICAgIC0tY29sb3ItY2hlY2tlZDojRkZBNTAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/skin-set/skin-set.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/skin-set/skin-set.page.ts ***!
  \*************************************************/
/*! exports provided: SkinSetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkinSetPage", function() { return SkinSetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");



var SkinSetPage = /** @class */ (function () {
    function SkinSetPage(statusBar) {
        this.statusBar = statusBar;
    }
    SkinSetPage.prototype.ngOnInit = function () {
    };
    SkinSetPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
        this.skinRgb = localStorage.getItem('skinRgb') || '20A4EC';
    };
    SkinSetPage.prototype.select = function (event) {
        this.skinName = event.target.getAttribute('value');
        switch (this.skinName) {
            case 'blue':
                this.skinRgb = '20A4EC';
                break;
            case 'green':
                this.skinRgb = '00c393';
                break;
            case 'orange':
                this.skinRgb = 'FFA500';
                break;
            default:
                this.skinRgb = '20A4EC';
        }
        localStorage.setItem('skinName', this.skinName);
        localStorage.setItem('skinRgb', this.skinRgb);
        // let status bar overlay webview
        //this.statusBar.overlaysWebView(true);
        // set status bar to white
        this.statusBar.backgroundColorByHexString(this.skinRgb);
    };
    SkinSetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skin-set',
            template: __webpack_require__(/*! ./skin-set.page.html */ "./src/app/pages/skin-set/skin-set.page.html"),
            styles: [__webpack_require__(/*! ./skin-set.page.scss */ "./src/app/pages/skin-set/skin-set.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], SkinSetPage);
    return SkinSetPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-skin-set-skin-set-module.js.map