import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { loadModules } from 'esri-loader'; // 地图API装载器
import { MapService } from '../../../components/ths-map/map.service';
import { ConfigService } from '../../services/public/config.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  skinName: string;
  skinRgb: any;
  title: any = '首页'; // 标题名称(默认为首页)
  legendType = 3; // 图例类型 1自行监测点位 2地块 3全部
  backShow = false; // 是否显示返回按钮
  mapView; // 地图视图
  pointLayer; // 监测点位图层
  highlightLayer; // 点位高亮图层
  monitorPoints: any = []; // 监测点位列表
  landPointLayer; // 地块点位图层
  landPoints: any = []; // 监测点位列表
  graphicData: any = {}; // 点击点位时获取到的数据
  monitorPopShow = false; // 监测点位弹框是否显示
  landPopShow = false; // 地块弹框是否显示
  longitude: any; // 经度
  latitude: any; // 纬度

  constructor(
    public mapService: MapService,
    public config: ConfigService,
    public router: Router,
    public activatedRouted: ActivatedRoute
  ) {
    this.activatedRouted.queryParams.subscribe(params => {
      if (params && params.longitude) {
        this.longitude = params.longitude;
        this.latitude = params.latitude;
      }
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  /**
   * 地图加载完毕
   * @param map 地图
   */
  onMapLoaded(map) {
    this.mapView = map;
    this.mapService.setCenterAndZoom(map, this.longitude, this.latitude, 9); // 设置当前中心点

    loadModules(['esri/geometry/Point', 'esri/layers/GraphicsLayer',
      'esri/symbols/PictureMarkerSymbol', 'esri/graphic', 'esri/InfoTemplate'])
      .then(([Point, GraphicsLayer, Graphic, InfoTemplate]) => {
        this.pointLayer = new GraphicsLayer({ id: 'pointLayer' }); // 监测点位图层
        this.mapView.addLayers([this.pointLayer]); // 把图层加入到地图中
        this.addPoint(this.pointLayer, 1);
      });

    // 地图的点击事件
    this.mapView.on('click', (e) => {

      if (e.graphic && e.graphic.attributes !== undefined) { // 判断点击的是不是点
        this.graphicData = e.graphic.attributes; // 获取点的数据
        if (this.graphicData.pointType === '1') {
          this.monitorPopShow = true;
          this.landPopShow = false;
        } else {
          this.monitorPopShow = false;
          this.landPopShow = true;
        }

      } else {
        this.monitorPopShow = false;
        this.landPopShow = false;
        this.highlightLayer.clear(); // 清除之前打的点
      }
    });
  }

  /**
   * 地图打点
   * @param data 点位数据
   * @param graphicsLayer 待添加的点所在的图层
   * @param pointType 点位类型 1监测点位 2地块点位
   */
  addPoint(graphicsLayer, pointType) {

    graphicsLayer.clear();
    loadModules(['esri/geometry/Point', 'esri/layers/GraphicsLayer',
      'esri/symbols/PictureMarkerSymbol', 'esri/graphic', 'esri/InfoTemplate'])
      .then(([Point, GraphicsLayer, PictureMarkerSymbol, Graphic, InfoTemplate]) => {

        const point = new Point(this.longitude, this.latitude);
        const img = '../../../assets/img/index_location.png';
        const pictureMarkerSymbol = new PictureMarkerSymbol(img, 18, 22.5);
        // let infoTemplate = new InfoTemplate(template);

        // 创建Graphic
        const graphicPic = new Graphic(point, pictureMarkerSymbol);
        // 图层增加图片点
        graphicsLayer.add(graphicPic);

      });
  }


}
