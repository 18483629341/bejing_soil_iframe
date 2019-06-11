import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  skinName: string; // 皮肤名称
 
  constructor( ) {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  ionViewWillEnter() {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }
}
