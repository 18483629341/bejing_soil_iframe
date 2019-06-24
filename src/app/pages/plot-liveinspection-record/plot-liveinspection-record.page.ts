import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';

@Component({
  selector: 'app-plot-liveinspection-record',
  templateUrl: './plot-liveinspection-record.page.html',
  styleUrls: ['./plot-liveinspection-record.page.scss'],
})
export class PlotLiveinspectionRecordPage implements OnInit {
  inspectorList: any = [];  // 现场督察记录数据
  dataFlag: any = false;  // 是否拿到现场督察记录数据
  skinName: string; // 皮肤名称
  constructor(
    public configService: ConfigService,
    public global: GlobalService,
    public router: Router
  ) {

  }

  ngOnInit() {
    // 初始化页面数据
    this.init();
  }

  ionViewWillEnter() {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  /**
   * 初始化页面数据
   */
  init() {
    if (this.global.plotInspectorList.length > 0) {
      this.inspectorList = this.global.plotInspectorList;
      this.dataFlag = true;
    } else {
      this.dataFlag = false;
    }

  }

  /**
   * 页面跳转至详情
   * @param id 记录ID
   */
  goNext(id) {
    this.router.navigate(['plot-liveinspection-detail'], { queryParams: { SUPERVISE_ID: id } });
  }

  /**
   * 下拉刷新事件
   * @param event 事件
   */
  doRefresh(event) {
     // 初始化页面数据
    this.init();
    event.target.complete();
  }
}
