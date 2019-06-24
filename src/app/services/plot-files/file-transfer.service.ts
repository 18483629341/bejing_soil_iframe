import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx'; // 附件
declare let window;

@Injectable({
  providedIn: 'root'
})
export class FileTransferService {
  toastAlert;
  downloadFileSize = 0; // 已经下载的附件的大小
  constructor(
    public file: File,
    public fileTransfer: FileTransfer,
    public alertCtrl: AlertController
  ) { }

  /**
   * 下载附件(下载全部附件的时候下载单个附件)
   * @param url 下载地址
   * @param fileId 文件id
   * @param fileName 附件名称
   * @param fileSize 附件大小
   * @param totalFileSize 附件的总大小
   * @param downFileNum 附件的总个数
   * @param toastAlert 弹出框
   */
  async downFile(url, fileId, fileName, fileSize, totalFileSize, toastAlert, callback) {
    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    let newName = fileId + fileName;
    newName = newName.replace(/(\\|\/|\:|\*|\?|\"|\<|\>|\||\ |\-)/g, '_');

    fileTransfer.download(url, this.file.externalDataDirectory + newName, false).then(
      (entry) => {
        this.downloadFileSize += Number(fileSize);
        this.showProgress(totalFileSize, toastAlert, callback);

      }, (error) => {
        // alert('1:' + error);
      }
    ).catch(e => {
      // alert('1:' + e);
    });
  }

  /**
   * 显示进度提示框
   * @param totalFileSize 所有附件的总的大小
   * @param toastAlert 弹出框
   * @param callback 回调函数
   */
  async showProgress(totalFileSize, toastAlert, callback) {
    let num: any;
    num = Math.floor(this.downloadFileSize / totalFileSize * 100);
    if (num >= 100) {
      if (toastAlert) {
        toastAlert.dismiss();
        toastAlert = null;
        if (callback && typeof (callback) === 'function') {
          callback();
        }
      }
    } else if (this.downloadFileSize > 0) {
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
  }

}
