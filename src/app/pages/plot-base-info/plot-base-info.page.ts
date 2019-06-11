import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/public/global.service';
import { AppUpdateService } from './../../services/public/app-update.service';


@Component({
  selector: 'app-plot-base-info',
  templateUrl: './plot-base-info.page.html',
  styleUrls: ['./plot-base-info.page.scss'],
})

export class PlotBaseInfoPage implements OnInit {
  baseInfo: any = {};
  dataFlag = false;
  skinName: string; // 皮肤名称
  getS: any; // 得到剩余转化成秒
  constructor(
    public global: GlobalService,
    public appUpdateService: AppUpdateService,
    public router: Router
  ) {

  }

  ngOnInit() {
    // 获取地块的数据baseInfo
    this.init();
  }

  /**
   * 获取地块的数据baseInfo
   * @param event 刷新事件
   */
  init(event?) {
    this.baseInfo = this.global.plotDetailData.baseInfo;
    if (this.baseInfo) {
      this.dataFlag = true;
      this.tranAllToString();
    } else {
      this.dataFlag = false;
    }

    if (event) {
      event.target.complete();
    }
  }

  ionViewWillEnter() {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  /**
   * 页面跳转到地图页面
   */
  goMap() {
    if (this.baseInfo.LONGITUDE && this.baseInfo.LATITUDE) {
      this.router.navigate(['map'],
      { queryParams: { longitude: this.baseInfo.LONGITUDE, latitude: this.baseInfo.LATITUDE } });
    }
  }
   /**
    * 转换baseInfo所有的code
    * @param arr 遍历的对象或者数组
    * @param codeName 对应codeName
    * @param codeNum 对应codeNum
    */
  tranAllToString() {
    this.baseInfo.landMgmodel = this.appUpdateService.tranToString(this.global.dectionary.PL_LANDMGMODEL, this.baseInfo.CODE_LANDMGMODEL);
    this.baseInfo.trade = this.appUpdateService.tranToString(this.global.dectionary.PL_TRADE, this.baseInfo.CODE_TRADE);
    this.baseInfo.landType = this.appUpdateService.tranToString(this.global.dectionary.PL_LANDTYPE, this.baseInfo.CODE_LANDTYPE);
    this.baseInfo.riskGrade = this.appUpdateService.tranToString(this.global.dectionary.PL_RISKGRADE, this.baseInfo.CODE_RISKGRADE);
    this.baseInfo.flowStatus = this.appUpdateService.tranToString(this.global.dectionary.PL_FLOWSTATUS, this.baseInfo.CODE_FLOWSTATUS);
    // 转化区域code为区域名称
    this.global.AreaList.map((item) => {
      if (item.REGIONCODE === this.baseInfo.CODE_REGION) {
        this.baseInfo.regionName = item.REGIONNAME;
      }
    });
  }

  /**
   * 下拉刷新事件
   * @param event 刷新事件
   */
  doRefresh(event) {
    // 获取地块的数据baseInfo
    this.init(event);
  }
}
