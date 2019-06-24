import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';
import { AppUpdateService } from './../../services/public/app-update.service';
import { FileTransferService } from '../../services/plot-files/file-transfer.service';
// import { async } from 'q';

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.page.html',
  styleUrls: ['./plot-detail.page.scss'],
})
export class PlotDetailPage implements OnInit {
  plot: any = {};   // 地块数据
  baseInfo: any = {
    CODE_LANDMGMODEL: null,
    CODE_TRADE: null,
    CODE_LANDTYPE: null,
    CODE_RISKGRADE: null,
    CODE_FLOWSTATUS: null,
    CODE_REGION: null,
    landMgmodel: null,
    trade: null,
    landType: null,
    riskGrade: null,
    flowStatus: null,
    regionName: null
  }; // 地块基本信息
  baseinfoDataFlag: any = false;  // 是否拿到有效的地块数据
  inspection = []; // 督察列表数据
  inspectionDataFlag: any = false;  // 是否拿到有效的督察列表数据

  dataFlag: any = true;  // 是否拿到有效的地块数据或督察列表数据
  needLoadAll = true;
  headerEndWidth = '70px';
  isCollected = false; // 默认为未收藏
  collectedIndex = -1; //
  plotId = ''; // 一个临时的id
  inspectionLength: any = 0;
  monitorLength: any = 0;

  newSkinName: string; // 获取新的皮肤名称
  skinName: string; // 皮肤名称
  headerCon = ''; // 提示框内容
  reqSuc = 0; // 异步请求成功的数量

  downAllFilePlot = []; // 全部下载的时 存放已经地块信息
  needDownFileList = []; // 全部下载的时 所有的附件列表
  needReq = 0; // 全部下载的时 所需ids请求数量
  reqAllSuc = 0; // 全部下载的时 请求成功ids数量
  toastAlert: any;
  constructor(
    public configService: ConfigService,
    public router: Router,
    public alertCtrl: AlertController,
    public global: GlobalService,
    public httpUtils: HttpUtilsService,
    public fileTransferService: FileTransferService,
    public appUpdateService: AppUpdateService,
    public activatedRouted: ActivatedRoute
  ) {
    this.activatedRouted.queryParams.subscribe(params => {
      if (params && params.id) {
        this.plotId = params.id;
      }
    });
  }

  ngOnInit() {
    // 获取地块的数据data
    this.getPlotDetail(this.plotId);

    // 获取地块督查的数据data
    this.getPlotInspection(this.plotId);
  }

  ionViewWillEnter() {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
    this.downAllFilePlot = JSON.parse(localStorage.getItem('downAllFilePlot')) || [];
    this.downAllFilePlot.map(item => {
      if (item.SEEMINFO_ID === this.plotId) {
        this.needLoadAll = false;
        this.headerEndWidth = '30px';
      }
    });
  }

  /**
   * 获取地块的数据data
   * @param plotId string 地块ID
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   */
  getPlotDetail(plotId, flag = true, event?) {
    this.configService.getPlotDetail({ sessionId: this.global.sessionId, id: plotId }, flag, res => {
      if (res !== 'error') {
        this.global.plotDetailData = res;
        this.isCollected = res.isCollection === 1 ? true : false;
        this.global.laterMonitorList = res.laterMonitorList;
        this.plot = this.global.plotDetailData;
        this.baseInfo = this.global.plotDetailData.baseInfo;

        const arr = this.global.laterMonitorList;
        this.monitorLength = arr.length;
        this.global.laterMonitorDetail = arr[0];

        if (this.baseInfo) {
          this.baseinfoDataFlag = true;
          this.tranAllToString(); // 转换baseInfo所有的code
        } else {
          this.baseinfoDataFlag = false;
        }

        this.dataFlag = this.baseinfoDataFlag || this.inspectionDataFlag;
      } else {
        this.baseinfoDataFlag = false;
      }
      this.reqSuc++;
      if (event && this.reqSuc === 2) {
        event.target.complete();
      }

    });
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
    this.baseInfo.flowStatus = this.appUpdateService.tranToString(this.global.dectionary.PL_FLOWSTATUS, this.baseInfo.CODE_FLOWSTATUS + '');
    // 转化区域code为区域名称
    this.global.AreaList.map((item) => {
      if (item.REGIONCODE === this.baseInfo.CODE_REGION) {
        this.baseInfo.regionName = item.REGIONNAME;
      }
    });
  }

  /**
   * 获取地块督查的数据data
   * @param plotId str 地块ID
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   * @param event? 刷新 或 加载事件
   */
  getPlotInspection(plotId, flag = true, event?) {
    this.configService.getPlotInspectorList({ sessionId: this.global.sessionId, id: plotId }, flag, res => {
      if (res !== 'error') {
        this.global.plotInspectorList = res;
        this.inspection = res;
        this.inspectionLength = this.global.plotInspectorList.length;
        if (this.inspectionLength > 0) {
          this.inspectionDataFlag = true;
        } else {
          this.inspectionDataFlag = false;
        }
        this.dataFlag = this.baseinfoDataFlag || this.inspectionDataFlag;

      } else {
        this.inspectionDataFlag = false;
      }

      this.reqSuc++;
      if (event && this.reqSuc === 2) {
        event.target.complete();
      }
    });
  }
  /**
   * 弹出取消收藏提示框
   */
  async collectSheet() {
    if (this.isCollected) {
      this.headerCon = '是否取消收藏此地块？';
    } else {
      this.headerCon = '是否收藏此地块？';
    }
    const actionSheet = await this.alertCtrl.create({
      header: this.headerCon,
      cssClass: 'file-alert',
      mode: 'ios',
      buttons: [{
        text: '取消',
        handler: () => {
          // console.log('cancle clicked');
        }
      }, {
        text: '确定',
        role: 'destructive',
        handler: () => {
          this.doCollection();
        }
      }],
    });
    await actionSheet.present();
  }
  /**
   * 点击收藏按钮
   */
  doCollection() {

    this.configService.doCollection({ sessionId: this.global.sessionId, seeminfoId: this.plotId }, true, res => {
      if (res.data !== 'error') {
        if (res.data === 'collection') {
          this.isCollected = true;
          this.httpUtils.thsToast('收藏成功');
        } else if (res.data === 'uncollection') {
          this.isCollected = false;
          this.httpUtils.thsToast('已取消收藏');
        }
      }
    });
  }

  /**
   * 页面跳转到下页
   * @param theme  页面主题
   */
  tranTo(theme) {
    switch (theme) {
      case 'baseInfo':
        this.router.navigate(['plot-base-info']);
        break;
      case 'priResearch':
        this.router.navigate(['plot-primary-research']);
        break;
      case 'detailResearch':
        this.router.navigate(['plot-detail-research']);
        break;
      case 'riskAssess':
        this.router.navigate(['plot-risk-assessment']);
        break;
      case 'riskManage':
        this.router.navigate(['plot-risk-management']);
        break;
      case 'gover':
        this.router.navigate(['plot-gover-repair']);
        break;
      case 'effectEval':
        this.router.navigate(['plot-effect-evaluation']);
        break;
      case 'lateSupervise':
        this.router.navigate(['plot-latesupervision-detail'], { queryParams: { id: this.plotId } });
        break;
      case 'liveInspectionRecord':
        this.router.navigate(['plot-liveinspection-record']);
        break;
    }
  }

  /**
   * 下拉刷新事件
   * @param event 刷新事件
   */
  doRefresh(event) {
    this.reqSuc = 0;
    // 获取地块的数据data
    this.getPlotDetail(this.plotId, false, event);
    // 获取地块督查的数据data
    this.getPlotInspection(this.plotId, false, event);
    this.dataFlag = this.reqSuc > 0 ? true : false;

  }

  /**
   * 弹出下载提示框
   */
  async presentSheet() {

    const actionSheet = await this.alertCtrl.create({
      header: '是否下载附件？',
      cssClass: 'file-alert',
      mode: 'ios',
      buttons: [{
        text: '取消',
        handler: () => {
        }
      }, {
        text: '确定',
        role: 'destructive',
        handler: () => {
          this.getAllFiles();
        }
      }],
    });
    await actionSheet.present();
  }

  /**
   * 下载该地块下的所有附件
   */
  getAllFiles() {
    this.needDownFileList = [];
    // 获取初步调查阶段的附件
    if (this.plot.firstCensusInfo) {
      this.getAttachs(this.plot.firstCensusInfo.CENSUS);
      this.getAttachs(this.plot.firstCensusInfo.SURVEY_REPORT);
      this.getAttachs(this.plot.firstCensusInfo.EVIDENCE_FILE);
      this.getAttachs(this.plot.firstCensusInfo.CENSUS_PUBLIC_FILES);
    }

    // 获取详细调查阶段的附件
    if (this.plot.detailCensusInfo) {
      this.getAttachs(this.plot.detailCensusInfo.CENSUS);
      this.getAttachs(this.plot.detailCensusInfo.SURVEY_REPORT);
      this.getAttachs(this.plot.detailCensusInfo.CENSUS_PUBLIC_FILES);
    }

    // 获取风险评估阶段的附件
    if (this.plot.riskAssessmentInfo) {
      this.getAttachs(this.plot.riskAssessmentInfo.CENSUS);
      this.getAttachs(this.plot.riskAssessmentInfo.CENSUS_PUBLIC_FILES);
    }

    // 获取风险管控阶段的附件
    if (this.plot.riskControlInfo) {
      this.getAttachs(this.plot.riskControlInfo.CENSUS);
      this.getAttachs(this.plot.riskControlInfo.CENSUS_PUBLIC_FILES);
    }

    // 获取治理与修复阶段的附件
    if (this.plot.repairInfo) {
      this.getAttachs(this.plot.repairInfo.CENSUS);
      this.getAttachs(this.plot.repairInfo.CENSUS_PUBLIC_FILES);
    }

    // 获取效果评估阶段的附件
    if (this.plot.effectEvaluateInfo) {
      this.getAttachs(this.plot.effectEvaluateInfo.CENSUS);
      this.getAttachs(this.plot.effectEvaluateInfo.SURVEY_REPORT);
      this.getAttachs(this.plot.effectEvaluateInfo.EVIDENCE_FILE);
      this.getAttachs(this.plot.effectEvaluateInfo.CENSUS_PUBLIC_FILES);
    }

    // 获取后期监管记录阶段的附件
    if (this.plot.laterMonitorList.length > 0) {
      this.plot.laterMonitorList.forEach((item, index) => {
        this.getAttachs(item.CENSUS);
        this.getAttachs(item.SURVEY_REPORT);
        this.getAttachs(item.CENSUS_PUBLIC_FILES);
      });
    }

    // 获取现场监督记录的附件
    if (this.inspection.length > 0) {
      this.inspection.forEach((item, index) => {
        this.getAttachs(item.FILEIDS, 'islive');
      });
    }

    setTimeout(async () => {
      this.toastAlert = await this.alertCtrl.create({
        message: '<p class="title">正在下载，请稍等...</p><div class="progress"><span class="blue"></span></div><p class="downed">已经下载：0%</p>'
      });

      this.toastAlert.present();
      let totalSize = 0;
      this.needDownFileList.forEach((item, index) => {
        totalSize += Number(item.FILESIZE);
      });
      this.needDownFileList.forEach((item, index) => {
        const downUrl = this.global.hostUrl + this.global.downUrl + '?fileid=' + item.FILEID + '&sessionId=' + this.global.sessionId;
        this.fileTransferService.downFile(downUrl, item.FILEID, item.FILENAME, item.FILESIZE, totalSize, this.toastAlert,
          () => {
            if (this.needLoadAll) {
              this.baseInfo.SEEMINFO_ID = this.plotId;
              this.downAllFilePlot.push(this.baseInfo);
              this.needLoadAll = false;
              localStorage.setItem('downAllFilePlot', JSON.stringify(this.downAllFilePlot));
              this.httpUtils.thsToast('文件已全部下载到本地存储，可在以下直接打开：内部储存/Android/data/cn.com.ths.BJWRAPP/files/. ,也可在页面中点击某个附件，即可直接打开查看');
            }
          });
      });
    }, 1000);
  }

  downAll() {


  }

  /**
   * 下载某一类附件
   * @params plotDir 该类附件的id（逗号隔开）
   * @params themeDir 该类附件的id（逗号隔开）
   * @params ids 该类附件的id（逗号隔开）
   */
  getAttachs(IDS, islive?) {
    if (IDS)  {
      const params = {
        ids: IDS,
        sessionId: this.global.sessionId
      };

      this.configService.getFile(params, false, data => {
        if (data !== 'error') {
          if (data.length > 0) {

            // 如果是现场督察的附件，需要对文件名称处理
            if (islive === 'islive') {
              // 遍历数组
              data.map((item) => {
                item.FILENAME = decodeURI(item.FILENAME);
                if (item.FILENAME.indexOf('image%') !== -1 && item.FILENAME.indexOf('.jpg') === -1) {
                  const arr = item.FILENAME.split('%');
                  item.FILENAME = arr[0] + arr[1] + '.jpg';
                } else if (item.FILENAME.indexOf('video%') !== -1 && item.FILENAME.indexOf('.mp4') === -1) {
                  const arr = item.FILENAME.split('%');
                  item.FILENAME = arr[0] + arr[1] + '.mp4';
                }
              });
            }
            // 加入到需下载数组中
            this.needDownFileList = [...this.needDownFileList, ...data];
          }
        }
      });
    }

  }

  /**
   * 时间转换
   * @param time number 时间戳
   */
  formatDate(time) {
    const purDate = new Date(time);
    const year = purDate.getFullYear();
    const month = purDate.getMonth() + 1;
    const date = purDate.getDate();
    return year + '-' + month + '-' + date + ' ';
  }
}

