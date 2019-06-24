import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  visibility: any = false; // 是否显示密码
  loginInfo = {
    userName: '', // 用户名
    password: '', // 密码
    isRemName: false, // 是否记住用户名
    isRemPwd: false // 是否记住密码
  };
  // 改变密码显示
  changeEyes() {
    this.visibility = !this.visibility;
  }
  // 清除用户
  clearInput() {
    this.loginInfo.userName = '';
  }

  constructor(
    public nav: NavController,
    public router: Router,
    public toastController: ToastController,
    public configService: ConfigService,
    public global: GlobalService,
    private faio: FingerprintAIO
  ) {
    // this.skinName = localStorage.getItem('skinName') || 'blue';
  }
  /**
   *
   * @param msg 提示内容
   */
  async presentToastWithOptions(msg) {
    const toast = await this.toastController.create({
      message: msg,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'x',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
    // 加载页面时载入存储的数据是否有记住密码和记住用户
    const storage = JSON.parse(localStorage.getItem('user'));
    if (storage !== null && storage.isRemName) {
      this.loginInfo.userName = storage.userName;
      this.loginInfo.isRemName = storage.isRemName;
    }
    if (storage !== null && storage.isRemPwd) {
      this.loginInfo.password = storage.password;
      this.loginInfo.isRemPwd = storage.isRemPwd;
    }
  }
  //  每次进入登录页都要判断是否指纹登录
  ionViewWillEnter() {
    this.fingerRecognition();
  }

  /**
   * 登录点击事件
   */
  login() {
    // 判断用户不能为空
    if (this.loginInfo.userName.trim() === '') {
      this.presentToastWithOptions('用户名不能为空');
      return false;
    }
    if (this.loginInfo.password.trim() === '') {
      this.presentToastWithOptions('密码不能为空');
      return false;
    }
    this.configService.login({ loginName: this.loginInfo.userName, password: this.loginInfo.password }, true, res => {
      if (res !== 'error') {
        if (res.status === '1') {
          localStorage.setItem('user', JSON.stringify({
            userName: this.loginInfo.userName,
            password: this.loginInfo.password,
            isRemName: this.loginInfo.isRemName,
            isRemPwd: this.loginInfo.isRemPwd,
          }));
          this.global.sessionId = res.sessionId;
          // this.deviceInfoService.sendDeviceInfo(this.loginInfo.userName);

          // 登录成功跳转首页
          this.nav.navigateRoot(['/app/tabs/tab1']);
        } else {
          this.presentToastWithOptions(res.message);
          localStorage.clear();
        }
      }
    });
    // this.nav.navigateRoot(['/app/tabs/tab1']);

  }
  /**
   * 指纹识别
   */
  fingerRecognition() {
    const isToggled = localStorage.getItem('isToggled');
    const data = isToggled;
    if (data === 'true') {
      this.faio.isAvailable().then((result) => {
        this.faio.show({
          clientId: '指纹认证',
          clientSecret: 'password'
        }).then(() => {
          const storage = JSON.parse(localStorage.getItem('user'));
          this.loginInfo.userName = storage.userName;
          this.loginInfo.password = storage.password;
          this.login();
        }).catch(err => {
        });
      });
    }
  }

  /**
   * 记住用户
   */
  isRememberName() {
    if (!this.loginInfo.isRemName) {// 取消记住用户名，同时操作取消记住密码
      this.loginInfo.isRemPwd = false;
    }
  }

  /**
   * 记住密码
   */
  isRememberPwd() {
    if (this.loginInfo.isRemPwd) {// 记住密码同时记住用户名
      this.loginInfo.isRemName = true;
    }
  }

}
