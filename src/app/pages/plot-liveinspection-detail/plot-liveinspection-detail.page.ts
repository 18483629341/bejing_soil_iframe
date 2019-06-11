import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { AppUpdateService } from '../../services/public/app-update.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plot-liveinspection-detail',
  templateUrl: './plot-liveinspection-detail.page.html',
  styleUrls: ['./plot-liveinspection-detail.page.scss'],
})
export class PlotLiveinspectionDetailPage implements OnInit {
  inspecterDetail: any = {};//初步调查数据
  dataFlag: any = false;  //是否拿到初步调查数据

  data: any;
  SUPERVISE_ID: any;
  censusFileArr: any = []; // 报告附件列表

  skinName: string; //皮肤名称
  constructor(
    public iab: InAppBrowser,
    public global: GlobalService,
    public configService: ConfigService,
    public appUpdate: AppUpdateService,
    public httpUtils: HttpUtilsService,
    public activatedRouted: ActivatedRoute
  ) {
    this.activatedRouted.queryParams.subscribe(params => {
      if(params&&params.SUPERVISE_ID){
        this.SUPERVISE_ID = params.SUPERVISE_ID;
      }
      
    });
  }

  ngOnInit() {
    //初始化页面数据
    this.init();
    //获取所有的附件的数组
    this.getAllFileArr();
  }

  ionViewWillEnter() {
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

  /** 
   * 初始化页面数据
   */
  init() {
    this.global.plotInspectorList.map((item) => {
      if (item.SUPERVISE_ID === this.SUPERVISE_ID) {
        this.inspecterDetail = item;
        // console.log(this.inspecterDetail);
        if (JSON.stringify(this.inspecterDetail) !== "{}") {
          this.dataFlag = true;
        } else {
          this.dataFlag = false;
        }
      }
    })
  }

  /**
   * 获取所有的附件的数组
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   */
  getAllFileArr(flag = true) {
    //let CENSUS = '58625234-0b18-4e39-9bef-c4515beb9617,a212f803-1af8-45d1-a0d6-a7cf669b85a6';
    //获取检查调查报告数组
    this.configService.getFile({ 'ids': this.inspecterDetail.CENSUS, 'sessionId': this.global.sessionId }, flag, res => {
      // console.log(res);
      if (res !== 'error') {
        this.censusFileArr = res;
      }
    });

  }

  /**
   * 下载资料
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
   *下拉刷新事件
   * @param event 事件
   */
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
