import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { AppUpdateService } from '../../services/public/app-update.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';

@Component({
  selector: 'app-plot-effect-evaluation',
  templateUrl: './plot-effect-evaluation.page.html',
  styleUrls: ['./plot-effect-evaluation.page.scss'],
})
export class PlotEffectEvaluationPage implements OnInit {
  effectEvaluateInfo: any = {} //效果评估数据
  dataFlag: any = false;  //是否拿到效果评估数据
  data: any;
  censusFileArr: any = []; // 调查附件列表
  surveyFileArr: any = []; // 检测附件列表
  evidenceFileArr: any = []; // 证明材料列表
  historyEvilFileArr: any = []; // 历史项目列表
  newSkinName: string; //获取新的皮肤名称
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
      this.effectEvaluateInfo = this.data['effectEvaluateInfo'];
      if (JSON.stringify(this.effectEvaluateInfo) !== "{}") {
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
  getAllFileArr(flag=true) {

    //let CENSUS = '58625234-0b18-4e39-9bef-c4515beb9617,a212f803-1af8-45d1-a0d6-a7cf669b85a6';
    //获取检查调查报告数组
    this.configService.getFile({ 'ids': this.effectEvaluateInfo.CENSUS, 'sessionId': this.global.sessionId }, flag, res => {
      if (res !== 'error') {
        this.censusFileArr = res;
      }
    });

    //获取检查报告数组
    this.configService.getFile({ 'ids': this.effectEvaluateInfo.SURVEY_REPORT, 'sessionId': this.global.sessionId }, flag, res => {
      // console.log(res);
      if (res !== 'error') {
        this.surveyFileArr = res;
      }
    });

    //获取证明材料数组
    this.configService.getFile({ 'ids': this.effectEvaluateInfo.EVIDENCE_FILE, 'sessionId': this.global.sessionId }, flag, res => {
      // console.log(res);
      if (res !== 'error') {
        this.evidenceFileArr = res;
      }
    });

    //如果公示网址对应 无新增项目
    if (this.effectEvaluateInfo.CENSUS_PUBLIC_TYPE === 0) {
      //获取历史记录证明材料数组
      this.configService.getFile({ 'ids': this.effectEvaluateInfo.CENSUS_PUBLIC_FILES, 'sessionId': this.global.sessionId }, flag, res => {
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
