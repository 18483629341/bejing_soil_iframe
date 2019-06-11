import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-skin-set',
  templateUrl: './skin-set.page.html',
  styleUrls: ['./skin-set.page.scss'],
})
export class SkinSetPage implements OnInit {
  skinName: string;
  skinRgb: any;
  constructor(private statusBar: StatusBar) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
    this.skinRgb = localStorage.getItem( 'skinRgb') || '20A4EC';
  }
  /**
   * 皮肤设置单选的选中
   * @param event 事件对象
   */
  select(event) {
    this.skinName = event.target.getAttribute('value');
    switch (this.skinName) {
      case 'blue':
        this.skinRgb = '20A4EC';
        break;
      case 'green':
        this.skinRgb = '00c393';
        break;
      case 'orange':
        this.skinRgb = 'FFA500';
        break;
      default:
        this.skinRgb = '20A4EC';
    }
    localStorage.setItem( 'skinName' , this.skinName);
    localStorage.setItem( 'skinRgb' , this.skinRgb);
    // let status bar overlay webview
    // this.statusBar.overlaysWebView(true);

    // set status bar to white
    this.statusBar.backgroundColorByHexString(this.skinRgb);
  }
}
