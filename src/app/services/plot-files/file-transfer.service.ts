import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx'; // 附件
declare let window;

@Injectable({
  providedIn: 'root'
})
export class FileTransferService {
  alert;
  downloadFileSize = 0;//已经下载的附件的大小
  constructor(
    public file: File,
    public fileTransfer: FileTransfer,
    public alertCtrl: AlertController
  ) { }

  /**
  * 检查文件是否存在
  * @param fileName 文件名 必传
  * @param filePath 文件路径 必传
  */
  fileIsExited(fileName, filePath, callback) {
    this.file.checkFile(filePath, fileName)
      .then(
        () => {
          callback(true);
        },
        () => {
          callback(false);
        }
      )
      .catch(
        () => {
          callback(false);
        }
      );
  }
  /**
   * 下载附件(下载全部附件的时候下载单个附件)
   * @param url 下载地址
   * @param name 目标文件夹名字
   * @param fileName 附件名称
   * @param fileSize 附件大小
   * @param totalFileSize 附件的总大小
   * @param alert 弹出框
   */
  async downFile(url, name, fileName, fileSize, totalFileSize, alert?) {
    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    this.fileIsExited(fileName, this.file.externalCacheDirectory + name, async res => {
      console.log('res', res)
      if (!res) {
        fileTransfer.download(url, this.file.externalCacheDirectory + name + fileName, false).then(
          (entry) => {
            console.log(entry)
            this.downloadFileSize += Number(fileSize);
            this.showProgress(totalFileSize, alert);

          }, (error) => {
            console.log('1', error);
          }
        ).catch(e => {
          console.log('1', e);
        });
      }
    })

  }

  /**
   * 显示进度提示框
   * @param totalFileSize 所有附件的总的大小
   * @param alert 弹出框
   */
  async showProgress(totalFileSize, alert) {
    console.log('2', this.downloadFileSize);

    let num: any;
    num = Math.floor(this.downloadFileSize / totalFileSize * 100);
    if (num >= 100) {
      if (alert) {
        alert.dismiss();
        alert = null;
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
