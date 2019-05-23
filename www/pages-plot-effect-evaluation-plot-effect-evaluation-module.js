(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plot-effect-evaluation-plot-effect-evaluation-module"],{

/***/ "./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PlotEffectEvaluationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotEffectEvaluationPageModule", function() { return PlotEffectEvaluationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plot_effect_evaluation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plot-effect-evaluation.page */ "./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.page.ts");







var routes = [
    {
        path: '',
        component: _plot_effect_evaluation_page__WEBPACK_IMPORTED_MODULE_6__["PlotEffectEvaluationPage"]
    }
];
var PlotEffectEvaluationPageModule = /** @class */ (function () {
    function PlotEffectEvaluationPageModule() {
    }
    PlotEffectEvaluationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plot_effect_evaluation_page__WEBPACK_IMPORTED_MODULE_6__["PlotEffectEvaluationPage"]]
        })
    ], PlotEffectEvaluationPageModule);
    return PlotEffectEvaluationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>效果评估</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- 下拉刷新组件 -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\" mode='ios'>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid class=\"detail_table\" *ngIf=\"dataFlag\">\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">报告标题：</ion-col>\n      <ion-col class=\"right-text\" style=\" line-height: 22px;\">{{effectEvaluateInfo.CENSUS_TITLE||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">报告编制单位：</ion-col>\n      <ion-col class=\"right-text\">{{effectEvaluateInfo.CENSUS_UNIT||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">完成时间：</ion-col>\n      <ion-col class=\"right-text\">{{effectEvaluateInfo.CENSUS_END_TIME===null?\"- -\":effectEvaluateInfo.CENSUS_END_TIME| date:'yyyy-MM-dd'}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">效果评估报告附件：</ion-col>\n      <ion-col class=\"right-text\">\n        <ion-list *ngIf=\"censusFileArr.length>0\">\n          <ion-item *ngFor=\"let item of censusFileArr\" lines=\"none\">\n            <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n          </ion-item>\n        </ion-list>\n        <p class=\"nofile\" *ngIf=\"censusFileArr.length==0\">暂无附件</p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">监测报告附件：</ion-col>\n      <ion-col class=\"right-text\">\n        <ion-list *ngIf=\"surveyFileArr.length>0\">\n          <ion-item *ngFor=\"let item of surveyFileArr\" lines=\"none\">\n            <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n          </ion-item>\n        </ion-list>\n        <p class=\"nofile\" *ngIf=\"surveyFileArr.length==0\">暂无附件</p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">效果评估是否合格：</ion-col>\n      <ion-col class=\"right-text\">{{effectEvaluateInfo.ISPOLLUTELAND===1?\"污染\":\"否\"}}；<span *ngIf=\"evidenceFileArr.length>0\">证明材料：</span>\n        <ion-list *ngIf=\"evidenceFileArr.length>0\">\n          <ion-item *ngFor=\"let item of evidenceFileArr\" lines=\"none\">\n            <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n          </ion-item>\n        </ion-list>\n        <p class=\"nofile\" *ngIf=\"evidenceFileArr.length==0\">暂无附件</p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">公示网址：</ion-col>\n      <ion-col class=\"right-text\">\n        <div *ngIf=\"effectEvaluateInfo.CENSUS_PUBLIC_TYPE===1\">新增项目:\n          <p class=\"down-line\" (click)=\"openBrower(effectEvaluateInfo.CENSUS_PUBLIC_URL)\">{{effectEvaluateInfo.CENSUS_PUBLIC_URL}}</p>\n        </div>\n        <div *ngIf=\"effectEvaluateInfo.CENSUS_PUBLIC_TYPE===0\">\n          <p class=\"down-line\" *ngFor=\"let item of historyEvilFileArr\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\">\n            {{item.FILENAME}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"!dataFlag\" class=\"nodata\">暂无数据，请稍后再试！</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-start:10px;\n  --padding-end:10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxvdC1lZmZlY3QtZXZhbHVhdGlvbi9FOlxcd29ya1xccHJvamVjdHNcXGJlaWppbmdfc29pbF9hcHAyMDE5MDUwNVxcQkpXUkFQUC9zcmNcXGFwcFxccGFnZXNcXHBsb3QtZWZmZWN0LWV2YWx1YXRpb25cXHBsb3QtZWZmZWN0LWV2YWx1YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbG90LWVmZmVjdC1ldmFsdWF0aW9uL3Bsb3QtZWZmZWN0LWV2YWx1YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOjEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.page.ts ***!
  \*****************************************************************************/
/*! exports provided: PlotEffectEvaluationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotEffectEvaluationPage", function() { return PlotEffectEvaluationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/public/app-update.service */ "./src/app/services/public/app-update.service.ts");
/* harmony import */ var _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");







var PlotEffectEvaluationPage = /** @class */ (function () {
    function PlotEffectEvaluationPage(iab, global, configService, appUpdate, httpUtils) {
        this.iab = iab;
        this.global = global;
        this.configService = configService;
        this.appUpdate = appUpdate;
        this.httpUtils = httpUtils;
        this.effectEvaluateInfo = {}; //效果评估数据
        this.dataFlag = false; //是否拿到效果评估数据
        this.censusFileArr = []; // 调查附件列表
        this.surveyFileArr = []; // 检测附件列表
        this.evidenceFileArr = []; // 证明材料列表
        this.historyEvilFileArr = []; // 历史项目列表
    }
    PlotEffectEvaluationPage.prototype.ngOnInit = function () {
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr();
    };
    PlotEffectEvaluationPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
     * 打开本地浏览器跳转对应网址
     * @param url 网址
     */
    PlotEffectEvaluationPage.prototype.openBrower = function (url) {
        if (url) {
            var browser = this.iab.create(url, '_system');
            browser.show();
        }
    };
    //初始化页面数据
    PlotEffectEvaluationPage.prototype.init = function () {
        this.data = this.global.plotDetailData;
        if (JSON.stringify(this.data) !== "{}") {
            this.effectEvaluateInfo = this.data['effectEvaluateInfo'];
            if (JSON.stringify(this.effectEvaluateInfo) !== "{}") {
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
    PlotEffectEvaluationPage.prototype.getAllFileArr = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        //let CENSUS = '58625234-0b18-4e39-9bef-c4515beb9617,a212f803-1af8-45d1-a0d6-a7cf669b85a6';
        //获取检查调查报告数组
        this.configService.getFile({ 'ids': this.effectEvaluateInfo.CENSUS, 'sessionId': this.global.sessionId }, flag, function (res) {
            if (res !== 'error') {
                _this.censusFileArr = res;
            }
        });
        //获取检查报告数组
        this.configService.getFile({ 'ids': this.effectEvaluateInfo.SURVEY_REPORT, 'sessionId': this.global.sessionId }, flag, function (res) {
            // console.log(res);
            if (res !== 'error') {
                _this.surveyFileArr = res;
            }
        });
        //获取证明材料数组
        this.configService.getFile({ 'ids': this.effectEvaluateInfo.EVIDENCE_FILE, 'sessionId': this.global.sessionId }, flag, function (res) {
            // console.log(res);
            if (res !== 'error') {
                _this.evidenceFileArr = res;
            }
        });
        //如果公示网址对应 无新增项目
        if (this.effectEvaluateInfo.CENSUS_PUBLIC_TYPE === 0) {
            //获取历史记录证明材料数组
            this.configService.getFile({ 'ids': this.effectEvaluateInfo.CENSUS_PUBLIC_FILES, 'sessionId': this.global.sessionId }, flag, function (res) {
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
    PlotEffectEvaluationPage.prototype.downFile = function (item) {
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
    // 下拉刷新事件
    PlotEffectEvaluationPage.prototype.doRefresh = function (event) {
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr(false);
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    PlotEffectEvaluationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plot-effect-evaluation',
            template: __webpack_require__(/*! ./plot-effect-evaluation.page.html */ "./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.page.html"),
            styles: [__webpack_require__(/*! ./plot-effect-evaluation.page.scss */ "./src/app/pages/plot-effect-evaluation/plot-effect-evaluation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__["AppUpdateService"],
            _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__["HttpUtilsService"]])
    ], PlotEffectEvaluationPage);
    return PlotEffectEvaluationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plot-effect-evaluation-plot-effect-evaluation-module.js.map