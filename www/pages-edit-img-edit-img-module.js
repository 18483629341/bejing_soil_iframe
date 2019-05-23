(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-img-edit-img-module"],{

/***/ "./src/app/pages/edit-img/edit-img.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edit-img/edit-img.module.ts ***!
  \***************************************************/
/*! exports provided: EditImgPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgPageModule", function() { return EditImgPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_img_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-img.page */ "./src/app/pages/edit-img/edit-img.page.ts");







var routes = [
    {
        path: '',
        component: _edit_img_page__WEBPACK_IMPORTED_MODULE_6__["EditImgPage"]
    }
];
var EditImgPageModule = /** @class */ (function () {
    function EditImgPageModule() {
    }
    EditImgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_img_page__WEBPACK_IMPORTED_MODULE_6__["EditImgPage"]]
        })
    ], EditImgPageModule);
    return EditImgPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-img/edit-img.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/edit-img/edit-img.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>添加附件</ion-title>\n    <ion-buttons slot=\"primary\" (click)=\"publishEvents()\">\n      <ion-button >\n          提交\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header mode='ios'>\n  <ion-toolbar mode='ios' [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>添加附件</ion-title>\n    <ion-buttons slot=\"primary\" (click)=\"publishEvents()\">\n      <ion-button>\n        保存\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"top_head\" [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-segment id=\"top_tab\">\n      <ion-segment-button checked=true class=\"top_tab_item\" [ngClass]=\"{'active': item==0?true:false}\" (click)='OnitemClick(0)'>\n        照片\n      </ion-segment-button>\n      <ion-segment-button class=\"top_tab_item\" [ngClass]=\"{'active': item==1?true:false}\" (click)='OnitemClick(1)'>\n        视频\n      </ion-segment-button>\n      <ion-segment-button class=\"top_tab_item\" [ngClass]=\"{'active': item==2?true:false}\" (click)='OnitemClick(2)'>\n        文件\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [style.display]=\"item==0?'block':'none'\">\n    <div class=\"imgBox\">\n      <img [src]=\"item\" *ngFor=\"let item of imgArr\" [ngStyle]=\"{'width': imgWidth,'height':imgWidth}\" (click)=\"goEdit(item)\">\n      <img src=\"../../../assets/img/tj.png\" (click)=\"addCamera()\" [ngStyle]=\"{'width': imgWidth,'height':imgWidth}\">\n    </div>\n  </div>\n  <div [style.display]=\"item==1?'block':'none'\">\n    <video [src]=\"video\" class=\"video\"  *ngIf=\"video\"  type=\"video/mp4\" controls=\"controls\"></video>\n    <img src=\"../../../assets/img/tj.png\" (click)=\"addVideo()\" [ngStyle]=\"{'width': imgWidth,'height':imgWidth}\" *ngIf=\"isShow\">\n  </div>\n  <div [style.display]=\"item==2?'block':'none'\">\n    <ion-list *ngIf=\"filesArr.length>0\">\n      <ion-item *ngFor=\"let item of filesArr\">\n        <ion-label>\n          {{item}}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <img src=\"../../../assets/img/tj.png\" (click)=\"addFiles()\" [ngStyle]=\"{'width': imgWidth,'height':imgWidth}\">\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/edit-img/edit-img.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/edit-img/edit-img.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_head {\n  padding-top: 9px;\n  padding-bottom: 10px;\n  height: 56px !important;\n  border-top: 0.55px solid #fff; }\n\n#top_tab {\n  --color:white;\n  --indicator-color:none;\n  --indicator-color-checked:none;\n  margin: 0 auto;\n  width: 90%;\n  height: 30px;\n  margin-top: 4px;\n  font-size: 16px !important; }\n\n.active {\n  background-color: #fff;\n  color: #20A4EC; }\n\n.top_tab_item {\n  min-height: 28px; }\n\nion-segment-button {\n  border: 0.55px solid #fff; }\n\nion-segment-button:first-child {\n  border-right: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\nion-segment-button:last-child {\n  border-left: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.imgBox {\n  display: flex;\n  flex-wrap: wrap; }\n\n.imgBox img {\n    width: 100px;\n    height: 100px; }\n\n.video {\n  width: 100%;\n  height: 300px; }\n\nion-header ion-toolbar {\n  color: #fff;\n  --min-height:56px; }\n\nion-header ion-back-button {\n  --color:#fff !important; }\n\nion-header ion-button {\n  color: #fff;\n  font-size: 16px; }\n\nion-header ion-title {\n  font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1pbWcvRTpcXHdvcmtcXHByb2plY3RzXFxiZWlqaW5nX3NvaWxfYXBwMjAxOTA1MDVcXEJKV1JBUFAvc3JjXFxhcHBcXHBhZ2VzXFxlZGl0LWltZ1xcZWRpdC1pbWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNuQix1QkFBdUI7RUFDdkIsNkJBQ0wsRUFBQTs7QUFFQTtFQUdJLGFBQVE7RUFHUixzQkFBa0I7RUFDbEIsOEJBQTBCO0VBRTFCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQiwyQkFBMEI7RUFDMUIsOEJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksaUJBQWlCO0VBQ2pCLDRCQUEyQjtFQUMzQiwrQkFBOEIsRUFBQTs7QUFFbEM7RUFDSSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUZuQjtJQUlRLFlBQVk7SUFDWixhQUFhLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFFakI7RUFHUSxXQUFXO0VBQ1gsaUJBQWEsRUFBQTs7QUFKckI7RUFPUSx1QkFBUSxFQUFBOztBQVBoQjtFQVVRLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBWHZCO0VBY1EsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0LWltZy9lZGl0LWltZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRvcF9oZWFke1xyXG4gICAvLyBiYWNrZ3JvdW5kOiAjMjBBNEVDO1xyXG4gICAgcGFkZGluZy10b3A6IDlweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgIGhlaWdodDogNTZweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCAjZmZmXHJcbn1cclxuXHJcbiN0b3BfdGFie1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjNDE2MmZiO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjp3aGl0ZTtcclxuICAgIC8vIC0tY29sb3ItY2hlY2tlZDojNDE2MmZiO1xyXG4gICAgXHJcbiAgICAtLWluZGljYXRvci1jb2xvcjpub25lO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lO1xyXG4gICAgLy8gLS1ib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzIwQTRFQztcclxufVxyXG4udG9wX3RhYl9pdGVte1xyXG4gICAgbWluLWhlaWdodDogMjhweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgIGJvcmRlcjogMC41NXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbjpsYXN0LWNoaWxke1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7XHJcbn1cclxuLmltZ0JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuLnZpZGVve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbmlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC8vLS1iYWNrZ3JvdW5kOiAjMjBBNEVDO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC0tbWluLWhlaWdodDo1NnB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgICAtLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/edit-img/edit-img.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/edit-img/edit-img.page.ts ***!
  \*************************************************/
/*! exports provided: EditImgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgPage", function() { return EditImgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");














var EditImgPage = /** @class */ (function () {
    function EditImgPage(activatedRoute, actionSheetController, camera, router, fileChooser, fileTransfer, mediaCapture, webView, streamingMedia, events, configService, globalService, httpUtils) {
        this.activatedRoute = activatedRoute;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.router = router;
        this.fileChooser = fileChooser;
        this.fileTransfer = fileTransfer;
        this.mediaCapture = mediaCapture;
        this.webView = webView;
        this.streamingMedia = streamingMedia;
        this.events = events;
        this.configService = configService;
        this.globalService = globalService;
        this.httpUtils = httpUtils;
        this.item = 0; // 选项卡切换默认选项
        this.imgArr = []; // 展示图片数组
        this.imgArr2 = []; // 图片绝对路径数组
        this.filesArr = [];
        this.isShow = true; // 是否展示加号
        this.hostUrl = 'http://192.168.0.55:1012/bjsoilapi/file/download.vm?';
        // 设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    }
    EditImgPage.prototype.publishEvents = function () {
        this.events.publish('user:created', this.imgArr2);
        this.router.navigate(['inspection-record']);
    };
    EditImgPage.prototype.ngOnInit = function () {
        var _this = this;
        this.imgWidth = window.innerWidth / 3 + 'px';
        this.configService.getFile({
            sessionId: this.globalService.sessionId,
            ids: this.globalService.filesID,
        }, true, function (res) {
            //console.log(res);
            if (res !== 'error') {
                // tslint:disable-next-line:forin
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var key = res_1[_i];
                    // const arr = key.FILENAME.split('%');
                    // const imgPath = this.hostUrl + arr[0] + '%' + arr[1].toUpperCase();
                    // console.log(imgPath);
                    // this.imgArr.push(imgPath);
                    if (key.FILETYPE.indexOf('image') !== -1) {
                        //console.log(`${this.hostUrl}sessionId=${this.globalService.sessionId}&fileid=${key.FILEID}`);
                        var imgPath = _this.hostUrl + "sessionId=" + _this.globalService.sessionId + "&fileid=" + key.FILEID;
                        _this.imgArr.push(imgPath);
                    }
                    else if (key.FILETYPE.indexOf('mp4') !== -1 || key.FILETYPE.indexOf('video') !== -1) {
                        _this.video = _this.hostUrl + "sessionId=" + _this.globalService.sessionId + "&fileid=" + key.FILEID;
                    }
                    else {
                        _this.filesArr.push(key.FILENAME);
                    }
                }
            }
        });
    };
    EditImgPage.prototype.ionViewWillEnter = function () {
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    // 选中切换
    EditImgPage.prototype.OnitemClick = function (num) {
        this.item = num;
    };
    // 选择照相
    EditImgPage.prototype.addCamera = function () {
        this.presentCamera();
    };
    // 选择视频拍摄
    EditImgPage.prototype.addVideo = function () {
        this.presentVideo();
    };
    // 选择文件
    EditImgPage.prototype.addFiles = function () {
        this.presentFiles();
    };
    // 弹出层相机
    EditImgPage.prototype.presentCamera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [{
                                    text: '拍摄照片',
                                    role: 'destructive',
                                    handler: function () {
                                        //console.log('Delete clicked');
                                        _this.openCamera('CAMERA');
                                    }
                                }, {
                                    text: '选择照片',
                                    handler: function () {
                                        //console.log('Share clicked');
                                        _this.openCamera('PHOTOLIBRARY');
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                        //console.log('Cancel clicked');
                                    }
                                }],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 弹出层摄像
    EditImgPage.prototype.presentVideo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [{
                                    text: '视频拍摄',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.openVideo();
                                        //console.log('Delete clicked');
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                        //console.log('Cancel clicked');
                                    }
                                }],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 弹出层文件
    EditImgPage.prototype.presentFiles = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [{
                                    text: '在手机文件中选择',
                                    role: 'destructive',
                                    handler: function () {
                                        //console.log('Delete clicked');
                                        _this.chooseFile();
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                        //console.log('Cancel clicked');
                                    }
                                }],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 拍照
     * @param option  对象
     */
    EditImgPage.prototype.openCamera = function (option) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            sourceType: this.camera.PictureSourceType[option],
        };
        this.camera.getPicture(options).then(function (imageData) {
            // If it's base64:
            // const base64Image = 'data:image/jpeg;base64,' + imageData;
            var fileImg = _this.webView.convertFileSrc(imageData);
            // alert(fileImg);
            _this.imgPath = fileImg;
            _this.imgArr.unshift(fileImg); // 页面展示图片数组
            _this.imgArr2.push(imageData); // 添加到同一个数组
        }, function (err) {
            // Handle error
        });
    };
    /**
     * 拍视频
     */
    EditImgPage.prototype.openVideo = function () {
        var _this = this;
        var options = {
            limit: 1,
            quality: 60,
            duration: 60
        };
        this.mediaCapture.captureVideo(options).then(function (res) {
            // alert(JSON.stringify(res));
            _this.videoUrl = res[0].fullPath;
            _this.video = _this.webView.convertFileSrc(res[0].fullPath);
            _this.imgArr2.push(res[0].fullPath); // 添加到同一个数组
            _this.isShow = false;
        }, function (err) {
            console.log('Something went wrong');
            // alert(JSON.stringify(err));
        });
    };
    // 选择文件
    EditImgPage.prototype.chooseFile = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            // alert(uri);
            _this.imgArr2.push(uri); // 添加到同一个数组
            var fileName = _this.getFileName(uri);
            _this.filesArr.unshift(fileName);
        })
            .catch(function (e) { return console.log(e); });
    };
    /**
     * 跳转照片编辑
     * @param item 对象
     */
    EditImgPage.prototype.goEdit = function (item) {
        this.router.navigate(['edit-photo'], { queryParams: { imgPath: item } });
    };
    // 根据url获取文件名(包含文件类型)
    EditImgPage.prototype.getFileName = function (fileUrl) {
        return fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length).toLowerCase();
    };
    /**
     * 播放视频
     */
    EditImgPage.prototype.playVideo = function () {
        var _this = this;
        var options = {
            successCallback: function () { _this.httpUtils.thsToast('Video played'); },
            errorCallback: function (e) { _this.httpUtils.thsToast(e); },
            orientation: 'portrait',
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo('http://v.qq.com/x/page/r0506bwgizi.html', options);
    };
    EditImgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-img',
            template: __webpack_require__(/*! ./edit-img.page.html */ "./src/app/pages/edit-img/edit-img.page.html"),
            styles: [__webpack_require__(/*! ./edit-img.page.scss */ "./src/app/pages/edit-img/edit-img.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
            _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__["MediaCapture"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"],
            _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_12__["HttpUtilsService"]])
    ], EditImgPage);
    return EditImgPage;
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
//# sourceMappingURL=pages-edit-img-edit-img-module.js.map