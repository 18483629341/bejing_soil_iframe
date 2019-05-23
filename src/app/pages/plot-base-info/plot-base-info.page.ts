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
  dataFlag = false

  skinName: string; //皮肤名称
  getS:any;//得到剩余转化成秒
  constructor(
    public global: GlobalService,
    public appUpdateService:AppUpdateService,
    public router:Router
  ) {
    
  }

  ngOnInit() {
    //获取地块的数据baseInfo
    this.init();
  }

  //获取地块的数据baseInfo
  init() {
    this.baseInfo = this.global.plotDetailData['baseInfo'];
    if (this.baseInfo === null || JSON.stringify(this.baseInfo) === "{}") {
      this.dataFlag = false;
    } else {
      this.dataFlag = true;
      this.tranAllToString();
    }
  }
  
  ionViewWillEnter() {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }
  
  /**
   * 页面跳转到地图页面
   */
  goMap(){
    if(this.baseInfo.LONGITUDE&&this.baseInfo.LATITUDE){
      this.router.navigate(['map'],
      { queryParams: { 'longitude': this.baseInfo.LONGITUDE,'latitude':this.baseInfo.LATITUDE } });
    }
      
  }
   /**
   * 转换baseInfo所有的code
   * @param arr 遍历的对象或者数组
   * @param codeName 对应codeName
   * @param codeNum 对应codeNum
   */
  tranAllToString() {
    
    this.baseInfo['CODE_LANDMGMODEL'] = this.appUpdateService.tranToString(this.global.dectionary['PL_LANDMGMODEL'], this.baseInfo['CODE_LANDMGMODEL']);
    this.baseInfo['CODE_TRADE'] = this.appUpdateService.tranToString(this.global.dectionary['PL_TRADE'], this.baseInfo['CODE_TRADE']);
    this.baseInfo['CODE_LANDTYPE'] = this.appUpdateService.tranToString(this.global.dectionary['PL_LANDTYPE'], this.baseInfo['CODE_LANDTYPE']);
    this.baseInfo['CODE_RISKGRADE'] = this.appUpdateService.tranToString(this.global.dectionary['PL_RISKGRADE'], this.baseInfo['CODE_RISKGRADE']);
    this.baseInfo['CODE_FLOWSTATUS'] = this.appUpdateService.tranToString(this.global.dectionary['PL_FLOWSTATUS'], this.baseInfo['CODE_FLOWSTATUS']);
    //转化区域code为区域名称
    this.global.AreaList.map((item) => {
      if (item['REGIONCODE'] === this.baseInfo['CODE_REGION']) {
        this.baseInfo['CODE_REGION']=item['REGIONNAME'];
      }
    })
    this.baseInfo['LONGITUDE_str']=this.transStr( this.baseInfo['LONGITUDE']);
    this.baseInfo['LATITUDE_str']=this.transStr( this.baseInfo['LATITUDE']);
    //console.log(this.baseInfo);
  }
  
  /**
   * 将地理位置格式转化为度分秒
   * @param value float 地理位置
   */
  transStr(value) {
    const getNum=Math.floor(value) ;//得到度
    this.getS=( value - getNum ) * 3600 ;
    this.getS=Math.round( this.getS );//取证
   
    let second= Math.round((this.getS) % 60)//求余
    const minute=Math.round((this.getS - second ) / 60);//求商
    return getNum+'°'+minute+'\''+second+'\"';
  }
  
  /**
   * 下拉刷新事件
   * @param event 
   */
  doRefresh(event) {
    //获取地块的数据baseInfo
    this.init();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}
