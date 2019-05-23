(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plot-latesupervision-record-plot-latesupervision-record-module"],{

/***/ "./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PlotLatesupervisionRecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotLatesupervisionRecordPageModule", function() { return PlotLatesupervisionRecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plot_latesupervision_record_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plot-latesupervision-record.page */ "./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.page.ts");







var routes = [
    {
        path: '',
        component: _plot_latesupervision_record_page__WEBPACK_IMPORTED_MODULE_6__["PlotLatesupervisionRecordPage"]
    }
];
var PlotLatesupervisionRecordPageModule = /** @class */ (function () {
    function PlotLatesupervisionRecordPageModule() {
    }
    PlotLatesupervisionRecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plot_latesupervision_record_page__WEBPACK_IMPORTED_MODULE_6__["PlotLatesupervisionRecordPage"]]
        })
    ], PlotLatesupervisionRecordPageModule);
    return PlotLatesupervisionRecordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-title>后期监管记录</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <!-- 下拉刷新组件 -->\n <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\" mode='ios'>\n    </ion-refresher-content>\n  </ion-refresher>\n<ion-list>\n  <ion-item *ngFor=\"let item of laterMonitorList\" (click)=\"goNext(item.LATE_ID)\">\n    <!-- <ion-note slot=\"start\">1</ion-note> -->\n    <ion-label text-wrap>\n      <ion-text>\n        <b>监管年度&nbsp;&nbsp;{{item.MONITOR_DATE===null?\"- -\":item.MONITOR_DATE| date:'yyyy'}}</b>\n      </ion-text>\n\n      <ion-text>\n        <p>申报时间&nbsp;&nbsp;{{item.APPLY_DATE===null?\"- -\":item.APPLY_DATE| date:'yyyy-mm-dd'}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n  </ion-item>\n</ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label ion-text b {\n  font-size: 19px;\n  line-height: 37px; }\n\nion-label ion-text p {\n  font-size: 16px;\n  line-height: 26px;\n  height: 26px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxvdC1sYXRlc3VwZXJ2aXNpb24tcmVjb3JkL0U6XFx3b3JrXFxwcm9qZWN0c1xcYmVpamluZ19zb2lsX2FwcDIwMTkwNTA1XFxCSldSQVBQL3NyY1xcYXBwXFxwYWdlc1xccGxvdC1sYXRlc3VwZXJ2aXNpb24tcmVjb3JkXFxwbG90LWxhdGVzdXBlcnZpc2lvbi1yZWNvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUo3QjtFQU9ZLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxvdC1sYXRlc3VwZXJ2aXNpb24tcmVjb3JkL3Bsb3QtbGF0ZXN1cGVydmlzaW9uLXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgICBie1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.page.ts ***!
  \***************************************************************************************/
/*! exports provided: PlotLatesupervisionRecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotLatesupervisionRecordPage", function() { return PlotLatesupervisionRecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/app-update.service */ "./src/app/services/public/app-update.service.ts");





var PlotLatesupervisionRecordPage = /** @class */ (function () {
    function PlotLatesupervisionRecordPage(global, appUpdate, router) {
        this.global = global;
        this.appUpdate = appUpdate;
        this.router = router;
        this.laterMonitorList = [];
        this.data = {};
    }
    PlotLatesupervisionRecordPage.prototype.ngOnInit = function () {
        if (this.global.laterMonitorList.length > 0) {
            this.laterMonitorList = this.global.laterMonitorList;
        }
        //console.log(this.global.laterMonitorList);
    };
    PlotLatesupervisionRecordPage.prototype.ionViewWillEnter = function () {
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
     * 页面跳转至详情
     * @param id 记录ID
     */
    PlotLatesupervisionRecordPage.prototype.goNext = function (id) {
        var _this = this;
        this.laterMonitorList.map(function (item) {
            if (item.LATE_ID === id) {
                _this.global.laterMonitorDetail = item;
            }
        });
        this.router.navigate(['plot-latesupervision-detail'], { queryParams: { 'LATE_ID': id } });
    };
    /**
     *下拉刷新事件
     * @param event 事件
     */
    PlotLatesupervisionRecordPage.prototype.doRefresh = function (event) {
        if (this.global.laterMonitorList.length > 0) {
            this.laterMonitorList = this.global.laterMonitorList;
        }
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    PlotLatesupervisionRecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plot-latesupervision-record',
            template: __webpack_require__(/*! ./plot-latesupervision-record.page.html */ "./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.page.html"),
            styles: [__webpack_require__(/*! ./plot-latesupervision-record.page.scss */ "./src/app/pages/plot-latesupervision-record/plot-latesupervision-record.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_public_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_4__["AppUpdateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlotLatesupervisionRecordPage);
    return PlotLatesupervisionRecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plot-latesupervision-record-plot-latesupervision-record-module.js.map