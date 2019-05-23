(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-favorites-favorites-module~pages-map-map-module"],{

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



/***/ }),

/***/ "./src/components/components.module.ts":
/*!*********************************************!*\
  !*** ./src/components/components.module.ts ***!
  \*********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ths_map_ths_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ths-map/ths-map */ "./src/components/ths-map/ths-map.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

 // CUSTOM_ELEMENTS_SCHEMA 不识别ion标签添加这个可以正常使用
//import { SearchModalModule } from './search-modal/search-modal.module';

 // CommonModule引入这个模块，ngIf 和ngFor 这些指令就可以用了
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ths_map_ths_map__WEBPACK_IMPORTED_MODULE_2__["ThsMapComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            exports: [_ths_map_ths_map__WEBPACK_IMPORTED_MODULE_2__["ThsMapComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/components/ths-map/map.data.ts":
/*!********************************************!*\
  !*** ./src/components/ths-map/map.data.ts ***!
  \********************************************/
/*! exports provided: mapConfig, tdtTileInfo, tdtTileInfo2000, googleTileInfo, baiduTileInfo, gaodeTileInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapConfig", function() { return mapConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tdtTileInfo", function() { return tdtTileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tdtTileInfo2000", function() { return tdtTileInfo2000; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleTileInfo", function() { return googleTileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baiduTileInfo", function() { return baiduTileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaodeTileInfo", function() { return gaodeTileInfo; });
var mapConfig = {
    'map': {
        'wrapAround180': false,
        'sliderposition': 'bottom-right',
        'layerSwitch': true,
        'showHome': false,
        'sliderorientation': 'vertical',
        'initialExtent': {
            'xmin': 92.13,
            'xmax': 108.46,
            'ymin': 32.31,
            'ymax': 42.57
        },
        'baseMaps': [
            {
                'label': '高德矢量图',
                'type': 'autonavigaode',
                'visible': true,
                'groupId': [0]
            },
            {
                'label': '影像',
                'type': 'autonaviimage',
                'visible': false,
                'groupId': [1]
            },
            {
                'label': '影像标注',
                'type': 'autonaviRoadLabely',
                'visible': false,
                'groupId': [1]
            }
        ]
    },
    'geometryService': 'http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer'
};
/**
 * 天地图TileInfo
 */
var tdtTileInfo = {
    dpi: 96,
    rows: 256,
    cols: 256,
    origin: { x: -2.0037508342787E7, y: 2.0037508342787E7 },
    spatialReference: { wkid: 102100 },
    lods: [{ level: 0, resolution: 156543.033928, scale: 5.91657527591555E8 }, {
            level: 1,
            resolution: 78271.5169639999,
            scale: 2.95828763795777E8
        }, { level: 2, resolution: 39135.7584820001, scale: 1.47914381897889E8 },
        { level: 3, resolution: 19567.8792409999, scale: 7.3957190948944E7 }, {
            level: 4,
            resolution: 9783.93962049996,
            scale: 3.6978595474472E7
        }, { level: 5, resolution: 4891.96981024998, scale: 1.8489297737236E7 }, {
            level: 6,
            resolution: 2445.98490512499,
            scale: 9244648.868618
        }, { level: 7, resolution: 1222.99245256249, scale: 4622324.434309 }, {
            level: 8,
            resolution: 611.49622628138,
            scale: 2311162.217155
        }, { level: 9, resolution: 305.748113140558, scale: 1155581.108577 }, {
            level: 10,
            resolution: 152.874056570411,
            scale: 577790.554289
        }, {
            level: 11, resolution: 76.4370282850732,
            scale: 288895.277144
        }, { level: 12, resolution: 38.2185141425366, scale: 144447.638572 }, {
            level: 13,
            resolution: 19.1092570712683,
            scale: 72223.819286
        }, { level: 14, resolution: 9.55462853563415, scale: 36111.909643 }, {
            level: 15,
            resolution: 4.77731426794937,
            scale: 18055.954822
        }, { level: 16, resolution: 2.38865713397468, scale: 9027.977411 }, {
            level: 17,
            resolution: 1.19432856685505,
            scale: 4513.988705
        }, { level: 18, resolution: 0.597164283559817, scale: 2256.994353 }
    ]
};
/**
 * 天地图2000TileInfo
 */
var tdtTileInfo2000 = {
    dpi: '90.71428571427429',
    format: 'image/png',
    compressionQuality: 0,
    spatialReference: { wkid: 4326 },
    rows: 256,
    cols: 256,
    origin: { 'x': -180, 'y': 90 },
    lods: [
        { 'level': 1, 'scale': 2.958293554545656E8, 'resolution': 0.703125 },
        { 'level': 2, 'scale': 1.479146777272828E8, 'resolution': 0.351563 },
        { 'level': 3, 'scale': 7.39573388636414E7, 'resolution': 0.175781 },
        { 'level': 4, 'scale': 3.69786694318207E7, 'resolution': 0.0878906 },
        { 'level': 5, 'scale': 1.848933471591035E7, 'resolution': 0.0439453 },
        { 'level': 6, 'scale': 9244667.357955175, 'resolution': 0.0219727 },
        { 'level': 7, 'scale': 4622333.678977588, 'resolution': 0.0109863 },
        { 'level': 8, 'scale': 2311166.839488794, 'resolution': 0.00549316 },
        { 'level': 9, 'scale': 1155583.419744397, 'resolution': 0.00274658 },
        { 'level': 10, 'scale': 577791.7098721985, 'resolution': 0.00137329 },
        { 'level': 11, 'scale': 288895.85493609926, 'resolution': 0.000686646 },
        { 'level': 12, 'scale': 144447.92746804963, 'resolution': 0.000343323 },
        { 'level': 13, 'scale': 72223.96373402482, 'resolution': 0.000171661 },
        { 'level': 14, 'scale': 36111.98186701241, 'resolution': 8.58307e-05 },
        { 'level': 15, 'scale': 18055.990933506204, 'resolution': 4.29153e-05 },
        { 'level': 16, 'scale': 9027.995466753102, 'resolution': 2.14577e-05 },
        { 'level': 17, 'scale': 4513.997733376551, 'resolution': 1.07289e-05 },
        { 'level': 18, 'scale': 2256.998866688275, 'resolution': 5.36445e-06 }
    ]
};
/**
 * google地图TileInfo信息
 */
var googleTileInfo = {
    'dpi': '90.71428571427429',
    'format': 'image/png',
    'compressionQuality': 0,
    'spatialReference': { 'wkid': '102100' },
    'rows': 256,
    'cols': 256,
    'origin': { 'x': -20037508.342787, 'y': 20037508.342787 },
    'lods': [
        { 'level': 0, 'scale': 591657527.591555, 'resolution': 156543.033928 },
        { 'level': 1, 'scale': 295828763.795777, 'resolution': 78271.5169639999 },
        { 'level': 2, 'scale': 147914381.897889, 'resolution': 39135.7584820001 },
        { 'level': 3, 'scale': 73957190.948944, 'resolution': 19567.8792409999 },
        { 'level': 4, 'scale': 36978595.474472, 'resolution': 9783.93962049996 },
        { 'level': 5, 'scale': 18489297.737236, 'resolution': 4891.96981024998 },
        { 'level': 6, 'scale': 9244648.868618, 'resolution': 2445.98490512499 },
        { 'level': 7, 'scale': 4622324.434309, 'resolution': 1222.99245256249 },
        { 'level': 8, 'scale': 2311162.217155, 'resolution': 611.49622628138 },
        { 'level': 9, 'scale': 1155581.108577, 'resolution': 305.748113140558 },
        { 'level': 10, 'scale': 577790.554289, 'resolution': 152.874056570411 },
        { 'level': 11, 'scale': 288895.277144, 'resolution': 76.4370282850732 },
        { 'level': 12, 'scale': 144447.638572, 'resolution': 38.2185141425366 },
        { 'level': 13, 'scale': 72223.819286, 'resolution': 19.1092570712683 },
        { 'level': 14, 'scale': 36111.909643, 'resolution': 9.55462853563415 },
        { 'level': 15, 'scale': 18055.954822, 'resolution': 4.77731426794937 },
        { 'level': 16, 'scale': 9027.977411, 'resolution': 2.38865713397468 },
        { 'level': 17, 'scale': 4513.988705, 'resolution': 1.19432856685505 },
        { 'level': 18, 'scale': 2256.994353, 'resolution': 0.597164283559817 },
        { 'level': 19, 'scale': 1128.497176, 'resolution': 0.298582141647617 }
    ]
};
/**
 * 百度地图tileInfo信息
 */
var baiduTileInfo = {
    'rows': 256,
    'cols': 256,
    'compressionQuality': 0,
    'origin': { 'x': -20037508.3427892, 'y': 20037508.3427892 },
    'spatialReference': { 'wkid': 102100 },
    'lods': [
        { level: 0, resolution: 156543.033928, scale: 5.91657527591555E8 },
        { level: 1, resolution: 78271.5169639999, scale: 2.95828763795777E8 },
        { level: 2, resolution: 39135.7584820001, scale: 1.47914381897889E8 },
        { level: 3, resolution: 19567.8792409999, scale: 7.3957190948944E7 },
        { level: 4, resolution: 9783.93962049996, scale: 3.6978595474472E7 },
        { level: 5, resolution: 4891.96981024998, scale: 1.8489297737236E7 },
        { level: 6, resolution: 2445.98490512499, scale: 9244648.868618 },
        { level: 7, resolution: 1222.99245256249, scale: 4622324.434309 },
        { level: 8, resolution: 611.49622628138, scale: 2311162.217155 },
        { level: 9, resolution: 305.748113140558, scale: 1155581.108577 },
        { level: 10, resolution: 152.874056570411, scale: 577790.554289 },
        { level: 11, resolution: 76.4370282850732, scale: 288895.277144 },
        { level: 12, resolution: 38.2185141425366, scale: 144447.638572 },
        { level: 13, resolution: 19.1092570712683, scale: 72223.819286 },
        { level: 14, resolution: 9.55462853563415, scale: 36111.909643 },
        { level: 15, resolution: 4.77731426794937, scale: 18055.954822 },
        { level: 16, resolution: 2.38865713397468, scale: 9027.977411 },
        { level: 17, resolution: 1.19432856685505, scale: 4513.988705 },
        { level: 18, resolution: 0.597164283559817, scale: 2256.994353 },
        { level: 19, resolution: 0.298582141647617, scale: 1128.497176 }
    ]
};
/**
 * 高德地图
 */
var gaodeTileInfo = {
    'dpi': 66,
    'format': 'image/png',
    'compressionQuality': 0,
    'spatialReference': { 'wkid': '102100' },
    'rows': 256,
    'cols': 256,
    'origin': { 'x': -20037508.342787, 'y': 20037508.342787 },
    'lods': [
        { 'level': 0, 'scale': 591657527.591555, 'resolution': 156543.033928 },
        { 'level': 1, 'scale': 295828763.795777, 'resolution': 78271.5169639999 },
        { 'level': 2, 'scale': 147914381.897889, 'resolution': 39135.7584820001 },
        { 'level': 3, 'scale': 73957190.948944, 'resolution': 19567.8792409999 },
        { 'level': 4, 'scale': 36978595.474472, 'resolution': 9783.93962049996 },
        { 'level': 5, 'scale': 18489297.737236, 'resolution': 4891.96981024998 },
        { 'level': 6, 'scale': 9244648.868618, 'resolution': 2445.98490512499 },
        { 'level': 7, 'scale': 4622324.434309, 'resolution': 1222.99245256249 },
        { 'level': 8, 'scale': 2311162.217155, 'resolution': 611.49622628138 },
        { 'level': 9, 'scale': 1155581.108577, 'resolution': 305.748113140558 },
        { 'level': 10, 'scale': 577790.554289, 'resolution': 152.874056570411 },
        { 'level': 11, 'scale': 288895.277144, 'resolution': 76.4370282850732 },
        { 'level': 12, 'scale': 144447.638572, 'resolution': 38.2185141425366 },
        { 'level': 13, 'scale': 72223.819286, 'resolution': 19.1092570712683 },
        { 'level': 14, 'scale': 36111.909643, 'resolution': 9.55462853563415 },
        { 'level': 15, 'scale': 18055.954822, 'resolution': 4.77731426794937 },
        { 'level': 16, 'scale': 9027.977411, 'resolution': 2.38865713397468 },
        { 'level': 17, 'scale': 4513.988705, 'resolution': 1.19432856685505 },
        { 'level': 18, 'scale': 2256.994353, 'resolution': 0.597164283559817 }
    ]
};


/***/ }),

/***/ "./src/components/ths-map/ths-map.ts":
/*!*******************************************!*\
  !*** ./src/components/ths-map/ths-map.ts ***!
  \*******************************************/
/*! exports provided: ThsMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThsMapComponent", function() { return ThsMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.service */ "./src/components/ths-map/map.service.ts");
/* harmony import */ var _map_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.data */ "./src/components/ths-map/map.data.ts");


 // 地图API装载器
 // 地图常用操作服务类
 // 地图配置的数据
/**
 * 地图组件
 * @export
 * @author liuyingxin
 */
var ThsMapComponent = /** @class */ (function () {
    function ThsMapComponent(mapService, renderer) {
        this.mapService = mapService;
        this.renderer = renderer;
        this.onMapLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.favoriteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.requestLoc = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.default = true;
        //tile信息设置
        this.groupLayers = [];
        this.isShowFavorite = false;
    }
    ThsMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //加载地图api
        var options = {
            url: 'assets/js/map/init.js'
        };
        Object(esri_loader__WEBPACK_IMPORTED_MODULE_2__["loadModules"])([], options)
            .then(function (_a) {
            // create map with the given options at a DOM node w/ id 'mapNode'
            _this.loadMap();
        })
            .catch(function (err) {
            // handle any script or module loading errors
        });
    };
    /**
     * 加载地图图层
     * @memberOf ThsMap
     */
    ThsMapComponent.prototype.loadMap = function () {
        var _this = this;
        Object(esri_loader__WEBPACK_IMPORTED_MODULE_2__["loadModules"])(['esri/map', 'esri/geometry/Extent', 'esri/layers/WebTiledLayer', 'esri/layers/TileInfo']).then(function (_a) {
            var Map = _a[0], Extent = _a[1], WebTiledLayer = _a[2], TileInfo = _a[3];
            //创建地图对象
            _this.map = new Map(_this.mapEl.nativeElement, {
                id: "thsMap",
                wrapAround180: _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.wrapAround180 === undefined ? false : _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.wrapAround180,
                logo: false,
                autoResize: true,
                fadeOnZoom: false,
                minZoom: 3,
                sliderPosition: (_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderposition === undefined || _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderposition === "") ? "top-left" : _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderposition,
                sliderOrientation: (_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderorientation === undefined || _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderposition === "") ? "vertical" : _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderorientation
            });
            if (_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent != undefined && _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent != null) {
                _this.map.setExtent(new Extent(_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent.xmin, _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent.ymin, _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent.xmax, _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent.ymax));
            }
            var satelliteLayers = [];
            var streetsLayers = [];
            //添加图层操作
            _this.addlayers(satelliteLayers, streetsLayers).then(function (res) {
                if (res) {
                    if (streetsLayers.length > 0) {
                        _this.groupLayers.push(streetsLayers);
                    }
                    if (satelliteLayers.length > 0) {
                        _this.groupLayers.push(satelliteLayers);
                    }
                    if (_this.groupLayers.length > 0) {
                        if (_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.layerSwitch) {
                            _this.renderer.setElementStyle(_this.mapLayerEl.nativeElement, 'display', 'block');
                        }
                        else {
                            _this.renderer.setElementStyle(_this.mapLayerEl.nativeElement, 'display', 'none');
                        }
                    }
                    else {
                        _this.renderer.setElementStyle(_this.mapLayerEl.nativeElement, 'display', 'none');
                    }
                    if (_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.showHome) {
                        _this.renderer.setElementStyle(_this.mapHomeEl.nativeElement, 'display', 'block');
                    }
                    else {
                        _this.renderer.setElementStyle(_this.mapHomeEl.nativeElement, 'display', 'none');
                    }
                    var mapLayerClass = void 0;
                    var mapHomeClass = void 0;
                    if (_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderposition === "top-left") {
                        mapLayerClass = 'esriMaplayerTL';
                        mapHomeClass = 'esriMapHomeTL';
                    }
                    else if (_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderposition === "top-right") {
                        mapLayerClass = 'esriMaplayerTR';
                        mapHomeClass = 'esriMapHomeTR';
                    }
                    else if (_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderposition === "bottom-left") {
                        mapLayerClass = 'esriMaplayerBL';
                        mapHomeClass = 'esriMapHomeBL';
                    }
                    else if (_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.sliderposition === "bottom-right") {
                        mapLayerClass = 'esriMaplayerBR';
                        mapHomeClass = 'esriMapHomeBR';
                    }
                    _this.renderer.setElementClass(_this.mapLayerEl.nativeElement, mapLayerClass, true);
                    _this.renderer.setElementClass(_this.mapHomeEl.nativeElement, mapHomeClass, true);
                    _this.onMapLoaded.emit(_this.map); //传递给父元素的方法
                }
            });
            //------------
            // for (let livingmap = 0; configData.mapConfig.map.livingmaps !== undefined && livingmap < configData.mapConfig.map.livingmaps.length; livingmap++) {
            //   this.addLayer(configData.mapConfig.map.livingmaps[livingmap]);
            // }
            //this.mapService.setCenterAndZoom(this.map, 116.409, 39.899, 9);
        });
    };
    /**
     * 添加图层
     * @param layerOptions 图层参数
     * label：图层ID，type：图层类型（dynamic、tiled、image、feature，baidumap、baidusatellitemap、baidulabelmap
     * tiandimap、tiandisatellitemap、tiandilabelmap、googlemap、googlesatellitemap、googleterrainmap）
     * visible：是否可见 opacity：不透明度（0全透明，1不透明）
     */
    ThsMapComponent.prototype.addLayer = function (layerOptions) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Object(esri_loader__WEBPACK_IMPORTED_MODULE_2__["loadModules"])(['esri/layers/WebTiledLayer', 'esri/layers/FeatureLayer', 'esri/layers/ArcGISDynamicMapServiceLayer', 'esri/layers/ArcGISTiledMapServiceLayer', 'esri/layers/ArcGISImageServiceLayer', 'esri/layers/TileInfo']).then(function (_a) {
                var WebTiledLayer = _a[0], FeatureLayer = _a[1], ArcGISDynamicMapServiceLayer = _a[2], ArcGISTiledMapServiceLayer = _a[3], ArcGISImageServiceLayer = _a[4], TileInfo = _a[5];
                var layer;
                var layerType = layerOptions.type.toLocaleLowerCase();
                var tiledInfoObj = _this.getTiledInfoObj(layerType);
                var tileInfo = null;
                if (tiledInfoObj != null) {
                    tileInfo = new TileInfo(tiledInfoObj);
                }
                var urlTemplate = '';
                if (layerType.indexOf("baidu") >= 0) {
                    //layer = new ths.layers.BaiDuLayer(layerType);//创建百度地图
                    if (layerType === "baidu") {
                        urlTemplate = "http://online${subDomain}.map.bdimg.com/tile/?qt=tile&x=${col}&y=${row}&z=${level}&styles=pl&udt=20150421&scaler=1";
                    }
                    else if (layerType === "baidusatellite") {
                        urlTemplate = "http://shangetu${subDomain}.map.bdimg.com/it/u=x=${col};y=${row};z=${level};v=009;type=sate&fm=46&udt=20140929";
                    }
                    else if (layerType === "baidusatellitelabel") {
                        urlTemplate = "http://online${subDomain}.map.bdimg.com/tile/?qt=tile&x=${col}&y=${row}&z=${level}&styles=sl&v=068&udt=20150418";
                    }
                    else if (layerType === "baidu3d") {
                        urlTemplate = "http://d${subDomain}.map.baidu.com/resource/mappic/bj/2/3/lv${level}/${col},${row}.jpg?v=001";
                    }
                    if (tileInfo != null) {
                        layer = new WebTiledLayer(urlTemplate, {
                            "id": layerType,
                            "tileInfo": tileInfo,
                            "subDomains": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
                        });
                    }
                    else {
                        layer = new WebTiledLayer(urlTemplate, {
                            "id": layerType,
                            "subDomains": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
                        });
                    }
                }
                //高德地图
                else if (layerType.indexOf("autonavi") > -1) {
                    if (layerType === "autonavigaode") {
                        urlTemplate = "http://webrd0${subDomain}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${col}&y=${row}&z=${level}";
                        // "http://webrd0${subDomain}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${col}&y=${row}&z=${level}"
                    }
                    else if (layerType === "autonaviroadlabely") { //为影像路网（含路网，含注记）
                        urlTemplate = "http://webst0${subDomain}.is.autonavi.com/appmaptile?style=8&x=${col}&y=${row}&z=${level}";
                    }
                    else if (layerType === "autonaviimage") { //为影像路网（u不含路网，不含注记）
                        urlTemplate = "http://webst0${subDomain}.is.autonavi.com/appmaptile?style=6&x=${col}&y=${row}&z=${level}";
                    }
                    if (tileInfo != null) {
                        layer = new WebTiledLayer(urlTemplate, {
                            "subDomains": ["1", "2", "3", "4"],
                            "id": layerType,
                            "tileInfo": tileInfo
                        });
                    }
                    else {
                        layer = new WebTiledLayer(urlTemplate, {
                            "subDomains": ["1", "2", "3", "4"],
                            "id": layerType
                        });
                    }
                }
                else if (layerType.indexOf("tianditu") >= 0) {
                    if (layerType === "tianditu2000") { //http://t3.tianditu.com/DataServer?T=cva_c&x=106&y=20&l=7
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=vec_c&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tianditusatellite2000") { //http://www.google.cn/maps/vt?lyrs=s@169&gl=cn&&x=${col}&y=${row}&z=${level}
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=img_c&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tiandituterrain2000") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=ter_c&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tianditulabel2000") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=cva_c&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tianditusatellitelabel2000") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=cia_c&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tiandituterrainlabel2000") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=cta_c&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tianditumercator") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=vec_w&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tianditusatellitemercator") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=img_w&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tianditulabelmercator") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=cva_w&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tianditusatellitelabelmercator") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=cia_w&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tiandituterrainmercator") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=ter_w&x=${col}&y=${row}&l=${level}";
                    }
                    else if (layerType === "tiandituterrainlabelmercator") {
                        urlTemplate = "http://t${subDomain}.tianditu.com/DataServer?T=cta_w&x=${col}&y=${row}&l=${level}";
                    }
                    if (tileInfo != null) {
                        layer = new WebTiledLayer(urlTemplate, {
                            "subDomains": ["0", "1", "2", "3", "4", "5", "6", "7"],
                            "id": layerType,
                            "tileInfo": tileInfo
                        });
                    }
                    else {
                        layer = new WebTiledLayer(urlTemplate, {
                            "subDomains": ["0", "1", "2", "3", "4", "5", "6", "7"],
                            "id": layerType
                        });
                    }
                }
                else if (layerType.indexOf("google") >= 0) {
                    // layer = new ths.layers.GoogleMapLayer(layerType);
                    if (layerType === "google") {
                        urlTemplate = "http://mt${subDomain}.google.cn/vt/lyrs=m@177000000&hl=zh-CN&gl=cn&src=app&x=${col}&y=${row}&z=${level}&style=47,37%7Csmartmaps";
                    }
                    else if (layerType === "googlesatellite") {
                        urlTemplate = "http://mt${subDomain}.google.cn/vt?lyrs=s@165&hl=zh-CN&gl=CN&src=app&x=${col}&y=${row}&z=${level}";
                    }
                    else if (layerType === "googlesatellitelabel") {
                        urlTemplate = "http://mt${subDomain}.google.cn/vt/imgtp=png32&lyrs=h@275000000&hl=zh-CN&gl=CN&src=app&expIds=201527&rlbl=1&x=${col}&y=${row}&z=${level}&s=Gali";
                    }
                    else if (layerType === "googleterrain") {
                        urlTemplate = "http://mt${subDomain}.google.cn/vt?lyrs=t@132,r@258000000&src=apiv3&hl=zh-CN&x=${col}&y=${row}&z=${level}&style=37%7Csmartmaps";
                    }
                    if (tileInfo != null) {
                        layer = new WebTiledLayer(urlTemplate, {
                            "id": layerType,
                            "tileInfo": tileInfo,
                            "subDomains": ["0", "1", "2", "3"]
                        });
                    }
                    else {
                        layer = new WebTiledLayer(urlTemplate, {
                            "id": layerType,
                            "subDomains": ["0", "1", "2", "3"]
                        });
                    }
                }
                else if (layerType === "feature") {
                    var featureLayerOptions = { outFields: '', displayOnPan: true };
                    if (layerOptions.extension !== undefined) {
                        if (layerOptions.extension.outfields !== undefined && layerOptions.extension.outfields.length !== 0) {
                            featureLayerOptions.outFields = layerOptions.extension.outfields;
                        }
                        if (layerOptions.extension.wherestring !== undefined && layerOptions.extension.wherestring !== "") {
                            layer.setDefinitionExpression(layerOptions.extension.wherestring);
                        }
                    }
                    //featureLayerOptions.mode=esri.layers.FeatureLayer.MODE_ONDEMAND;
                    featureLayerOptions.displayOnPan = false;
                    layer = new FeatureLayer(layerOptions.url, featureLayerOptions);
                }
                else if (layerType === "dynamic") {
                    layer = new ArcGISDynamicMapServiceLayer(layerOptions.url);
                    if (layerOptions.visiblelayers !== undefined && layerOptions.visiblelayers.length !== 0) {
                        layer.setVisibleLayers(layerOptions.visiblelayers);
                    }
                }
                else if (layerType === "tiled") {
                    layer = new ArcGISTiledMapServiceLayer(layerOptions.url);
                }
                else if (layerType === "image") {
                    layer = new ArcGISImageServiceLayer(layerOptions.url);
                }
                else if (layerType === "webtiledlayer") {
                    layer = new WebTiledLayer(layerOptions.url, {
                        "id": layerType
                    });
                }
                if (layer === null) {
                }
                layer.id = layerOptions.label;
                layer.visible = layerOptions.visible !== undefined ? layerOptions.visible : true;
                layer.opacity = layerOptions.opacity !== undefined ? layerOptions.opacity : 1.0;
                layer.minScale = layerOptions.minScale !== undefined ? layerOptions.minScale : 0;
                layer.maxScale = layerOptions.maxScale !== undefined ? layerOptions.maxScale : 0;
                if (_this.map == null) {
                }
                _this.map.addLayer(layer);
                //return layer;
                resolve(layer);
            });
        });
    };
    /**
     * 添加图层
     * @param {any} streetsLayers
     * @param {any} satelliteLayers
     * @returns
     * @memberOf ThsMap
     */
    ThsMapComponent.prototype.addlayers = function (streetsLayers, satelliteLayers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _loop_1 = function (baseLayer) {
                _this.addLayer(_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.baseMaps[baseLayer]).then(function (mlayler) {
                    var layler = mlayler;
                    var groupId = _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.baseMaps[baseLayer].groupId;
                    if (groupId != undefined && groupId != null) {
                        for (var index in groupId) {
                            var id = groupId[index];
                            if (id === 0) {
                                streetsLayers.push(layler);
                            }
                            else if (id === 1) {
                                satelliteLayers.push(layler);
                            }
                        }
                    }
                    if (baseLayer == _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.baseMaps.length - 1) {
                        resolve(true);
                    }
                });
            };
            for (var baseLayer = 0; baseLayer < _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.baseMaps.length; baseLayer++) {
                _loop_1(baseLayer);
            }
        });
    };
    /**
     * 改变图层显示状态
     * @memberOf ThsMap
     */
    ThsMapComponent.prototype.chageLayerVisiable = function () {
        var groupLayer0 = this.groupLayers[0];
        var groupLayer1 = this.groupLayers[1];
        if (groupLayer0[0].visible === true) {
            this.default = true;
            for (var index = 0; groupLayer0 !== undefined && index < groupLayer0.length; index++) {
                groupLayer0[index].hide();
            }
            for (var index = 0; groupLayer1 !== undefined && index < groupLayer1.length; index++) {
                groupLayer1[index].show();
            }
        }
        else {
            var mapBg = document.getElementsByClassName('map').item(0);
            // mapBg.style.backgroundColor = "#b1d1e1";
            this.default = false;
            for (var index = 0; groupLayer1 !== undefined && index < groupLayer1.length; index++) {
                groupLayer1[index].hide();
            }
            for (var index = 0; groupLayer0 !== undefined && index < groupLayer0.length; index++) {
                groupLayer0[0].show();
                groupLayer0[1].show();
                // }
            }
        }
    };
    /**
     * 展示地图默认位置
     * @memberOf ThsMap
     */
    ThsMapComponent.prototype.showHome = function () {
        var _this = this;
        Object(esri_loader__WEBPACK_IMPORTED_MODULE_2__["loadModules"])(['esri/geometry/Extent']).then(function (_a) {
            var Extent = _a[0];
            _this.map.setExtent(new Extent(_map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent.xmin, _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent.ymin, _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent.xmax, _map_data__WEBPACK_IMPORTED_MODULE_4__["mapConfig"].map.initialExtent.ymax));
        });
    };
    /**
     * 根据图层类型，获取不同的tiledInfo信息
     */
    ThsMapComponent.prototype.getTiledInfoObj = function (layerType) {
        var tileInfoObj = null;
        /**天地图 */
        if (layerType.indexOf("tianditu") != -1) {
            //天地图2000
            if (layerType.indexOf("2000") != -1) {
                tileInfoObj = _map_data__WEBPACK_IMPORTED_MODULE_4__["tdtTileInfo2000"];
            }
            else {
                tileInfoObj = _map_data__WEBPACK_IMPORTED_MODULE_4__["tdtTileInfo"];
            }
        } /**百度地图 */
        else if (layerType.indexOf("baidu") != -1) {
            tileInfoObj = _map_data__WEBPACK_IMPORTED_MODULE_4__["baiduTileInfo"];
        } /**谷歌地图 */
        else if (layerType.indexOf("google") != -1) {
            tileInfoObj = _map_data__WEBPACK_IMPORTED_MODULE_4__["googleTileInfo"];
        }
        /**高德地图 */
        else if (layerType.indexOf("autonavi") != -1) {
            tileInfoObj = _map_data__WEBPACK_IMPORTED_MODULE_4__["gaodeTileInfo"];
        }
        return tileInfoObj;
    };
    /**
     * 点击是否展示收藏按钮
     * @param isShowFavite  true展示搜藏 false 不展示搜藏
     */
    ThsMapComponent.prototype.favoriteChangeClick = function () {
        this.isShowFavorite = this.isShowFavorite == false ? true : false;
        this.favoriteChange.emit(this.isShowFavorite);
    };
    /**
     * 请求更新位置
     */
    ThsMapComponent.prototype.requestLocClick = function () {
        this.requestLoc.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ThsMapComponent.prototype, "mapEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map_layer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ThsMapComponent.prototype, "mapLayerEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map_home'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ThsMapComponent.prototype, "mapHomeEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThsMapComponent.prototype, "onMapLoaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThsMapComponent.prototype, "favoriteChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThsMapComponent.prototype, "requestLoc", void 0);
    ThsMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ths-map',
            template: "<div #map  [class]=\"default ? 'map defaultMap':'map blueMap'\"></div>\n  <div #map_layer [class]=\"default? 'esriSimpleSlider esriSimpleSliderVertical esriMapButton add-tab':'esriSimpleSlider esriSimpleSliderVertical esriMapButton add-tab tabBtn'\" style=\"top: 20px;right: 10px;bottom: inherit;\"><div class=\"esriMaplayerButton\"  (click)=\"chageLayerVisiable()\"></div></div>\n  <div #map_home  class=\"esriSimpleSlider esriSimpleSliderVertical esriMapButton add-like\"><div class=\"esriMapHomeButton\"  (click)=\"showHome()\"></div></div>\n  <div class=\"fav\"><div [class]=\"isShowFavorite? 'like':'no-like'\" style=\"display: block;\"  (click)=\"favoriteChangeClick()\"></div></div>\n  <div class=\"pos-box\"><div class=\"pos\" style=\"display: block;\"  (click)=\"requestLocClick()\"></div></div>\n  <div id=\"tempDiv\" style=\"position: absolute;bottom: 0px;right: 0px;visibility: hidden;\"></div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], ThsMapComponent);
    return ThsMapComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-favorites-favorites-module~pages-map-map-module.js.map