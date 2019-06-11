import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 
  skinName: string; // 皮肤名称
  items: any[] = [];
  constructor(public alertController: AlertController, public nav: NavController, private router: Router, ) {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  ionViewWillEnter() {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
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
