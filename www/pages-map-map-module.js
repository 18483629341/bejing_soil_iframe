(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"],{

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/pages/map/map.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/components/components.module.ts");







// import { ThsMapComponent } from '../../../components/ths-map/ths-map';

var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"],]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/map/map.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [ngClass]=\"{'blue': skinName==='blue','green': skinName==='green','orange': skinName==='orange'}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" mode='ios'></ion-back-button>\n    </ion-buttons>\n    <ion-title>所在位置</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"height: calc(100%);\">\n    <ths-map (onMapLoaded)=\"onMapLoaded($event)\"></ths-map>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/map/map.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/map/map.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ths_map_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ths-map/map.service */ "./src/components/ths-map/map.service.ts");
/* harmony import */ var _services_public_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/public/config.service */ "./src/app/services/public/config.service.ts");




 // 地图API装载器


var MapPage = /** @class */ (function () {
    function MapPage(mapService, config, router, activatedRouted) {
        var _this = this;
        this.mapService = mapService;
        this.config = config;
        this.router = router;
        this.activatedRouted = activatedRouted;
        this.title = '首页'; //标题名称(默认为首页)
        this.legendType = 3; //图例类型 1自行监测点位 2地块 3全部
        this.backShow = false; //是否显示返回按钮
        this.monitorPoints = []; //监测点位列表
        this.landPoints = []; //监测点位列表
        this.graphicData = {}; //点击点位时获取到的数据
        this.monitorPopShow = false; //监测点位弹框是否显示
        this.landPopShow = false; //地块弹框是否显示
        this.activatedRouted.queryParams.subscribe(function (params) {
            _this.longitude = params.longitude;
            _this.latitude = params.latitude;
            //this.plotId = '7c43c589-70bb-4acb-b53e-bbf7cc6ba594';
        });
    }
    MapPage.prototype.ngOnInit = function () {
    };
    MapPage.prototype.ionViewWillEnter = function () {
        //设置头部皮肤
        this.skinName = localStorage.getItem('skinName') || 'blue';
    };
    /**
    * 地图加载完毕
    * @param map
    */
    MapPage.prototype.onMapLoaded = function (map) {
        var _this = this;
        this.mapView = map;
        this.mapService.setCenterAndZoom(map, this.longitude, this.latitude, 9); // 设置当前中心点
        Object(esri_loader__WEBPACK_IMPORTED_MODULE_3__["loadModules"])(['esri/geometry/Point', 'esri/layers/GraphicsLayer', 'esri/symbols/PictureMarkerSymbol', 'esri/graphic', 'esri/InfoTemplate'])
            .then(function (_a) {
            var Point = _a[0], GraphicsLayer = _a[1], Graphic = _a[2], InfoTemplate = _a[3];
            _this.pointLayer = new GraphicsLayer({ id: 'pointLayer' }); // 监测点位图层
            _this.mapView.addLayers([_this.pointLayer]); // 把图层加入到地图中
            _this.addPoint(_this.pointLayer, 1);
        });
        //地图的点击事件
        this.mapView.on('click', function (e) {
            if (e.graphic && e.graphic.attributes !== undefined) { //判断点击的是不是点
                _this.graphicData = e.graphic.attributes; //获取点的数据
                if (_this.graphicData.pointType == '1') {
                    _this.monitorPopShow = true;
                    _this.landPopShow = false;
                }
                else {
                    _this.monitorPopShow = false;
                    _this.landPopShow = true;
                }
            }
            else {
                _this.monitorPopShow = false;
                _this.landPopShow = false;
                _this.highlightLayer.clear(); //清除之前打的点
            }
        });
    };
    /**
    * 地图打点
    * @param data 点位数据
    * @param graphicsLayer 待添加的点所在的图层
    * @param pointType 点位类型 1监测点位 2地块点位
    */
    MapPage.prototype.addPoint = function (graphicsLayer, pointType) {
        var _this = this;
        graphicsLayer.clear();
        Object(esri_loader__WEBPACK_IMPORTED_MODULE_3__["loadModules"])(["esri/geometry/Point", "esri/layers/GraphicsLayer", "esri/symbols/PictureMarkerSymbol", "esri/graphic", "esri/InfoTemplate"])
            .then(function (_a) {
            var Point = _a[0], GraphicsLayer = _a[1], PictureMarkerSymbol = _a[2], Graphic = _a[3], InfoTemplate = _a[4];
            var point = new Point(_this.longitude, _this.latitude);
            var img = "../../../assets/img/index_location.png";
            var pictureMarkerSymbol = new PictureMarkerSymbol(img, 18, 22.5);
            // let infoTemplate = new InfoTemplate(template);
            //创建Graphic
            var graphicPic = new Graphic(point, pictureMarkerSymbol);
            //图层增加图片点
            graphicsLayer.add(graphicPic);
        });
    };
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/pages/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/pages/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_ths_map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _services_public_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-map-map-module.js.map