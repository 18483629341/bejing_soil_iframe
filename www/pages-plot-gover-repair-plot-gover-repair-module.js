(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plot-gover-repair-plot-gover-repair-module"],{

/***/ "./src/app/pages/plot-gover-repair/plot-gover-repair.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/plot-gover-repair/plot-gover-repair.module.ts ***!
  \*********************************************************************/
/*! exports provided: PlotGoverRepairPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotGoverRepairPageModule", function() { return PlotGoverRepairPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plot_gover_repair_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plot-gover-repair.page */ "./src/app/pages/plot-gover-repair/plot-gover-repair.page.ts");







var routes = [
    {
        path: '',
        component: _plot_gover_repair_page__WEBPACK_IMPORTED_MODULE_6__["PlotGoverRepairPage"]
    }
];
var PlotGoverRepairPageModule = /** @class */ (function () {
    function PlotGoverRepairPageModule() {
    }
    PlotGoverRepairPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plot_gover_repair_page__WEBPACK_IMPORTED_MODULE_6__["PlotGoverRepairPage"]]
        })
    ], PlotGoverRepairPageModule);
    return PlotGoverRepairPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plot-gover-repair/plot-gover-repair.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/plot-gover-repair/plot-gover-repair.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>治理与修复</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- 下拉刷新组件 -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\" mode='ios'>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid class=\"detail_table\" *ngIf=\"dataFlag\">\n      <ion-row justify-content-around>\n        <ion-col class=\"left-text\">报告标题：</ion-col>\n        <ion-col class=\"right-text\" style=\" line-height: 22px;\">{{repairInfo.CENSUS_TITLE||\"- -\"}}</ion-col>\n      </ion-row>\n      <ion-row justify-content-around>\n        <ion-col class=\"left-text\">报告编制单位：</ion-col>\n        <ion-col class=\"right-text\">{{repairInfo.CENSUS_UNIT||\"- -\"}}</ion-col>\n      </ion-row>\n      <ion-row justify-content-around>\n        <ion-col class=\"left-text\">完成时间：</ion-col>\n        <ion-col class=\"right-text\">{{repairInfo.CENSUS_END_TIMEE===null?\"- -\":(repairInfo.CENSUS_END_TIME| date:'yyyy-MM-dd')}}</ion-col>\n      </ion-row>\n      <ion-row justify-content-around>\n        <ion-col class=\"left-text\">治理与修复报告附件：</ion-col>\n        <ion-col class=\"right-text\" >\n            <ion-list *ngIf=\"censusFileArr.length>0\">\n              <ion-item *ngFor=\"let item of censusFileArr\" lines=\"none\">\n                <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n              </ion-item>\n            </ion-list>\n            <p class=\"nofile\" *ngIf=\"censusFileArr.length==0\">暂无附件</p>\n          </ion-col>\n      </ion-row>\n      <ion-row justify-content-around>\n        <ion-col class=\"left-text\">公示网址：</ion-col>\n        <ion-col class=\"right-text\">\n            <div *ngIf=\"repairInfo.CENSUS_PUBLIC_TYPE===1\">新增项目:\n              <p class=\"down-line\" (click)=\"openBrower(repairInfo.CENSUS_PUBLIC_URL)\">{{repairInfo.CENSUS_PUBLIC_URL}}</p>\n            </div>\n            <div *ngIf=\"repairInfo.CENSUS_PUBLIC_TYPE===0\">\n              <p class=\"down-line\" *ngFor=\"let item of historyEvilFileArr\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\">\n              {{item.FILENAME}}</p>\n            </div>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div *ngIf=\"!dataFlag\" class=\"nodata\">暂无数据，请稍后再试！</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plot-gover-repair/plot-gover-repair.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/plot-gover-repair/plot-gover-repair.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-start:10px;\n  --padding-end:10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxvdC1nb3Zlci1yZXBhaXIvRTpcXHdvcmtcXHByb2plY3RzXFxiZWlqaW5nX3NvaWxfYXBwMjAxOTA1MDVcXEJKV1JBUFAvc3JjXFxhcHBcXHBhZ2VzXFxwbG90LWdvdmVyLXJlcGFpclxccGxvdC1nb3Zlci1yZXBhaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbG90LWdvdmVyLXJlcGFpci9wbG90LWdvdmVyLXJlcGFpci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6MTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6MTBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/plot-gover-repair/plot-gover-repair.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/plot-gover-repair/plot-gover-repair.page.ts ***!
  \*******************************************************************/
/*! exports provided: PlotGoverRepairPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotGoverRepairPage", function() { return PlotGoverRepairPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/public/app-update.service */ "./src/app/services/public/app-update.service.ts");
/* harmony import */ var _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");







var PlotGoverRepairPage = /** @class */ (function () {
    function PlotGoverRepairPage(iab, global, configService, appUpdate, httpUtils) {
        this.iab = iab;
        this.global = global;
        this.configService = configService;
        this.appUpdate = appUpdate;
        this.httpUtils = httpUtils;
        this.repairInfo = {}; //治理与修复数据
        this.dataFlag = false; //是否拿到治理与修复数据
        this.data = {};
        this.censusFileArr = []; // 治理与修复报告附件列表
        this.historyEvilFileArr = []; // 历史项目列表
    }
    PlotGoverRepairPage.prototype.ngOnInit = function () {
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr();
    };
    PlotGoverRepairPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
     * 打开本地浏览器跳转对应网址
     * @param url 网址
     */
    PlotGoverRepairPage.prototype.openBrower = function (url) {
        if (url) {
            var browser = this.iab.create(url, '_system');
            browser.show();
        }
    };
    //初始化页面数据
    PlotGoverRepairPage.prototype.init = function () {
        this.data = this.global.plotDetailData;
        if (JSON.stringify(this.data) !== "{}") {
            this.repairInfo = this.data['repairInfo'];
            if (JSON.stringify(this.repairInfo) !== "{}") {
                this.dataFlag = true;
            }
            else {
                this.dataFlag = false;
            }
        }
    };
    /**
     * 获取所有的附件的数组
     * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
     */
    PlotGoverRepairPage.prototype.getAllFileArr = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        //let CENSUS = '58625234-0b18-4e39-9bef-c4515beb9617,a212f803-1af8-45d1-a0d6-a7cf669b85a6';
        //获取治理与修复报告数组
        this.configService.getFile({ 'ids': this.repairInfo.CENSUS, 'sessionId': this.global.sessionId }, flag, function (res) {
            // console.log(res);
            if (res !== 'error') {
                _this.censusFileArr = res;
            }
        });
        //如果公示网址对应 无新增项目
        if (this.repairInfo.CENSUS_PUBLIC_TYPE === 0) {
            //获取历史记录证明材料数组
            this.configService.getFile({ 'ids': this.repairInfo.CENSUS_PUBLIC_FILES, 'sessionId': this.global.sessionId }, flag, function (res) {
                // console.log(res);
                if (res !== 'error') {
                    _this.historyEvilFileArr = res;
                }
            });
        }
    };
    /**
    *下载资料
    * @param item 对象
    */
    PlotGoverRepairPage.prototype.downFile = function (item) {
        if (item.FILENAME) {
            //获取后缀名
            var fileSuffix = this.appUpdate.getFileSuffix(item.FILENAME);
            var downUrl = "" + this.global.hostUrl + this.global.downUrl + "?fileid=" + item.FILEID + "&sessionId=" + this.global.sessionId;
            this.appUpdate.downFile(downUrl, fileSuffix, item.FILENAME, item.FILESIZE);
        }
        else {
            this.httpUtils.thsToast('附件暂时无法下载！');
        }
    };
    /**
     *下拉刷新事件
     * @param event 事件
     */
    PlotGoverRepairPage.prototype.doRefresh = function (event) {
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr(false);
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    PlotGoverRepairPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plot-gover-repair',
            template: __webpack_require__(/*! ./plot-gover-repair.page.html */ "./src/app/pages/plot-gover-repair/plot-gover-repair.page.html"),
            styles: [__webpack_require__(/*! ./plot-gover-repair.page.scss */ "./src/app/pages/plot-gover-repair/plot-gover-repair.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__["AppUpdateService"],
            _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__["HttpUtilsService"]])
    ], PlotGoverRepairPage);
    return PlotGoverRepairPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plot-gover-repair-plot-gover-repair-module.js.map