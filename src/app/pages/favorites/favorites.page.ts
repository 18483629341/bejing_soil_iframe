import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  public dataList: any = []; // 列表数据
  skinName: any;
  nodata:'- -';
  constructor(
    public configService: ConfigService,
    public global: GlobalService,
    public httpUtils: HttpUtilsService,
    public router: Router
  ) {

  }

  ngOnInit() {
    // 加载收藏的督察列表
    this.getListSupervise();
  }
  ionViewWillEnter() {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }
  
  /**
   * 加载收藏的督察列表
   * @param flag?  boolean  是否显示loading
   */
  getListSupervise(flag = true) {
    this.configService.getListSupervise({
      sessionId: this.global.sessionId,
      isCollection: 1,
      pageCount: 1,
      pageSize: 10
    }, flag, res => {
      //console.log(res);
      if (res !== 'error') {
        this.dataList = res.list;
      }
    });
  }

 
  /**
   * 点击列表跳转
   * @param SEEMINFO_ID  地块ID
   */
  goNextPage(SEEMINFO_ID) {
    this.router.navigate(['plot-detail'], { queryParams: { id: SEEMINFO_ID } });
  }

   //点击收藏按钮
   cancel(plotId) {
    this.configService.doCollection({ 'sessionId': this.global.sessionId, 'seeminfoId': plotId }, false, res => {
      if (res.data !== 'error') {
        this.httpUtils.thsToast("取消收藏成功");
      }else{
        this.httpUtils.thsToast("取消收藏失败");
      }
    });
    //重新加载
    this.getListSupervise(true);
  }

  /**
   *下拉刷新事件
   * @param event 事件
   */
  doRefresh(event) {
    // 加载收藏的督察列表
    this.getListSupervise(false);
    setTimeout(() => {
      event.target.complete();
    }, 800);
  }
}
