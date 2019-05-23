(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-set-up-set-up-module"],{

/***/ "./src/app/pages/set-up/set-up.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/set-up/set-up.module.ts ***!
  \***********************************************/
/*! exports provided: SetUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUpPageModule", function() { return SetUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _set_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-up.page */ "./src/app/pages/set-up/set-up.page.ts");







var routes = [
    {
        path: '',
        component: _set_up_page__WEBPACK_IMPORTED_MODULE_6__["SetUpPage"]
    }
];
var SetUpPageModule = /** @class */ (function () {
    function SetUpPageModule() {
    }
    SetUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_set_up_page__WEBPACK_IMPORTED_MODULE_6__["SetUpPage"]]
        })
    ], SetUpPageModule);
    return SetUpPageModule;
}());



/***/ }),

/***/ "./src/app/pages/set-up/set-up.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/set-up/set-up.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>设置</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngIf=\"isShow\">\n      <ion-label>指纹密码</ion-label>\n      <ion-toggle [(ngModel)]=\"isToggle\" (ionChange)=\"notify($event)\"></ion-toggle>\n    </ion-item>\n    <ion-item (click)=\"goSkin()\">\n      <ion-label>系统皮肤设置</ion-label>\n    </ion-item>\n  </ion-list>\n  <button class=\"login-btn\" (click)=\"quit()\">退出登录</button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/set-up/set-up.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/set-up/set-up.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-btn {\n  width: 100%;\n  height: 46px;\n  background: #E4E4E4;\n  text-align: center;\n  line-height: 46px;\n  color: #333333;\n  font-size: 1.1rem;\n  outline: none;\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0LXVwL0U6XFx3b3JrXFxwcm9qZWN0c1xcYmVpamluZ19zb2lsX2FwcDIwMTkwNTA1XFxCSldSQVBQL3NyY1xcYXBwXFxwYWdlc1xcc2V0LXVwXFxzZXQtdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldC11cC9zZXQtdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dpbi1idG57IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgaGVpZ2h0OiA0NnB4OyBcclxuICAgIGJhY2tncm91bmQ6ICNFNEU0RTQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/set-up/set-up.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/set-up/set-up.page.ts ***!
  \*********************************************/
/*! exports provided: SetUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUpPage", function() { return SetUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");





var SetUpPage = /** @class */ (function () {
    function SetUpPage(alertController, nav, router, fingerprintAIO) {
        this.alertController = alertController;
        this.nav = nav;
        this.router = router;
        this.fingerprintAIO = fingerprintAIO;
        this.isShow = false; // 没有指纹功能则不显示
        this.isToggle = true; // 切换按钮
    }
    SetUpPage.prototype.ngOnInit = function () {
        this.decideShowToggle();
    };
    SetUpPage.prototype.decideShowToggle = function () {
        var _this = this;
        this.fingerprintAIO.isAvailable().then(function (result) {
            // 指纹可以使用(android上result=OK,ios上result=Available)
            _this.isShow = true;
        })
            .catch(function (err) {
            if (err === 'Fingerprint authentication not ready' || err === 'Not available指纹不可用') {
                _this.isToggle = true;
            }
            else { // 不支持此功能
                _this.isToggle = false;
            }
        });
        this.getIsToggled();
    };
    // 取出isToggled的值显示在页面按钮上
    SetUpPage.prototype.getIsToggled = function () {
        var storage = localStorage.getItem('isToggled');
        var data = storage;
        if (data === 'true') {
            this.isToggle = true;
        }
        else {
            this.isToggle = false;
        }
    };
    // 按钮的切换
    SetUpPage.prototype.notify = function (e) {
        var _this = this;
        // console.log(this.info.fingerprint);
        if (this.isToggle) { // 确保开启指纹功能时用户手机中有录入指纹
            this.fingerprintAIO.isAvailable()
                .then(function (result) {
                _this.isToggle = true;
                localStorage.setItem('isToggled', _this.isToggle.toString());
            })
                .catch(function (err) {
                if (err === 'Fingerprint authentication not ready' || err === 'Not available指纹不可用') {
                    alert('您还没有录入指纹，请您先到手机设置中去录入指纹');
                }
                _this.isToggle = false;
                localStorage.setItem('isToggled', _this.isToggle.toString());
            });
        }
        else {
            this.isToggle = false;
            localStorage.setItem('isToggled', this.isToggle.toString());
        }
    };
    SetUpPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    // 退出登录
    SetUpPage.prototype.quit = function () {
        this.presentAlertConfirm('确定退出登录');
    };
    // 跳转皮肤设置
    SetUpPage.prototype.goSkin = function () {
        this.router.navigate(['skin-set']);
    };
    SetUpPage.prototype.presentAlertConfirm = function (val) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: val,
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: '确定',
                                    handler: function () {
                                        // this.router.navigate(['login']);
                                        _this.nav.navigateRoot(['login']);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SetUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-set-up',
            template: __webpack_require__(/*! ./set-up.page.html */ "./src/app/pages/set-up/set-up.page.html"),
            styles: [__webpack_require__(/*! ./set-up.page.scss */ "./src/app/pages/set-up/set-up.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__["FingerprintAIO"]])
    ], SetUpPage);
    return SetUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-set-up-set-up-module.js.map