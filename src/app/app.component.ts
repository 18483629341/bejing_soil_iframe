import { Component } from '@angular/core';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppUpdateService } from './services/public/app-update.service';
import { HttpUtilsService } from './services/public/http-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public backButtonPressed = false; // 用于判断返回键是否按下

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private appMinimize: AppMinimize,
    private statusBar: StatusBar,
    private httpUtilsService: HttpUtilsService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
        this.registerBackButtonAction();
      }, 100);
    });
  }
  registerBackButtonAction() {
    // tabs页面提示双击退出
    const tab = '/app/tabs';
    const login = '/login';
    this.platform.backButton.subscribe(() => {
      const url = this.handleUrl(this.platform.url());
      if (url.indexOf(tab) !== -1 || url.indexOf(login) !== -1) {
        this.showExit();
      }
    });
  }
  /**
     * 处理url
     * @param url url路径
     */
  handleUrl(url) {
    if (!url) {
      return url;
    }
    const rel = url.split('//')[1].split('?')[0];  // 删除http://和？后参数
    let newUrl = '';
    for (let i = 0, len = rel.length; i < len; i++) {
      if (rel[i] === '/') { // 获取端口后路径
        newUrl = rel.substring(i);
        break;
      }
    }
    return newUrl;
  }

  // 退出应用方法
  showExit() {
    // 如果为true，退出
    if (this.backButtonPressed) {
      this.backButtonPressed = false;
      this.appMinimize.minimize();
    } else {
      // 第一次按，弹出Toast
      this.httpUtilsService.thsToast('再按一次退出应用');
      // 标记为true
      this.backButtonPressed = true;
      // 两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }
}
