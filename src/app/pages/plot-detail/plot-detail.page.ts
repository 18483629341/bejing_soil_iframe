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
  baseInfo: any = {}; // 地块基本信息
  baseinfoDataFlag: any = false;  //是否拿到有效的地块数据
  inspection = []; //督察列表数据
  inspectionDataFlag: any = false;  //是否拿到有效的督察列表数据

  dataFlag: any = true;  //是否拿到有效的地块数据或督察列表数据
  isCollected = false;//默认为未收藏
  collectedIndex = -1;//
  plotId = '7c43c589-70bb-4acb-b53e-bbf7cc6ba594';//一个临时的id
  inspectionLength: any = 0;
  monitorLength: any = 0;
  allFileList = [];//所有的附件列表
  newSkinName: string; //获取新的皮肤名称
  skinName: string; //皮肤名称
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
      console.log(params , params.id);
      if (params && params.id) {
        this.plotId = params.id;
      }
      
      //this.plotId = '7c43c589-70bb-4acb-b53e-bbf7cc6ba594';
    });
  }

  ngOnInit() {
    //获取地块的数据data
    this.getPlotDetail(this.plotId);

    //获取地块督查的数据data
    this.getPlotInspection(this.plotId);
  }

  ionViewWillEnter() {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  /**
   * 获取地块的数据data
   * @param plotId string 地块ID
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   */
  getPlotDetail(plotId, flag = true) {
    this.configService.getPlotDetail({ 'sessionId': this.global.sessionId, 'id': plotId }, flag, res => {
      // console.log(res);
      if (res !== 'error') {
        this.global.plotDetailData = res;
        this.isCollected = res['isCollection'] === 1 ? true : false;
        this.global.laterMonitorList = res['laterMonitorList'];
        this.plot = this.global.plotDetailData;
        this.baseInfo = this.global.plotDetailData['baseInfo'];

        let arr = this.global.laterMonitorList;
        this.monitorLength = arr.length;
        this.global.laterMonitorDetail = arr[0];

        if (this.baseInfo === null || JSON.stringify(this.baseInfo) === "{}") {
          this.baseinfoDataFlag = false;
        } else {
          this.baseinfoDataFlag = true;
          this.tranAllToString();//转换baseInfo所有的code
        }
        // console.log(this.baseInfo,this.baseinfoDataFlag);

      } else {
        this.baseinfoDataFlag = false;
      }
      this.dataFlag = this.baseinfoDataFlag || this.inspectionDataFlag;
    });
  }

  /**
   * 转换baseInfo所有的code
   * @param arr 遍历的对象或者数组
   * @param codeName 对应codeName
   * @param codeNum 对应codeNum
   */
  tranAllToString() {
    console.log(this.global.dectionary['PL_FLOWSTATUS'], this.baseInfo['CODE_FLOWSTATUS']);
    this.baseInfo['landMgmodel'] = this.appUpdateService.tranToString(this.global.dectionary['PL_LANDMGMODEL'], this.baseInfo['CODE_LANDMGMODEL']);
    this.baseInfo['trade'] = this.appUpdateService.tranToString(this.global.dectionary['PL_TRADE'], this.baseInfo['CODE_TRADE']);
    this.baseInfo['landType'] = this.appUpdateService.tranToString(this.global.dectionary['PL_LANDTYPE'], this.baseInfo['CODE_LANDTYPE']);
    this.baseInfo['riskGrade'] = this.appUpdateService.tranToString(this.global.dectionary['PL_RISKGRADE'], this.baseInfo['CODE_RISKGRADE']);
    this.baseInfo['flowStatus'] = this.appUpdateService.tranToString(this.global.dectionary['PL_FLOWSTATUS'], this.baseInfo['CODE_FLOWSTATUS'] + '');
    //转化区域code为区域名称
    this.global.AreaList.map((item) => {
      if (item['REGIONCODE'] === this.baseInfo['CODE_REGION']) {
        this.baseInfo['regionName'] = item['REGIONNAME'];
      }
    })
    //console.log(this.baseInfo);
  }

  /**
   * 获取地块督查的数据data
   * @param plotId 
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   */
  getPlotInspection(plotId, flag = true) {
    this.configService.getPlotInspectorList({ 'sessionId': this.global.sessionId, 'id': plotId }, flag, res => {
      console.log(res);
      if (res !== 'error') {
        this.global.plotInspectorList = res;
        this.inspection = this.global.plotInspectorList;
        this.inspectionLength = this.global.plotInspectorList.length;
        if (this.inspectionLength > 0) {
          this.inspectionDataFlag = true;
        } else {
          this.inspectionDataFlag = false;
        }

      } else {
        this.inspectionDataFlag = false;
      }
      this.dataFlag = this.baseinfoDataFlag || this.inspectionDataFlag;
    });
  }

  /** 
   * 点击收藏按钮
   */
  doCollection() {

    this.configService.doCollection({ 'sessionId': this.global.sessionId, 'seeminfoId': this.plotId }, true, res => {
      // console.log(res);
      if (res.data !== 'error') {
        if (res.data === 'collection') {
          this.isCollected = true;
          this.httpUtils.thsToast("收藏成功");
        } else if (res.data === 'uncollection') {
          this.isCollected = false;
          this.httpUtils.thsToast("已取消收藏");
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
   * @param event 
   */
  doRefresh(event) {
    //获取地块的数据data
    this.getPlotDetail(this.plotId, false);
    //获取地块督查的数据data
    this.getPlotInspection(this.plotId, false);
    this.dataFlag = this.baseinfoDataFlag || this.inspectionDataFlag;
    setTimeout(() => {

      event.target.complete();
    }, 1000);
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
          // console.log('cancle clicked');
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

    //获取初步调查阶段的附件
    if (this.plot.firstCensusInfo) {
      this.getAttachs(this.plot.firstCensusInfo.CENSUS);
      this.getAttachs(this.plot.firstCensusInfo.SURVEY_REPORT);
      this.getAttachs(this.plot.firstCensusInfo.EVIDENCE_FILE);
    }

    //获取详细调查阶段的附件
    if (this.plot.detailCensusInfo) {
      this.getAttachs(this.plot.detailCensusInfo.CENSUS_PUBLIC_FILES);
      this.getAttachs(this.plot.detailCensusInfo.SURVEY_REPORT);
    }

    //获取风险评估阶段的附件
    if (this.plot.riskAssessmentInfo) {
      this.getAttachs(this.plot.riskAssessmentInfo.CENSUS);
      this.getAttachs(this.plot.riskAssessmentInfo.EVIDENCE_FILE);
    }

    //获取风险管控阶段的附件
    if (this.plot.riskControlInfo) {
      this.getAttachs(this.plot.riskControlInfo.CENSUS);
      this.getAttachs(this.plot.riskControlInfo.SURVEY_REPORT);
    }

    //获取治理与修复阶段的附件
    if (this.plot.repairInfo) {
      this.getAttachs(this.plot.repairInfo.CENSUS);
    }

    //获取效果评估阶段的附件
    if (this.plot.effectEvaluateInfo) {
      this.getAttachs(this.plot.effectEvaluateInfo.CENSUS);
      this.getAttachs(this.plot.effectEvaluateInfo.SURVEY_REPORT);
    }

    //获取后期监管记录阶段的附件
    if (this.plot.laterMonitorList.length > 0) {
      this.plot.laterMonitorList.forEach((item, index) => {
        this.getAttachs(item.SURFACE_WATER_VERDICT);
        this.getAttachs(item.MONITOR_PLAN_FILE);
      });
    }

    setTimeout(async () => {
      let alert = await this.alertCtrl.create({
        message: '<p class="title">正在下载，请稍等...</p><div class="progress"><span class="blue"></span></div><p class="downed">已经下载：0%</p>'
      });
      alert.present();

      let totalSize = 0;
      this.allFileList.forEach((item, index) => {
        totalSize += Number(item.FILESIZE);
      });

      this.allFileList.forEach((item, index) => {
        let downUrl = this.global.hostUrl + this.global.fileUrl + '?ids=' + item.FILEID + '&sessionId=' + this.global.sessionId;
        this.fileTransferService.downFile(downUrl, item.FILEID, item.FILENAME, item.FILESIZE, totalSize, alert);
      });

    }, 1000);
  }

  /**
   * 下载某一类附件
   * @params ids 该类附件的id（逗号隔开）
   */
  getAttachs(ids) {
    if (ids) {
      let params = {
        ids: ids,
        sessionId: this.global.sessionId
      }

      this.configService.getFile(params, false, data => {
        if (data !== 'error') {
          if (data.length > 0) {
            this.allFileList = this.allFileList.concat(data);
          }
        }
      });
    }

  }
}

