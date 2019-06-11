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

  plotName: ''; // 用户输入的地块名称
  plotId: ''; // 用户选择的地块id
  dataList: any = []; // 地块列表
  plotListShow = false; // 地块列表是否显示
  type;
  dataType: any;
  pageCount = 1; // 列表请求页数
  totalSize: number; // 列表总条数
  constructor(
    public global: GlobalService,
    public config: ConfigService,
    public httpUtilsService: HttpUtilsService,
    public navParams: NavParams,
    public elementRef: ElementRef,
    public router: Router,
    public keyboard: Keyboard) {
    this.type = this.navParams.data.type;
    this.dataType = this.global.type;

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
   *  获取污染督察地块列表
   *  @param loadType num 事件类型  刷新 1或加载 2
   *  @param flag  boolean  是否显出loading
   *  @param event? 刷新 或 加载事件
   */
  getSuperviseList(loadType, flag = true, event?) {
    this.config.getListSupervise({
      LANDNAME: this.plotName,
      sessionId: this.global.sessionId,
      pageCount: this.pageCount,
      pageSize: 10
    }, flag, res => {
      // console.log(res);
      if (res !== 'error') {
        this.totalSize = res.total;
        if (loadType === 1) {
          this.dataList = res.list;
        } else {
          // 向上加载时
          if (this.dataList.length === res.total) {
            this.httpUtilsService.thsToast('没有更多了');
          } else {
            this.dataList = this.dataList.contact(res.list);
          }
        }
      }

      if (event) {
        event.target.complete();
      }
    });
 }

  /**
   * 输入地块名称进行关联搜索
   */
  searchPlot() {
    if (this.plotName) {
      setTimeout(() => {
        this.plotListShow = true;
        this.getSuperviseList(1 , true);
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
   * @param item 列表对象
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


  loadData(event) {
    this.pageCount++;
    this.getSuperviseList(2, false, event); // 加载数据列表
  }
}
