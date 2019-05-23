import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx'; // toast插件
import { LoadingController, Platform, AlertController, ToastController } from '@ionic/angular'; // 引入loading
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'; //  引入请求方式

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  public toast: any = null;
  constructor(
    private cordovaToast: Toast,
    public toastCtrl: ToastController,
    public loadingController: LoadingController,
    private httpClient: HttpClient) { }

  /**
    * 提示框
    */
  Toast(txt: string, position?: string) {
    try {
      this.cordovaToast.show(txt, '2000', position ? position : 'center').subscribe();
    } catch (error) {
      // console.log(error);
    }
  }

  /**
   * toast提示框
   **/
  async thsToast(txt: string, position?) {
    if (this.toast) {
      this.toast.dismiss();
      this.toast = null;
    }
    this.toast = await this.toastCtrl.create({
      message: txt,
      duration: 2000,
      position: position ? position : 'bottom',
      cssClass: 'toast-message',
    });
    this.toast.present();
  }

  /**
   * showloading服务
   * @param template 展示内容(选传)
   */
  async presentLoading(template?) {
    const loader = await this.loadingController.create({
      spinner: 'circles',
    });
    await loader.present();
    return loader;
  }

  /**
   * 关闭loading
   * @param  loader 创建的loading对象
   */
  hideLoading(loader) {
    loader.dismiss();
  }

  /**
   * 配置GET请求方式
   * @param  url 请求地址(必传)
   * @param  params 参数(必传)
   * @param  showloading 是否显示Loading框(必传)boolean值
   * @param  callback 回调函数(必传)
   */
  async get(url, params, showloading, callback) {
    let loader = null;
    if (showloading) {
      loader = await this.presentLoading('');
    }

    this.httpClient.get(url, { responseType: 'json', params: this.httpParams(params) })
      .subscribe(
        res => {
          if (showloading) {
            this.hideLoading(loader);
          }
          if (res) {
            callback(res);
          } else {
            this.thsToast('数据请求失败，请重试');
            callback('error');
          }
        },
        err => {
          if (showloading) {
            this.hideLoading(loader);
          }
          this.thsToast('数据请求失败，请重试');
          callback('error');
        }
      );
  }

  /**
   * 发送HTTP请求post方法
   * @param  url 发送请求的地址
   * @param  params 发送到服务器的数据，键值对形式
   * @param  success 发送请求成功的函数
   * @param  error 发送请求失败的函数
   * @param  flag 是否显示数据加载,false或不传参为显示，true不显示
 */
  async post(url, params, showloading, callback) {
    let loader = null;
    if (showloading) {
      loader = await this.presentLoading('');
    }
    this.httpClient.post(
      url,
      params
      // this.httpParams(params),
      // this.httpOptions() // 拦截中用了header
    ).subscribe(
      res => {
        if (showloading) {
          this.hideLoading(loader);
        }
        if (res) {
          callback(res);
        } else {
          this.thsToast('数据请求失败，请重试');
          callback('error');
        }
      },
      err => {
        if (showloading) {
          this.hideLoading(loader);
        }
        this.thsToast('数据请求失败，请重试');
        callback('error');
      }
    );
  }

  /**
   * 响应头参数
   */
  httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  /**
  * params处理
  * @param  param 调用函数传过来的参数，键值对形式
  */
  httpParams(param: Map<any, any>) {
    let ret = new HttpParams();
    if (param) {
      for (const key in param) {
        if (param[key]) {
          ret = ret.set(key, param[key]);
        } else {
          ret = ret.set(key, param[key]);
        }
      }
    }
    return ret;
  }

}

