(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-photo-edit-photo-module"],{

/***/ "./src/app/pages/edit-photo/edit-photo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/edit-photo/edit-photo.module.ts ***!
  \*******************************************************/
/*! exports provided: EditPhotoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPhotoPageModule", function() { return EditPhotoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_photo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-photo.page */ "./src/app/pages/edit-photo/edit-photo.page.ts");







var routes = [
    {
        path: '',
        component: _edit_photo_page__WEBPACK_IMPORTED_MODULE_6__["EditPhotoPage"]
    }
];
var EditPhotoPageModule = /** @class */ (function () {
    function EditPhotoPageModule() {
    }
    EditPhotoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_photo_page__WEBPACK_IMPORTED_MODULE_6__["EditPhotoPage"]]
        })
    ], EditPhotoPageModule);
    return EditPhotoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-photo/edit-photo.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/edit-photo/edit-photo.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>editPhoto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img [src]=\"imgPath\" alt=\"\">\n  <ion-grid class=\"dec-list\">\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">日期：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">\n        <ion-input [(ngModel)]=\"imgDate\" maxlength=30></ion-input>\n        <!-- <ion-textarea maxlength=30 [(ngModel)]=\"checkTitle\" placeholder='请输入标题'></ion-textarea> -->\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">照片名称：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">\n        <ion-input [(ngModel)]=\"imgName\" placeholder='请输入照片名称' maxlength=30></ion-input>\n        <!-- <ion-textarea maxlength=30 [(ngModel)]=\"checkUnit\" placeholder='请输入管理单位'></ion-textarea> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/edit-photo/edit-photo.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/edit-photo/edit-photo.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* 详情列表通用样式 start*/\n.dec-list {\n  background: #fff;\n  padding: 10px 0 10px 13px;\n  margin-bottom: 20px; }\n.dec-list ion-row {\n    line-height: 25px;\n    border-bottom: .55px solid #ebebeb;\n    min-height: 50px;\n    padding-right: 10px; }\n.dec-list .left-text {\n    color: #9d9fa7;\n    font-size: 16px; }\n.dec-list .right-text {\n    font-size: 16px;\n    text-align: right;\n    color: #333; }\nimg {\n  width: 100%;\n  height: 240px; }\nion-button {\n  color: #fff;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1waG90by9lZGl0LXBob3RvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC1waG90by9FOlxcd29ya1xccHJvamVjdHNcXGJlaWppbmdfc29pbF9hcHAyMDE5MDUwNVxcQkpXUkFQUC9zcmNcXGFwcFxccGFnZXNcXGVkaXQtcGhvdG9cXGVkaXQtcGhvdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixrQkFBQTtBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLHlCQUF3QjtFQUN4QixtQkFBa0IsRUFBQTtBQUh0QjtJQU1RLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0FBVDNCO0lBWVEsY0FBYztJQUNkLGVBQWUsRUFBQTtBQWJ2QjtJQWdCUSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVUsRUFBQTtBQUdsQjtFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7QUFFakI7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1waG90by9lZGl0LXBob3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIOivpuaDheWIl+ihqOmAmueUqOagt+W8jyBzdGFydCovXG4uZGVjLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gIC5kZWMtbGlzdCBpb24tcm93IHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBib3JkZXItYm90dG9tOiAuNTVweCBzb2xpZCAjZWJlYmViO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDsgfVxuICAuZGVjLWxpc3QgLmxlZnQtdGV4dCB7XG4gICAgY29sb3I6ICM5ZDlmYTc7XG4gICAgZm9udC1zaXplOiAxNnB4OyB9XG4gIC5kZWMtbGlzdCAucmlnaHQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjMzMzOyB9XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI0MHB4OyB9XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG4iLCIvKiDor6bmg4XliJfooajpgJrnlKjmoLflvI8gc3RhcnQqL1xyXG4uZGVjLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzoxMHB4IDAgMTBweCAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG5cclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogLjU1cHggc29saWQgI2ViZWJlYjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubGVmdC10ZXh0e1xyXG4gICAgICAgIGNvbG9yOiAjOWQ5ZmE3OyAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5yaWdodC10ZXh0eyAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiMzMzM7XHJcbiAgICB9XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/edit-photo/edit-photo.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-photo/edit-photo.page.ts ***!
  \*****************************************************/
/*! exports provided: EditPhotoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPhotoPage", function() { return EditPhotoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EditPhotoPage = /** @class */ (function () {
    function EditPhotoPage(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.imgPath = params.imgPath;
            _this.imgDate = _this.getNowFormatDate();
        });
    }
    EditPhotoPage.prototype.ngOnInit = function () {
    };
    EditPhotoPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    // 获取当前时间
    EditPhotoPage.prototype.getNowFormatDate = function () {
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
    EditPhotoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-photo',
            template: __webpack_require__(/*! ./edit-photo.page.html */ "./src/app/pages/edit-photo/edit-photo.page.html"),
            styles: [__webpack_require__(/*! ./edit-photo.page.scss */ "./src/app/pages/edit-photo/edit-photo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditPhotoPage);
    return EditPhotoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-photo-edit-photo-module.js.map