import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  newSkinName: string; // 获取新的皮肤名称
  skinName: string; // 皮肤名称
  items: any[] = [];
  constructor(public alertController: AlertController, public nav: NavController, private router: Router, ) {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  //此钩子函数会每隔几秒时间执行一次 ,与ngAfterContentChecked ()为一对钩子函数
  ngDoCheck() {
    this.newSkinName = localStorage.getItem('skinName') || 'blue';
    if (this.newSkinName !== this.skinName) {
      this.skinName = this.newSkinName;
    }
  }
  goFavorites() {
    this.router.navigate(['favorites'], { queryParams: {} });
  }
  goDownloaded() {
    this.router.navigate(['downloaded'], { queryParams: {} });
  }
  goSetUp() {
    this.router.navigate(['set-up'], { queryParams: {} });
  }

}
