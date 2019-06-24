import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { AppUpdateService } from '../../services/public/app-update.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';

@Component({
  selector: 'app-plot-risk-assessment',
  templateUrl: './plot-risk-assessment.page.html',
  styleUrls: ['./plot-risk-assessment.page.scss'],
})
export class PlotRiskAssessmentPage implements OnInit {
  riskAssessmentInfo: any = {}; // 风险评估数据
  dataFlag: any = false;  // 是否拿到风险评估数据
  data = {
    riskAssessmentInfo: null,
  };
  censusFileArr: any = []; // 风险评估报告附件列表
  evidenceFileArr: any = []; // 证明材料列表
  historyEvilFileArr: any = []; // 历史项目列表
  skinName: string; // 皮肤名称
  reqSuc = 0; // 异步请求成功的数量
  constructor(
    public iab: InAppBrowser,
    public global: GlobalService,
    public configService: ConfigService,
    public appUpdate: AppUpdateService,
    public httpUtils: HttpUtilsService
  ) {

  }

  ngOnInit() {
    // 初始化页面数据
    this.init();
    // 获取所有的附件的数组
    this.getAllFileArr();
  }

  ionViewWillEnter() {
    // 设置头部皮肤
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
    this.data = this.global.plotDetailData;
    if (this.data) {
      this.riskAssessmentInfo = this.data.riskAssessmentInfo;
      if (this.riskAssessmentInfo) {
        this.dataFlag = true;
      } else {
        this.dataFlag = false;
      }
    }
  }

  /**
   * 获取所有的附件的数组
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   * @param event? 刷新 或 加载事件
   */
  getAllFileArr(flag = true, event?) {
    // 获取检查调查报告数组
    this.configService.getFile({ ids: this.riskAssessmentInfo.CENSUS, sessionId: this.global.sessionId }, flag, res => {
      if (res !== 'error') {
        this.censusFileArr = res;
      }
      this.reqSucFun(event);
    });

    // 获取证明材料数组
    this.configService.getFile({ ids: this.riskAssessmentInfo.EVIDENCE_FILE, sessionId: this.global.sessionId }, flag, res => {
      if (res !== 'error') {
        this.evidenceFileArr = res;
      }
      this.reqSucFun(event);
    });


    // 获取历史记录证明材料数组
    this.configService.getFile({ ids: this.riskAssessmentInfo.CENSUS_PUBLIC_FILES, sessionId: this.global.sessionId }, flag, res => {
      if (res !== 'error') {
        this.historyEvilFileArr = res;
      }
      this.reqSucFun(event);
    });

  }

  /**
   * 异步请求成功 数据/事件处理
   * @param event 刷新 或 加载事件
   */
  reqSucFun(event) {
    this.reqSuc++;
    if (event && this.reqSuc === 3) {
      event.target.complete();
    }
  }

  /**
   * 下载资料
   * @param item 对象
   */
  downFile(item) {
    if (item.FILENAME) {
      // 获取后缀名
      const fileSuffix = this.appUpdate.getFileSuffix(item.FILENAME);
      const downUrl = `${this.global.hostUrl}${this.global.downUrl}?fileid=${item.FILEID}&sessionId=${this.global.sessionId}`;
      this.appUpdate.downFile(downUrl, fileSuffix, item.FILEID  ,  item.FILENAME, item.FILESIZE);
    } else {
      this.httpUtils.thsToast('附件暂时无法下载！');
    }
  }

  /**
   * 下拉刷新事件
   * @param event 事件
   */
  doRefresh(event) {
    this.reqSuc = 0;
    // 初始化页面数据
    this.init();
    // 获取所有的附件的数组
    this.getAllFileArr(false, event);
  }

}
