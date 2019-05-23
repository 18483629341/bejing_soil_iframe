(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-plot-base-info-plot-base-info-module~pages-plot-detail-plot-detail-module~pages-plot-d~6508c55c"],{

/***/ "./src/app/services/public/app-update.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/public/app-update.service.ts ***!
  \*******************************************************/
/*! exports provided: AppUpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUpdateService", function() { return AppUpdateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _public_http_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");
/* harmony import */ var _public_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _public_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/global.service */ "./src/app/services/public/global.service.ts");



 // 附件
// 打开文件插件
 // 打开附件






var AppUpdateService = /** @class */ (function () {
    function AppUpdateService(platform, alertController, browser, fileOpener, transfer, file, appVersion, httpUtils, config, global) {
        this.platform = platform;
        this.alertController = alertController;
        this.browser = browser;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.file = file;
        this.appVersion = appVersion;
        this.httpUtils = httpUtils;
        this.config = config;
        this.global = global;
        this.updateInfo = '更新内容测试'; // 更新内容
    }
    /**版本更新检测
    * nowVserion 当前版本信息
    * url  服务器地址
    * androidUrl android下载地址
    * iosUrl ios下载地址
    */
    AppUpdateService.prototype.checkVersion = function () {
        var _this = this;
        this.config.getAppVersion({}, false, function (res) {
            if (res && res !== 'error' && res.data && res.data.length > 0) {
                var obj = res.data[0];
                _this.updateInfo = obj.UPDATEINFO;
                _this.upDateVerison(obj.VER_ANDROID, obj.ANDROIDURL, obj.APKNAME);
            }
            else {
                _this.httpUtils.thsToast('更新失败!');
            }
        });
    };
    /**下载新版本
     * nowVserion  服务器版本信息
     * preVersion 本地版本信息
     * url  服务器地址
     * androidUrl android下载地址
     * iosUrl ios下载地址
     */
    AppUpdateService.prototype.upDateVerison = function (nowVserion, androidUrl, apkName, iosUrl) {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is('ios')) {
                // if (this.handleVersion(preVersion) < this.handleVersion(nowVserion)) {
                //   this.presentAlert(preVersion, nowVserion, this.updateInfo, iosUrl);
                // }
            }
            else if (_this.platform.is('android')) {
                _this.appVersion.getVersionNumber().then(function (res) {
                    console.log(res, nowVserion);
                    if (_this.handleVersion(res) < _this.handleVersion(nowVserion)) {
                        _this.presentAlert(res, nowVserion, _this.updateInfo, androidUrl, apkName);
                    }
                });
            }
        });
    };
    /**
     * 处理版本号
     * @param num 版本号
     */
    AppUpdateService.prototype.handleVersion = function (num) {
        if (num) {
            return num.split('.').join('');
        }
    };
    /**
     * 更新提示
     * @param preVersion 当前版本号
     * @param nowVserion 待更新版本号
     * @param updateInfo 更新内容
     * @param downUrl 下载地址
     * @param apkName apk名称
     */
    AppUpdateService.prototype.presentAlert = function (preVersion, nowVserion, updateInfo, downUrl, apkName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '发现新版本,是否更新?',
                            message: '<div>当前版本号：' + preVersion + '</div><div>待更新版本号：' + nowVserion + '</div><div>更新内容：' + updateInfo + '</div>',
                            buttons: [
                                {
                                    text: '取消',
                                    handler: function () {
                                        // console.log('Disagree clicked');
                                    }
                                },
                                {
                                    text: '确定',
                                    handler: function () {
                                        if (apkName) {
                                            _this.downFile(downUrl, 'application/vnd.android.package-archive', apkName);
                                        }
                                        else {
                                            _this.browser.create(downUrl);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
   * 检查文件是否存在
   * @param fileName 文件名 必传
   * @param filePath 文件路径 必传
   */
    AppUpdateService.prototype.fileIsExited = function (fileName, filePath, callback) {
        this.file.checkFile(filePath, fileName)
            .then(function () {
            callback(true);
        }, function () {
            callback(false);
        })
            .catch(function () {
            callback(false);
        });
    };
    /**
     *
     * @param url 下载地址
     * @param application 文件打开方式
     * @param name 文件名称
     */
    AppUpdateService.prototype.downFile = function (url, application, name, filesize, callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fileTransfer, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.fileIsExited(url, this.file.externalCacheDirectory + name, function (res) {
                            // alert(res);
                        });
                        application = this.getFileMimeType(application);
                        fileTransfer = this.transfer.create();
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                message: '<p class="title">正在下载，请稍等...</p><div class="progress"><span class="blue"></span></div><p class="downed">已经下载：0%</p>',
                            })];
                    case 1:
                        _a.alert1 = _b.sent();
                        window.closeUpdatePop = true;
                        this.alert1.present();
                        fileTransfer.download(url, this.file.externalCacheDirectory + name, false)
                            .then(function (entry) {
                            var openurl = entry.toURL();
                            if (callback) {
                                // alert(this.file.externalCacheDirectory + name);//调试用
                                callback();
                            }
                            _this.openFile(_this.file.externalCacheDirectory + name, application);
                        }, function (error) {
                            console.log('1', error);
                            if (_this.alert1) {
                                _this.alert1.dismiss();
                                _this.alert1 = null;
                            }
                            window.closeUpdatePop = false;
                            _this.httpUtils.thsToast('文件下载失败，请重试');
                        }).catch(function (e) {
                            console.log('1', e);
                            if (_this.alert1) {
                                _this.alert1.dismiss();
                                _this.alert1 = null;
                            }
                            window.closeUpdatePop = false;
                            _this.httpUtils.thsToast('文件下载失败，请重试');
                        });
                        fileTransfer.onProgress(function (event) {
                            //alert(JSON.stringify(event));//调试用
                            var num;
                            if (filesize) {
                                num = Math.floor(event.loaded / filesize * 100);
                            }
                            else {
                                num = Math.floor(event.loaded / event.total * 100);
                            }
                            if (num > 100) {
                                if (_this.alert1) {
                                    //alert(num);//调试用
                                    _this.alert1.dismiss();
                                    _this.alert1 = null;
                                }
                            }
                            else if (event.loaded > 0 && (event.total || filesize)) {
                                var progress = document.getElementsByClassName('blue')[0];
                                if (progress) {
                                    progress['style'].display = 'block';
                                    progress['style'].width = num + '%';
                                }
                                var downed = document.getElementsByClassName('downed')[0];
                                if (downed) {
                                    downed.innerHTML = '已经下载：' + num + '%';
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 打开文件
     * @param filePath 文件路径 必传
     * @param application 文件打开方式
     */
    AppUpdateService.prototype.openFile = function (filePath, application) {
        var _this = this;
        this.fileOpener.open(filePath, application).then(function () {
            window.closeUpdatePop = false;
            if (_this.alert1) {
                _this.alert1.dismiss();
                _this.alert1 = null;
            }
        }).catch(function (e) {
            console.log('3', e);
            if (_this.alert1) {
                _this.alert1.dismiss();
                _this.alert1 = null;
            }
            window.closeUpdatePop = false;
            _this.httpUtils.thsToast('文件打开失败，请重试');
        });
    };
    /**
     * 图片上传
     * @param param 接口所需参数
     * @param fllePath 文件路径
     * @param url 上传服务器地址
     * @param callback 回调函数
     */
    AppUpdateService.prototype.upImg = function (param, fllePath, url, callback) {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'files',
            fileName: fllePath,
            httpMethod: 'post',
            headers: {},
            params: {
                'docID': param.docID
            }
        };
        fileTransfer.upload(fllePath, url, options)
            .then(function (res) {
            callback(res);
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * 获取文件类型
     */
    AppUpdateService.prototype.getFileMimeType = function (fileType) {
        var mimeType = '';
        switch (fileType) {
            case 'txt':
                mimeType = 'text/plain';
                break;
            case 'docx':
                mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                break;
            case 'doc':
                mimeType = 'application/msword';
                break;
            case 'pptx':
                mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                break;
            case 'ppt':
                mimeType = 'application/vnd.ms-powerpoint';
                break;
            case 'xlsx':
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                break;
            case 'xls':
                mimeType = 'application/vnd.ms-excel';
                break;
            case 'zip':
                mimeType = 'application/x-zip-compressed';
                break;
            case 'rar':
                mimeType = 'application/octet-stream';
                break;
            case 'pdf':
                mimeType = 'application/pdf';
                break;
            case 'jpg':
                mimeType = 'image/jpeg';
                break;
            case 'png':
                mimeType = 'image/png';
                break;
            default:
                mimeType = 'application/' + fileType;
                break;
        }
        return mimeType;
    };
    /**
     * 截取文件后缀名
     * @param fileName 文件名
     */
    AppUpdateService.prototype.getFileSuffix = function (fileName) {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();
    };
    /**
     * 根据字典的信息 通过对应的code,拿到对应的名字
     * @param arr 遍历的对象数组
     * @param codeNum 对应codeNum
     */
    AppUpdateService.prototype.tranToString = function (arr, codeNum) {
        var name = null;
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];
                if (item['dictionary_code'] === codeNum) {
                    name = item['dictionary_name'];
                }
            }
        }
        else {
            name = '- -';
        }
        return name;
    };
    AppUpdateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"],
            _public_http_utils_service__WEBPACK_IMPORTED_MODULE_8__["HttpUtilsService"],
            _public_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"],
            _public_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"]])
    ], AppUpdateService);
    return AppUpdateService;
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
//# sourceMappingURL=default~pages-plot-base-info-plot-base-info-module~pages-plot-detail-plot-detail-module~pages-plot-d~6508c55c.js.map