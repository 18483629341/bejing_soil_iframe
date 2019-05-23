(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plot-primary-research-plot-primary-research-module"],{

/***/ "./src/app/pages/plot-primary-research/plot-primary-research.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/plot-primary-research/plot-primary-research.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PlotPrimaryResearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotPrimaryResearchPageModule", function() { return PlotPrimaryResearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plot_primary_research_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plot-primary-research.page */ "./src/app/pages/plot-primary-research/plot-primary-research.page.ts");







var routes = [
    {
        path: '',
        component: _plot_primary_research_page__WEBPACK_IMPORTED_MODULE_6__["PlotPrimaryResearchPage"]
    }
];
var PlotPrimaryResearchPageModule = /** @class */ (function () {
    function PlotPrimaryResearchPageModule() {
    }
    PlotPrimaryResearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plot_primary_research_page__WEBPACK_IMPORTED_MODULE_6__["PlotPrimaryResearchPage"]]
        })
    ], PlotPrimaryResearchPageModule);
    return PlotPrimaryResearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plot-primary-research/plot-primary-research.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/plot-primary-research/plot-primary-research.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>初步调查</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- 下拉刷新组件 -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" >\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\" mode='ios'>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid  class=\"detail_table\" *ngIf=\"dataFlag\">\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">初步调查标题：</ion-col>\n      <ion-col class=\"right-text\" style=\" line-height: 22px;\">{{firstCensusInfo.CENSUS_TITLE||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">初步调查报告编制单位：</ion-col>\n      <ion-col class=\"right-text\">{{firstCensusInfo.CENSUS_UNIT||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">初步调查完成时间：</ion-col>\n      <ion-col class=\"right-text\">{{firstCensusInfo.CENSUS_END_TIME===null?\"- -\":firstCensusInfo.CENSUS_END_TIME| date:'yyyy-MM-dd'}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">初步调查报告附件：</ion-col>\n      <ion-col class=\"right-text\" >\n        <ion-list *ngIf=\"censusFileArr.length>0\">\n          <ion-item *ngFor=\"let item of censusFileArr\" lines=\"none\" slot=\"end\">\n            <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n          </ion-item>\n        </ion-list>\n        <p class=\"nofile\" *ngIf=\"censusFileArr.length==0\">暂无附件</p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">检测报告附件：</ion-col>\n      <ion-col class=\"right-text\" >\n        <ion-list *ngIf=\"surveyFileArr.length>0\">\n          <ion-item *ngFor=\"let item of surveyFileArr\" lines=\"none\" slot=\"end\">\n            <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n          </ion-item>\n        </ion-list>\n        <p class=\"nofile\" *ngIf=\"surveyFileArr.length==0\">暂无附件</p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">是否为污染地块：</ion-col>\n      <ion-col class=\"right-text\">{{firstCensusInfo.ISPOLLUTELAND===1?\"污染\":\"否\"}}；<span *ngIf=\"evidenceFileArr.length>0\">证明材料：</span>\n        <ion-list *ngIf=\"evidenceFileArr.length>0\" style=\"line-height:22px;\">\n          <ion-item *ngFor=\"let item of evidenceFileArr\" lines=\"none\" slot=\"end\">\n            <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n          </ion-item>\n        </ion-list>\n        <p class=\"nofile\" *ngIf=\"evidenceFileArr.length==0\"  >暂无附件</p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">公示网址：</ion-col>\n      <ion-col class=\"right-text\" >\n        <div *ngIf=\"firstCensusInfo.CENSUS_PUBLIC_TYPE===1\">新增项目:\n          <p class=\"down-line\" (click)=\"openBrower(firstCensusInfo.CENSUS_PUBLIC_URL)\">{{firstCensusInfo.CENSUS_PUBLIC_URL}}</p>\n        </div>\n        <div *ngIf=\"firstCensusInfo.CENSUS_PUBLIC_TYPE===0\">\n          <p class=\"down-line\" *ngFor=\"let item of historyEvilFileArr\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\">\n          {{item.FILENAME}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <div *ngIf=\"!dataFlag\" class=\"nodata\">暂无数据，请稍后再试！</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plot-primary-research/plot-primary-research.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/plot-primary-research/plot-primary-research.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-start:10px;\n  --padding-end:10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxvdC1wcmltYXJ5LXJlc2VhcmNoL0U6XFx3b3JrXFxwcm9qZWN0c1xcYmVpamluZ19zb2lsX2FwcDIwMTkwNTA1XFxCSldSQVBQL3NyY1xcYXBwXFxwYWdlc1xccGxvdC1wcmltYXJ5LXJlc2VhcmNoXFxwbG90LXByaW1hcnktcmVzZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbG90LXByaW1hcnktcmVzZWFyY2gvcGxvdC1wcmltYXJ5LXJlc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudHtcclxuICAgIC0tcGFkZGluZy1zdGFydDoxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDoxMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/plot-primary-research/plot-primary-research.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/plot-primary-research/plot-primary-research.page.ts ***!
  \***************************************************************************/
/*! exports provided: PlotPrimaryResearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotPrimaryResearchPage", function() { return PlotPrimaryResearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/public/app-update.service */ "./src/app/services/public/app-update.service.ts");
/* harmony import */ var _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");







var PlotPrimaryResearchPage = /** @class */ (function () {
    function PlotPrimaryResearchPage(iab, global, configService, appUpdate, httpUtils) {
        this.iab = iab;
        this.global = global;
        this.configService = configService;
        this.appUpdate = appUpdate;
        this.httpUtils = httpUtils;
        this.firstCensusInfo = {}; //初步调查数据
        this.dataFlag = false; //是否拿到初步调查数据
        this.data = {};
        this.censusFileArr = []; // 调查附件列表
        this.surveyFileArr = []; // 检测附件列表
        this.evidenceFileArr = []; // 证明材料列表
        this.historyEvilFileArr = []; // 历史项目列表
    }
    PlotPrimaryResearchPage.prototype.ngOnInit = function () {
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr();
    };
    PlotPrimaryResearchPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
     * 打开本地浏览器跳转对应网址
     * @param url 网址
     */
    PlotPrimaryResearchPage.prototype.openBrower = function (url) {
        if (url) {
            var browser = this.iab.create(url, '_system');
            browser.show();
        }
    };
    //初始化页面数据
    PlotPrimaryResearchPage.prototype.init = function () {
        this.data = this.global.plotDetailData;
        if (JSON.stringify(this.data) !== "{}") {
            this.firstCensusInfo = this.data['firstCensusInfo'];
            if (JSON.stringify(this.firstCensusInfo) !== "{}") {
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
    PlotPrimaryResearchPage.prototype.getAllFileArr = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        //let CENSUS = '58625234-0b18-4e39-9bef-c4515beb9617,a212f803-1af8-45d1-a0d6-a7cf669b85a6';
        //获取检查调查报告数组
        this.configService.getFile({ 'ids': this.firstCensusInfo.CENSUS, 'sessionId': this.global.sessionId }, flag, function (res) {
            //console.log(res);
            if (res !== 'error') {
                _this.censusFileArr = res;
            }
        });
        //获取检查报告数组
        this.configService.getFile({ 'ids': this.firstCensusInfo.SURVEY_REPORT, 'sessionId': this.global.sessionId }, flag, function (res) {
            // console.log(res);
            if (res !== 'error') {
                _this.surveyFileArr = res;
            }
        });
        //获取证明材料数组
        this.configService.getFile({ 'ids': this.firstCensusInfo.EVIDENCE_FILE, 'sessionId': this.global.sessionId }, flag, function (res) {
            // console.log(res);
            if (res !== 'error') {
                _this.evidenceFileArr = res;
            }
        });
        //如果公示网址对应 无新增项目
        if (this.firstCensusInfo.CENSUS_PUBLIC_TYPE === 0) {
            //获取历史记录证明材料数组
            this.configService.getFile({ 'ids': this.firstCensusInfo.CENSUS_PUBLIC_FILES, 'sessionId': this.global.sessionId }, flag, function (res) {
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
    PlotPrimaryResearchPage.prototype.downFile = function (item) {
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
    PlotPrimaryResearchPage.prototype.doRefresh = function (event) {
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr(false);
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    PlotPrimaryResearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plot-primary-research',
            template: __webpack_require__(/*! ./plot-primary-research.page.html */ "./src/app/pages/plot-primary-research/plot-primary-research.page.html"),
            styles: [__webpack_require__(/*! ./plot-primary-research.page.scss */ "./src/app/pages/plot-primary-research/plot-primary-research.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__["AppUpdateService"],
            _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__["HttpUtilsService"]])
    ], PlotPrimaryResearchPage);
    return PlotPrimaryResearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plot-primary-research-plot-primary-research-module.js.map