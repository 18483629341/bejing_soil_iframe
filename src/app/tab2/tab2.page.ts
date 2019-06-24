import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpUtilsService } from '../services/public/http-utils.service';
import { ConfigService } from '../services/public/config.service';
import { GlobalService } from '../services/public/global.service';
import { AppUpdateService } from '../services/public/app-update.service';
import { ThsLocationService } from '../services/public/ths-location.service';
import { ModalController } from '@ionic/angular';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  newSkinName: string; // 获取新的皮肤名称
  skinName: string; // 皮肤名称
  skinRgb: string;
  expand = true; // 扫一扫是否显示
  title = '污染地块'; //  页面标题
  url: string; // url地址
  tab: string; // 区别tab1,tab2
  isShowOptions: boolean; // 筛选div是否显示
  currentOptionTabIndex; // 当前点击的tab的index的值
  Area = '区域';
  industry = '行业';
  blockType = '地块类型';
  nodata = '- -';
  AreaList: Array<string> = []; // 区域列表
  industryList: Array<string> = []; // 行业列表
  blockTypeList: Array<string> = []; // 地块列表
  dataList: Array<object> = [{ // 地块列表
    title: '',
    date: '',
    times: '',
  }];
  listShowFlag = true; // 是否显示列表
  active: any; //  选中
  active2: any; //  选中
  active3: any; //  选中
  showArea = false; // 默认选中区域不显示
  showIndustry = false; // 默认选中行业不显示
  showBlockType = false; // 默认选中地块类型不显示
  CODE_REGION = ''; // 行政区代码
  CODE_TRADE = ''; // 行业代码
  CODE_LANDTYPE = ''; // 地块类型
  type: any;
  pageCount = 1; // 列表请求页数
  pageNum = 0; // 每次加载请求的数量
  totalSize: number; // 列表总条数
  loadMore = true; // 默认上拉加载
  baseInfo: any; // 选中地块的基本信息
  distance: any;
  showRecords = false; // 显示tab1，还是tab2,对应得内容
  reqSuc = 0; // 异步请求成功的数量
  constructor(
    public statusBar: StatusBar,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public httpUtilsService: HttpUtilsService,
    public configService: ConfigService,
    public appUpdate: AppUpdateService,
    public global: GlobalService,
    public modalCtrl: ModalController,
    private thsLocation: ThsLocationService
  ) {
    // 设置状态栏皮肤
    this.skinRgb = localStorage.getItem('skinRgb') || '20A4EC';
    // set status bar to white
    this.statusBar.backgroundColorByHexString(this.skinRgb);
  }

  ngOnInit() {
    this.getAreaList();
    this.getIndustryList();
    this.getDectionary();
    this.getListSupervise(1, true);
    setTimeout(async () => {
      if (this.global.checkFlag) {
        this.appUpdate.checkVersion();
        this.global.checkFlag = false;
      }
    }, 2000);
  }

  ionViewWillEnter() {
    //  设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
    this.url = window.location.href;
    this.global.tab = this.url.substr(this.url.lastIndexOf('/') + 1);
    if (this.global.tab === 'tab1') {
      this.title = '污染地块';
      this.global.type = 'pollute';
      this.type = 'pollute';
      this.showRecords = false;
      this.expand = true;
      this.pageNum = 15;
      this.loadMore = true;
    } else {
      this.title = '现场督察';
      this.showRecords = true;
      this.expand = false;
      this.global.type = 'inspection';
      this.type = 'inspection';
      this.pageNum = 8;
      this.loadMore = true;
    }
  }

  /**
   * 显示选项列表及其弹窗
   * @param tabIndex string  tab1或者tab2
   */
  showOption(tabIndex) {
    if (!this.isShowOptions) { // 关闭状态下
      this.isShowOptions = !this.isShowOptions;
    } else { // 打开状态下 判断是否以然点击在tab上
      if (this.currentOptionTabIndex === tabIndex) { // 点击的同一个tab
        this.isShowOptions = !this.isShowOptions;
      }
    }
    this.currentOptionTabIndex = tabIndex;
  }

  // 关闭筛选条例列表数据window的点击事件
  closePotionSelectWindow() {
    this.isShowOptions = !this.isShowOptions;
  }

  /**
   * 选中区域列表
   * @param num int 此项下标
   * @param item  object 对象
   */
  selectArea(num, item) {
    // console.log(item);
    this.active = num;
    this.isShowOptions = false;
    this.Area = item.REGIONNAME;
    this.CODE_REGION = item.REGIONCODE;
    this.showArea = true;
    this.pageCount = 1;
    this.getListSupervise(1);

  }

  /**
   * 选中行业列表
   * @param num int 此项下标
   * @param item  object 对象
   */
  selectIndustry(num, item) {
    // console.log(item);
    this.active2 = num;
    this.isShowOptions = false;
    this.industry = item.dictionary_name;
    this.CODE_TRADE = item.dictionary_code;
    this.showIndustry = true;
    this.pageCount = 1;
    this.getListSupervise(1);

  }

  //  选中地块类型
  selectBlockType(num, item) {
    // console.log(item);
    this.active3 = num;
    this.isShowOptions = false;
    this.blockType = item.dictionary_name;
    this.CODE_LANDTYPE = item.dictionary_code;
    this.showBlockType = true;
    this.pageCount = 1;
    this.getListSupervise(1);

  }
  //  关闭选中区域
  closeArea() {
    this.showArea = false;
    this.Area = '区域';
    this.active = -1;
    this.CODE_REGION = '';
    this.pageCount = 1;
    this.getListSupervise(1);

  }
  //  关闭选中行业
  closeIndustry() {
    this.showIndustry = false;
    this.industry = '行业';
    this.active2 = -1;
    this.CODE_TRADE = '';
    this.pageCount = 1;
    this.getListSupervise(1);

  }
  //  关闭选中地块
  closeBlock() {
    this.showBlockType = false;
    this.blockType = '地块类型';
    this.active3 = -1;
    this.CODE_LANDTYPE = '';
    this.pageCount = 1;
    this.getListSupervise(1);

  }
  //  点击列表跳转
  goNextPage(SEEMINFO_ID) {
    this.global.SEEMINFO_ID = SEEMINFO_ID;
    if (this.global.tab === 'tab1') {
      // tab1跳转
      this.router.navigate(['plot-detail'], { queryParams: { id: SEEMINFO_ID } });
    } else {
      // this.isInlive(SEEMINFO_ID,false);
      this.router.navigate(['inspection-record'], { queryParams: { id: SEEMINFO_ID } });
    }
  }


  /**
   * 判断力用户是否在现场
   * @param SEEMINFO_ID str 地块
   * @param flag boolean 是否需要加载
   */
  isInlive(SEEMINFO_ID, flag = true) {
    this.configService.getPlotDetail({ sessionId: this.global.sessionId, id: SEEMINFO_ID }, flag, res => {
      if (res !== 'error') {
        this.baseInfo = res.baseInfo;
      }
    });
    this.thsLocation.startLocation().then(res => {
      this.global.location = res;
      this.distance = this.thsLocation.distance(res.latitude, res.longitude, this.baseInfo.LATITUDE, this.baseInfo.LONGITUDE);
      if (this.distance > this.global.minLiveDistance) {
        this.httpUtilsService.thsToast('您需在离该地块1km以内，才能进行现场督察编辑！');
      } else {
        this.router.navigate(['inspection-record'], { queryParams: { id: SEEMINFO_ID } });
      }
    });
  }

  /**
   * 获取字典数据
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   * @param event? 刷新 或 加载事件
   */
  getDectionary(flag = true, event?) {
    this.configService.getDectionary({ sessionId: this.global.sessionId }, false, res => {
      // console.log('dectionary', res);
      if (res !== 'error') {
        this.global.dectionary = res;
      }
      this.reqSucFun(event);
    });
  }

  /**
   * 获取区域列表
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   * @param event? 刷新 或 加载事件
   */
  getAreaList(flag = true, event?) {
    this.configService.getAreaList({ sessionId: this.global.sessionId }, flag, res => {
      // console.log(res);
      if (res !== 'error') {
        this.AreaList = res;
        this.global.AreaList = res;
      }
      this.reqSucFun(event);
    });
  }

  /**
   * 获取企业地块获取行业列表和地块类型统计数据
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   * @param event? 刷新 或 加载事件
   */
  getIndustryList(flag = true, event?) {
    this.configService.getIndustryList({ sessionId: this.global.sessionId }, flag, res => {
      // console.log(res);
      if (res !== 'error') {
        this.industryList = res.PL_TRADE;
        this.blockTypeList = res.PL_LANDTYPE;
      }
      this.reqSucFun(event);
    });
  }

  /**
   * 获取督察列表全部数据
   * @param dataType? 页面重新请求：1/上拉加载 ：2
   * @param flag? boolean  默认为true ,表示是否显示loading 遮罩
   * @param event? 刷新 或 加载事件
   */
  getListSupervise(dataType, flag = true, event?) {

    this.configService.getListSupervise({
      sessionId: this.global.sessionId,
      CODE_REGION: this.CODE_REGION,
      CODE_TRADE: this.CODE_TRADE,
      CODE_LANDTYPE: this.CODE_LANDTYPE,
      pageCount: this.pageCount,
      pageSize: '15',
    }, flag, res => {

      if (res && res !== 'error') {
        this.listShowFlag = true;
        this.totalSize = res.total;
        if (dataType === 1) { // 刷新
          this.loadMore = true;
          this.dataList = res.list;
          // 执行加载完成时间是
          this.reqSucFun(event);
        } else { // 向上加载时
          // console.log(this.dataList.length, this.totalSize);
          if (this.dataList.length < this.totalSize) {
            this.loadMore = true;
            this.dataList = [...this.dataList, ...res.list];
            // console.log(this.dataList.length);
          } else {
            this.loadMore = false;
            this.httpUtilsService.thsToast('没有更多了');
          }
        }
      }

      // 关闭加载动画
      if (dataType === 1) { // 刷新
        if (event) { this.reqSucFun(event); }
      } else {
        if (event) { event.target.complete(); }
      }

    });
  }

  /**
   * 异步请求成功 数据/事件处理
   * @param event 刷新 事件
   */
  reqSucFun(event) {
    this.reqSuc++;
    if (event && this.reqSuc === 4) {
      event.target.complete();
    }
  }

  /**
   * 创建搜索模态框
   */
  async goSearch() {
    const searchModal = await this.modalCtrl.create({
      cssClass: 'date-modal',
      component: SearchModalComponent,
      componentProps: {
        type: 'wrdk'
      }
    });
    await searchModal.present();
  }

  /**
   * 下拉刷新事件
   * @param event 事件
   */
  doRefresh(event) {
    this.pageCount = 1;
    this.reqSuc = 0;
    this.getAreaList(false, event);
    this.getIndustryList(false, event);
    this.getDectionary(false, event);
    this.getListSupervise(1, false, event); // 加载督察列表
  }

  /**
   * 上拉加载事件
   * @param event 事件
   */
  loadData(event) {
    this.pageCount++;
    this.getListSupervise(2, false, event);
  }


}
