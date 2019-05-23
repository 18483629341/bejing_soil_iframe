import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { NavParams } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { GlobalService } from '../../app/services/public/global.service';
import { ConfigService } from '../../app/services/public/config.service';
import { HttpUtilsService } from '../../app/services/public/http-utils.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {

  plotName: '';//用户输入的地块名称
  plotId: '';//用户选择的地块id
  dataList: any = [];//地块列表
  plotListShow: boolean = false;//地块列表是否显示
  type;//区分是从地块信息模块还是统计分析模块打开的模态框
  dataType:any;
  pageCount = 1; // 列表请求页数
  totalPage: number; // 列表总条数
  isLoaded = false; // 默认上拉加载
  constructor(
    public global: GlobalService,
    public config: ConfigService,
    public httpUtilsService: HttpUtilsService,
    public navParams: NavParams,
    public elementRef: ElementRef,
    public router: Router,
    public keyboard: Keyboard) {
    
    this.type = this.navParams.data.type;
    this.dataType=this.global.type;

  }

  ngOnInit() {
    setTimeout(() => {
      const el = this.elementRef.nativeElement.querySelector('.searchbar-input');
      setTimeout(() => {
        el.focus();
        this.keyboard.show();
      }, 400);
    }, 500);
  }
  
  /**
  * 获取污染督察地块列表
  * @param flag  boolean  是否显出loading
  */
  getSuperviseList(loadType,flag) {
    this.config.getListSupervise({LANDNAME: this.plotName,sessionId:this.global.sessionId,pageCount:1,pageSize:10}, flag,res => {
      console.log('PolluteList');
      console.log(res);
      if (res !== 'error') {
        this.totalPage = res.total;
        if (loadType === 1) {
          this.dataList = res.list;
        } else {
          this.dataList = this.dataList.concat(res.list);
        }
      }
    });
 }

  /**
   * 输入地块名称进行关联搜索
   */
  searchPlot() {
    console.log(1);
    if (this.plotName) {
      setTimeout(() => {
        this.plotListShow = true;
        this.getSuperviseList(1,true);
      }, 500);
    } else {
      this.plotListShow = false;
      this.dataList = [];
    }
  }
  /**
   * 选择地块
   * @param item 选中的地块
   */
  selectPlot(item) {
    this.plotName = item.title;
    this.plotId = item.id;
    this.navParams.data.modal.dismiss({ plotName: this.plotName, plotId: this.plotId });
  }

  /**
   * 关闭modal页面
   */
  closeModal() {
    this.navParams.data.modal.dismiss({ plotName: this.plotName, plotId: this.plotId });
  }

  /**
   * 关闭地块信息列表框
   */
  closePlotBox() {
    this.plotListShow = false;
  }

  /**
   * 跳转详情页
   * @param item
   */
  //  点击列表跳转
  goNextPage(SEEMINFO_ID) {
    this.global.SEEMINFO_ID = SEEMINFO_ID;
    if (this.global.tab === 'tab1') {
      // tab1跳转
      this.router.navigate(['plot-detail'], { queryParams: { id: SEEMINFO_ID } });
    } else {
      this.router.navigate(['inspection-record']);
    }
    this.navParams.data.modal.dismiss();
  }
  
  /**
   *下拉刷新事件
   * @param event 事件
   */
  doRefresh(event) {
    this.pageCount = 1;
  
    this.getSuperviseList(1, false); // 加载督察列表
    //this.getData(1, false); // 加载数据列表
    //  this.getBlockList(false); // 加载地块列表
    setTimeout(() => {
      this.isLoaded = false;
      event.target.complete();
    }, 1000);
  }
  loadData(event) {
    this.pageCount++;
  
    this.getSuperviseList(2, false); // 加载数据列表
    setTimeout(() => {
      if (this.dataList.length === this.totalPage) {
        // event.target.disabled = true;
        this.isLoaded = true;
        this.httpUtilsService.thsToast('没有更多了');
      }
      event.target.complete();
    }, 500);
  }
}
