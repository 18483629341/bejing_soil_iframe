import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File, LocalFileSystem } from '@ionic-native/file/ngx'; // 附件
// 打开文件插件
import { FileOpener } from '@ionic-native/file-opener/ngx'; // 打开附件
import { Platform, AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { HttpUtilsService } from '../public/http-utils.service';
import { ConfigService } from '../public/config.service';
import { GlobalService } from '../public/global.service';
// import { setTimeout } from 'timers';

declare let window;
@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {

  private alert1: any; // 弹框
  public updateInfo: any = '更新内容测试'; // 更新内容
  constructor(
    public platform: Platform,
    public alertController: AlertController,
    private browser: InAppBrowser,
    public fileOpener: FileOpener,
    private transfer: FileTransfer,
    private file: File,
    private appVersion: AppVersion,
    public httpUtils: HttpUtilsService,
    public config: ConfigService,
    public global: GlobalService
  ) { }

  /**版本更新检测
   * nowVserion 当前版本信息
   * url  服务器地址
   * androidUrl android下载地址
   * iosUrl ios下载地址
   */
  checkVersion() {
    this.config.getAppVersion({}, false, res => {
      if (res && res !== 'error') {
        const obj = res;
        this.updateInfo = '最新的版本号为：' + obj.verAndroid;
        this.upDateVerison(obj.verAndroid, obj.downUrl, obj.apkName);
      } else {
        this.httpUtils.thsToast('更新失败!');
      }
    });
  }


  /**下载新版本
   * nowVserion  服务器版本信息
   * preVersion 本地版本信息
   * url  服务器地址
   * androidUrl android下载地址
   * iosUrl ios下载地址
   */
  upDateVerison(nowVserion, androidUrl, apkName, iosUrl?) {
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        // if (this.handleVersion(preVersion) < this.handleVersion(nowVserion)) {
        //   this.presentAlert(preVersion, nowVserion, this.updateInfo, iosUrl);
        // }
      } else if (this.platform.is('android')) {
        this.appVersion.getVersionNumber().then(res => {
          // console.log(res, nowVserion);
          if (this.handleVersion(res) < this.handleVersion(nowVserion)) {
            this.presentAlert(res, nowVserion, this.updateInfo, androidUrl, apkName);
          }
        });
      }
    });
  }

  /**
   * 处理版本号
   * @param num 版本号
   */
  handleVersion(num) {
    if (num) {
      return num.split('.').join('');
    }
  }

  /**
   * 更新提示
   * @param preVersion 当前版本号
   * @param nowVserion 待更新版本号
   * @param updateInfo 更新内容
   * @param downUrl 下载地址
   * @param apkName apk名称
   */
  async presentAlert(preVersion, nowVserion, updateInfo, downUrl, apkName?) {
    const alertToast = await this.alertController.create({
      header: '发现新版本,是否更新?',
      message: '<div>当前版本号：' + preVersion + '</div><div>待更新版本号：' + nowVserion + '</div><div>更新内容：' + updateInfo + '</div>',
      buttons: [
        {
          text: '取消',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            // alert(downUrl);
            if (apkName) {
              const fileId = '' ;
              this.downApk(downUrl, 'apk', fileId , apkName);
            } else {
              this.browser.create(downUrl);
            }
          }
        }
      ]
    });
    alertToast.present();
  }
  /**
   * 检查文件是否存在
   * @param fileName 文件名 必传
   * @param filePath 文件路径 必传
   */
  fileIsExited(fileName, filePath, callback) {
    this.file.checkFile(this.file.externalDataDirectory, fileName)
      .then(
        (_) => {
          // alert('then_right:' + _); // true 文件已经存在
          callback(true);
        },
        (err) => {
          // alert('then_err:' + JSON.stringify(err));
          callback(false);
        }
      )
      .catch(err => {
        // alert('catch_err:' + err); // 不存在
        callback(false);
      });
  }

  /**
   * 下载文件，有检查文件是否存在
   * @param url 下载地址
   * @param application 文件打开方式
   * @param name 文件名称
   */
  async downFile(url, application, fileId, name, filesize?, callback?) {
    application = this.getFileMimeType(application);
    let newName = fileId + name;
    newName = newName.replace(/(\\|\/|\:|\*|\?|\"|\<|\>|\||\ |\-)/g, '_');

    this.fileIsExited(newName, this.file.externalDataDirectory, (res) => {
      // alert(res);
      if (res === false) {
        const fileTransfer: FileTransferObject = this.transfer.create();
        this.alert1 = this.alertController.create({
          message: '<p class="title">正在下载，请稍等...</p><div class="progress"><span class="blue"></span></div><p class="downed">已经下载：0%</p>',
          // enableBackdropDismiss: false
        });
        // window.closeUpdatePop = true;
        this.alert1.present();
        fileTransfer.download(url, this.file.externalDataDirectory + newName, false)
          .then(
            (entry) => {
              const openurl = entry.toURL();
              if (callback) {
                callback();
              }
              this.openFile(this.file.externalDataDirectory + newName, application);
            },
            (error) => {
              // console.log('1', error);
              if (this.alert1) {
                this.alert1.dismiss();
                this.alert1 = null;
              }
              this.httpUtils.thsToast('文件下载失败，请重试');
            }
          ).catch(
            e => {
              // console.log('1', e);
              if (this.alert1) {
                this.alert1.dismiss();
                this.alert1 = null;
              }
              this.httpUtils.thsToast('文件下载失败，请重试');
            }
          );


        fileTransfer.onProgress((event: ProgressEvent) => {
          let num: any;
          if (filesize) {
            num = Math.floor(event.loaded / filesize * 100);
          } else {
            num = Math.floor(event.loaded / event.total * 100);
          }
          if (num > 100) {
            if (this.alert1) {
              this.alert1.dismiss();
              this.alert1 = null;
            }
          } else if (event.loaded > 0 && (event.total || filesize)) {
            const progress = document.getElementsByClassName('blue')[0];
            if (progress) {
              progress['style'].display = 'block';
              progress['style'].width = num + '%';
            }
            const downed = document.getElementsByClassName('downed')[0];
            if (downed) {
              downed.innerHTML = '已经下载：' + num + '%';
            }
          }
        });
        // 如果此文件存在，将直接打开
      } else {
        this.httpUtils.thsToast('文件已下载，将直接打开');
        if (callback) {
          callback();
        }
        setTimeout(() => {
          this.openFile(this.file.externalDataDirectory + newName, application);
        }, 1000);
      }
    });
  }

  /**
   * 下载apk包，不检查是否已经存在
   * @param url 下载地址
   * @param application 文件打开方式
   * @param name 文件名称
   */
  async downApk(url, application, fileId,  name, filesize?, callback?) {
    application = this.getFileMimeType(application);
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.alert1 = await this.alertController.create({
      message: '<p class="title">正在下载，请稍等...</p><div class="progress"><span class="blue"></span></div><p class="downed">已经下载：0%</p>',
      // enableBackdropDismiss: false
    });
    // window.closeUpdatePop = true;
    this.alert1.present();
    const newName = fileId + name;
    fileTransfer.download(url, this.file.externalDataDirectory + newName, false)
      .then(
        (entry) => {
          const openurl = entry.toURL();
          if (callback) {
            callback();
          }
          this.openFile(this.file.externalDataDirectory + newName, application);
        },
        (error) => {
          // console.log('1', error);
          if (this.alert1) {
            this.alert1.dismiss();
            this.alert1 = null;
          }
          this.httpUtils.thsToast('文件下载失败，请重试');
        }
      ).catch(
        e => {
          // console.log('1', e);
          if (this.alert1) {
            this.alert1.dismiss();
            this.alert1 = null;
          }
          this.httpUtils.thsToast('文件下载失败，请重试');
        }
      );


    fileTransfer.onProgress((event: ProgressEvent) => {
      let num: any;
      if (filesize) {
        num = Math.floor(event.loaded / filesize * 100);
      } else {
        num = Math.floor(event.loaded / event.total * 100);
      }
      if (num > 100) {
        if (this.alert1) {
          this.alert1.dismiss();
          this.alert1 = null;
        }
      } else if (event.loaded > 0 && (event.total || filesize)) {
        const progress = document.getElementsByClassName('blue')[0];
        if (progress) {
          progress['style'].display = 'block';
          progress['style'].width = num + '%';
        }
        const downed = document.getElementsByClassName('downed')[0];
        if (downed) {
          downed.innerHTML = '已经下载：' + num + '%';
        }
      }
    });
  }

  /**
   * 打开文件
   * @param filePath 文件路径 必传
   * @param application 文件打开方式
   */
  openFile(filePath, application) {

    this.fileOpener.open(filePath, application).then(
      () => {

        // window.closeUpdatePop = false;
        if (this.alert1) {
          this.alert1.dismiss();
          this.alert1 = null;
        }
      }).catch(
        e => {
          // console.log('3', e);
          if (this.alert1) {
            this.alert1.dismiss();
            this.alert1 = null;
          }
          // window.closeUpdatePop = false;
          this.httpUtils.thsToast('文件打开失败，可尝试在文件夹中打开！');
        }
      );
  }

  /**
   * 图片上传
   * @param param 接口所需参数
   * @param fllePath 文件路径
   * @param url 上传服务器地址
   * @param callback 回调函数
   */
  upImg(param, fllePath, url, callback) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const options: FileUploadOptions = {
      fileKey: 'files',
      fileName: fllePath,
      httpMethod: 'post',
      headers: {},
      params: {
        docID: param.docID
      }
    };
    fileTransfer.upload(fllePath, url, options)
      .then((res) => {
        callback(res);
      }, (err) => {
        console.log(err);
      });
  }

  /**
   * 获取文件类型
   */
  getFileMimeType(fileType: string) {
    let mimeType = '';
    switch (fileType) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'pptx':
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
      case 'ppt':
        mimeType = 'application/vnd.ms-powerpoint';
        break;
      case 'xlsx':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'xls':
        mimeType = 'application/vnd.ms-excel';
        break;
      case 'zip':
        mimeType = 'application/x-zip-compressed';
        break;
      case 'rar':
        mimeType = 'application/octet-stream';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'jpg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
        case 'apk':
        mimeType = 'application/vnd.android.package-archive';
        break;
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }

  /**
   * 截取文件后缀名
   * @param fileName 文件名
   */
  getFileSuffix(fileName: string) {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();
  }

  /**
   * 根据字典的信息 通过对应的code,拿到对应的名字
   * @param arr 遍历的对象数组
   * @param codeNum 对应codeNum
   */
  tranToString(arr, codeNum) {
    let name = null;
    if (arr.length > 0) {
      for (const item of arr) {
        if (item.dictionary_code === codeNum) {
          name = item.dictionary_name;
        }
      }
    } else {
      name = '- -';
    }
    return name;
  }
}


