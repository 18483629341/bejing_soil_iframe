(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plot-latesupervision-detail-plot-latesupervision-detail-module"],{

/***/ "./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PlotLatesupervisionDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotLatesupervisionDetailPageModule", function() { return PlotLatesupervisionDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plot_latesupervision_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plot-latesupervision-detail.page */ "./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.page.ts");







var routes = [
    {
        path: '',
        component: _plot_latesupervision_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlotLatesupervisionDetailPage"]
    }
];
var PlotLatesupervisionDetailPageModule = /** @class */ (function () {
    function PlotLatesupervisionDetailPageModule() {
    }
    PlotLatesupervisionDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plot_latesupervision_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlotLatesupervisionDetailPage"]]
        })
    ], PlotLatesupervisionDetailPageModule);
    return PlotLatesupervisionDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>后期监管记录</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- 下拉刷新组件 -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\" mode='ios'>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!-- 年份选择 -->\n  <ion-list mode=\"ios\"  *ngIf=\"dataFlag\">\n    <ion-item>\n      <ion-label>选择监管年份：</ion-label>\n      <ion-datetime [min]=\"minYear\" [max]=\"maxYear\" [value]=\"maxYear\" (ionChange)=\"ionChange($event)\" display-format=\"YYYY\" done-text=\"确认\"\n        cancel-text=\"取消\">\n      </ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <!-- 信息表格 -->\n  <ion-grid class=\"detail_table\" *ngIf=\"dataFlag\">\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">申报时间：</ion-col>\n      <ion-col class=\"right-text\">{{laterMonitorDetail.APPLY_DATE===null?\"- -\":laterMonitorDetail.MONITOR_DATE| date:'yyyy-MM-dd'}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">监测时间：</ion-col>\n      <ion-col class=\"right-text\">{{laterMonitorDetail.MONITOR_DATE===null?\"- -\":laterMonitorDetail.MONITOR_DATE| date:'yyyy-MM-dd'}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">监测状态：</ion-col>\n      <ion-col class=\"right-text\">{{laterMonitorDetail.STATUS||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">土壤环境监测结论：</ion-col>\n      <ion-col class=\"right-text\">{{laterMonitorDetail.SOIL_ENVIRON_VERDICT||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">地下水环境监测结论：</ion-col>\n      <ion-col class=\"right-text\">{{laterMonitorDetail.GROUNDWATER_VERDICT||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">地表水环境监测结论：</ion-col>\n      <ion-col class=\"right-text\">{{laterMonitorDetail.SURFACE_WATER_VERDICT||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">空气环境监测结论：</ion-col>\n      <ion-col class=\"right-text\">{{laterMonitorDetail.AIR_ENVIRON_VERDICT||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">监测方案附件：</ion-col>\n      <ion-col class=\"right-text\">\n        <ion-list *ngIf=\"censusFileArr.length>0\">\n          <ion-item *ngFor=\"let item of censusFileArr\" lines=\"none\">\n            <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n          </ion-item>\n        </ion-list>\n        <p class=\"nofile\" *ngIf=\"censusFileArr.length==0\">暂无附件</p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">监测结果附件：</ion-col>\n      <ion-col class=\"right-text\">\n        <ion-list *ngIf=\"surveyFileArr.length>0\">\n          <ion-item *ngFor=\"let item of surveyFileArr\" lines=\"none\">\n            <p class=\"down-line\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\"> {{item.FILENAME}}</p>\n          </ion-item>\n        </ion-list>\n        <p class=\"nofile\" *ngIf=\"surveyFileArr.length==0\">暂无附件</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-around>\n      <ion-col class=\"left-text\">公示网址：</ion-col>\n      <ion-col class=\"right-text\">\n        <div *ngIf=\"laterMonitorDetail.CENSUS_PUBLIC_TYPE===1\">新增项目:\n          <p class=\"down-line\" (click)=\"openBrower(laterMonitorDetail.CENSUS_PUBLIC_URL)\">{{laterMonitorDetail.CENSUS_PUBLIC_URL}}</p>\n        </div>\n        <div *ngIf=\"laterMonitorDetail.CENSUS_PUBLIC_TYPE===0\">\n          <p class=\"down-line\" *ngFor=\"let item of historyEvilFileArr\" size=\"small\" color=\"tertiary\" (click)=\"downFile(item)\">\n            {{item.FILENAME}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"!dataFlag\" class=\"nodata\">暂无数据，请稍后再试！</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.button-div {\n  height: 45px;\n  padding-right: 3px;\n  margin-top: 9px; }\n.button-div ion-button {\n    float: right;\n    --padding-start:16px;\n    --padding-end:16px;\n    --padding-top:0;\n    --padding-bottom:0;\n    cursor: pointer; }\n/*table-grid的公共样式 start */\nion-content {\n  --padding-start:10px;\n  --padding-end:10px; }\nion-grid {\n  margin-top: 12px; }\nion-grid ion-row {\n    line-height: 48px;\n    min-height: 40px;\n    --ion-grid-column-padding-xs: 0;\n    overflow: hidden; }\nion-grid ion-row ion-col {\n      border: .55px solid #dfdfdf;\n      border-bottom: none;\n      border-right: none; }\nion-grid ion-row ion-col:last-child {\n      border-right: .55px solid #dfdfdf; }\nion-grid ion-row ion-button {\n      position: relative;\n      top: -4px; }\nion-grid ion-row:last-child ion-col {\n    border-bottom: .55px solid #dfdfdf; }\nion-grid .left-text {\n    text-align: right;\n    font-weight: 700;\n    font-size: 13px;\n    background: #efefef;\n    padding: 4px 0 4px 0 !important; }\nion-grid .right-text {\n    text-align: center;\n    color: #343434;\n    background: #fff;\n    font-size: 14px;\n    padding: 4px 20px 4px 20px !important; }\n/*table-grid的公共样式 end */\nion-list {\n  margin-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxvdC1sYXRlc3VwZXJ2aXNpb24tZGV0YWlsL3Bsb3QtbGF0ZXN1cGVydmlzaW9uLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bsb3QtbGF0ZXN1cGVydmlzaW9uLWRldGFpbC9FOlxcd29ya1xccHJvamVjdHNcXGJlaWppbmdfc29pbF9hcHAyMDE5MDUwNVxcQkpXUkFQUC9zcmNcXGFwcFxccGFnZXNcXHBsb3QtbGF0ZXN1cGVydmlzaW9uLWRldGFpbFxccGxvdC1sYXRlc3VwZXJ2aXNpb24tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUhuQjtJQUtRLFlBQVk7SUFDWixvQkFBZ0I7SUFDaEIsa0JBQWM7SUFDZCxlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLGVBQWUsRUFBQTtBQUd2Qix5QkFBQTtBQUNBO0VBQ0ksb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUE7QUFFbEI7RUFDSSxnQkFBZSxFQUFBO0FBRG5CO0lBR1EsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwrQkFBNkI7SUFDN0IsZ0JBQWdCLEVBQUE7QUFOeEI7TUFRWSwyQkFBMkI7TUFDM0IsbUJBQWtCO01BQ2xCLGtCQUFrQixFQUFBO0FBVjlCO01BYVksaUNBQWdDLEVBQUE7QUFiNUM7TUFnQlksa0JBQWtCO01BQ2xCLFNBQVEsRUFBQTtBQWpCcEI7SUF1Qlksa0NBQWlDLEVBQUE7QUF2QjdDO0lBNkJRLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwrQkFBNkIsRUFBQTtBQWpDckM7SUFvQ1Esa0JBQWtCO0lBQ2xCLGNBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFDQUFtQyxFQUFBO0FBRzNDLHVCQUFBO0FBRUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bsb3QtbGF0ZXN1cGVydmlzaW9uLWRldGFpbC9wbG90LWxhdGVzdXBlcnZpc2lvbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJ1dHRvbi1kaXYge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgbWFyZ2luLXRvcDogOXB4OyB9XG4gIC5idXR0b24tZGl2IGlvbi1idXR0b24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6MTZweDtcbiAgICAtLXBhZGRpbmctZW5kOjE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDowO1xuICAgIC0tcGFkZGluZy1ib3R0b206MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyp0YWJsZS1ncmlk55qE5YWs5YWx5qC35byPIHN0YXJ0ICovXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDoxMHB4O1xuICAtLXBhZGRpbmctZW5kOjEwcHg7IH1cblxuaW9uLWdyaWQge1xuICBtYXJnaW4tdG9wOiAxMnB4OyB9XG4gIGlvbi1ncmlkIGlvbi1yb3cge1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14czogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgICAgIGJvcmRlcjogLjU1cHggc29saWQgI2RmZGZkZjtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cbiAgICBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IC41NXB4IHNvbGlkICNkZmRmZGY7IH1cbiAgICBpb24tZ3JpZCBpb24tcm93IGlvbi1idXR0b24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtNHB4OyB9XG4gIGlvbi1ncmlkIGlvbi1yb3c6bGFzdC1jaGlsZCBpb24tY29sIHtcbiAgICBib3JkZXItYm90dG9tOiAuNTVweCBzb2xpZCAjZGZkZmRmOyB9XG4gIGlvbi1ncmlkIC5sZWZ0LXRleHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgcGFkZGluZzogNHB4IDAgNHB4IDAgIWltcG9ydGFudDsgfVxuICBpb24tZ3JpZCAucmlnaHQtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzQzNDM0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDRweCAyMHB4IDRweCAyMHB4ICFpbXBvcnRhbnQ7IH1cblxuLyp0YWJsZS1ncmlk55qE5YWs5YWx5qC35byPIGVuZCAqL1xuaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cbiIsIlxyXG4uYnV0dG9uLWRpdntcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDoxNnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6MTZweDtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOjA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTowO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4vKnRhYmxlLWdyaWTnmoTlhazlhbHmoLflvI8gc3RhcnQgKi9cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6MTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6MTBweDtcclxufVxyXG5pb24tZ3JpZHtcclxuICAgIG1hcmdpbi10b3A6MTJweDtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgYm9yZGVyOiAuNTVweCBzb2xpZCAjZGZkZmRmO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDpub25lIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbDpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6LjU1cHggc29saWQgI2RmZGZkZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6LTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgaW9uLXJvdzpsYXN0LWNoaWxke1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206LjU1cHggc29saWQgI2RmZGZkZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sZWZ0LXRleHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7IFxyXG4gICAgICAgIHBhZGRpbmc6NHB4IDAgNHB4IDAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LXRleHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiMzNDM0MzQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzo0cHggMjBweCA0cHggMjBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLyp0YWJsZS1ncmlk55qE5YWs5YWx5qC35byPIGVuZCAqL1xyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuaW9uLWdyaWR7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.page.ts ***!
  \***************************************************************************************/
/*! exports provided: PlotLatesupervisionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotLatesupervisionDetailPage", function() { return PlotLatesupervisionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/public/app-update.service */ "./src/app/services/public/app-update.service.ts");
/* harmony import */ var _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PlotLatesupervisionDetailPage = /** @class */ (function () {
    function PlotLatesupervisionDetailPage(iab, global, configService, appUpdate, httpUtils, activatedRouted) {
        var _this = this;
        this.iab = iab;
        this.global = global;
        this.configService = configService;
        this.appUpdate = appUpdate;
        this.httpUtils = httpUtils;
        this.activatedRouted = activatedRouted;
        this.laterMonitorDetail = {}; //初步调查数据
        this.dataFlag = false; //是否拿到初步调查数据
        this.arr = [];
        this.yearList = [];
        this.censusFileArr = []; // 监测方案附件列表
        this.surveyFileArr = []; // 监测结果附件列表
        this.historyEvilFileArr = []; // 历史项目列表
        this.activatedRouted.queryParams.subscribe(function (params) {
            _this.plotId = params.id;
            _this.plotId = '7c43c589-70bb-4acb-b53e-bbf7cc6ba594';
        });
    }
    PlotLatesupervisionDetailPage.prototype.ngOnInit = function () {
        this.getYears();
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr();
    };
    PlotLatesupervisionDetailPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
     * 打开本地浏览器跳转对应网址
     * @param url 网址
     */
    PlotLatesupervisionDetailPage.prototype.openBrower = function (url) {
        if (url) {
            var browser = this.iab.create(url, '_system');
            browser.show();
        }
    };
    //初始化页面数据
    PlotLatesupervisionDetailPage.prototype.init = function () {
        this.arr = this.global.plotDetailData['laterMonitorList'];
        if (JSON.stringify(this.arr) !== "[]") {
            this.laterMonitorDetail = this.arr[0];
            if (JSON.stringify(this.laterMonitorDetail) !== "{}") {
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
    PlotLatesupervisionDetailPage.prototype.getAllFileArr = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        //let CENSUS = '58625234-0b18-4e39-9bef-c4515beb9617,a212f803-1af8-45d1-a0d6-a7cf669b85a6';
        //获取检查调查报告数组
        this.configService.getFile({ 'ids': this.laterMonitorDetail.CENSUS, 'sessionId': this.global.sessionId }, flag, function (res) {
            if (res !== 'error') {
                _this.censusFileArr = res;
            }
        });
        //获取检查报告数组
        this.configService.getFile({ 'ids': this.laterMonitorDetail.SURVEY_REPORT, 'sessionId': this.global.sessionId }, flag, function (res) {
            if (res !== 'error') {
                _this.surveyFileArr = res;
            }
        });
        //如果公示网址对应 无新增项目
        if (this.laterMonitorDetail.CENSUS_PUBLIC_TYPE === 0) {
            //获取历史记录证明材料数组
            this.configService.getFile({ 'ids': this.laterMonitorDetail.CENSUS_PUBLIC_FILES, 'sessionId': this.global.sessionId }, flag, function (res) {
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
    PlotLatesupervisionDetailPage.prototype.downFile = function (item) {
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
     *选择某一年份后
     * @param event 事件对象
     */
    PlotLatesupervisionDetailPage.prototype.ionChange = function (event) {
        var _this = this;
        var arr = event.detail.value.split("-");
        var nowYear = arr[0];
        //console.log(event.detail.nowYear);
        this.configService.getPlotLaterMonitor({ 'sessionId': this.global.sessionId, 'id': this.plotId, year: nowYear }, true, function (res) {
            //console.log(res);
            if (res !== 'error') {
                _this.laterMonitorDetail = res;
            }
        });
    };
    PlotLatesupervisionDetailPage.prototype.getYears = function () {
        var _this = this;
        //console.log(this.global.laterMonitorList);
        this.global.laterMonitorList.map(function (item) {
            _this.yearList.push(item['MONITOR_DATE']);
        });
        this.maxYear = this.yearList[0];
        this.minYear = this.yearList[this.yearList.length - 1];
    };
    // 下拉刷新事件
    PlotLatesupervisionDetailPage.prototype.doRefresh = function (event) {
        this.getYears();
        //初始化页面数据
        this.init();
        //获取所有的附件的数组
        this.getAllFileArr(false);
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    PlotLatesupervisionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plot-latesupervision-detail',
            template: __webpack_require__(/*! ./plot-latesupervision-detail.page.html */ "./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.page.html"),
            styles: [__webpack_require__(/*! ./plot-latesupervision-detail.page.scss */ "./src/app/pages/plot-latesupervision-detail/plot-latesupervision-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_5__["AppUpdateService"],
            _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__["HttpUtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], PlotLatesupervisionDetailPage);
    return PlotLatesupervisionDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plot-latesupervision-detail-plot-latesupervision-detail-module.js.map