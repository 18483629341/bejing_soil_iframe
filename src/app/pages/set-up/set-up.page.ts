import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.page.html',
  styleUrls: ['./set-up.page.scss'],
})
export class SetUpPage implements OnInit {
  isShow = false; // 没有指纹功能则不显示
  isToggle = true; // 切换按钮
  skinName: string;
  constructor(
    public alertController: AlertController,
    public nav: NavController,
    private router: Router,
    public fingerprintAIO: FingerprintAIO,
  ) {
     // 设置头部皮肤
     this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  ngOnInit() {
    this.decideShowToggle();
  }

  ionViewWillEnter( ) {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  decideShowToggle() {
    this.fingerprintAIO.isAvailable().then((result) => { // 手机不支持指纹功能则隐藏按钮
      // 指纹可以使用(android上result=OK,ios上result=Available)
      this.isShow = true;
    })
      .catch((err) => { // 未录入指纹
        if (err === 'Fingerprint authentication not ready' || err === 'Not available指纹不可用') {
          this.isToggle = true;
        } else { // 不支持此功能
          this.isToggle = false;
        }
      });
    this.getIsToggled();
  }
  // 取出isToggled的值显示在页面按钮上
  getIsToggled() {
    const storage = localStorage.getItem('isToggled');
    const data = storage;
    if (data === 'true') {
      this.isToggle = true;
    } else {
      this.isToggle = false;
    }
  }

  /**
   * 按钮的切换
   * @param e object 事件对象
   */
  public notify(e) {
    if (this.isToggle) { // 确保开启指纹功能时用户手机中有录入指纹
      this.fingerprintAIO.isAvailable()
        .then((result) => {
          this.isToggle = true;
          localStorage.setItem('isToggled', this.isToggle.toString());
        })
        .catch((err) => {
          if (err === 'Fingerprint authentication not ready' || err === 'Not available指纹不可用') {
            alert('您还没有录入指纹，请您先到手机设置中去录入指纹');
          }
          this.isToggle = false;
          localStorage.setItem('isToggled', this.isToggle.toString());
        });
    } else {
      this.isToggle = false;
      localStorage.setItem('isToggled', this.isToggle.toString());
    }
  }

  /**
   * 退出登录
   */
  quit() {
    this.presentAlertConfirm('确定退出登录');
  }

  /**
   * 跳转皮肤设置
   */
  goSkin() {
    this.router.navigate(['skin-set']);
  }

  /**
   * 弹出消息弹窗
   * @param val str 弹窗信息
   */
  async presentAlertConfirm(val) {
    const alert = await this.alertController.create({
      message: val,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: () => {
            // this.router.navigate(['login']);
            this.nav.navigateRoot(['login']);
          }
        }
      ]
    });

    await alert.present();

  }
}
