import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AlertController, ToastController, Events, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { GlobalService } from '../../services/public/global.service';
import { ConfigService } from '../../services/public/config.service';
import { ThsLocationService } from '../../services/public/ths-location.service';

@Component({
  selector: 'app-inspection-record',
  templateUrl: './inspection-record.page.html',
  styleUrls: ['./inspection-record.page.scss'],
})
export class InspectionRecordPage implements OnInit {
  nowTime: string; // 检查时间
  checkTitle = ''; // 检查标题
  checkUnit = ''; // 检查单位
  checkCondition = ''; // 检查情况
  filePath: string; // 文件地址
  fileName: string; // 文件名
  imgPath: string; //  图片路径
  video: string; //  视频
  SUPERVISE_ID = ''; //  判断是否暂存id
  public progressNum: any; // 进度
  public alertControl: any; // 提示框
  data = []; //  图片数组
  fileID: string;
  newSkinName: string; // 获取新的皮肤名称
  skinName: string; // 皮肤名称
  distance:any;//距现场的距离
  constructor(
    private router: Router,
    private fileChooser: FileChooser,
    private fileTransfer: FileTransfer,
    private camera: Camera,
    private mediaCapture: MediaCapture,
    public streamingMedia: StreamingMedia,
    public webView: WebView,
    private file: File,
    public events: Events,
    public alertController: AlertController,
    public toastController: ToastController,
    public activatedRouted: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    public global: GlobalService,
    public loadingController: LoadingController,
    public configService: ConfigService,
    private thsLocation: ThsLocationService
  ) {
    
    // 获取暂存数据并赋值回显
    // const checkData = JSON.parse(localStorage.getItem('checkData'));
    // if (checkData) {
    //   this.nowTime = checkData.nowTime;
    //   this.checkTitle = checkData.checkTitle;
    //   this.checkUnit = checkData.checkUnit;
    //   this.checkCondition = checkData.checkCondition;
    // }
    
  }

  ngOnInit() {
    // this.activatedRouted.queryParams.subscribe(params => {
    // //  获取传过来的项目id
    //   this.SEEMINFO_ID = params.id;
    //   console.log(this.SEEMINFO_ID);
    // });
     //获取定位
     

    this.configService.getUpdatedSuperviseByLand({
      sessionId: this.global.sessionId,
      id: this.global.SEEMINFO_ID,
    }, true, res => {
      if (res !== 'error' && res.data !== null) {
        // alert(JSON.stringify(res));
        console.log(res);
        this.global.SUPERVISE_ID = res.data.SUPERVISE_ID;
        this.global.filesID = res.data.FILEIDS;
        this.checkTitle = res.data.TITLE;
        this.checkCondition = res.data.SUGGEST;
        this.checkUnit = res.data.DEPTNAME;
        this.nowTime = this.formatDate(new Date(res.data.CREATE_DATE));
      }
    });
  }
  
 

  ionViewWillEnter() {
    //设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
    this.events.subscribe('user:created', (imgArr) => {
      if (imgArr) {
        // alert(imgArr);
        console.log(imgArr);
        this.data = imgArr;
      }
    });
  }


  // 获取当前时间
  getNowFormatDate() {
    const date: any = new Date();
    const seperator1: any = '-';
    const seperator2: any = ':';
    let month: any = date.getMonth() + 1;
    let strDate: any = date.getDate();
    let minutes: any = date.getMinutes();
    let seconds: any = date.getSeconds();
    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }
    if (minutes >= 0 && minutes <= 9) {
      minutes = '0' + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
      seconds = '0' + seconds;
    }
    const currentdate: any = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + ' ' + date.getHours() + seperator2 + minutes
      + seperator2 + seconds;
    return currentdate;
  }
  // 时间转换
  formatDate(now) {
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
  }
  // 提示框
  async presentToastWithOptions(msg) {
    const toast = await this.toastController.create({
      message: msg,
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'x',
      duration: 2000
    });
    toast.present();
  }

  /**
   * 跳转编辑页面
   */
  goEdit() {
    this.router.navigate(['edit-img']);
  }
  /**
    * 上传到服务器
    * @param path 文件路径
    */
  async upload(path, index, type) {
    if (path === '') {
      return;
    }
    // this.showLoadingAlert();
    const loader = await this.presentLoading('正在上传');
    const transfer: FileTransferObject = this.fileTransfer.create();

    // 文件类型
    const fileType = this.getFileType(path);
    // 文件名
    const fileName = this.getFileName(path);
    const fileMimeType = this.getFileMimeType(fileType);
    // FileUploadOptions
    const options: FileUploadOptions = {
      fileKey: 'file',
      fileName,
      mimeType: fileMimeType,
      httpMethod: 'POST'
    };
    // 服务器URL
    const serverUrl = `${this.global.hostUrl}${this.global.uploadUrl}?sessionId=${this.global.sessionId}`;
    // 上传文件到服务器
    transfer.upload(path, serverUrl, options, false)
      .then((data) => {
        // 获取文件id并且拼接
        this.fileID = this.fileID + data.response + ',';
        // 判断是否是最后一个文件，然后请求暂存接口
        if (index === this.data.length - 1) {
          //  删除拼接id 最后一个逗号
          const FILEIDS = this.fileID.substring(0, this.fileID.length - 1);
          // alert('文件id     ' + FILEIDS + '之前');
          this.configService.supervisesave({
            sessionId: this.global.sessionId,
            'form[FILEIDS]': FILEIDS + ',' + this.global.filesID ,
            'form[TITLE]': this.checkTitle,
            'form[SEEMINFO_ID]': this.global.SEEMINFO_ID,
            'form[DEPTNAME]': this.checkUnit,
            'form[SUGGEST]': this.checkCondition,
            'form[SAVESTATUS]': type,
            'form[SUPERVISE_ID]': this.global.SUPERVISE_ID,
          }, true, res => {
            // alert(JSON.stringify(res));
            if (res !== 'error') {
              if (res.status === 'success') {
                this.presentToastWithOptions('上传成功');
              }
            }
          });
        }
      }, (err) => {
        // error
        // alert(JSON.stringify(err));
      });
    transfer.onProgress(async (event: ProgressEvent) => {
      this.progressNum = Math.round(event.loaded / event.total * 100);
      if (this.progressNum >= 100) {
        this.hideLoading(loader);
      }
    });
  }

  // 根据url获取文件类型
  getFileType(fileUrl: string): string {
    return fileUrl.substring(fileUrl.lastIndexOf('.') + 1, fileUrl.length).toLowerCase();
  }
  // 根据url获取文件名(包含文件类型)
  getFileName(fileUrl: string): string {
    return fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length).toLowerCase();
  }
  // 根据文件类型获取文件的mimeType
  getFileMimeType(fileType: string): string {
    let mimeType: any = '';
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
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }
  /**
   * 显示下载进度框
   */
  // async showLoadingAlert() {
  //   this.alertControl = await this.alertController.create({
  //     message: '<p class="title">正在上传，请稍等...</p><div class="progress">' +
  //       '<span class="blue loading"></span></div><p class="downed">已经上传：0%</p>',
  //     buttons: [
  //       {
  //         text: '后台上传',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           this.hideAlert();
  //         }
  //       }
  //     ]
  //   });
  //   this.alertControl.present();
  // }

  /**
   * 关闭下载进度框
   */
  // hideAlert() {
  //   this.alertControl.dismiss();
  //   this.alertControl = null;
  // }
  /**
  * showloading服务
  * @param template 展示内容(选传)
  */
  async presentLoading(template?) {
    const loader = await this.loadingController.create({
      spinner: 'circles',
      message: template
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

  // 暂存数据
  saveData() {
    // 清空fileid
    this.fileID = '';
    // this.nowTime = this.getNowFormatDate(); // 获取暂存时间
    // 循环文件数组并且上传
    if (this.data.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        this.upload(element, index, '0');
      }
    } else {
      this.configService.supervisesave({
        sessionId: this.global.sessionId,
        'form[TITLE]': this.checkTitle,
        'form[FILEIDS]': this.fileID,
        'form[SEEMINFO_ID]': this.global.SEEMINFO_ID,
        'form[DEPTNAME]': this.checkUnit,
        'form[SUGGEST]': this.checkCondition,
        'form[SAVESTATUS]': '0',
        'form[SUPERVISE_ID]': this.global.SUPERVISE_ID,
      }, true, res => {
        console.log(res);
        if (res !== 'error') {
          if (res.status === 'success') {
            this.presentToastWithOptions('暂存成功');
          }
        }
      });
    }
  }
  upLoad() {
    // 清空fileid
    this.fileID = '';
    // this.nowTime = this.getNowFormatDate(); // 获取暂存时间
    // 循环文件数组并且上传
    if (this.data.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        this.upload(element, index, '1');
      }
    } else {
      // alert('返回记录id' + this.global.SUPERVISE_ID);
      this.configService.supervisesave({
        sessionId: this.global.sessionId,
        'form[TITLE]': this.checkTitle,
        'form[FILEIDS]': this.fileID,
        'form[SEEMINFO_ID]': this.global.SEEMINFO_ID,
        'form[DEPTNAME]': this.checkUnit,
        'form[SUGGEST]': this.checkCondition,
        'form[SAVESTATUS]': '1',
        'form[SUPERVISE_ID]': this.global.SUPERVISE_ID,
      }, true, res => {
        console.log(res);
        if (res !== 'error') {
          if (res.status === 'success') {
            this.presentToastWithOptions('提交成功');
          }
        }
      });
    }

  }
}
