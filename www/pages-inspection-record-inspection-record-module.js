(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inspection-record-inspection-record-module"],{

/***/ "./src/app/pages/inspection-record/inspection-record.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inspection-record/inspection-record.module.ts ***!
  \*********************************************************************/
/*! exports provided: InspectionRecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionRecordPageModule", function() { return InspectionRecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inspection_record_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspection-record.page */ "./src/app/pages/inspection-record/inspection-record.page.ts");







var routes = [
    {
        path: '',
        component: _inspection_record_page__WEBPACK_IMPORTED_MODULE_6__["InspectionRecordPage"]
    }
];
var InspectionRecordPageModule = /** @class */ (function () {
    function InspectionRecordPageModule() {
    }
    InspectionRecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inspection_record_page__WEBPACK_IMPORTED_MODULE_6__["InspectionRecordPage"]]
        })
    ], InspectionRecordPageModule);
    return InspectionRecordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/inspection-record/inspection-record.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inspection-record/inspection-record.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      添加现场督察记录\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"dec-list\">\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">监督管理标题</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">\n        <ion-input [(ngModel)]=\"checkTitle\" placeholder='请输入标题' maxlength=30></ion-input>\n        <!-- <ion-textarea maxlength=30 [(ngModel)]=\"checkTitle\" placeholder='请输入标题'></ion-textarea> -->\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">监督管理单位</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">\n        <ion-input [(ngModel)]=\"checkUnit\" placeholder='请输入管理单位' maxlength=30></ion-input>\n        <!-- <ion-textarea maxlength=30 [(ngModel)]=\"checkUnit\" placeholder='请输入管理单位'></ion-textarea> -->\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center (click)=\"goEdit()\">\n      <ion-col class=\"left-text\" size=\"5\">监督管理附件</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">\n        <!-- <span class=\"upLoadBtn\" (click)=\"choose()\">上传</span> -->\n        <span class=\"arrow\">\n          <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center *ngIf=\"nowTime?true:false\">\n      <ion-col class=\"left-text\" size=\"5\">监督管理时间</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">\n        <ion-input [(ngModel)]=\"nowTime\"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"padding-10\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"remark\">\n        <span> 督察情况</span>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"textBox\">\n          <ion-textarea maxlength=30 [(ngModel)]=\"checkCondition\" placeholder='请输入督察情况'></ion-textarea>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"fixedBox\">\n    <div class=\"btnBox\">\n      <span (click)=\"saveData()\">暂存</span>\n      <span (click)=\"upLoad()\">提交</span>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/inspection-record/inspection-record.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inspection-record/inspection-record.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* 详情列表通用样式 start*/\n.dec-list {\n  background: #fff;\n  padding: 10px 0 10px 13px; }\n.dec-list ion-row {\n    line-height: 25px;\n    border-bottom: .55px solid #ebebeb;\n    min-height: 50px;\n    padding-right: 10px; }\n.dec-list .left-text {\n    color: #666;\n    font-size: 16px; }\n.dec-list .right-text {\n    font-size: 16px;\n    text-align: right;\n    color: #333; }\n.upLoadBtn {\n  display: inline-block;\n  width: 80px;\n  height: 36px;\n  line-height: 36px;\n  text-align: center;\n  background-color: #169BD5;\n  border-radius: 8px;\n  color: #fff; }\n.sc-ion-textarea-md-h {\n  --padding-top: 0;\n  --padding-bottom: 24px;\n  margin-top: 0; }\n.fixedBox {\n  width: 100%;\n  position: absolute;\n  bottom: 0; }\n.btnBox {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff; }\n.btnBox span {\n    width: 50%;\n    height: 44px;\n    line-height: 44px;\n    text-align: center; }\n.btnBox span:nth-of-type(1) {\n  background-color: #ccc; }\n.btnBox span:nth-of-type(2) {\n  background-color: #169BD5; }\n.padding-10 {\n  padding-left: 10px; }\n.arrow {\n  display: inline-block;\n  margin-top: 5px;\n  font-size: 24px; }\n.textBox {\n  border: 1px solid #e2e2e2; }\n.remark {\n  padding: 5px;\n  color: #666; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zcGVjdGlvbi1yZWNvcmQvaW5zcGVjdGlvbi1yZWNvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbnNwZWN0aW9uLXJlY29yZC9FOlxcd29ya1xccHJvamVjdHNcXGJlaWppbmdfc29pbF9hcHAyMDE5MDUwNVxcQkpXUkFQUC9zcmNcXGFwcFxccGFnZXNcXGluc3BlY3Rpb24tcmVjb3JkXFxpbnNwZWN0aW9uLXJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGtCQUFBO0FBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIseUJBQXdCLEVBQUE7QUFGNUI7SUFNUSxpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtBQVQzQjtJQVlRLFdBQVc7SUFDWCxlQUFlLEVBQUE7QUFidkI7SUFnQlEsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFVLEVBQUE7QUFHbEI7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBRWY7RUFDUyxnQkFBYztFQUVkLHNCQUFpQjtFQUVqQixhQUFhLEVBQUE7QUFFdEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTtBQUViO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtBQUxmO0lBT1EsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFLMUI7RUFDSSxzQkFBc0IsRUFBQTtBQUUxQjtFQUVJLHlCQUF5QixFQUFBO0FBRTdCO0VBQ0ksa0JBQWtCLEVBQUE7QUFFdEI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWUsRUFBQTtBQUduQjtFQUNJLHlCQUF5QixFQUFBO0FBRTdCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3BlY3Rpb24tcmVjb3JkL2luc3BlY3Rpb24tcmVjb3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIOivpuaDheWIl+ihqOmAmueUqOagt+W8jyBzdGFydCovXG4uZGVjLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxM3B4OyB9XG4gIC5kZWMtbGlzdCBpb24tcm93IHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBib3JkZXItYm90dG9tOiAuNTVweCBzb2xpZCAjZWJlYmViO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDsgfVxuICAuZGVjLWxpc3QgLmxlZnQtdGV4dCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxNnB4OyB9XG4gIC5kZWMtbGlzdCAucmlnaHQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjMzMzOyB9XG5cbi51cExvYWRCdG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjlCRDU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICNmZmY7IH1cblxuLnNjLWlvbi10ZXh0YXJlYS1tZC1oIHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgbWFyZ2luLXRvcDogMDsgfVxuXG4uZml4ZWRCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7IH1cblxuLmJ0bkJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7IH1cbiAgLmJ0bkJveCBzcGFuIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmJ0bkJveCBzcGFuOm50aC1vZi10eXBlKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgfVxuXG4uYnRuQm94IHNwYW46bnRoLW9mLXR5cGUoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY5QkQ1OyB9XG5cbi5wYWRkaW5nLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbi5hcnJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDI0cHg7IH1cblxuLnRleHRCb3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyOyB9XG5cbi5yZW1hcmsge1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNjY2OyB9XG4iLCIvKiDor6bmg4XliJfooajpgJrnlKjmoLflvI8gc3RhcnQqL1xyXG4uZGVjLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzoxMHB4IDAgMTBweCAxM3B4O1xyXG5cclxuXHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IC41NXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmxlZnQtdGV4dHtcclxuICAgICAgICBjb2xvcjogIzY2NjsgICBcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtdGV4dHsgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBjb2xvcjojMzMzO1xyXG4gICAgfVxyXG59XHJcbi51cExvYWRCdG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2OUJENTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zYy1pb24tdGV4dGFyZWEtbWQtaHtcclxuICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDsgXHJcbiAgICAgICAgLy8gLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDsgXHJcbiAgICAgICAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAwOyBcclxuICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uZml4ZWRCb3h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG4uYnRuQm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuLmJ0bkJveCBzcGFuOm50aC1vZi10eXBlKDEpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG4uYnRuQm94IHNwYW46bnRoLW9mLXR5cGUoMil7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2OUJENTtcclxufVxyXG4ucGFkZGluZy0xMHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uYXJyb3d7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG59XHJcbi50ZXh0Qm94e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcclxufVxyXG4ucmVtYXJre1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICM2NjY7ICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/inspection-record/inspection-record.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/inspection-record/inspection-record.page.ts ***!
  \*******************************************************************/
/*! exports provided: InspectionRecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionRecordPage", function() { return InspectionRecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_ths_location_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/public/ths-location.service */ "./src/app/services/public/ths-location.service.ts");
















var InspectionRecordPage = /** @class */ (function () {
    function InspectionRecordPage(router, fileChooser, fileTransfer, camera, mediaCapture, streamingMedia, webView, file, events, alertController, toastController, activatedRouted, actionSheetController, global, loadingController, configService, thsLocation) {
        // 获取暂存数据并赋值回显
        // const checkData = JSON.parse(localStorage.getItem('checkData'));
        // if (checkData) {
        //   this.nowTime = checkData.nowTime;
        //   this.checkTitle = checkData.checkTitle;
        //   this.checkUnit = checkData.checkUnit;
        //   this.checkCondition = checkData.checkCondition;
        // }
        this.router = router;
        this.fileChooser = fileChooser;
        this.fileTransfer = fileTransfer;
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.streamingMedia = streamingMedia;
        this.webView = webView;
        this.file = file;
        this.events = events;
        this.alertController = alertController;
        this.toastController = toastController;
        this.activatedRouted = activatedRouted;
        this.actionSheetController = actionSheetController;
        this.global = global;
        this.loadingController = loadingController;
        this.configService = configService;
        this.thsLocation = thsLocation;
        this.checkTitle = ''; // 检查标题
        this.checkUnit = ''; // 检查单位
        this.checkCondition = ''; // 检查情况
        this.SUPERVISE_ID = ''; //  判断是否暂存id
        this.data = []; //  图片数组
    }
    InspectionRecordPage.prototype.ngOnInit = function () {
        // this.activatedRouted.queryParams.subscribe(params => {
        // //  获取传过来的项目id
        //   this.SEEMINFO_ID = params.id;
        //   console.log(this.SEEMINFO_ID);
        // });
        //获取定位
        var _this = this;
        this.configService.getUpdatedSuperviseByLand({
            sessionId: this.global.sessionId,
            id: this.global.SEEMINFO_ID,
        }, true, function (res) {
            if (res !== 'error' && res.data !== null) {
                // alert(JSON.stringify(res));
                console.log(res);
                _this.global.SUPERVISE_ID = res.data.SUPERVISE_ID;
                _this.global.filesID = res.data.FILEIDS;
                _this.checkTitle = res.data.TITLE;
                _this.checkCondition = res.data.SUGGEST;
                _this.checkUnit = res.data.DEPTNAME;
                _this.nowTime = _this.formatDate(new Date(res.data.CREATE_DATE));
            }
        });
    };
    InspectionRecordPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
        this.events.subscribe('user:created', function (imgArr) {
            if (imgArr) {
                // alert(imgArr);
                console.log(imgArr);
                _this.data = imgArr;
            }
        });
    };
    // 获取当前时间
    InspectionRecordPage.prototype.getNowFormatDate = function () {
        var date = new Date();
        var seperator1 = '-';
        var seperator2 = ':';
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
        }
        if (minutes >= 0 && minutes <= 9) {
            minutes = '0' + minutes;
        }
        if (seconds >= 0 && seconds <= 9) {
            seconds = '0' + seconds;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + ' ' + date.getHours() + seperator2 + minutes
            + seperator2 + seconds;
        return currentdate;
    };
    // 时间转换
    InspectionRecordPage.prototype.formatDate = function (now) {
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
    };
    // 提示框
    InspectionRecordPage.prototype.presentToastWithOptions = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            showCloseButton: true,
                            position: 'middle',
                            closeButtonText: 'x',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 跳转编辑页面
     */
    InspectionRecordPage.prototype.goEdit = function () {
        this.router.navigate(['edit-img']);
    };
    /**
      * 上传到服务器
      * @param path 文件路径
      */
    InspectionRecordPage.prototype.upload = function (path, index, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader, transfer, fileType, fileName, fileMimeType, options, serverUrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (path === '') {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.presentLoading('正在上传')];
                    case 1:
                        loader = _a.sent();
                        transfer = this.fileTransfer.create();
                        fileType = this.getFileType(path);
                        fileName = this.getFileName(path);
                        fileMimeType = this.getFileMimeType(fileType);
                        options = {
                            fileKey: 'file',
                            fileName: fileName,
                            mimeType: fileMimeType,
                            httpMethod: 'POST'
                        };
                        serverUrl = "" + this.global.hostUrl + this.global.uploadUrl + "?sessionId=" + this.global.sessionId;
                        // 上传文件到服务器
                        transfer.upload(path, serverUrl, options, false)
                            .then(function (data) {
                            // 获取文件id并且拼接
                            _this.fileID = _this.fileID + data.response + ',';
                            // 判断是否是最后一个文件，然后请求暂存接口
                            if (index === _this.data.length - 1) {
                                //  删除拼接id 最后一个逗号
                                var FILEIDS = _this.fileID.substring(0, _this.fileID.length - 1);
                                // alert('文件id     ' + FILEIDS + '之前');
                                _this.configService.supervisesave({
                                    sessionId: _this.global.sessionId,
                                    'form[FILEIDS]': FILEIDS + ',' + _this.global.filesID,
                                    'form[TITLE]': _this.checkTitle,
                                    'form[SEEMINFO_ID]': _this.global.SEEMINFO_ID,
                                    'form[DEPTNAME]': _this.checkUnit,
                                    'form[SUGGEST]': _this.checkCondition,
                                    'form[SAVESTATUS]': type,
                                    'form[SUPERVISE_ID]': _this.global.SUPERVISE_ID,
                                }, true, function (res) {
                                    // alert(JSON.stringify(res));
                                    if (res !== 'error') {
                                        if (res.status === 'success') {
                                            _this.presentToastWithOptions('上传成功');
                                        }
                                    }
                                });
                            }
                        }, function (err) {
                            // error
                            // alert(JSON.stringify(err));
                        });
                        transfer.onProgress(function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.progressNum = Math.round(event.loaded / event.total * 100);
                                if (this.progressNum >= 100) {
                                    this.hideLoading(loader);
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    // 根据url获取文件类型
    InspectionRecordPage.prototype.getFileType = function (fileUrl) {
        return fileUrl.substring(fileUrl.lastIndexOf('.') + 1, fileUrl.length).toLowerCase();
    };
    // 根据url获取文件名(包含文件类型)
    InspectionRecordPage.prototype.getFileName = function (fileUrl) {
        return fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length).toLowerCase();
    };
    // 根据文件类型获取文件的mimeType
    InspectionRecordPage.prototype.getFileMimeType = function (fileType) {
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
     * 显示下载进度框
     */
    // async showLoadingAlert() {
    //   this.alertControl = await this.alertController.create({
    //     message: '<p class="title">正在上传，请稍等...</p><div class="progress">' +
    //       '<span class="blue loading"></span></div><p class="downed">已经上传：0%</p>',
    //     buttons: [
    //       {
    //         text: '后台上传',
    //         role: 'cancel',
    //         cssClass: 'secondary',
    //         handler: (blah) => {
    //           this.hideAlert();
    //         }
    //       }
    //     ]
    //   });
    //   this.alertControl.present();
    // }
    /**
     * 关闭下载进度框
     */
    // hideAlert() {
    //   this.alertControl.dismiss();
    //   this.alertControl = null;
    // }
    /**
    * showloading服务
    * @param template 展示内容(选传)
    */
    InspectionRecordPage.prototype.presentLoading = function (template) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'circles',
                            message: template
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, loader];
                }
            });
        });
    };
    /**
    * 关闭loading
    * @param  loader 创建的loading对象
    */
    InspectionRecordPage.prototype.hideLoading = function (loader) {
        loader.dismiss();
    };
    // 暂存数据
    InspectionRecordPage.prototype.saveData = function () {
        var _this = this;
        // 清空fileid
        this.fileID = '';
        // this.nowTime = this.getNowFormatDate(); // 获取暂存时间
        // 循环文件数组并且上传
        if (this.data.length > 0) {
            // tslint:disable-next-line:prefer-for-of
            for (var index = 0; index < this.data.length; index++) {
                var element = this.data[index];
                this.upload(element, index, '0');
            }
        }
        else {
            this.configService.supervisesave({
                sessionId: this.global.sessionId,
                'form[TITLE]': this.checkTitle,
                'form[FILEIDS]': this.fileID,
                'form[SEEMINFO_ID]': this.global.SEEMINFO_ID,
                'form[DEPTNAME]': this.checkUnit,
                'form[SUGGEST]': this.checkCondition,
                'form[SAVESTATUS]': '0',
                'form[SUPERVISE_ID]': this.global.SUPERVISE_ID,
            }, true, function (res) {
                console.log(res);
                if (res !== 'error') {
                    if (res.status === 'success') {
                        _this.presentToastWithOptions('暂存成功');
                    }
                }
            });
        }
    };
    InspectionRecordPage.prototype.upLoad = function () {
        var _this = this;
        // 清空fileid
        this.fileID = '';
        // this.nowTime = this.getNowFormatDate(); // 获取暂存时间
        // 循环文件数组并且上传
        if (this.data.length > 0) {
            // tslint:disable-next-line:prefer-for-of
            for (var index = 0; index < this.data.length; index++) {
                var element = this.data[index];
                this.upload(element, index, '1');
            }
        }
        else {
            // alert('返回记录id' + this.global.SUPERVISE_ID);
            this.configService.supervisesave({
                sessionId: this.global.sessionId,
                'form[TITLE]': this.checkTitle,
                'form[FILEIDS]': this.fileID,
                'form[SEEMINFO_ID]': this.global.SEEMINFO_ID,
                'form[DEPTNAME]': this.checkUnit,
                'form[SUGGEST]': this.checkCondition,
                'form[SAVESTATUS]': '1',
                'form[SUPERVISE_ID]': this.global.SUPERVISE_ID,
            }, true, function (res) {
                console.log(res);
                if (res !== 'error') {
                    if (res.status === 'success') {
                        _this.presentToastWithOptions('提交成功');
                    }
                }
            });
        }
    };
    InspectionRecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inspection-record',
            template: __webpack_require__(/*! ./inspection-record.page.html */ "./src/app/pages/inspection-record/inspection-record.page.html"),
            styles: [__webpack_require__(/*! ./inspection-record.page.scss */ "./src/app/pages/inspection-record/inspection-record.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_8__["MediaCapture"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_10__["StreamingMedia"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"],
            _services_public_ths_location_service__WEBPACK_IMPORTED_MODULE_13__["ThsLocationService"]])
    ], InspectionRecordPage);
    return InspectionRecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-inspection-record-inspection-record-module.js.map