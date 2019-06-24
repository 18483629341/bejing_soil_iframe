import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-downloaded',
  templateUrl: './downloaded.page.html',
  styleUrls: ['./downloaded.page.scss'],
})
export class DownloadedPage implements OnInit {
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
    // 加载已下载的督察列表
    this.dataList = JSON.parse(localStorage.getItem('downAllFilePlot')) || [];
  }
  ionViewWillEnter() {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
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
   * @param i  数组下标
   */
  async cancelSheet(i) {

    const actionSheet = await this.alertCtrl.create({
      header: '是否删除此列信息？',
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
          this.cancel(i);
        }
      }],
    });
    await actionSheet.present();
  }

  /**
   * 删除数组中的某一项
   * @param i  数组下标
   */
  cancel( i ) {
    this.dataList.splice(i, 1);
    localStorage.setItem( 'downAllFilePlot', JSON.stringify(this.dataList));
  }

  /**
   * 下拉刷新事件
   * @param event 事件
   */
  doRefresh(event) {
    // 加载收藏的督察列表
    this.dataList = JSON.parse(localStorage.getItem('downAllFilePlot')) || [];
    event.target.complete();
  }
}
