(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding>\n  <div class=\"fixed-content\">\n    <div class=\"banner-img\">\n      <img src=\"../../../assets/img/logo.png\" />\n      <p class=\"title\">北京市污染地块现场督察管理系统</p>\n    </div>\n    <form class=\"padding-all-20\">\n      <div class=\"LoginBox\">\n        <img src=\"../../../assets/img/01_05.png\">\n        <div class=\"inputBox\"><input type='text' placeholder=\"请输入用户名\" [(ngModel)]=\"loginInfo.userName\" name='username'></div>\n        <div (click)=\"clearInput()\" class='icon-color icon iconfont icon-guanbi' *ngIf=\"loginInfo.userName.length>0\">\n        </div>\n      </div>\n      <div class=\"LoginBox\">\n        <img src=\"../../../assets/img/01_11.png\">\n        <div class=\"inputBox\"><input [type]=\"visibility?'text':'password'\" placeholder=\"请输入密码\" [(ngModel)]=\"loginInfo.password\"\n            name=\"password\"></div>\n        <div (click)=\"changeEyes()\" [class]=\"visibility?' icon-color icon iconfont icon-yanjing':'icon iconfont icon-eye-off  icon-color '\">\n        </div>\n      </div>\n      <div class=\"margin-top-60 margin-lr-16\">\n        <button class=\"login-btn\" (click)=\"login()\">登录</button>\n      </div>\n      <div class=\"remeberBox\">\n        <div>\n          <ion-checkbox color=\"light\" class=\"btn\" size=\"20\" (ionChange)=\"isRememberName()\" [(ngModel)]=\"loginInfo.isRemName\"\n            [ngModelOptions]=\"{standalone: true}\" mode='md'></ion-checkbox><span>记住用户名</span>\n        </div>\n        <div>\n          <ion-checkbox color=\"light\" class=\"btn\" size=\"20\" (ionChange)=\"isRememberPwd()\" [(ngModel)]=\"loginInfo.isRemPwd\"\n            [ngModelOptions]=\"{standalone: true}\" mode='md'></ion-checkbox><span>记住密码</span>\n        </div>\n      </div>\n    </form>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed-content {\n  height: 100%;\n  background: url('logn-b2g.png');\n  background-size: 100% 100%; }\n\n.banner-img {\n  width: 100%;\n  text-align: center;\n  padding-top: 15%; }\n\n.banner-img img {\n  width: 20%; }\n\n.banner-img p:nth-of-type(1) {\n  margin-bottom: 0; }\n\n.banner-img p:nth-of-type(2) {\n  margin-top: 0; }\n\n.title {\n  color: #f9f9f9;\n  font-size: 20px; }\n\n.login-input input {\n  font-size: 16px; }\n\n.name-input, .psw-input {\n  padding-left: 0; }\n\n.icon-img img {\n  width: 16px; }\n\n.login-btn {\n  width: 100%;\n  height: 46px;\n  background: #00BCD4;\n  border-radius: 40px;\n  text-align: center;\n  line-height: 46px;\n  color: #fff;\n  font-size: 18px;\n  letter-spacing: 1px;\n  outline: none; }\n\n.icon-color {\n  color: #fff;\n  font-size: 20px;\n  position: relative;\n  top: -2px;\n  right: 10%; }\n\n.margin-top-60 {\n  margin-top: 40px; }\n\n.padding-all-20 {\n  padding: 20px;\n  margin-top: 40px; }\n\n.margin-lr-16 {\n  margin-left: 16px;\n  margin-right: 16px; }\n\n.LoginBox {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  margin-bottom: 16px; }\n\n.LoginBox img {\n    margin-bottom: 10px;\n    width: 16px;\n    height: 20px;\n    margin-left: 16px;\n    margin: 0 10px 10px 16px; }\n\n.LoginBox input {\n    background-color: transparent;\n    color: #fff;\n    border: none;\n    outline: none;\n    color: #fff;\n    margin-left: 10px; }\n\n.LoginBox input::-webkit-input-placeholder {\n    color: #fff; }\n\n.LoginBox .inputBox {\n    border-bottom: 1px solid #fff;\n    padding-bottom: 10px;\n    width: 80%; }\n\n.remeberBox {\n  display: flex;\n  padding: 0 16px;\n  justify-content: space-between;\n  margin-top: 35px; }\n\n.remeberBox div {\n    display: flex;\n    align-items: center;\n    color: #fff; }\n\n.remeberBox div span {\n      margin-left: 10px; }\n\nion-checkbox {\n  --size:16px;\n  --border-color:#fff;\n  background: transparent !important;\n  --checkmark-color:#4D6BEB; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXHdvcmtcXHByb2plY3RzXFxiZWlqaW5nX3NvaWxfYXBwMjAxOTA1MDVcXEJKV1JBUFAvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQWdCLFlBQVk7RUFBQywrQkFBa0Q7RUFBRSwwQkFBMEIsRUFBQTs7QUFDM0c7RUFBWSxXQUFVO0VBQUMsa0JBQWtCO0VBQUUsZ0JBQWlCLEVBQUE7O0FBQzVEO0VBQWlCLFVBQVUsRUFBQTs7QUFDM0I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQVEsY0FBYztFQUFFLGVBQWUsRUFBQTs7QUFDdkM7RUFBbUIsZUFBZSxFQUFBOztBQUNsQztFQUF3QixlQUFlLEVBQUE7O0FBQ3ZDO0VBQWUsV0FBVyxFQUFBOztBQUMxQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHakI7RUFBWSxXQUFVO0VBQUMsZUFBZTtFQUFDLGtCQUFrQjtFQUFDLFNBQVM7RUFBQyxVQUFVLEVBQUE7O0FBQzlFO0VBQWUsZ0JBQWdCLEVBQUE7O0FBQy9CO0VBQWdCLGFBQWE7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDOUM7RUFBZSxpQkFBaUI7RUFBRSxrQkFBa0IsRUFBQTs7QUFDcEQ7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFKdkI7SUFNUSxtQkFBbUI7SUFDbkIsV0FBVztJQUFDLFlBQVk7SUFBQyxpQkFBaUI7SUFDMUMsd0JBQ0osRUFBQTs7QUFUSjtJQVlRLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7O0FBakJ6QjtJQW9CUSxXQUFXLEVBQUE7O0FBcEJuQjtJQXVCUSw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixnQkFBZ0IsRUFBQTs7QUFKcEI7SUFNSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTs7QUFSZjtNQVdRLGlCQUFpQixFQUFBOztBQUt6QjtFQUNJLFdBQU87RUFDUCxtQkFBZTtFQUNmLGtDQUFpQztFQUNqQyx5QkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmZpeGVkLWNvbnRlbnQge2hlaWdodDogMTAwJTtiYWNrZ3JvdW5kOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2duLWIyZy5wbmcnKTsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IH1cclxuICAgIC5iYW5uZXItaW1ne3dpZHRoOjEwMCU7dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTUlIH1cclxuICAgIC5iYW5uZXItaW1nIGltZ3sgd2lkdGg6IDIwJTt9XHJcbiAgICAuYmFubmVyLWltZyBwOm50aC1vZi10eXBlKDEpe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyLWltZyBwOm50aC1vZi10eXBlKDIpe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAudGl0bGV7IGNvbG9yOiAjZjlmOWY5OyBmb250LXNpemU6IDIwcHh9XHJcbiAgICAubG9naW4taW5wdXQgaW5wdXR7Zm9udC1zaXplOiAxNnB4fVxyXG4gICAgLm5hbWUtaW5wdXQsLnBzdy1pbnB1dHsgcGFkZGluZy1sZWZ0OiAwfVxyXG4gICAgLmljb24taW1nIGltZ3sgd2lkdGg6IDE2cHh9XHJcbiAgICAubG9naW4tYnRueyAgICAgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMEJDRDQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmljb24tY29sb3J7Y29sb3I6I2ZmZjtmb250LXNpemU6IDIwcHg7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTJweDtyaWdodDogMTAlO31cclxuICAgIC5tYXJnaW4tdG9wLTYwe21hcmdpbi10b3A6IDQwcHh9XHJcbiAgICAucGFkZGluZy1hbGwtMjB7cGFkZGluZzogMjBweDttYXJnaW4tdG9wOiA0MHB4O31cclxuICAgIC5tYXJnaW4tbHItMTZ7IG1hcmdpbi1sZWZ0OiAxNnB4OyBtYXJnaW4tcmlnaHQ6IDE2cHg7fVxyXG4gICAgLkxvZ2luQm94e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O2hlaWdodDogMjBweDttYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweCAxNnB4XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0Qm94e1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlbWViZXJCb3h7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tY2hlY2tib3h7XHJcbiAgICAgICAgLS1zaXplOjE2cHg7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6I2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1jaGVja21hcmstY29sb3I6IzRENkJFQjtcclxuICAgIH1cclxuICAgIC8vIC5jaGVja2JveC1pb3MgLmNoZWNrYm94LWljb257XHJcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czowOyBcclxuICAgIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgLy8gICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgLy8gICAgLy8gbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy8wMl8xNy5wbmcnKTsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAvLyAgfVxyXG4gIC8vICAuY2hlY2tib3gtaW9zIC5jaGVja2JveC1jaGVja2Vke2JhY2tncm91bmQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy8wMV8xNy5wbmcnKTsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7fVxyXG4gICAgLy8gLmNoZWNrYm94LWlvcyAuY2hlY2tib3gtY2hlY2tlZCAuY2hlY2tib3gtaW5uZXJ7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnR9Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(nav, router, toastController, configService, global, faio) {
        this.nav = nav;
        this.router = router;
        this.toastController = toastController;
        this.configService = configService;
        this.global = global;
        this.faio = faio;
        this.visibility = false; // 是否显示密码
        this.loginInfo = {
            userName: '',
            password: '',
            isRemName: false,
            isRemPwd: false // 是否记住密码
        };
        //this.skinName = localStorage.getItem('skinName') || 'blue';
    }
    // 改变密码显示
    LoginPage.prototype.changeEyes = function () {
        this.visibility = !this.visibility;
    };
    // 清除用户
    LoginPage.prototype.clearInput = function () {
        this.loginInfo.userName = '';
    };
    /**
     *
     * @param msg 提示内容
     */
    LoginPage.prototype.presentToastWithOptions = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            showCloseButton: true,
                            position: 'top',
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
    LoginPage.prototype.ngOnInit = function () {
        // 加载页面时载入存储的数据是否有记住密码和记住用户
        var storage = JSON.parse(localStorage.getItem('user'));
        if (storage !== null && storage.isRemName) {
            this.loginInfo.userName = storage.userName;
            this.loginInfo.isRemName = storage.isRemName;
        }
        if (storage !== null && storage.isRemPwd) {
            this.loginInfo.password = storage.password;
            this.loginInfo.isRemPwd = storage.isRemPwd;
        }
    };
    //  每次进入登录页都要判断是否指纹登录
    LoginPage.prototype.ionViewWillEnter = function () {
        this.fingerRecognition();
    };
    /**
     * 登录点击事件
     */
    LoginPage.prototype.login = function () {
        var _this = this;
        // 判断用户不能为空
        if (this.loginInfo.userName.trim() === '') {
            this.presentToastWithOptions('用户名不能为空');
            return false;
        }
        if (this.loginInfo.password.trim() === '') {
            this.presentToastWithOptions('密码不能为空');
            return false;
        }
        this.configService.login({ 'loginName': this.loginInfo.userName, 'password': this.loginInfo.password }, true, function (res) {
            console.log(res);
            if (res !== 'error') {
                if (res.status === '1') {
                    localStorage.setItem('user', JSON.stringify({
                        userName: _this.loginInfo.userName,
                        password: _this.loginInfo.password,
                        isRemName: _this.loginInfo.isRemName,
                        isRemPwd: _this.loginInfo.isRemPwd,
                    }));
                    _this.global.sessionId = res.sessionId;
                    // this.deviceInfoService.sendDeviceInfo(this.loginInfo.userName);
                    // 登录成功跳转首页
                    _this.nav.navigateRoot(['/app/tabs/tab1']);
                }
                else {
                    _this.presentToastWithOptions(res.message);
                    localStorage.clear();
                }
            }
        });
        // this.nav.navigateRoot(['/app/tabs/tab1']);
    };
    /**
     * 指纹识别
     */
    LoginPage.prototype.fingerRecognition = function () {
        var _this = this;
        var isToggled = localStorage.getItem('isToggled');
        var data = isToggled;
        if (data === 'true') {
            this.faio.isAvailable().then(function (result) {
                _this.faio.show({
                    clientId: '指纹认证',
                    clientSecret: 'password'
                }).then(function () {
                    var storage = JSON.parse(localStorage.getItem('user'));
                    _this.loginInfo.userName = storage.userName;
                    _this.loginInfo.password = storage.password;
                    _this.login();
                }).catch(function (err) {
                });
            });
        }
    };
    // 记住用户
    LoginPage.prototype.isRememberName = function () {
        if (!this.loginInfo.isRemName) { // 取消记住用户名，同时操作取消记住密码
            this.loginInfo.isRemPwd = false;
        }
    };
    // 记住密码
    LoginPage.prototype.isRememberPwd = function () {
        if (this.loginInfo.isRemPwd) { // 记住密码同时记住用户名
            this.loginInfo.isRemName = true;
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_6__["FingerprintAIO"]])
    ], LoginPage);
    return LoginPage;
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
//# sourceMappingURL=pages-login-login-module.js.map