(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/search-modal/search-modal.component */ "./src/components/search-modal/search-modal.component.ts");
/* harmony import */ var _components_search_modal_search_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/search-modal/search-modal.module */ "./src/components/search-modal/search-modal.module.ts");









var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _components_search_modal_search_modal_module__WEBPACK_IMPORTED_MODULE_8__["SearchModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]],
            entryComponents: [_components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_7__["SearchModalComponent"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <div class=\"top_head\" [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">{{title}}\n    <!-- <ion-icon name=\"expand\" class=\"expand\" *ngIf=\"expand\"></ion-icon> -->\n    <img src=\"../../assets/img/search.png\" (click)=\"goSearch()\">\n  </div>\n  <ion-grid>\n    <ion-row class=\"col-shadow\">\n      <ion-col (click)=\"showOption(1)\" size='4'>\n        <span class=\"text-ellipsis\" [ngClass]=\"{'color-blue': isShowOptions && currentOptionTabIndex === 1}\">区域</span>\n        <ion-icon mode='md' [ngClass]=\"{'color-blue': isShowOptions && currentOptionTabIndex === 1}\" class=\"domn-arr\"\n          name=\"arrow-dropdown\"></ion-icon>\n      </ion-col>\n      <ion-col (click)=\"showOption(2)\" size='4'>\n        <span class=\"text-ellipsis\" [ngClass]=\"{'color-blue': isShowOptions && currentOptionTabIndex === 2}\">行业</span>\n        <ion-icon mode='md' [ngClass]=\"{'color-blue': isShowOptions && currentOptionTabIndex === 2}\" class=\"domn-arr\"\n          name=\"arrow-dropdown\"></ion-icon>\n      </ion-col>\n      <ion-col (click)=\"showOption(3)\" size='4'>\n        <span class=\"text-ellipsis\" [ngClass]=\"{'color-blue': isShowOptions && currentOptionTabIndex === 3}\">地块类型</span>\n        <ion-icon mode='md' [ngClass]=\"{'color-blue': isShowOptions && currentOptionTabIndex === 3}\" class=\"domn-arr\"\n          name=\"arrow-dropdown\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"option-div\">\n    <div *ngIf=\"isShowOptions && currentOptionTabIndex === 1\">\n      <ion-list class=\"area-new\" lines=\"inset\">\n        <ion-item *ngFor=\"let item of AreaList ;let i=index\" (click)=\"selectArea(i,item)\" [ngClass]=\"{selected:active==i}\">{{item.REGIONNAME}}\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div class=\"option-div\">\n    <div *ngIf=\"isShowOptions && currentOptionTabIndex === 2\">\n      <ion-list class=\"area-new\" lines=\"inset\">\n        <ion-item *ngFor=\"let item of industryList ;let i=index\" (click)=\"selectIndustry(i,item)\" [ngClass]=\"{selected:active2==i}\">{{item.dictionary_name}}\n        </ion-item>\n      </ion-list>\n    </div>\n\n  </div>\n  <div class=\"option-div\">\n    <div *ngIf=\"isShowOptions && currentOptionTabIndex === 3\">\n      <ion-list class=\"area-new\" lines=\"inset\">\n        <ion-item *ngFor=\"let item of blockTypeList ;let i=index\" (click)=\"selectBlockType(i,item)\" [ngClass]=\"{selected:active3==i}\">{{item.dictionary_name}}\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <!-- [ngStyle]=\"{'display': Area=='行政区域'?'none':'flex'}\" -->\n  <div class=\"selectBox\" [ngStyle]=\"{'display': Area=='区域' && industry=='行业' && blockType=='地块类型'?'none':'flex'}\">\n    <span>已选条件:</span>\n    <span *ngIf=\"showArea\">{{Area}}\n      <ion-icon name=\"close-circle\" (click)=\"closeArea()\"></ion-icon>\n    </span>\n    <span *ngIf=\"showIndustry\">\n      <span class=\"industry\">{{industry}}</span>\n      <ion-icon name=\"close-circle\" (click)=\"closeIndustry()\"></ion-icon>\n    </span>\n    <span *ngIf=\"showBlockType\">{{blockType}}\n      <ion-icon name=\"close-circle\" (click)=\"closeBlock()\"></ion-icon>\n    </span>\n  </div>\n  <div  class=\"interval\"></div>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"ios-arrow-down\" refreshingSpinner=\"lines\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- 遮罩层 -->\n  <div class=\"layer\" (click)=\"closePotionSelectWindow();\" *ngIf=\"isShowOptions\"></div>\n  \n  <!-- 污染列表 -->\n  <ion-list lines=\"inset\" class=\"list-box\" *ngIf=\"type==='pollute'\">\n    <ion-item *ngFor=\"let item of dataList\" (click)=\"goNextPage(item.SEEMINFO_ID)\">\n      <ion-label>\n        <p>{{item.LANDNAME?item.LANDNAME:nodata}}</p>\n      </ion-label>\n      <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <!-- 督察记录列表 -->\n  <ion-list lines=\"inset\" class=\"list-box\" *ngIf=\"type==='inspection'\">\n    <ion-item *ngFor=\"let item of dataList\" (click)=\"goNextPage(item.SEEMINFO_ID)\">\n      <ion-label>\n        <p>{{item.TITLE?item.TITLE:nodata}}</p>\n        <div>\n          <span>最新督查时间：</span>{{(item.CREATE_DATE | date:\"yyyy-MM-dd\")?(item.CREATE_DATE | date:\"yyyy-MM-dd\"):nodata}}\n        </div>\n        <div>\n          <span>督察次数：</span>{{item.NUM?item.NUM:nodata}}\n        </div>\n      </ion-label>\n      <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <div *ngIf=\"dataList.length===0\" class=\"nodata\">暂无数据，请稍后再试！</div>\n  <ion-infinite-scroll threshold=\"-5%\" (ionInfinite)=\"loadData($event)\" [disabled]='isLoaded'>\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"努力加载中...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-blue {\n  color: #5871de; }\n\n.col-shadow ion-col {\n  padding-top: 7px;\n  height: 42px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.col-shadow ion-col .domn-arr {\n    font-size: 20px; }\n\n.md.hydrated {\n  padding: 0 !important; }\n\n.ios.hydrated {\n  padding: 0 !important; }\n\n.text-ellipsis {\n  max-width: 70%;\n  text-align: right;\n  line-height: 28px;\n  font-size: 14px;\n  display: inline-block;\n  color: #0c0c0c;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.top_head {\n  position: relative;\n  color: #fff;\n  line-height: 56px;\n  text-align: center;\n  font-size: 20px;\n  height: 56px; }\n\n.top_head img {\n    position: absolute;\n    right: 18px;\n    top: 16px;\n    width: 24px;\n    height: 24px; }\n\n.top_head .expand {\n    position: absolute;\n    right: 50px;\n    top: 16px;\n    width: 24px;\n    height: 24px; }\n\n.interval {\n  width: 100%;\n  height: 12px;\n  background: #f8f8f8; }\n\n.layer {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  z-index: 1; }\n\n.option-div {\n  margin-top: 3px;\n  position: absolute;\n  width: 100%;\n  z-index: 100; }\n\n.option-div ion-row {\n    background: #fff; }\n\n.option-div ion-list {\n    margin-top: -3px; }\n\n.option-div .area-new {\n    max-height: 298px;\n    overflow-y: auto; }\n\n.selected {\n  color: #4162fb; }\n\n.selectBox {\n  height: 50px;\n  font-size: 14px;\n  border-top: 0.55px solid #f1f1f1;\n  display: flex;\n  align-items: center; }\n\n.selectBox .industry {\n    display: inline-block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 60px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    margin-left: 0 !important;\n    font-weight: normal !important; }\n\n.selectBox span:nth-of-type(1) {\n  margin-left: 10px;\n  font-weight: bold; }\n\n.selectBox span:nth-of-type(2) {\n  position: relative;\n  margin-left: 15px;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  background-color: #20A4EC;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px; }\n\n.selectBox span:nth-of-type(2) ion-icon {\n    position: absolute;\n    top: -5px;\n    right: -10px;\n    color: #000;\n    font-size: 16px; }\n\n.selectBox span:nth-of-type(3) {\n  position: relative;\n  margin-left: 20px;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  background-color: #20A4EC;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px; }\n\n.selectBox span:nth-of-type(3) ion-icon {\n    position: absolute;\n    top: -5px;\n    right: -10px;\n    color: #000;\n    font-size: 16px; }\n\n.selectBox span:nth-of-type(4) {\n  position: relative;\n  margin-left: 20px;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  background-color: #20A4EC;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px; }\n\n.selectBox span:nth-of-type(4) ion-icon {\n    position: absolute;\n    top: -5px;\n    right: -10px;\n    color: #000;\n    font-size: 16px; }\n\n.list-box {\n  padding: 0; }\n\n.list-box .item {\n    color: #333;\n    font-size: 14px;\n    --inner-border-width: 0 0 0.55px 0;\n    --border-color: #f4f4f4;\n    height: auto;\n    line-height: 1.6; }\n\n.list-box p {\n    color: #222;\n    font-weight: bold;\n    margin-bottom: 8px; }\n\n.list-box span {\n    color: #aaa; }\n\n.dataBox {\n  text-align: center;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9FOlxcd29ya1xccHJvamVjdHNcXGJlaWppbmdfc29pbF9hcHAyMDE5MDUwNVxcQkpXUkFQUC9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUx2QjtJQVFRLGVBQWUsRUFBQTs7QUFHdkI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxjQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUVsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBRWQsWUFBYSxFQUFBOztBQVJsQjtJQVVRLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBZHBCO0lBaUJRLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUVkO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUpoQjtJQU1NLGdCQUFnQixFQUFBOztBQU50QjtJQVNNLGdCQUFlLEVBQUE7O0FBVHJCO0lBWVEsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQUd4QjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxZQUFZO0VBRVosZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBTnZCO0lBUVEscUJBQXFCO0lBQ3JCLGdCQUFlO0lBQ2YsdUJBQXNCO0lBQ3RCLG1CQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDhCQUE4QixFQUFBOztBQUd0QztFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFWdEI7SUFZUSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixXQUFVO0lBQ1YsZUFDSixFQUFBOztBQUVKO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBVnRCO0lBWVEsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVTtJQUNWLGVBQ0osRUFBQTs7QUFHSjtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQVZ0QjtJQVlRLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVU7SUFDVixlQUNKLEVBQUE7O0FBR0o7RUFDSSxVQUFVLEVBQUE7O0FBRGQ7SUFHUSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtDQUFxQjtJQUNyQix1QkFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFSeEI7SUFXUSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQWIxQjtJQWdCUSxXQUFXLEVBQUE7O0FBTW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1ibHVlIHtcbiAgICBjb2xvcjogIzU4NzFkZTtcbiAgfVxuLmNvbC1zaGFkb3cgaW9uLWNvbHtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTRFNDtcbiAgICAuZG9tbi1hcnIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG59XG4ubWQuaHlkcmF0ZWR7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmlvcy5oeWRyYXRlZHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4udGV4dC1lbGxpcHNpcyB7XG4gICAgbWF4LXdpZHRoOjcwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjMGMwYzBjO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcdCBcbn1cblxuLnRvcF9oZWFke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvLyBmb250LXdlaWdodDogNTAwO1xuICAgICBoZWlnaHQ6IDU2cHggO1xuICAgICBpbWd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE4cHg7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgfVxuICAgICAuZXhwYW5ke1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgIH1cbn1cbi5pbnRlcnZhbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cbi5sYXllcntcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xufVxuLm9wdGlvbi1kaXZ7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgaW9uLXJvd3tcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuICAgIGlvbi1saXN0e1xuICAgICAgbWFyZ2luLXRvcDotM3B4OyBcbiAgICB9XG4gICAgLmFyZWEtbmV3e1xuICAgICAgICBtYXgtaGVpZ2h0OiAyOThweDsgXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxufVxuLnNlbGVjdGVke1xuICAgIGNvbG9yOiAjNDE2MmZiO1xufVxuLnNlbGVjdEJveHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgI2YxZjFmMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmluZHVzdHJ5e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnNlbGVjdEJveCBzcGFuOm50aC1vZi10eXBlKDEpe1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlbGVjdEJveCBzcGFuOm50aC1vZi10eXBlKDIpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMEE0RUM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XG4gICAgfVxufVxuLnNlbGVjdEJveCBzcGFuOm50aC1vZi10eXBlKDMpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMEE0RUM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XG4gICAgfVxuXG59XG4uc2VsZWN0Qm94IHNwYW46bnRoLW9mLXR5cGUoNCl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwQTRFQztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHhcbiAgICB9XG59XG5cbi5saXN0LWJveHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC5pdGVte1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAwO1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgfVxufVxuXG4gICAgXG5cbi5kYXRhQm94e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _services_public_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _services_public_ths_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/public/ths-location.service */ "./src/app/services/public/ths-location.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/search-modal/search-modal.component */ "./src/components/search-modal/search-modal.component.ts");











//import { SearchModalComponent } from '../../components/search-modal/search-modal.component';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(statusBar, router, activatedRoute, httpUtilsService, configService, global, modalCtrl, thsLocation) {
        this.statusBar = statusBar;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.httpUtilsService = httpUtilsService;
        this.configService = configService;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.thsLocation = thsLocation;
        this.expand = true; // 扫一扫是否显示
        this.title = '污染地块'; //  页面标题
        this.Area = '区域';
        this.industry = '行业';
        this.blockType = '地块类型';
        this.nodata = '- -';
        this.AreaList = []; // 区域列表
        this.industryList = []; // 行业列表
        this.blockTypeList = []; // 地块列表
        this.dataList = [{
                title: '北京市门头沟区1号污染地块',
                date: '最新督查时间 2018-09-16',
                times: '督察次数 3',
            }];
        this.showArea = false; // 默认选中区域不显示
        this.showIndustry = false; // 默认选中行业不显示
        this.showBlockType = false; // 默认选中地块类型不显示
        this.CODE_REGION = ''; // 行政区代码
        this.CODE_TRADE = ''; // 行业代码
        this.CODE_LANDTYPE = ''; // 地块类型
        this.pageCount = 1; // 列表请求页数
        this.isLoaded = false; // 默认上拉加载
        //设置状态栏皮肤
        this.skinRgb = localStorage.getItem('skinRgb') || '20A4EC';
        // set status bar to white
        this.statusBar.backgroundColorByHexString(this.skinRgb);
        this.getAreaList();
        this.getIndustryList();
        this.getDectionary();
        this.getListSupervise(1);
        // this.getBlockList();
        console.log(this.global.sessionId);
    }
    Tab2Page.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
        this.url = window.location.href;
        this.global.tab = this.url.substr(this.url.lastIndexOf('/') + 1);
        if (this.global.tab === 'tab1') {
            this.title = '污染地块';
            this.global.type = "pollute";
            this.type = "pollute";
            this.expand = true;
        }
        else {
            this.title = '现场督察';
            this.expand = false;
            this.global.type = "inspection";
            this.type = "inspection";
        }
    };
    /**
     * 获取字典数据
     */
    Tab2Page.prototype.getDectionary = function () {
        var _this = this;
        this.configService.getDectionary({ sessionId: this.global.sessionId }, false, function (res) {
            console.log('dectionary', res);
            if (res !== 'error') {
                _this.global.dectionary = res;
            }
        });
    };
    /**
    * 显示选项列表及其弹窗
    * @param tabIndex string  tab1或者tab2
    */
    Tab2Page.prototype.showOption = function (tabIndex) {
        if (!this.isShowOptions) { // 关闭状态下
            this.isShowOptions = !this.isShowOptions;
        }
        else { // 打开状态下 判断是否以然点击在tab上
            if (this.currentOptionTabIndex === tabIndex) { // 点击的同一个tab
                this.isShowOptions = !this.isShowOptions;
            }
        }
        this.currentOptionTabIndex = tabIndex;
    };
    // 关闭筛选条例列表数据window的点击事件
    Tab2Page.prototype.closePotionSelectWindow = function () {
        this.isShowOptions = !this.isShowOptions;
    };
    /**
     * 选中区域列表
     * @param num int 此项下标
     * @param item  object 对象
     */
    Tab2Page.prototype.selectArea = function (num, item) {
        console.log(item);
        this.active = num;
        this.isShowOptions = false;
        this.Area = item.REGIONNAME;
        this.CODE_REGION = item.REGIONCODE;
        this.showArea = true;
        this.pageCount = 1;
        this.isLoaded = false;
        this.getListSupervise(1);
    };
    /**
     * 选中行业列表
     * @param num int 此项下标
     * @param item  object 对象
     */
    Tab2Page.prototype.selectIndustry = function (num, item) {
        console.log(item);
        this.active2 = num;
        this.isShowOptions = false;
        this.industry = item.dictionary_name;
        this.CODE_TRADE = item.dictionary_code;
        this.showIndustry = true;
        this.pageCount = 1;
        this.isLoaded = false;
        this.getListSupervise(1);
    };
    //  选中地块类型
    Tab2Page.prototype.selectBlockType = function (num, item) {
        console.log(item);
        this.active3 = num;
        this.isShowOptions = false;
        this.blockType = item.dictionary_name;
        this.CODE_LANDTYPE = item.dictionary_code;
        this.showBlockType = true;
        this.pageCount = 1;
        this.isLoaded = false;
        this.getListSupervise(1);
    };
    //  关闭选中区域
    Tab2Page.prototype.closeArea = function () {
        this.showArea = false;
        this.Area = '区域';
        this.active = -1;
        this.CODE_REGION = '';
        this.pageCount = 1;
        this.isLoaded = false;
        this.getListSupervise(1);
    };
    //  关闭选中行业
    Tab2Page.prototype.closeIndustry = function () {
        this.showIndustry = false;
        this.industry = '行业';
        this.active2 = -1;
        this.CODE_TRADE = '';
        this.pageCount = 1;
        this.isLoaded = false;
        this.getListSupervise(1);
    };
    //  关闭选中地块
    Tab2Page.prototype.closeBlock = function () {
        this.showBlockType = false;
        this.blockType = '地块类型';
        this.active3 = -1;
        this.CODE_LANDTYPE = '';
        this.pageCount = 1;
        this.isLoaded = false;
        this.getListSupervise(1);
    };
    //  点击列表跳转
    Tab2Page.prototype.goNextPage = function (SEEMINFO_ID) {
        this.global.SEEMINFO_ID = SEEMINFO_ID;
        if (this.global.tab === 'tab1') {
            // tab1跳转
            this.router.navigate(['plot-detail'], { queryParams: { id: SEEMINFO_ID } });
        }
        else {
            this.isInlive(SEEMINFO_ID, false);
        }
    };
    /**
     * 判断力用户是否在现场
     * @param SEEMINFO_ID
     * @param flag
     */
    Tab2Page.prototype.isInlive = function (SEEMINFO_ID, flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        this.configService.getPlotDetail({ 'sessionId': this.global.sessionId, 'id': SEEMINFO_ID }, flag, function (res) {
            console.log(res);
            if (res !== 'error') {
                _this.baseInfo = res['baseInfo'];
            }
        });
        this.thsLocation.startLocation().then(function (res) {
            _this.global.location = res;
            //this.distance=this.thsLocation.distance(res.latitude,res.longitude,this.baseInfo.LATITUDE,this.baseInfo.LONGITUDE);
            _this.distance = _this.thsLocation.distance(39.900198, 116.400012, 39.45555, 116.4); //调试用
            // this.distance = this.thsLocation.distance(39.900198, 116.400012, 0,0); //调试用
            if (_this.distance > 1000) {
                _this.httpUtilsService.thsToast("您需在离该地块1km以内，才能进行现场督察编辑！");
            }
            else {
                _this.router.navigate(['inspection-record']);
            }
        });
    };
    // 获取区域列表
    Tab2Page.prototype.getAreaList = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        this.configService.getAreaList({ sessionId: this.global.sessionId }, flag, function (res) {
            console.log(res);
            if (res !== 'error') {
                _this.AreaList = res;
                _this.global.AreaList = res;
            }
        });
    };
    // 获取行业列表和地块类型
    Tab2Page.prototype.getIndustryList = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        this.configService.getIndustryList({ sessionId: this.global.sessionId }, flag, function (res) {
            // console.log(res.PL_TRADE);
            // console.log(res.PL_LANDTYPE);
            if (res !== 'error') {
                _this.industryList = res.PL_TRADE;
                _this.blockTypeList = res.PL_LANDTYPE;
            }
        });
    };
    // 获取督察列表全部数据
    Tab2Page.prototype.getListSupervise = function (dataType, flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        // console.log(this.pageCount);
        this.configService.getListSupervise({
            sessionId: this.global.sessionId,
            CODE_REGION: this.CODE_REGION,
            CODE_TRADE: this.CODE_TRADE,
            CODE_LANDTYPE: this.CODE_LANDTYPE,
            pageCount: this.pageCount,
            pageSize: 10,
        }, flag, function (res) {
            console.log('Superviselist');
            console.log(res);
            if (res !== 'error') {
                _this.totalPage = res.total;
                if (dataType === 1) {
                    _this.dataList = res.list;
                }
                else {
                    _this.dataList = _this.dataList.concat(res.list);
                }
            }
        });
    };
    /**
     * 创建搜索模态框
     */
    Tab2Page.prototype.goSearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var searchModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            cssClass: "date-modal",
                            component: _components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_9__["SearchModalComponent"],
                            componentProps: {
                                type: 'qyxx'
                            }
                        })];
                    case 1:
                        searchModal = _a.sent();
                        return [4 /*yield*/, searchModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *下拉刷新事件
     * @param event 事件
     */
    Tab2Page.prototype.doRefresh = function (event) {
        var _this = this;
        this.pageCount = 1;
        this.getAreaList(false); // 加载区域列表
        this.getIndustryList(false); // 加载行业列表
        this.getListSupervise(1, false); // 加载督察列表
        //  this.getBlockList(false); // 加载地块列表
        setTimeout(function () {
            _this.isLoaded = false;
            event.target.complete();
        }, 1000);
    };
    /**
    *上拉加载事件
    * @param event 事件
    */
    Tab2Page.prototype.loadData = function (event) {
        var _this = this;
        this.pageCount++;
        this.getListSupervise(2, false);
        setTimeout(function () {
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (_this.dataList.length === _this.totalPage) {
                // event.target.disabled = true;
                _this.isLoaded = true;
                _this.httpUtilsService.thsToast('没有更多了');
            }
            event.target.complete();
        }, 500);
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_4__["HttpUtilsService"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _services_public_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            _services_public_ths_location_service__WEBPACK_IMPORTED_MODULE_7__["ThsLocationService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ }),

/***/ "./src/components/search-modal/search-modal.component.html":
/*!*****************************************************************!*\
  !*** ./src/components/search-modal/search-modal.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"search-box\">\n    <ion-searchbar [(ngModel)]=\"plotName\" placeholder=\"请输入地块名称\" mode=\"ios\" (ngModelChange)=\"searchPlot()\" (ionClear)=\"closePlotBox()\"></ion-searchbar>\n    <span class=\"cancle-btn\" (click)=\"closeModal()\">取消</span>\n  </div>\n\n  <div *ngIf=\"plotListShow\" class=\"plot-list\">\n    <ion-list lines=\"inset\" *ngIf=\"type=='tjfx'\">\n      <ion-item *ngFor=\"let item of plotList\" (click)=\"selectPlot(item)\">{{item.title}}</ion-item>\n    </ion-list>\n\n    <!-- <ion-list lines=\"inset\" *ngIf=\"type=='qyxx'\" class=\"list-box\">\n      <ion-item *ngFor=\"let item of plotList\" (click)=\"goNextPage(item.SEEMINFO_ID)\">\n        <ion-label>\n          <p>{{item.TITLE?item.TITLE:nodata}}</p>\n          <p>\n            <span>最新督查时间：{{(item.CREATE_DATE | date:\"yyyy-MM-dd\")?(item.CREATE_DATE | date:\"yyyy-MM-dd\"):nodata}}</span>\n            <span>督察次数：{{item.NUM?item.NUM:nodata}}</span>\n          </p>\n        </ion-label>\n        <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n      </ion-item>\n    </ion-list> -->\n\n    <div *ngIf=\"type=='qyxx'\">\n      <!-- 污染列表 -->\n      <ion-list lines=\"inset\" class=\"listBox\" *ngIf=\"dataType==='pollute'\">\n        <ion-item *ngFor=\"let item of dataList\" (click)=\"goNextPage(item.SEEMINFO_ID)\">\n          <ion-label>\n            <p>{{item.LANDNAME?item.LANDNAME:nodata}}</p>\n          </ion-label>\n          <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n        </ion-item>\n      </ion-list>\n\n      <!-- 督察记录列表 -->\n      <ion-list lines=\"inset\" class=\"listBox\" *ngIf=\"dataType==='inspection'\">\n        <ion-item *ngFor=\"let item of dataList\" (click)=\"goNextPage(item.SEEMINFO_ID)\">\n          <ion-label>\n            <p>{{item.TITLE?item.TITLE:nodata}}</p>\n            <p>\n              <span>最新督查时间：\n                <span class=\"colorSpan\">{{(item.CREATE_DATE | date:\"yyyy-MM-dd\")?(item.CREATE_DATE | date:\"yyyy-MM-dd\"):nodata}}</span>\n              </span>\n              <span>督察次数：\n                <span class=\"colorSpan\">{{item.NUM?item.NUM:nodata}}</span>\n              </span>\n            </p>\n          </ion-label>\n          <ion-icon name=\"arrow-forward\" slot=\"end\" mode=\"ios\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n\n\n  </div>\n  <ion-infinite-scroll threshold=\"-5%\" (ionInfinite)=\"loadData($event)\" [disabled]='isLoaded'>\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"努力加载中...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/components/search-modal/search-modal.component.scss":
/*!*****************************************************************!*\
  !*** ./src/components/search-modal/search-modal.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box .searchbar-left-aligned {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 0 0 12px;\n  height: 44px;\n  width: calc(100% - 50px);\n  margin-top: 10px;\n  --background: #f8f8f8; }\n\n.search-box .cancle-btn {\n  vertical-align: middle;\n  color: #20a4ec;\n  padding: 10px;\n  font-size: 14px; }\n\n.plot-list {\n  width: 100%;\n  margin-top: -10px; }\n\n.plot-list .list-lines-inset {\n    padding: 0; }\n\n.plot-list .list-lines-inset .item {\n      font-size: 14px;\n      --inner-border-width: 0 0 0 0;\n      height: 35px; }\n\n.plot-list .list-box {\n    margin-top: 12px;\n    border-top: 0.55px solid #f1f1f1; }\n\n.plot-list .list-box .item {\n      color: #333;\n      --inner-border-width: 0 0 0.55px 0;\n      --border-color: #f4f4f4;\n      height: auto;\n      line-height: 1.6; }\n\n.plot-list .list-box p {\n      color: #222;\n      font-weight: bold;\n      margin-bottom: 8px; }\n\n.plot-list .list-box span {\n      color: #aaa; }\n\n.plot-list .close-btn {\n    position: absolute;\n    bottom: -1px;\n    width: 100%;\n    text-align: right;\n    background: #f8f8f8; }\n\n.plot-list .close-btn button {\n      background: transparent;\n      color: #666;\n      padding: 10px;\n      letter-spacing: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NlYXJjaC1tb2RhbC9FOlxcd29ya1xccHJvamVjdHNcXGJlaWppbmdfc29pbF9hcHAyMDE5MDUwNVxcQkpXUkFQUC9zcmNcXGNvbXBvbmVudHNcXHNlYXJjaC1tb2RhbFxcc2VhcmNoLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIscUJBQWEsRUFBQTs7QUFUckI7RUFjUSxzQkFBc0I7RUFDdEIsY0FBYztFQUVkLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBS3ZCO0VBQ0ksV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUZyQjtJQUlRLFVBQVUsRUFBQTs7QUFKbEI7TUFNWSxlQUFlO01BQ2YsNkJBQXFCO01BQ3JCLFlBQVksRUFBQTs7QUFSeEI7SUFZUSxnQkFBZ0I7SUFDaEIsZ0NBQWdDLEVBQUE7O0FBYnhDO01BZVksV0FBVztNQUNYLGtDQUFxQjtNQUNyQix1QkFBZTtNQUNmLFlBQVk7TUFDWixnQkFBZ0IsRUFBQTs7QUFuQjVCO01Bc0JZLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUE7O0FBeEI5QjtNQTJCWSxXQUFXLEVBQUE7O0FBM0J2QjtJQStCUSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7O0FBbkMzQjtNQXFDWSx1QkFBdUI7TUFDdkIsV0FBVztNQUNYLGFBQWE7TUFDYixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zZWFyY2gtbW9kYWwvc2VhcmNoLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1ib3h7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMjBhNGVjO1xyXG4gICAgLnNlYXJjaGJhci1sZWZ0LWFsaWduZWR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDojZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FuY2xlLWJ0bntcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGNvbG9yOiAjMjBhNGVjO1xyXG4gICAgICAgIC8vIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnBsb3QtbGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAubGlzdC1saW5lcy1pbnNldHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0LWJveHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggMDtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jbG9zZS1idG57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/components/search-modal/search-modal.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/search-modal/search-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModalComponent", function() { return SearchModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _app_services_public_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/public/global.service */ "./src/app/services/public/global.service.ts");
/* harmony import */ var _app_services_public_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/public/config.service */ "./src/app/services/public/config.service.ts");
/* harmony import */ var _app_services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/public/http-utils.service */ "./src/app/services/public/http-utils.service.ts");








var SearchModalComponent = /** @class */ (function () {
    function SearchModalComponent(global, config, httpUtilsService, navParams, elementRef, router, keyboard) {
        this.global = global;
        this.config = config;
        this.httpUtilsService = httpUtilsService;
        this.navParams = navParams;
        this.elementRef = elementRef;
        this.router = router;
        this.keyboard = keyboard;
        this.dataList = []; //地块列表
        this.plotListShow = false; //地块列表是否显示
        this.pageCount = 1; // 列表请求页数
        this.isLoaded = false; // 默认上拉加载
        this.type = this.navParams.data.type;
        this.dataType = this.global.type;
    }
    SearchModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var el = _this.elementRef.nativeElement.querySelector('.searchbar-input');
            setTimeout(function () {
                el.focus();
                _this.keyboard.show();
            }, 400);
        }, 500);
    };
    /**
    * 获取污染督察地块列表
    * @param flag  boolean  是否显出loading
    */
    SearchModalComponent.prototype.getSuperviseList = function (loadType, flag) {
        var _this = this;
        this.config.getListSupervise({ LANDNAME: this.plotName, sessionId: this.global.sessionId, pageCount: 1, pageSize: 10 }, flag, function (res) {
            console.log('PolluteList');
            console.log(res);
            if (res !== 'error') {
                _this.totalPage = res.total;
                if (loadType === 1) {
                    _this.dataList = res.list;
                }
                else {
                    _this.dataList = _this.dataList.concat(res.list);
                }
            }
        });
    };
    /**
     * 输入地块名称进行关联搜索
     */
    SearchModalComponent.prototype.searchPlot = function () {
        var _this = this;
        console.log(1);
        if (this.plotName) {
            setTimeout(function () {
                _this.plotListShow = true;
                _this.getSuperviseList(1, true);
            }, 500);
        }
        else {
            this.plotListShow = false;
            this.dataList = [];
        }
    };
    /**
     * 选择地块
     * @param item 选中的地块
     */
    SearchModalComponent.prototype.selectPlot = function (item) {
        this.plotName = item.title;
        this.plotId = item.id;
        this.navParams.data.modal.dismiss({ plotName: this.plotName, plotId: this.plotId });
    };
    /**
     * 关闭modal页面
     */
    SearchModalComponent.prototype.closeModal = function () {
        this.navParams.data.modal.dismiss({ plotName: this.plotName, plotId: this.plotId });
    };
    /**
     * 关闭地块信息列表框
     */
    SearchModalComponent.prototype.closePlotBox = function () {
        this.plotListShow = false;
    };
    /**
     * 跳转详情页
     * @param item
     */
    //  点击列表跳转
    SearchModalComponent.prototype.goNextPage = function (SEEMINFO_ID) {
        this.global.SEEMINFO_ID = SEEMINFO_ID;
        if (this.global.tab === 'tab1') {
            // tab1跳转
            this.router.navigate(['plot-detail'], { queryParams: { id: SEEMINFO_ID } });
        }
        else {
            this.router.navigate(['inspection-record']);
        }
        this.navParams.data.modal.dismiss();
    };
    /**
     *下拉刷新事件
     * @param event 事件
     */
    SearchModalComponent.prototype.doRefresh = function (event) {
        var _this = this;
        this.pageCount = 1;
        this.getSuperviseList(1, false); // 加载督察列表
        //this.getData(1, false); // 加载数据列表
        //  this.getBlockList(false); // 加载地块列表
        setTimeout(function () {
            _this.isLoaded = false;
            event.target.complete();
        }, 1000);
    };
    SearchModalComponent.prototype.loadData = function (event) {
        var _this = this;
        this.pageCount++;
        this.getSuperviseList(2, false); // 加载数据列表
        setTimeout(function () {
            if (_this.dataList.length === _this.totalPage) {
                // event.target.disabled = true;
                _this.isLoaded = true;
                _this.httpUtilsService.thsToast('没有更多了');
            }
            event.target.complete();
        }, 500);
    };
    SearchModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-modal',
            template: __webpack_require__(/*! ./search-modal.component.html */ "./src/components/search-modal/search-modal.component.html"),
            styles: [__webpack_require__(/*! ./search-modal.component.scss */ "./src/components/search-modal/search-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_public_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
            _app_services_public_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _app_services_public_http_utils_service__WEBPACK_IMPORTED_MODULE_7__["HttpUtilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"]])
    ], SearchModalComponent);
    return SearchModalComponent;
}());



/***/ }),

/***/ "./src/components/search-modal/search-modal.module.ts":
/*!************************************************************!*\
  !*** ./src/components/search-modal/search-modal.module.ts ***!
  \************************************************************/
/*! exports provided: SearchModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModalModule", function() { return SearchModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-modal.component */ "./src/components/search-modal/search-modal.component.ts");






var SearchModalModule = /** @class */ (function () {
    function SearchModalModule() {
    }
    SearchModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_search_modal_component__WEBPACK_IMPORTED_MODULE_5__["SearchModalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            exports: [_search_modal_component__WEBPACK_IMPORTED_MODULE_5__["SearchModalComponent"]]
        })
    ], SearchModalModule);
    return SearchModalModule;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map