import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { AppUpdateService } from '../../services/public/app-update.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plot-latesupervision-detail',
  templateUrl: './plot-latesupervision-detail.page.html',
  styleUrls: ['./plot-latesupervision-detail.page.scss'],
})
export class PlotLatesupervisionDetailPage implements OnInit {

  laterMonitorDetail:any = {};//初步调查数据
  dataFlag: any = false;  //是否拿到初步调查数据
  arr :any=[];
  yearList:any=[];
  minYear:any ;
  maxYear:any ;
  plotId:any ;
  censusFileArr: any = []; // 监测方案附件列表
  surveyFileArr: any = []; // 监测结果附件列表
  historyEvilFileArr: any = []; // 历史项目列表
  skinName: string; //皮肤名称
  constructor(
    public iab:InAppBrowser,
    public global: GlobalService,
    public configService: ConfigService,
    public appUpdate: AppUpdateService,
    public httpUtils: HttpUtilsService,
    public activatedRouted: ActivatedRoute
  ) {
    

    this.activatedRouted.queryParams.subscribe(params => {
      this.plotId = params.id;
      this.plotId = '7c43c589-70bb-4acb-b53e-bbf7cc6ba594';
    });

  }

  ngOnInit() {
    this.getYears();
    //初始化页面数据
    this.init();
    //获取所有的附件的数组
    this.getAllFileArr();
  }
  
  ionViewWillEnter() {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  /**
   * 打开本地浏览器跳转对应网址
   * @param url 网址
   */
  openBrower(url){
    if(url){
      const browser = this.iab.create(url,'_system');
      browser.show();
    }
  }

  //初始化页面数据
  init(){
    this.arr = this.global.plotDetailData['laterMonitorList'];
    if (JSON.stringify(this.arr) !== "[]") {
      this.laterMonitorDetail = this.arr[0];
      if(JSON.stringify(this.laterMonitorDetail) !== "{}"){
        this.dataFlag=true;
      }else{
        this.dataFlag=false;
      }
    }
  }

  /**
   * 获取所有的附件的数组
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   */
  getAllFileArr(flag=true) {
    //let CENSUS = '58625234-0b18-4e39-9bef-c4515beb9617,a212f803-1af8-45d1-a0d6-a7cf669b85a6';
    //获取检查调查报告数组
    this.configService.getFile({ 'ids': this.laterMonitorDetail.CENSUS, 'sessionId': this.global.sessionId }, flag, res => {
      if (res !== 'error') {
        this.censusFileArr = res;
      }
    });

    //获取检查报告数组
    this.configService.getFile({ 'ids': this.laterMonitorDetail.SURVEY_REPORT, 'sessionId': this.global.sessionId }, flag, res => {
      if (res !== 'error') {
        this.surveyFileArr = res;
      }
    });

    //如果公示网址对应 无新增项目
    if (this.laterMonitorDetail.CENSUS_PUBLIC_TYPE === 0) {
      //获取历史记录证明材料数组
      this.configService.getFile({ 'ids': this.laterMonitorDetail.CENSUS_PUBLIC_FILES, 'sessionId': this.global.sessionId }, flag, res => {
        if (res !== 'error') {
          this.historyEvilFileArr = res;
        }
      });
    }
  }

  /**
   *下载资料
   * @param item 对象
   */
  downFile(item) {
    if (item.FILENAME) {
      //获取后缀名
      let fileSuffix = this.appUpdate.getFileSuffix(item.FILENAME);
      let downUrl = `${this.global.hostUrl}${this.global.downUrl}?fileid=${item.FILEID}&sessionId=${this.global.sessionId}`;
      this.appUpdate.downFile(downUrl, fileSuffix, item.FILENAME, item.FILESIZE);
    } else {
      this.httpUtils.thsToast('附件暂时无法下载！');
    }
  }
  

  /**
   *选择某一年份后
   * @param event 事件对象
   */
  ionChange(event){
    
     let arr=event.detail.value.split("-");
     let nowYear=arr[0];
     //console.log(event.detail.nowYear);
     this.configService.getPlotLaterMonitor({ 'sessionId': this.global.sessionId, 'id': this.plotId ,year :nowYear },true,(res)=>{
      //console.log(res);
        if(res!=='error'){
          this.laterMonitorDetail=res;
        }
     })
  }

  getYears(){
    //console.log(this.global.laterMonitorList);
    this.global.laterMonitorList.map((item)=>{
      this.yearList.push(item['MONITOR_DATE'])
    })
    this.maxYear=this.yearList[0];
    this.minYear=this.yearList[this.yearList.length - 1];
  }

  // 下拉刷新事件
  doRefresh(event) {
    this.getYears();
    //初始化页面数据
    this.init();
    //获取所有的附件的数组
    this.getAllFileArr(false);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

}
