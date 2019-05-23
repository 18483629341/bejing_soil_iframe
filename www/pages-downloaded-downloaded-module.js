(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-downloaded-downloaded-module"],{

/***/ "./src/app/pages/downloaded/downloaded.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/downloaded/downloaded.module.ts ***!
  \*******************************************************/
/*! exports provided: DownloadedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadedPageModule", function() { return DownloadedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _downloaded_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloaded.page */ "./src/app/pages/downloaded/downloaded.page.ts");







var routes = [
    {
        path: '',
        component: _downloaded_page__WEBPACK_IMPORTED_MODULE_6__["DownloadedPage"]
    }
];
var DownloadedPageModule = /** @class */ (function () {
    function DownloadedPageModule() {
    }
    DownloadedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_downloaded_page__WEBPACK_IMPORTED_MODULE_6__["DownloadedPage"]]
        })
    ], DownloadedPageModule);
    return DownloadedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/downloaded/downloaded.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/downloaded/downloaded.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>已下载地块</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/downloaded/downloaded.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/downloaded/downloaded.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rvd25sb2FkZWQvZG93bmxvYWRlZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/downloaded/downloaded.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/downloaded/downloaded.page.ts ***!
  \*****************************************************/
/*! exports provided: DownloadedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadedPage", function() { return DownloadedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DownloadedPage = /** @class */ (function () {
    function DownloadedPage() {
    }
    DownloadedPage.prototype.ngOnInit = function () {
    };
    DownloadedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-downloaded',
            template: __webpack_require__(/*! ./downloaded.page.html */ "./src/app/pages/downloaded/downloaded.page.html"),
            styles: [__webpack_require__(/*! ./downloaded.page.scss */ "./src/app/pages/downloaded/downloaded.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DownloadedPage);
    return DownloadedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-downloaded-downloaded-module.js.map