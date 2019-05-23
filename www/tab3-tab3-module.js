(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"header-bg\" [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <img class=\"bg_img\" src=\"../../../assets/img/dot_bg.png\">\n    <div class=\"header-con\">\n      <img src=\"../../../assets/img/people.png\">\n      <p class=\"user-name\">admin</p>\n    </div>\n  </div>\n  <ion-list>\n    <ion-item (click)=\"goFavorites()\">\n      <i class=\"icon iconfont margin-right-10 icon-xingxing\"></i>\n      <ion-label>收藏夹</ion-label>\n      <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"goDownloaded()\" *ngIf=\"false\">\n      <i class=\"icon iconfont margin-right-10 icon-xiazai\"></i>\n      <ion-label>已经下载地块</ion-label>\n      <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"goSetUp()\">\n      <i class=\"icon iconfont margin-right-10 icon-shezhi\"></i>\n      <ion-label>设置</ion-label>\n      <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  \n  <ion-virtual-scroll [items]=\"items\" approxItemHeight=\"320px\">\n      <ion-card *virtualItem=\"let item; let itemBounds = bounds;\">\n        <div>\n          <img [src]=\"item.imgSrc\" [height]=\"item.imgHeight\" [alt]=\"item.name\">\n        </div>\n      <ion-card-header>\n        <ion-card-title>{{ item.name }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>{{ item.content }}</ion-card-content>\n      </ion-card>\n    </ion-virtual-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-content {\n  padding-top: 0px !important; }\n\n.header-bg {\n  width: 100%;\n  height: 150px;\n  display: flex;\n  align-items: center;\n  position: relative; }\n\n.bg_img {\n  position: absolute;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  display: block; }\n\n.user-name {\n  display: flex;\n  align-items: center; }\n\n.header-con {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column; }\n\n.header-con img {\n    width: 15%; }\n\n.quit-btn {\n  width: 60%;\n  line-height: 40px;\n  height: 40px;\n  background: #4162fb;\n  color: #fff;\n  border-radius: 3px;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 50%; }\n\n.icon {\n  color: #4162fb;\n  margin-right: 15px; }\n\n.label-ios {\n  font-size: 1.5rem; }\n\n.user-name {\n  color: #fff;\n  line-height: 34px;\n  margin: 0; }\n\n.list-ios .item-block .item-inner, .list-ios > .item-block:last-child {\n  border-bottom-color: #fafafa; }\n\n.header-ios ion-toolbar:last-child {\n  --border-width:0; }\n\n.margin-right-10 {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9FOlxcd29ya1xccHJvamVjdHNcXGJlaWppbmdfc29pbF9hcHAyMDE5MDUwNVxcQkpXUkFQUC9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBZ0IsMkJBQTBCLEVBQUE7O0FBQzFDO0VBQVksV0FBVztFQUFFLGFBQWE7RUFBQyxhQUFhO0VBQUUsbUJBQW1CO0VBQUMsa0JBQWtCLEVBQUE7O0FBQzVGO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFXO0VBQ1gsU0FBUztFQUNULGNBQWMsRUFBQTs7QUFFbEI7RUFBVyxhQUFhO0VBQUUsbUJBQW1CLEVBQUE7O0FBQzdDO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBcUIsRUFBQTs7QUFUekI7SUFXSSxVQUFVLEVBQUE7O0FBSWQ7RUFBWSxVQUFVO0VBQUUsaUJBQWlCO0VBQUUsWUFBWTtFQUFFLG1CQUFtQjtFQUFFLFdBQVc7RUFBQyxrQkFBa0I7RUFBRSxrQkFBa0I7RUFBRSxjQUFjO0VBQUUsZUFBZSxFQUFBOztBQUNqSztFQUFPLGNBQWM7RUFBRSxrQkFBa0IsRUFBQTs7QUFDekM7RUFBWSxpQkFBaUIsRUFBQTs7QUFDN0I7RUFBZ0IsV0FBVztFQUN2QixpQkFBaUI7RUFDakIsU0FBUyxFQUFBOztBQUNiO0VBQXNFLDRCQUE0QixFQUFBOztBQUNsRztFQUNJLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2Nyb2xsLWNvbnRlbnR7cGFkZGluZy10b3A6MHB4ICFpbXBvcnRhbnQ7fVxuLmhlYWRlci1iZ3sgd2lkdGg6IDEwMCU7IGhlaWdodDogMTUwcHg7ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtwb3NpdGlvbjogcmVsYXRpdmU7fVxuLmJnX2ltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OmF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnVzZXItbmFtZXtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyfVxuLmhlYWRlci1jb257IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwOyBcbiAgICBsZWZ0OiAwOyBcbiAgICByaWdodDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgaW1ne1xuICAgIHdpZHRoOiAxNSU7XG4gICAgLy8gbGVmdDogNTAlO1xuICAgfVxufVxuLnF1aXQtYnRueyAgd2lkdGg6IDYwJTsgbGluZS1oZWlnaHQ6IDQwcHg7IGhlaWdodDogNDBweDsgYmFja2dyb3VuZDogIzQxNjJmYjsgY29sb3I6ICNmZmY7Ym9yZGVyLXJhZGl1czogM3B4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMCBhdXRvOyBtYXJnaW4tdG9wOiA1MCU7fVxuLmljb257IGNvbG9yOiAjNDE2MmZiOyBtYXJnaW4tcmlnaHQ6IDE1cHg7fVxuLmxhYmVsLWlvc3sgZm9udC1zaXplOiAxLjVyZW19XG4udXNlci1uYW1leyAgICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgbWFyZ2luOiAwO31cbi5saXN0LWlvcyAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciwubGlzdC1pb3MgPiAuaXRlbS1ibG9jazpsYXN0LWNoaWxkeyBib3JkZXItYm90dG9tLWNvbG9yOiAjZmFmYWZhfVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZHtcbiAgICAtLWJvcmRlci13aWR0aDowO1xufVxuLm1hcmdpbi1yaWdodC0xMHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Tab3Page = /** @class */ (function () {
    function Tab3Page(alertController, nav, router) {
        this.alertController = alertController;
        this.nav = nav;
        this.router = router;
        this.items = [];
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    }
    //此钩子函数会每隔几秒时间执行一次 ,与ngAfterContentChecked ()为一对钩子函数
    Tab3Page.prototype.ngDoCheck = function () {
        this.newSkinName = localStorage.getItem('skinName') || 'blue';
        if (this.newSkinName !== this.skinName) {
            this.skinName = this.newSkinName;
        }
    };
    Tab3Page.prototype.goFavorites = function () {
        this.router.navigate(['favorites'], { queryParams: {} });
    };
    Tab3Page.prototype.goDownloaded = function () {
        this.router.navigate(['downloaded'], { queryParams: {} });
    };
    Tab3Page.prototype.goSetUp = function () {
        this.router.navigate(['set-up'], { queryParams: {} });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map