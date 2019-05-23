(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorites-favorites-module"],{

/***/ "./src/app/pages/favorites/favorites.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.module.ts ***!
  \*****************************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "./src/app/pages/favorites/favorites.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]
    }
];
var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>收藏夹</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list lines=\"inset\" class=\"list-box\" *ngIf=\"dataList.length>0\">\n    <ion-item-sliding *ngFor=\"let item of dataList\" (click)=\"goNextPage(item.SEEMINFO_ID)\">\n      <ion-item>\n        <ion-label>\n          <p>{{item.TITLE?item.TITLE:nodata}}</p>\n          <div>\n            <span>最新督查时间：</span>{{(item.CREATE_DATE | date:\"yyyy-MM-dd\")?(item.CREATE_DATE | date:\"yyyy-MM-dd\"):nodata}}\n          </div>\n          <div>\n            <span>督察次数：</span>{{item.NUM?item.NUM:nodata}}\n          </div>\n        </ion-label>\n        <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"cancel(item.SEEMINFO_ID)\">删除</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div *ngIf=\"dataList.length===0\" class=\"nodata\">暂无数据，请稍后再试！</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-box {\n  padding: 0; }\n  .list-box .item {\n    color: #333;\n    font-size: 14px;\n    --inner-border-width: 0 0 0.55px 0;\n    --border-color: #f4f4f4;\n    height: auto;\n    line-height: 1.6; }\n  .list-box p {\n    color: #222;\n    font-weight: bold;\n    margin-bottom: 8px; }\n  .list-box span {\n    color: #aaa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL0U6XFx3b3JrXFxwcm9qZWN0c1xcYmVpamluZ19zb2lsX2FwcDIwMTkwNTA1XFxCSldSQVBQL3NyY1xcYXBwXFxwYWdlc1xcZmF2b3JpdGVzXFxmYXZvcml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVSxFQUFBO0VBRGQ7SUFHUSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtDQUFxQjtJQUNyQix1QkFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQVJ4QjtJQVdRLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUFiMUI7SUFnQlEsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ib3h7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLml0ZW17XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4IDA7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.ts ***!
  \***************************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");






var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(configService, global, httpUtils, router) {
        this.configService = configService;
        this.global = global;
        this.httpUtils = httpUtils;
        this.router = router;
        this.dataList = []; // 列表数据
    }
    FavoritesPage.prototype.ngOnInit = function () {
        // 加载收藏的督察列表
        this.getListSupervise();
    };
    FavoritesPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
     * 加载收藏的督察列表
     * @param flag?  boolean  是否显示loading
     */
    FavoritesPage.prototype.getListSupervise = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        this.configService.getListSupervise({
            sessionId: this.global.sessionId,
            isCollection: 1,
            pageCount: 1,
            pageSize: 10
        }, flag, function (res) {
            //console.log(res);
            if (res !== 'error') {
                _this.dataList = res.list;
            }
        });
    };
    /**
     * 点击列表跳转
     * @param SEEMINFO_ID  地块ID
     */
    FavoritesPage.prototype.goNextPage = function (SEEMINFO_ID) {
        this.router.navigate(['plot-detail'], { queryParams: { id: SEEMINFO_ID } });
    };
    //点击收藏按钮
    FavoritesPage.prototype.cancel = function (plotId) {
        var _this = this;
        this.configService.doCollection({ 'sessionId': this.global.sessionId, 'seeminfoId': plotId }, false, function (res) {
            if (res.data !== 'error') {
                _this.httpUtils.thsToast("取消收藏成功");
            }
            else {
                _this.httpUtils.thsToast("取消收藏失败");
            }
        });
        //重新加载
        this.getListSupervise(true);
    };
    /**
     *下拉刷新事件
     * @param event 事件
     */
    FavoritesPage.prototype.doRefresh = function (event) {
        // 加载收藏的督察列表
        this.getListSupervise(false);
        setTimeout(function () {
            event.target.complete();
        }, 800);
    };
    FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.page.html */ "./src/app/pages/favorites/favorites.page.html"),
            styles: [__webpack_require__(/*! ./favorites.page.scss */ "./src/app/pages/favorites/favorites.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_public_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_5__["HttpUtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FavoritesPage);
    return FavoritesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-favorites-favorites-module.js.map