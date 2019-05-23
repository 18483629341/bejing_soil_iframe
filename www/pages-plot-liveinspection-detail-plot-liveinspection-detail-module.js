(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plot-liveinspection-detail-plot-liveinspection-detail-module"],{

/***/ "./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PlotLiveinspectionDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotLiveinspectionDetailPageModule", function() { return PlotLiveinspectionDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plot_liveinspection_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plot-liveinspection-detail.page */ "./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.page.ts");







var routes = [
    {
        path: '',
        component: _plot_liveinspection_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlotLiveinspectionDetailPage"]
    }
];
var PlotLiveinspectionDetailPageModule = /** @class */ (function () {
    function PlotLiveinspectionDetailPageModule() {
    }
    PlotLiveinspectionDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plot_liveinspection_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlotLiveinspectionDetailPage"]]
        })
    ], PlotLiveinspectionDetailPageModule);
    return PlotLiveinspectionDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>督察记录详情</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- 下拉刷新组件 -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\" mode='ios'>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid class=\"detail_table\" *ngIf=\"dataFlag\">\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">监督管理标题：</ion-col>\n      <ion-col class=\"right-text\">{{inspecterDetail.TITLE|| '--'}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">监督管理单位：</ion-col>\n      <ion-col class=\"right-text\">{{inspecterDetail.DEPTNAME || '--'}}</ion-col>\n    </ion-row>\n\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">效果评估报告附件：</ion-col>\n      <ion-col class=\"right-text\" >\n        <ion-list *ngIf=\"censusFileArr.length>0\">\n          <ion-item *ngFor=\"let item of censusFileArr\" lines=\"none\">\n            <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n          </ion-item>\n        </ion-list>\n        <p class=\"nofile\" *ngIf=\"censusFileArr.length==0\">暂无附件</p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">监督管理时间：</ion-col>\n      <ion-col class=\"right-text\">{{inspecterDetail.CREATE_DATE===\"- -\"?\"- -\":inspecterDetail.CREATE_DATE| date:'yyyy-MM-dd'}}</ion-col>\n    </ion-row>\n\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">督察情况：</ion-col>\n      <ion-col class=\"right-text\">{{inspecterDetail.SUGGEST || '--'}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">监测方案附件：</ion-col>\n      <ion-col class=\"right-text\">已安装</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"!dataFlag\" class=\"nodata\">暂无数据，请稍后再试！</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bsb3QtbGl2ZWluc3BlY3Rpb24tZGV0YWlsL3Bsb3QtbGl2ZWluc3BlY3Rpb24tZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.page.ts ***!
  \*************************************************************************************/
/*! exports provided: PlotLiveinspectionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotLiveinspectionDetailPage", function() { return PlotLiveinspectionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/public/app-update.service */ "./src/app/services/public/app-update.service.ts");
/* harmony import */ var _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PlotLiveinspectionDetailPage = /** @class */ (function () {
    function PlotLiveinspectionDetailPage(iab, global, configService, appUpdate, httpUtils, activatedRouted) {
        var _this = this;
        this.iab = iab;
        this.global = global;
        this.configService = configService;
        this.appUpdate = appUpdate;
        this.httpUtils = httpUtils;
        this.activatedRouted = activatedRouted;
        this.inspecterDetail = {}; //初步调查数据
        this.dataFlag = false; //是否拿到初步调查数据
        this.censusFileArr = []; // 报告附件列表
        this.activatedRouted.queryParams.subscribe(function (params) {
            _this.SUPERVISE_ID = params.SUPERVISE_ID;
        });
    }
    PlotLiveinspectionDetailPage.prototype.ngOnInit = function () {
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr();
    };
    PlotLiveinspectionDetailPage.prototype.ionViewWillEnter = function () {
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
     * 打开本地浏览器跳转对应网址
     * @param url 网址
     */
    PlotLiveinspectionDetailPage.prototype.openBrower = function (url) {
        if (url) {
            var browser = this.iab.create(url, '_system');
            browser.show();
        }
    };
    //初始化页面数据
    PlotLiveinspectionDetailPage.prototype.init = function () {
        var _this = this;
        this.global.plotInspectorList.map(function (item) {
            if (item.SUPERVISE_ID === _this.SUPERVISE_ID) {
                _this.inspecterDetail = item;
                // console.log(this.inspecterDetail);
                if (JSON.stringify(_this.inspecterDetail) !== "{}") {
                    _this.dataFlag = true;
                }
                else {
                    _this.dataFlag = false;
                }
            }
        });
    };
    /**
     * 获取所有的附件的数组
     * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
     */
    PlotLiveinspectionDetailPage.prototype.getAllFileArr = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        //let CENSUS = '58625234-0b18-4e39-9bef-c4515beb9617,a212f803-1af8-45d1-a0d6-a7cf669b85a6';
        //获取检查调查报告数组
        this.configService.getFile({ 'ids': this.inspecterDetail.CENSUS, 'sessionId': this.global.sessionId }, flag, function (res) {
            // console.log(res);
            if (res !== 'error') {
                _this.censusFileArr = res;
            }
        });
    };
    /**
     * 下载资料
     * @param item 对象
     */
    PlotLiveinspectionDetailPage.prototype.downFile = function (item) {
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
    PlotLiveinspectionDetailPage.prototype.doRefresh = function (event) {
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr(false);
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    PlotLiveinspectionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plot-liveinspection-detail',
            template: __webpack_require__(/*! ./plot-liveinspection-detail.page.html */ "./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.page.html"),
            styles: [__webpack_require__(/*! ./plot-liveinspection-detail.page.scss */ "./src/app/pages/plot-liveinspection-detail/plot-liveinspection-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__["AppUpdateService"],
            _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__["HttpUtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], PlotLiveinspectionDetailPage);
    return PlotLiveinspectionDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plot-liveinspection-detail-plot-liveinspection-detail-module.js.map