(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plot-liveinspection-record-plot-liveinspection-record-module"],{

/***/ "./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PlotLiveinspectionRecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotLiveinspectionRecordPageModule", function() { return PlotLiveinspectionRecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plot_liveinspection_record_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plot-liveinspection-record.page */ "./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.page.ts");







var routes = [
    {
        path: '',
        component: _plot_liveinspection_record_page__WEBPACK_IMPORTED_MODULE_6__["PlotLiveinspectionRecordPage"]
    }
];
var PlotLiveinspectionRecordPageModule = /** @class */ (function () {
    function PlotLiveinspectionRecordPageModule() {
    }
    PlotLiveinspectionRecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plot_liveinspection_record_page__WEBPACK_IMPORTED_MODULE_6__["PlotLiveinspectionRecordPage"]]
        })
    ], PlotLiveinspectionRecordPageModule);
    return PlotLiveinspectionRecordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>现场监督记录</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- 下拉刷新组件 -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\" mode='ios'>\n      </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf=\"dataFlag\">\n    <ion-item *ngFor=\"let item of inspectorList\" (click)=\"goNext(item.SUPERVISE_ID)\">\n      <!-- <ion-note slot=\"start\">1</ion-note> -->\n      <ion-label text-wrap>\n        <ion-text>\n          <b>{{item.TITLE||\"- -\"}}</b>\n        </ion-text>\n\n        <ion-text>\n          <p>监督管理时间&nbsp;&nbsp;{{item.MODIFY_DATE===null?\"- -\":item.MODIFY_DATE| date:'yyyy-MM-dd'}} </p>\n          <p>监督管理单位&nbsp;&nbsp;{{item.DEPTNAME||\"- -\"}}</p>\n        </ion-text>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <div *ngIf=\"!dataFlag\" class=\"nodata\">暂无数据，请稍后再试！</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label ion-text b {\n  font-size: 19px;\n  line-height: 37px; }\n\nion-label ion-text p {\n  font-size: 16px;\n  line-height: 26px;\n  height: 26px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxvdC1saXZlaW5zcGVjdGlvbi1yZWNvcmQvRTpcXHdvcmtcXHByb2plY3RzXFxiZWlqaW5nX3NvaWxfYXBwMjAxOTA1MDVcXEJKV1JBUFAvc3JjXFxhcHBcXHBhZ2VzXFxwbG90LWxpdmVpbnNwZWN0aW9uLXJlY29yZFxccGxvdC1saXZlaW5zcGVjdGlvbi1yZWNvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUo3QjtFQU9ZLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxvdC1saXZlaW5zcGVjdGlvbi1yZWNvcmQvcGxvdC1saXZlaW5zcGVjdGlvbi1yZWNvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgICAgYntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.page.ts ***!
  \*************************************************************************************/
/*! exports provided: PlotLiveinspectionRecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotLiveinspectionRecordPage", function() { return PlotLiveinspectionRecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");





var PlotLiveinspectionRecordPage = /** @class */ (function () {
    function PlotLiveinspectionRecordPage(configService, global, router) {
        this.configService = configService;
        this.global = global;
        this.router = router;
        this.inspectorList = []; //现场督察记录数据
        this.dataFlag = false; //是否拿到现场督察记录数据
    }
    PlotLiveinspectionRecordPage.prototype.ngOnInit = function () {
        //初始化页面数据
        this.init();
    };
    PlotLiveinspectionRecordPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    //初始化页面数据
    PlotLiveinspectionRecordPage.prototype.init = function () {
        if (this.global.plotInspectorList.length > 0) {
            this.inspectorList = this.global.plotInspectorList;
            // console.log(this.global.plotInspectorList);
            this.dataFlag = true;
        }
        else {
            this.dataFlag = false;
        }
    };
    /**
     * 页面跳转至详情
     * @param id 记录ID
     */
    PlotLiveinspectionRecordPage.prototype.goNext = function (id) {
        this.router.navigate(['plot-liveinspection-detail'], { queryParams: { 'SUPERVISE_ID': id } });
    };
    /**
     *下拉刷新事件
     * @param event 事件
     */
    PlotLiveinspectionRecordPage.prototype.doRefresh = function (event) {
        //初始化页面数据
        this.init();
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    PlotLiveinspectionRecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plot-liveinspection-record',
            template: __webpack_require__(/*! ./plot-liveinspection-record.page.html */ "./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.page.html"),
            styles: [__webpack_require__(/*! ./plot-liveinspection-record.page.scss */ "./src/app/pages/plot-liveinspection-record/plot-liveinspection-record.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_public_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlotLiveinspectionRecordPage);
    return PlotLiveinspectionRecordPage;
}());



/***/ }),

/***/ "./src/app/services/public/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/public/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _public_http_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");
/* harmony import */ var _public_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/global.service */ "./src/app/services/public/global.service.ts");




var ConfigService = /** @class */ (function () {
    function ConfigService(httpUtils, global) {
        this.httpUtils = httpUtils;
        this.global = global;
    }
    /**
      * 获取app版本信息
      * @param params  调用方法传过来的参数
      * @param showloading 是否显示数据加载框
      * @param callback 回调函数
    */
    ConfigService.prototype.getAppVersion = function (params, showloading, callback) {
        return this.httpUtils.get(this.global.versionUrl, params, showloading, callback);
    };
    /**************************登录********************************/
    /**
      * 登录接口
      * @param params 调用方法传过来的参数
      * @param showloading 是否显示数据加载框
      * @param callback 回调函数
      */
    ConfigService.prototype.login = function (params, showloading, callback) {
        console.log(params);
        var url = "" + this.global.hostUrl + this.global.login + "?loginName=" + params.loginName + "&password=" + params.password;
        return this.httpUtils.post(url, {}, showloading, callback);
    };
    /**
     * 获取行业列表
     * @param params  调用方法传过来的参数，根据城市代码查询进行获取
     * @param showloading 是否显示数据加载框
     * @param callback 回调函数
     */
    ConfigService.prototype.getListPolluteLand = function (params, showloading, callback) {
        return this.httpUtils.get(this.global.hostUrl + this.global.getListPolluteLand, params, showloading, callback);
    };
    /**
      * 获取地区列表
      * @param params  调用方法传过来的参数，根据城市代码查询进行获取
      * @param showloading 是否显示数据加载框
      * @param callback 回调函数 this.global.hostUrl + this.global.getArea
      */
    ConfigService.prototype.getAreaList = function (params, showloading, callback) {
        return this.httpUtils.get(this.global.hostUrl + this.global.getArea, params, showloading, callback);
    };
    //  获取行政区列表
    ConfigService.prototype.getIndustryList = function (params, showloading, callback) {
        return this.httpUtils.get(this.global.hostUrl + this.global.getIndustryList, params, showloading, callback);
    };
    /**
      * 获取字典
      * @param params  调用方法传过来的参数，根据城市代码查询进行获取
      * @param showloading 是否显示数据加载框
      * @param callback 回调函数
      */
    ConfigService.prototype.getDectionary = function (params, showloading, callback) {
        return this.httpUtils.get(this.global.hostUrl + this.global.getDectionary, params, showloading, callback);
    };
    /**
    * 获取督察列表全部数据
    * @param params 调用方法传过来的参数
    * @param showloading 是否显示数据加载框
    * @param callback 回调函数
    */
    ConfigService.prototype.getListSupervise = function (params, showloading, callback) {
        return this.httpUtils.get(this.global.hostUrl + this.global.ListSupervise, params, showloading, callback);
    };
    ConfigService.prototype.getListSuperviseByLand = function (params, showloading, callback) {
        return this.httpUtils.get(this.global.hostUrl + this.global.listSuperviseByLand, params, showloading, callback);
    };
    /**
      * 获取地块详情
      * @param params  调用方法传过来的参数，根据城市代码查询进行获取
      * @param showloading 是否显示数据加载框
      * @param callback 回调函数
      */
    ConfigService.prototype.getPlotDetail = function (params, showloading, callback) {
        // return this.httpUtils.get('../../../assets/data/plot-detail.json', params, showloading, callback);
        var url = "" + this.global.hostUrl + this.global.plotDetailUrl + "?id=" + params.id + "&sessionId=" + params.sessionId;
        return this.httpUtils.post(url, params, showloading, callback);
    };
    /**
     * 收藏/取消收藏
     * @param params  调用方法传过来的参数，根据城市代码查询进行获取
     * @param showloading 是否显示数据加载框
     * @param callback 回调函数
     */
    ConfigService.prototype.doCollection = function (params, showloading, callback) {
        var url = "" + this.global.hostUrl + this.global.doCollectionUrl + "?seeminfoId=" + params.seeminfoId + "&sessionId=" + params.sessionId;
        console.log(url);
        return this.httpUtils.post(url, params, showloading, callback);
    };
    /**
    * 获取地块督察记录列表信息
    * @param params  调用方法传过来的参数，根据城市代码查询进行获取
    * @param showloading 是否显示数据加载框
    * @param callback 回调函数
    */
    ConfigService.prototype.getPlotInspectorList = function (params, showloading, callback) {
        // return this.httpUtils.get('../../../assets/data/inspecter-list.json', params, showloading, callback);
        var url = "" + this.global.hostUrl + this.global.plotInspectorListUrl + "?id=" + params.id + "&sessionId=" + params.sessionId;
        return this.httpUtils.post(url, params, showloading, callback);
    };
    /**
    * 获取地块后期监督记录列表信息
    * @param params  调用方法传过来的参数，根据城市代码查询进行获取
    * @param showloading 是否显示数据加载框
    * @param callback 回调函数
    */
    ConfigService.prototype.getPlotLaterMonitor = function (params, showloading, callback) {
        // return this.httpUtils.get('../../../assets/data/later-monitor.json', params, showloading, callback);
        var url = "" + this.global.hostUrl + this.global.plotLaterMonitorUrl + "?id=" + params.id + "&sessionId=" + params.sessionId + "&year=" + params.year;
        return this.httpUtils.post(url, params, showloading, callback);
    };
    /**
   * 获取地块相关附件信息
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
    ConfigService.prototype.getFile = function (params, showloading, callback) {
        var url = "" + this.global.hostUrl + this.global.fileUrl + "?ids=" + params.ids + "&sessionId=" + params.sessionId;
        return this.httpUtils.post(url, params, showloading, callback);
    };
    /**
   * 督察列表提交暂存
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
    ConfigService.prototype.supervisesave = function (params, showloading, callback) {
        return this.httpUtils.get(this.global.hostUrl + this.global.supervisesave, params, showloading, callback);
    };
    /**
    * 获取可编辑的督查记录
    * @param params  调用方法传过来的参数，根据城市代码查询进行获取
    * @param showloading 是否显示数据加载框
    * @param callback 回调函数
    */
    ConfigService.prototype.getUpdatedSuperviseByLand = function (params, showloading, callback) {
        return this.httpUtils.get(this.global.hostUrl + this.global.getUpdatedSuperviseByLand, params, showloading, callback);
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_public_http_utils_service__WEBPACK_IMPORTED_MODULE_2__["HttpUtilsService"], _public_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/public/global.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/public/global.service.ts ***!
  \***************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.hostUrl = 'http://192.168.0.55:1012/bjsoilapi/'; // 服务器地址
        this.versionUrl = ''; // 版本更新version.txt的服务器地址
        this.curVersion = '1.0.0'; // 当前版本号
        this.baiduAK = 'idh0uCR7rcC1sGclhscaxy2A5YIUPBUN'; // 安装插件时百度ak值
        this.location = {}; // 当前位置信息
        this.sessionId = ''; // 记录返回sessionid "233199EF038BDF6AD8AF390052EF0E19"
        this.filesID = ''; // 记录暂存返回的文件id
        this.imgPath = []; // 暂存图片
        this.filesArr = []; // 暂存文件名
        this.areaList = []; // 区域列表
        this.industryList = []; // 行业列表
        this.blockTypeList = []; // 地块类型列表
        //字典  
        this.dectionary = {};
        //地区列表
        this.AreaList = [];
        this.plotDetailData = {};
        // 收藏地块列表
        this.collectedPlots = [];
        this.laterMonitorList = [];
        this.laterMonitorDetail = {};
        this.plotInspectorList = [];
        this.inspecterDetail = {};
        // 登录接口
        this.login = 'polluteland/login.vm';
        // 获取行政区
        this.getArea = 'dictionary/listRegionByUser.vm';
        // 获取行业和地块类型
        this.getListPolluteLand = 'polluteland/listPolluteLand.vm';
        // 获取字典
        this.getDectionary = 'dictionary/listDictionarys.vm';
        // 获取督察列表全部数据
        this.ListSupervise = 'polluteland/listSupervise.vm';
        //显示的tab名称
        this.tab = 'tab1';
        //显示的数据类型  "inspection"/"pollute"
        this.type = "pollute";
        // 通过筛选获取督察列表数据
        this.listSuperviseByLand = 'polluteland/listSuperviseByLand.vm';
        // 获取行业
        this.getIndustryList = 'dictionary/listDictionarys.vm';
        // 地块详情
        this.plotDetailUrl = 'polluteland/baseinfo.vm';
        // 地块督察记录列表
        this.plotInspectorListUrl = 'polluteland/listSuperviseByLand.vm';
        // 地块后期监管记录列表
        this.plotLaterMonitorUrl = 'polluteland/listLaterMonitor.vm';
        // 地块附件信息
        this.fileUrl = 'file/listFiles.vm';
        // 督察记录编辑
        this.supervisesave = 'polluteland/supervisesave.vm';
        // 获取可编辑的督查记录
        this.getUpdatedSuperviseByLand = 'polluteland/getUpdatedSuperviseByLand.vm';
        //上传文档
        this.uploadUrl = 'file/uploadify.vm';
        // 下载文件
        this.downFiles = 'file/listFiles.vm';
        // 下载地块附件
        this.downUrl = 'file/download.vm';
        // 收藏/取消收藏
        this.doCollectionUrl = 'polluteland/doCollection.vm';
    }
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plot-liveinspection-record-plot-liveinspection-record-module.js.map