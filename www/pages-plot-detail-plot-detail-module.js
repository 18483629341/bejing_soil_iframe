(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plot-detail-plot-detail-module"],{

/***/ "./src/app/pages/plot-detail/plot-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/plot-detail/plot-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: PlotDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotDetailPageModule", function() { return PlotDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plot_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plot-detail.page */ "./src/app/pages/plot-detail/plot-detail.page.ts");







var routes = [
    {
        path: '',
        component: _plot_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlotDetailPage"]
    }
];
var PlotDetailPageModule = /** @class */ (function () {
    function PlotDetailPageModule() {
    }
    PlotDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plot_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlotDetailPage"]]
        })
    ], PlotDetailPageModule);
    return PlotDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plot-detail/plot-detail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/plot-detail/plot-detail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>地块信息</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"download-btn\" (click)=\"presentSheet()\">\n        <ion-icon name=\"download\"></ion-icon>\n      </ion-button>\n      <span slot=\"end\" [ngClass]=\"{collect:!isCollected,collected:isCollected}\" (click)=\"doCollection()\"></span>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- 下拉刷新组件 -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\" mode='ios'>\n    </ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"baseinfoDataFlag\">\n    <div class=\"splitArea\"></div>\n    <!-- <p class=\"p-title margin-10\">地块信息</p> -->\n    <ion-grid class=\"dec-list\">\n      <ion-row align-items-center>\n        <ion-col class=\"left-text\" size=\"4\">地块名称：</ion-col>\n        <ion-col class=\"right-text\" size=\"8\">{{baseInfo.LANDNAME||'- -'}}</ion-col>\n      </ion-row>\n      <ion-row align-items-center>\n        <ion-col class=\"left-text\" size=\"5\">行政区划：</ion-col>\n        <ion-col class=\"right-text\" size=\"7\">{{baseInfo.CODE_REGION||'- -'}}</ion-col>\n      </ion-row>\n      <ion-row align-items-center>\n        <ion-col class=\"left-text\" size=\"5\">地块管理模式：</ion-col>\n        <ion-col class=\"right-text\" size=\"7\">{{baseInfo.CODE_LANDMGMODEL||'- -'}}</ion-col>\n      </ion-row>\n      <ion-row align-items-center>\n        <ion-col class=\"left-text\" size=\"5\">行业类别：</ion-col>\n        <ion-col class=\"right-text\" size=\"7\">{{baseInfo.CODE_TRADE||'- -'}}</ion-col>\n      </ion-row>\n      <ion-row align-items-center>\n        <ion-col class=\"left-text\" size=\"5\">地块类型：</ion-col>\n        <ion-col class=\"right-text\" size=\"7\">{{baseInfo.CODE_LANDTYPE||'- -'}}</ion-col>\n      </ion-row>\n      <ion-row align-items-center>\n        <ion-col class=\"left-text\" size=\"5\">风险等级：</ion-col>\n        <ion-col class=\"right-text\" size=\"7\">{{baseInfo.CODE_RISKGRADE||'- -'}}</ion-col>\n      </ion-row>\n      <ion-row align-items-center>\n        <ion-col class=\"left-text\" size=\"5\">所处阶段：</ion-col>\n        <ion-col class=\"right-text\" size=\"7\">{{baseInfo.CODE_FLOWSTATUS||'- -'}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"splitArea\"></div>\n  </div>\n\n  <ion-list>\n    <ion-item lines=\"full\" router-direction=\"forward\" (click)=\"tranTo('baseInfo')\" *ngIf=\"plot.baseInfo\">\n      <ion-label>\n        <p class=\"p-title\">地块基本信息</p>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" router-direction=\"forward\" (click)=\"tranTo('priResearch')\" *ngIf=\"plot.firstCensusInfo\">\n\n      <ion-label>\n        <p class=\"p-title\">初步调查</p>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" router-direction=\"forward\" (click)=\"tranTo('detailResearch')\" *ngIf=\"plot.detailCensusInfo\">\n      <ion-label>\n        <p class=\"p-title\">详细调查</p>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" router-direction=\"forward\" (click)=\"tranTo('riskAssess')\" *ngIf=\"plot.riskAssessmentInfo\">\n      <ion-label>\n        <p class=\"p-title\">风险评估</p>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" router-direction=\"forward\" (click)=\"tranTo('riskManage')\" *ngIf=\"plot.riskControlInfo\">\n      <ion-label>\n        <p class=\"p-title\">风险管控</p>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" router-direction=\"forward\" (click)=\"tranTo('gover')\" *ngIf=\"plot.repairInfo\">\n      <ion-label>\n        <p class=\"p-title\">治理与修复</p>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" router-direction=\"forward\" (click)=\"tranTo('effectEval')\" *ngIf=\"plot.effectEvaluateInfo\">\n      <ion-label>\n        <p class=\"p-title\">效果评估</p>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" router-direction=\"forward\" (click)=\"tranTo('lateSupervise')\" *ngIf=\"monitorLength>0\">\n      <ion-label>\n        <p class=\"p-title\">后期监管</p>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" router-direction=\"forward\" (click)=\"tranTo('liveInspectionRecord')\" *ngIf=\"inspectionDataFlag\">\n      <ion-label>\n        <p class=\"p-title\">现场督察记录(\n          <span style=\"color:#20A4EC;\">{{inspectionLength}}</span>)</p>\n      </ion-label>\n      <ion-icon mode='ios' name=\"arrow-forward\" slot='end'></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n  <div *ngIf=\"!dataFlag\" class=\"nodata\">暂无数据，请稍后再试！</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plot-detail/plot-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/plot-detail/plot-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*公用样式*/\nion-buttons {\n  width: 75px; }\nion-back-button {\n  --color:#fff; }\n.download-btn {\n  --color:#fff;\n  font-size: 20px;\n  --padding-start:5px;\n  --padding-end:5px; }\n.p-title {\n  color: #111;\n  font-size: 16px;\n  font-weight: bold;\n  position: relative;\n  text-indent: 13px;\n  padding-left: 0 !important; }\n.p-title::before {\n  position: absolute;\n  top: 3px;\n  left: 0px;\n  width: 3px;\n  height: 16px;\n  background: #20A4EC;\n  border-radius: 15px;\n  content: ''; }\n.margin-10 {\n  margin-left: 10px; }\n/* 详情列表通用样式 start*/\n.dec-list {\n  background: #fff;\n  padding: 0 10px 10px 10px;\n  margin-bottom: 0px; }\n.dec-list ion-row {\n    line-height: 25px;\n    border-bottom: .55px solid #ebebeb;\n    min-height: 50px;\n    padding-right: 10px; }\n.dec-list ion-row:last-child {\n    border: none; }\n.dec-list .left-text {\n    color: #9d9fa7;\n    font-size: 14px; }\n.dec-list .right-text {\n    font-size: 14px;\n    text-align: right;\n    color: #333; }\n/* 详情列表通用样式 end*/\n.splitArea {\n  height: 12px;\n  background: #efefef; }\n.nodata {\n  line-height: 50px;\n  font-size: 16px;\n  text-align: center; }\nion-item {\n  --padding-start: 10px;\n  --border-color:#ebebeb; }\nion-item ion-label .p-title {\n    font-weight: 500; }\n.collect, .collected {\n  display: inline-block;\n  width: 35px;\n  height: 35px; }\n.collect {\n  background: url('sc_off.png') no-repeat center;\n  background-size: 24px; }\n.collected {\n  background: url('sc_on.png') no-repeat center;\n  background-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxvdC1kZXRhaWwvcGxvdC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbG90LWRldGFpbC9FOlxcd29ya1xccHJvamVjdHNcXGJlaWppbmdfc29pbF9hcHAyMDE5MDUwNVxcQkpXUkFQUC9zcmNcXGFwcFxccGFnZXNcXHBsb3QtZGV0YWlsXFxwbG90LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLE9BQUE7QUFFQTtFQUNJLFdBQVcsRUFBQTtBQUdmO0VBQ0ksWUFBUSxFQUFBO0FBR1o7RUFDSSxZQUFRO0VBQ1IsZUFBZTtFQUNmLG1CQUFnQjtFQUNoQixpQkFBYyxFQUFBO0FBRWxCO0VBQ0ksV0FBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEIsRUFBQTtBQUU5QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7QUFFZjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCLGtCQUFBO0FBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBO0FBSHRCO0lBS1EsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7QUFSM0I7SUFXUSxZQUFZLEVBQUE7QUFYcEI7SUFjUSxjQUFjO0lBQ2QsZUFBZSxFQUFBO0FBZnZCO0lBa0JRLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVSxFQUFBO0FBSWxCLGdCQUFBO0FBRUE7RUFDSSxZQUFXO0VBQ1gsbUJBQTJCLEVBQUE7QUFFL0I7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0kscUJBQWdCO0VBQ2hCLHNCQUFlLEVBQUE7QUFGbkI7SUFLWSxnQkFBZ0IsRUFBQTtBQUs1QjtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBSWhCO0VBQ0ksOENBQWtFO0VBQ2xFLHFCQUFxQixFQUFBO0FBR3pCO0VBQ0ksNkNBQWlFO0VBQ2pFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxvdC1kZXRhaWwvcGxvdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyrlhaznlKjmoLflvI8qL1xuaW9uLWJ1dHRvbnMge1xuICB3aWR0aDogNzVweDsgfVxuXG5pb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiNmZmY7IH1cblxuLmRvd25sb2FkLWJ0biB7XG4gIC0tY29sb3I6I2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6NXB4O1xuICAtLXBhZGRpbmctZW5kOjVweDsgfVxuXG4ucC10aXRsZSB7XG4gIGNvbG9yOiAjMTExO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtaW5kZW50OiAxM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuXG4ucC10aXRsZTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICMyMEE0RUM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbnRlbnQ6ICcnOyB9XG5cbi5tYXJnaW4tMTAge1xuICBtYXJnaW4tbGVmdDogMTBweDsgfVxuXG4vKiDor6bmg4XliJfooajpgJrnlKjmoLflvI8gc3RhcnQqL1xuLmRlYy1saXN0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyB9XG4gIC5kZWMtbGlzdCBpb24tcm93IHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBib3JkZXItYm90dG9tOiAuNTVweCBzb2xpZCAjZWJlYmViO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDsgfVxuICAuZGVjLWxpc3QgaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7IH1cbiAgLmRlYy1saXN0IC5sZWZ0LXRleHQge1xuICAgIGNvbG9yOiAjOWQ5ZmE3O1xuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAuZGVjLWxpc3QgLnJpZ2h0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogIzMzMzsgfVxuXG4vKiDor6bmg4XliJfooajpgJrnlKjmoLflvI8gZW5kKi9cbi5zcGxpdEFyZWEge1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7IH1cblxuLm5vZGF0YSB7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6I2ViZWJlYjsgfVxuICBpb24taXRlbSBpb24tbGFiZWwgLnAtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLmNvbGxlY3QsIC5jb2xsZWN0ZWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7IH1cblxuLmNvbGxlY3Qge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3NjX29mZi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAyNHB4OyB9XG5cbi5jb2xsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3NjX29uLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7IH1cbiIsIi8q5YWs55So5qC35byPKi9cclxuXHJcbmlvbi1idXR0b25ze1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICAgIC0tY29sb3I6I2ZmZjtcclxufVxyXG5cclxuLmRvd25sb2FkLWJ0bntcclxuICAgIC0tY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDo1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOjVweDtcclxufVxyXG4ucC10aXRsZSB7XHJcbiAgICBjb2xvcjojMTExO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWluZGVudDogMTNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5wLXRpdGxlOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzIwQTRFQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb250ZW50OiAnJztcclxufVxyXG4ubWFyZ2luLTEwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIOivpuaDheWIl+ihqOmAmueUqOagt+W8jyBzdGFydCovXHJcbi5kZWMtbGlzdHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAuNTVweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1yb3c6bGFzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubGVmdC10ZXh0e1xyXG4gICAgICAgIGNvbG9yOiAjOWQ5ZmE3OyAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5yaWdodC10ZXh0eyAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiMzMzM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIOivpuaDheWIl+ihqOmAmueUqOagt+W8jyBlbmQqL1xyXG5cclxuLnNwbGl0QXJlYXtcclxuICAgIGhlaWdodDoxMnB4O1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM5LDIzOSwyMzkpOyBcclxufVxyXG4ubm9kYXRhe1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6I2ViZWJlYjtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAucC10aXRsZXtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2xsZWN0LC5jb2xsZWN0ZWR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNvbGxlY3R7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3NjX29mZi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmNvbGxlY3RlZHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvc2Nfb24ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/plot-detail/plot-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/plot-detail/plot-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: PlotDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotDetailPage", function() { return PlotDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");
/* harmony import */ var _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/public/app-update.service */ "./src/app/services/public/app-update.service.ts");
/* harmony import */ var _services_plot_files_file_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/plot-files/file-transfer.service */ "./src/app/services/plot-files/file-transfer.service.ts");










var PlotDetailPage = /** @class */ (function () {
    function PlotDetailPage(configService, router, alertCtrl, global, httpUtils, fileTransferService, appUpdateService, activatedRouted) {
        var _this = this;
        this.configService = configService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.httpUtils = httpUtils;
        this.fileTransferService = fileTransferService;
        this.appUpdateService = appUpdateService;
        this.activatedRouted = activatedRouted;
        this.plot = {}; // 地块数据
        this.baseInfo = {}; // 地块基本信息
        this.baseinfoDataFlag = false; //是否拿到有效的地块数据
        this.inspection = []; //督察列表数据
        this.inspectionDataFlag = false; //是否拿到有效的督察列表数据
        this.dataFlag = true; //是否拿到有效的地块数据或督察列表数据
        this.isCollected = false; //默认为未收藏
        this.collectedIndex = -1; //
        this.plotId = '7c43c589-70bb-4acb-b53e-bbf7cc6ba594'; //一个临时的id
        this.inspectionLength = 0;
        this.monitorLength = 0;
        this.allFileList = []; //所有的附件列表
        this.activatedRouted.queryParams.subscribe(function (params) {
            _this.plotId = params.id;
            //this.plotId = '7c43c589-70bb-4acb-b53e-bbf7cc6ba594';
        });
    }
    PlotDetailPage.prototype.ngOnInit = function () {
        //获取地块的数据data
        this.getPlotDetail(this.plotId);
        //获取地块督查的数据data
        this.getPlotInspection(this.plotId);
    };
    PlotDetailPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
     * 获取地块的数据data
     * @param plotId string 地块ID
     * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
     */
    PlotDetailPage.prototype.getPlotDetail = function (plotId, flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        this.configService.getPlotDetail({ 'sessionId': this.global.sessionId, 'id': plotId }, flag, function (res) {
            // console.log(res);
            if (res !== 'error') {
                _this.global.plotDetailData = res;
                _this.isCollected = res['isCollection'] == 1 ? true : false;
                _this.global.laterMonitorList = res['laterMonitorList'];
                _this.plot = _this.global.plotDetailData;
                _this.baseInfo = _this.global.plotDetailData['baseInfo'];
                var arr = _this.global.laterMonitorList;
                _this.monitorLength = arr.length;
                _this.global.laterMonitorDetail = arr[0];
                if (_this.baseInfo === null || JSON.stringify(_this.baseInfo) === "{}") {
                    _this.baseinfoDataFlag = false;
                }
                else {
                    _this.baseinfoDataFlag = true;
                    _this.tranAllToString(); //转换baseInfo所有的code
                }
                // console.log(this.baseInfo,this.baseinfoDataFlag);
            }
            else {
                _this.baseinfoDataFlag = false;
            }
            _this.dataFlag = _this.baseinfoDataFlag || _this.inspectionDataFlag;
        });
    };
    /**
     * 转换baseInfo所有的code
     * @param arr 遍历的对象或者数组
     * @param codeName 对应codeName
     * @param codeNum 对应codeNum
     */
    PlotDetailPage.prototype.tranAllToString = function () {
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
        //console.log(this.baseInfo);
    };
    /**
     * 获取地块督查的数据data
     * @param plotId
     * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
     */
    PlotDetailPage.prototype.getPlotInspection = function (plotId, flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        this.configService.getPlotInspectorList({ 'sessionId': this.global.sessionId, 'id': plotId }, flag, function (res) {
            // console.log(res);
            if (res !== 'error') {
                _this.global.plotInspectorList = res;
                _this.inspection = _this.global.plotInspectorList;
                _this.inspectionLength = _this.global.plotInspectorList.length;
                if (_this.inspectionLength > 0) {
                    _this.inspectionDataFlag = true;
                }
                else {
                    _this.inspectionDataFlag = false;
                }
            }
            else {
                _this.inspectionDataFlag = false;
            }
            _this.dataFlag = _this.baseinfoDataFlag || _this.inspectionDataFlag;
        });
    };
    //点击收藏按钮
    PlotDetailPage.prototype.doCollection = function () {
        var _this = this;
        this.configService.doCollection({ 'sessionId': this.global.sessionId, 'seeminfoId': this.plotId }, true, function (res) {
            // console.log(res);
            if (res.data !== 'error') {
                if (res.data === 'collection') {
                    _this.isCollected = true;
                    _this.httpUtils.thsToast("收藏成功");
                }
                else if (res.data === 'uncollection') {
                    _this.isCollected = false;
                    _this.httpUtils.thsToast("已取消收藏");
                }
            }
        });
    };
    /**
    * 页面跳转到下页
    * @param theme  页面主题
    */
    PlotDetailPage.prototype.tranTo = function (theme) {
        switch (theme) {
            case 'baseInfo':
                this.router.navigate(['plot-base-info']);
                break;
            case 'priResearch':
                this.router.navigate(['plot-primary-research']);
                break;
            case 'detailResearch':
                this.router.navigate(['plot-detail-research']);
                break;
            case 'riskAssess':
                this.router.navigate(['plot-risk-assessment']);
                break;
            case 'riskManage':
                this.router.navigate(['plot-risk-management']);
                break;
            case 'gover':
                this.router.navigate(['plot-gover-repair']);
                break;
            case 'effectEval':
                this.router.navigate(['plot-effect-evaluation']);
                break;
            case 'lateSupervise':
                this.router.navigate(['plot-latesupervision-detail'], { queryParams: { id: this.plotId } });
                break;
            case 'liveInspectionRecord':
                this.router.navigate(['plot-liveinspection-record']);
                break;
        }
    };
    //经纬度转化为度分秒，比如113.211--> 113°12'39.6"
    /** */
    PlotDetailPage.prototype.tranFormAngle = function (angle) {
    };
    /**
     * 下拉刷新事件
     * @param event
     */
    PlotDetailPage.prototype.doRefresh = function (event) {
        //获取地块的数据data
        this.getPlotDetail(this.plotId, false);
        //获取地块督查的数据data
        this.getPlotInspection(this.plotId, false);
        this.dataFlag = this.baseinfoDataFlag || this.inspectionDataFlag;
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    /**
     * 弹出下载提示框
     */
    PlotDetailPage.prototype.presentSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '是否下载附件？',
                            cssClass: 'file-alert',
                            mode: 'ios',
                            buttons: [{
                                    text: '取消',
                                    handler: function () {
                                        console.log('cancle clicked');
                                    }
                                }, {
                                    text: '确定',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.getAllFiles();
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
     * 下载该地块下的所有附件
     */
    PlotDetailPage.prototype.getAllFiles = function () {
        var _this = this;
        //获取初步调查阶段的附件
        if (this.plot.firstCensusInfo) {
            this.getAttachs(this.plot.firstCensusInfo.CENSUS);
            this.getAttachs(this.plot.firstCensusInfo.SURVEY_REPORT);
            this.getAttachs(this.plot.firstCensusInfo.EVIDENCE_FILE);
        }
        //获取详细调查阶段的附件
        if (this.plot.detailCensusInfo) {
            this.getAttachs(this.plot.detailCensusInfo.CENSUS_PUBLIC_FILES);
            this.getAttachs(this.plot.detailCensusInfo.SURVEY_REPORT);
        }
        //获取风险评估阶段的附件
        if (this.plot.riskAssessmentInfo) {
            this.getAttachs(this.plot.riskAssessmentInfo.CENSUS);
            this.getAttachs(this.plot.riskAssessmentInfo.EVIDENCE_FILE);
        }
        //获取风险管控阶段的附件
        if (this.plot.riskControlInfo) {
            this.getAttachs(this.plot.riskControlInfo.CENSUS);
            this.getAttachs(this.plot.riskControlInfo.SURVEY_REPORT);
        }
        //获取治理与修复阶段的附件
        if (this.plot.repairInfo) {
            this.getAttachs(this.plot.repairInfo.CENSUS);
        }
        //获取效果评估阶段的附件
        if (this.plot.effectEvaluateInfo) {
            this.getAttachs(this.plot.effectEvaluateInfo.CENSUS);
            this.getAttachs(this.plot.effectEvaluateInfo.SURVEY_REPORT);
        }
        //获取后期监管记录阶段的附件
        if (this.plot.laterMonitorList.length > 0) {
            this.plot.laterMonitorList.forEach(function (item, index) {
                _this.getAttachs(item.SURFACE_WATER_VERDICT);
                _this.getAttachs(item.MONITOR_PLAN_FILE);
            });
        }
        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert, totalSize;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: '<p class="title">正在下载，请稍等...</p><div class="progress"><span class="blue"></span></div><p class="downed">已经下载：0%</p>'
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        totalSize = 0;
                        this.allFileList.forEach(function (item, index) {
                            totalSize += Number(item.FILESIZE);
                        });
                        this.allFileList.forEach(function (item, index) {
                            var downUrl = _this.global.hostUrl + _this.global.fileUrl + '?ids=' + item.FILEID + '&sessionId=' + _this.global.sessionId;
                            _this.fileTransferService.downFile(downUrl, item.FILEID, item.FILENAME, item.FILESIZE, totalSize, alert);
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 1000);
    };
    /**
     * 下载某一类附件
     * @params ids 该类附件的id（逗号隔开）
     */
    PlotDetailPage.prototype.getAttachs = function (ids) {
        var _this = this;
        if (ids) {
            var params = {
                ids: ids,
                sessionId: this.global.sessionId
            };
            this.configService.getFile(params, false, function (data) {
                if (data !== 'error') {
                    if (data.length > 0) {
                        _this.allFileList = _this.allFileList.concat(data);
                    }
                }
            });
        }
    };
    PlotDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plot-detail',
            template: __webpack_require__(/*! ./plot-detail.page.html */ "./src/app/pages/plot-detail/plot-detail.page.html"),
            styles: [__webpack_require__(/*! ./plot-detail.page.scss */ "./src/app/pages/plot-detail/plot-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_public_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
            _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_6__["HttpUtilsService"],
            _services_plot_files_file_transfer_service__WEBPACK_IMPORTED_MODULE_8__["FileTransferService"],
            _services_public_app_update_service__WEBPACK_IMPORTED_MODULE_7__["AppUpdateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PlotDetailPage);
    return PlotDetailPage;
}());



/***/ }),

/***/ "./src/app/services/plot-files/file-transfer.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/plot-files/file-transfer.service.ts ***!
  \**************************************************************/
/*! exports provided: FileTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransferService", function() { return FileTransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");




 // 附件
var FileTransferService = /** @class */ (function () {
    function FileTransferService(file, fileTransfer, alertCtrl) {
        this.file = file;
        this.fileTransfer = fileTransfer;
        this.alertCtrl = alertCtrl;
        this.downloadFileSize = 0; //已经下载的附件的大小
    }
    /**
    * 检查文件是否存在
    * @param fileName 文件名 必传
    * @param filePath 文件路径 必传
    */
    FileTransferService.prototype.fileIsExited = function (fileName, filePath, callback) {
        this.file.checkFile(filePath, fileName)
            .then(function () {
            callback(true);
        }, function () {
            callback(false);
        })
            .catch(function () {
            callback(false);
        });
    };
    /**
     * 下载附件(下载全部附件的时候下载单个附件)
     * @param url 下载地址
     * @param name 目标文件夹名字
     * @param fileName 附件名称
     * @param fileSize 附件大小
     * @param totalFileSize 附件的总大小
     * @param alert 弹出框
     */
    FileTransferService.prototype.downFile = function (url, name, fileName, fileSize, totalFileSize, alert) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fileTransfer;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                fileTransfer = this.fileTransfer.create();
                this.fileIsExited(fileName, this.file.externalCacheDirectory + name, function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        console.log('res', res);
                        if (!res) {
                            fileTransfer.download(url, this.file.externalCacheDirectory + name + fileName, false).then(function (entry) {
                                console.log(entry);
                                _this.downloadFileSize += Number(fileSize);
                                _this.showProgress(totalFileSize, alert);
                            }, function (error) {
                                console.log('1', error);
                            }).catch(function (e) {
                                console.log('1', e);
                            });
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * 显示进度提示框
     * @param totalFileSize 所有附件的总的大小
     * @param alert 弹出框
     */
    FileTransferService.prototype.showProgress = function (totalFileSize, alert) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var num, progress, downed;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('2', this.downloadFileSize);
                num = Math.floor(this.downloadFileSize / totalFileSize * 100);
                if (num >= 100) {
                    if (alert) {
                        alert.dismiss();
                        alert = null;
                    }
                }
                else if (this.downloadFileSize > 0) {
                    progress = document.getElementsByClassName('blue')[0];
                    if (progress) {
                        progress['style'].display = 'block';
                        progress['style'].width = num + '%';
                    }
                    downed = document.getElementsByClassName('downed')[0];
                    if (downed) {
                        downed.innerHTML = '已经下载：' + num + '%';
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    FileTransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], FileTransferService);
    return FileTransferService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plot-detail-plot-detail-module.js.map