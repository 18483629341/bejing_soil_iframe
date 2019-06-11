import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  public dataList: any = []; // 列表数据
  skinName: any;
  pageCount = 1; // 列表页数
  constructor(
    public configService: ConfigService,
    public httpUtilsService: HttpUtilsService,
    public global: GlobalService,
    public alertCtrl: AlertController,
    public httpUtils: HttpUtilsService,
    public router: Router
  ) {

  }

  ngOnInit() {
    // 加载收藏的督察列表
    this.getListSupervise(1);
  }
  ionViewWillEnter() {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  /**
   * 加载收藏的督察列表
   * @param eventType 事件类型 1 刷新 / 2 加载
   * @param flag?  boolean  是否显示loading
   * @param flag?  刷新事件
   */
  getListSupervise(eventType , flag = true, event?) {
    this.configService.getListSupervise({
      sessionId: this.global.sessionId,
      isCollection: 1,
      pageCount: this.pageCount,
      pageSize: 10
    }, flag, res => {
      // console.log(res);
      if (res !== 'error') {
        this.dataList = res.list;
        if (eventType === 1) { // 刷新
          this.dataList = res.list;
          // 执行加载完成时间是
        } else { // 向上加载时
          if (this.dataList.length === res.total) {
            this.httpUtilsService.thsToast('没有更多了');
            // 加载事件
            if (event) {
              event.target.disabled = true;
            }
          } else {
            this.dataList = this.dataList.concat(res.list);
            if (event) {
              event.target.disabled = false;
            }
          }
        }
      }
      if ( event ) {
        event.target.complete();
      }
    });
  }


  /**
   * 点击列表跳转
   * @param SEEMINFO_ID  string  地块ID
   */
  goNextPage(SEEMINFO_ID) {
    this.router.navigate(['plot-detail'], { queryParams: { id: SEEMINFO_ID } });
  }

  /**
   * 弹出取消收藏提示框
   */
  async cancelSheet(plotId) {

    const actionSheet = await this.alertCtrl.create({
      header: '是否取消收藏？',
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
          this.cancel(plotId);
        }
      }],
    });
    await actionSheet.present();
  }

  /**
   * 点击收藏按钮
   * @param plotId string  地块ID
   */
  cancel(plotId) {
    this.configService.doCollection({ sessionId: this.global.sessionId, seeminfoId: plotId }, false, res => {
      if (res.data !== 'error') {
        this.httpUtils.thsToast('取消收藏成功');
      } else {
        this.httpUtils.thsToast('取消收藏失败');
      }
    });
    this.getListSupervise(true);
  }

  /**
   * 下拉刷新事件
   * @param event 事件
   */
  doRefresh(event) {
    // 加载收藏的督察列表
    this.pageCount = 1;
    this.getListSupervise(1 , false, event);
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
