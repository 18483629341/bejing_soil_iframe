import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/public/global.service';
import { AppUpdateService } from '../../services/public/app-update.service';


@Component({
  selector: 'app-plot-latesupervision-record',
  templateUrl: './plot-latesupervision-record.page.html',
  styleUrls: ['./plot-latesupervision-record.page.scss'],
})
export class PlotLatesupervisionRecordPage implements OnInit {
  skinName: any;
  public laterMonitorList = [];
  data: object = {};
  constructor(
    public global: GlobalService,
    public appUpdate: AppUpdateService,
    public router: Router
  ) {
  }

  ngOnInit() {
    if (this.global.laterMonitorList.length > 0) {
      this.laterMonitorList = this.global.laterMonitorList;
    }
  }

  ionViewWillEnter() {
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  /**
   * 页面跳转至详情
   * @param id 记录ID
   */
  goNext(id) {
    this.laterMonitorList.map((item) => {
      if (item.LATE_ID === id) {
        this.global.laterMonitorDetail = item;
      }
    });
    this.router.navigate(['plot-latesupervision-detail'], { queryParams: { LATE_ID : id } });
  }


  /**
   * 下拉刷新事件
   * @param event 事件
   */
  doRefresh(event) {
    if (this.global.laterMonitorList.length > 0) {
      this.laterMonitorList = this.global.laterMonitorList;
    }
    event.target.complete();
  }
}
