(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plot-base-info-plot-base-info-module"],{

/***/ "./src/app/pages/plot-base-info/plot-base-info.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/plot-base-info/plot-base-info.module.ts ***!
  \***************************************************************/
/*! exports provided: PlotBaseInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotBaseInfoPageModule", function() { return PlotBaseInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plot_base_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plot-base-info.page */ "./src/app/pages/plot-base-info/plot-base-info.page.ts");







var routes = [
    {
        path: '',
        component: _plot_base_info_page__WEBPACK_IMPORTED_MODULE_6__["PlotBaseInfoPage"]
    }
];
var PlotBaseInfoPageModule = /** @class */ (function () {
    function PlotBaseInfoPageModule() {
    }
    PlotBaseInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plot_base_info_page__WEBPACK_IMPORTED_MODULE_6__["PlotBaseInfoPage"]]
        })
    ], PlotBaseInfoPageModule);
    return PlotBaseInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plot-base-info/plot-base-info.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/plot-base-info/plot-base-info.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>地块基本信息</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- 下拉刷新组件 -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\" mode='ios'>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"splitArea\"></div>\n  <!-- <p class=\"p-title margin-10\">地块信息</p> -->\n  <ion-grid class=\"dec-list\" *ngIf=\"dataFlag\">\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"6\">地块基本信息法人名称（中文）：</ion-col>\n      <ion-col class=\"right-text\" size=\"6\">{{baseInfo.CORPNAME || '--'}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">工商营业执照号：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.CREDITCODE || '--'}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">邮编：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.EMAIL || '--'}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"splitArea\"></div>\n  <ion-grid class=\"dec-list\">\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">地块地址：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.ADDRESS||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">地块中心经纬度：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.LONGITUDE_str||\"- -\"}}，{{baseInfo.LATITUDE_str||\"- -\"}} <span ><img (click)=\"goMap()\"  class=\"icon-img\" src=\"../../../assets/img/index_location.png\"/></span> </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">坐标系说明：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.COORDINATESYSTEM||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">地块类型：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.CODE_LANDTYPE||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"4\">地块四至范围：</ion-col>\n      <ion-col class=\"right-text\" size=\"8\" style=\"font-size:14px;\">{{baseInfo.RANGE||\"- -\"}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"splitArea\"></div>\n  <ion-grid class=\"dec-list\">\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">法定代表人</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.LEGALPERSON||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">联系人：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.CONTACT||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">电话：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.PHONE||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">手机：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.MOBILE||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">E-mail：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.EMAIL||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"5\">传真：</ion-col>\n      <ion-col class=\"right-text\" size=\"7\">{{baseInfo.FAX||\"- -\"}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"splitArea\"></div>\n  <ion-grid class=\"dec-list\">\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"6\">地块管理模式：</ion-col>\n      <ion-col class=\"right-text\" size=\"6\">{{baseInfo.CODE_LANDMGMODEL||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"6\">国控编码：</ion-col>\n      <ion-col class=\"right-text\" size=\"6\">{{baseInfo.NATIONAL_CONTROL_CODE||\"- -\"}}</ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class=\"left-text\" size=\"6\">是否开发利用：</ion-col>\n      <ion-col class=\"right-text\" size=\"6\">{{baseInfo.ISUSE===1?\"是\":\"否\"}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"!dataFlag\" class=\"nodata\">暂无数据，请稍后再试！</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plot-base-info/plot-base-info.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/plot-base-info/plot-base-info.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* 详情列表通用样式 start*/\n.dec-list {\n  background: #fff;\n  padding: 0 10px 10px 10px;\n  margin-bottom: 0px; }\n.dec-list ion-row {\n    line-height: 25px;\n    border-bottom: .55px solid #ebebeb;\n    min-height: 50px;\n    padding-right: 10px; }\n.dec-list ion-row:last-child {\n    border: none; }\n.dec-list .left-text {\n    color: #9d9fa7;\n    font-size: 14px; }\n.dec-list .right-text {\n    font-size: 14px;\n    text-align: right;\n    color: #333; }\n/* 详情列表通用样式 end*/\n.splitArea {\n  height: 18px;\n  background: #efefef; }\n.icon-img {\n  width: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxvdC1iYXNlLWluZm8vcGxvdC1iYXNlLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbG90LWJhc2UtaW5mby9FOlxcd29ya1xccHJvamVjdHNcXGJlaWppbmdfc29pbF9hcHAyMDE5MDUwNVxcQkpXUkFQUC9zcmNcXGFwcFxccGFnZXNcXHBsb3QtYmFzZS1pbmZvXFxwbG90LWJhc2UtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGtCQUFBO0FBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBO0FBSHRCO0lBS1EsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7QUFSM0I7SUFXUSxZQUFZLEVBQUE7QUFYcEI7SUFjUSxjQUFjO0lBQ2QsZUFBZSxFQUFBO0FBZnZCO0lBa0JRLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVSxFQUFBO0FBSWxCLGdCQUFBO0FBRUE7RUFDSSxZQUFXO0VBQ1gsbUJBQTJCLEVBQUE7QUFFL0I7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbG90LWJhc2UtaW5mby9wbG90LWJhc2UtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiDor6bmg4XliJfooajpgJrnlKjmoLflvI8gc3RhcnQqL1xuLmRlYy1saXN0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyB9XG4gIC5kZWMtbGlzdCBpb24tcm93IHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBib3JkZXItYm90dG9tOiAuNTVweCBzb2xpZCAjZWJlYmViO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDsgfVxuICAuZGVjLWxpc3QgaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7IH1cbiAgLmRlYy1saXN0IC5sZWZ0LXRleHQge1xuICAgIGNvbG9yOiAjOWQ5ZmE3O1xuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAuZGVjLWxpc3QgLnJpZ2h0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogIzMzMzsgfVxuXG4vKiDor6bmg4XliJfooajpgJrnlKjmoLflvI8gZW5kKi9cbi5zcGxpdEFyZWEge1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7IH1cblxuLmljb24taW1nIHtcbiAgd2lkdGg6IDIycHg7IH1cbiIsIi8qIOivpuaDheWIl+ihqOmAmueUqOagt+W8jyBzdGFydCovXHJcbi5kZWMtbGlzdHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAuNTVweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1yb3c6bGFzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubGVmdC10ZXh0e1xyXG4gICAgICAgIGNvbG9yOiAjOWQ5ZmE3OyAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5yaWdodC10ZXh0eyAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiMzMzM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIOivpuaDheWIl+ihqOmAmueUqOagt+W8jyBlbmQqL1xyXG5cclxuLnNwbGl0QXJlYXtcclxuICAgIGhlaWdodDoxOHB4O1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM5LDIzOSwyMzkpOyBcclxufVxyXG4uaWNvbi1pbWd7XHJcbiAgICB3aWR0aDogMjJweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/plot-base-info/plot-base-info.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/plot-base-info/plot-base-info.page.ts ***!
  \*************************************************************/
/*! exports provided: PlotBaseInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotBaseInfoPage", function() { return PlotBaseInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/public/app-update.service */ "./src/app/services/public/app-update.service.ts");





var PlotBaseInfoPage = /** @class */ (function () {
    function PlotBaseInfoPage(global, appUpdateService, router) {
        this.global = global;
        this.appUpdateService = appUpdateService;
        this.router = router;
        this.baseInfo = {};
        this.dataFlag = false;
    }
    PlotBaseInfoPage.prototype.ngOnInit = function () {
        //获取地块的数据baseInfo
        this.init();
    };
    //获取地块的数据baseInfo
    PlotBaseInfoPage.prototype.init = function () {
        this.baseInfo = this.global.plotDetailData['baseInfo'];
        if (this.baseInfo === null || JSON.stringify(this.baseInfo) === "{}") {
            this.dataFlag = false;
        }
        else {
            this.dataFlag = true;
            this.tranAllToString();
        }
    };
    PlotBaseInfoPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
     * 页面跳转到地图页面
     */
    PlotBaseInfoPage.prototype.goMap = function () {
        if (this.baseInfo.LONGITUDE && this.baseInfo.LATITUDE) {
            this.router.navigate(['map'], { queryParams: { 'longitude': this.baseInfo.LONGITUDE, 'latitude': this.baseInfo.LATITUDE } });
        }
    };
    /**
    * 转换baseInfo所有的code
    * @param arr 遍历的对象或者数组
    * @param codeName 对应codeName
    * @param codeNum 对应codeNum
    */
    PlotBaseInfoPage.prototype.tranAllToString = function () {
        var _this = this;
        this.baseInfo['CODE_LANDMGMODEL'] = this.appUpdateService.tranToString(this.global.dectionary['PL_LANDMGMODEL'], this.baseInfo['CODE_LANDMGMODEL']);
        this.baseInfo['CODE_TRADE'] = this.appUpdateService.tranToString(this.global.dectionary['PL_TRADE'], this.baseInfo['CODE_TRADE']);
        this.baseInfo['CODE_LANDTYPE'] = this.appUpdateService.tranToString(this.global.dectionary['PL_LANDTYPE'], this.baseInfo['CODE_LANDTYPE']);
        this.baseInfo['CODE_RISKGRADE'] = this.appUpdateService.tranToString(this.global.dectionary['PL_RISKGRADE'], this.baseInfo['CODE_RISKGRADE']);
        this.baseInfo['CODE_FLOWSTATUS'] = this.appUpdateService.tranToString(this.global.dectionary['PL_FLOWSTATUS'], this.baseInfo['CODE_FLOWSTATUS']);
        //转化区域code为区域名称
        this.global.AreaList.map(function (item) {
            if (item['REGIONCODE'] === _this.baseInfo['CODE_REGION']) {
                _this.baseInfo['CODE_REGION'] = item['REGIONNAME'];
            }
        });
        this.baseInfo['LONGITUDE_str'] = this.transStr(this.baseInfo['LONGITUDE']);
        this.baseInfo['LATITUDE_str'] = this.transStr(this.baseInfo['LATITUDE']);
        //console.log(this.baseInfo);
    };
    /**
     * 将地理位置格式转化为度分秒
     * @param value float 地理位置
     */
    PlotBaseInfoPage.prototype.transStr = function (value) {
        var getNum = Math.floor(value); //得到度
        this.getS = (value - getNum) * 3600;
        this.getS = Math.round(this.getS); //取证
        var second = Math.round((this.getS) % 60); //求余
        var minute = Math.round((this.getS - second) / 60); //求商
        return getNum + '°' + minute + '\'' + second + '\"';
    };
    /**
     * 下拉刷新事件
     * @param event
     */
    PlotBaseInfoPage.prototype.doRefresh = function (event) {
        //获取地块的数据baseInfo
        this.init();
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    PlotBaseInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plot-base-info',
            template: __webpack_require__(/*! ./plot-base-info.page.html */ "./src/app/pages/plot-base-info/plot-base-info.page.html"),
            styles: [__webpack_require__(/*! ./plot-base-info.page.scss */ "./src/app/pages/plot-base-info/plot-base-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_public_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_4__["AppUpdateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlotBaseInfoPage);
    return PlotBaseInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plot-base-info-plot-base-info-module.js.map