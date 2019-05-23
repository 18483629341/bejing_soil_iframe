import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { AppUpdateService } from '../../services/public/app-update.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';

@Component({
  selector: 'app-plot-risk-management',
  templateUrl: './plot-risk-management.page.html',
  styleUrls: ['./plot-risk-management.page.scss'],
})
export class PlotRiskManagementPage implements OnInit {
  riskControlInfo: any = {} //风险管控数据
  dataFlag: any = false;  //是否拿到风险管控数据
  data: object = {};
  censusFileArr: any = [];  // 调查附件列表
  historyEvilFileArr: any = [];// 历史项目列表
  skinName: string; //皮肤名称
  constructor(
    public iab: InAppBrowser,
    public global: GlobalService,
    public configService: ConfigService,
    public appUpdate: AppUpdateService,
    public httpUtils: HttpUtilsService
  ) {
   
  }

  ngOnInit() {
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
  openBrower(url) {
    if (url) {
      const browser = this.iab.create(url, '_system');
      browser.show();
    }
  }

  //初始化页面数据
  init() {
    this.data = this.global.plotDetailData;
    if (JSON.stringify(this.data) !== "{}") {
      this.riskControlInfo = this.data['riskControlInfo'];
      if (JSON.stringify(this.riskControlInfo) !== "{}") {
        this.dataFlag = true;
      } else {
        this.dataFlag = false;
      }
    }
  }

  /**
   * 获取所有的附件的数组
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   */
  getAllFileArr(flag = true) {

    //let CENSUS = '58625234-0b18-4e39-9bef-c4515beb9617,a212f803-1af8-45d1-a0d6-a7cf669b85a6';
    //获取检查调查报告数组
    this.configService.getFile({ 'ids': this.riskControlInfo.CENSUS, 'sessionId': this.global.sessionId }, flag, res => {
      if (res !== 'error') {
        this.censusFileArr = res;
      }
    });

    //如果公示网址对应 无新增项目
    if (this.riskControlInfo.CENSUS_PUBLIC_TYPE === 0) {
      //获取历史记录证明材料数组
      this.configService.getFile({ 'ids': this.riskControlInfo.CENSUS_PUBLIC_FILES, 'sessionId': this.global.sessionId }, flag, res => {
        // console.log(res);
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


  // 下拉刷新事件
  doRefresh(event) {
    //初始化页面数据
    this.init();
    //获取所有的附件的数组
    this.getAllFileArr(false);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

}
