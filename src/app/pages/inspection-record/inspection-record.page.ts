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
import { HttpUtilsService } from '../../services/public/http-utils.service';

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
  SEEMINFO_ID = ''; // 地块id
  progressNum: any; // 进度
  alertControl: any; // 提示框
  data = []; //  图片数组
  fileID: string;
  fileSuccessNum = 0; // 上传成功文件的数量
  newSkinName: string; // 获取新的皮肤名称
  skinName: string; // 皮肤名称

  isValid = true; // 表单验证 是否通过
  fileNameArr = []; // 存放需上传文件的名称数组；
  loader: any;
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
    private thsLocation: ThsLocationService,
    public httpUtils: HttpUtilsService
  ) {
  }

  ngOnInit() {
    this.activatedRouted.queryParams.subscribe(params => {
      if (params && params.id) {
        //  获取传过来的项目id
        this.SEEMINFO_ID = params.id;
        // alert(this.SEEMINFO_ID);
      }
    });

    // 根据地块id请求暂存数据
    this.configService.getUpdatedSuperviseByLand({
      sessionId: this.global.sessionId,
      id: this.SEEMINFO_ID,
    }, true, res => {
      if (res !== 'error' && res.data !== null) {
        // console.log(res);
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
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
    this.events.subscribe('user:created', (objectArr) => {
      if (objectArr.length > 0) {
        // alert(imgArr);
        this.data = [];
        this.fileNameArr = [];
        objectArr.map((item) => {
          // 如果有媒体数据
          if (item.data) {
            this.fileNameArr.push(item.name);
            this.data.push(item.data);
          }
        });
      }
    });
  }

  /**
   * 获取当前时间
   */
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

  /**
   * 时间转换
   * @param now number 时间戳
   */
  formatDate(now) {
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
  }

  /**
   * 提示框
   * @param msg str 信息内容
   */
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
    this.router.navigate(['edit-img'], { queryParams: { id: this.SEEMINFO_ID } });
  }

  /**
   * 上传到服务器
   * @param path 文件路径
   */
  async upload(path, filename, index, type) {
    if (path === '') {
      return;
    }
    if (index === 0) {
      this.loader = await this.presentLoading('正在上传，请耐心等待');
    }
    const transfer: FileTransferObject = this.fileTransfer.create();

    // 文件类型
    const fileType = this.getFileType(path);
    // 文件名
    // const fileName = this.getFileName(path);
    const fileMimeType = this.getFileMimeType(fileType);
    // FileUploadOptions
    const options: FileUploadOptions = {
      fileKey: 'file',
      fileName: filename,
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
        this.fileSuccessNum++;
        // 当所有需要上传的资源都成功，然后发送图表信息
        if (this.fileSuccessNum === this.data.length) {
          //  删除拼接id 最后一个逗号
          this.loader.dismiss();
          const FILEIDS = this.fileID.substring(0, this.fileID.length - 1);
          // alert('文件id     ' + FILEIDS + '之前');
          const params = {
            sessionId: this.global.sessionId,
            'form[FILEIDS]': FILEIDS + ',' + this.global.filesID, // this.global.filesID 之前暂存的文件ids
            'form[TITLE]': this.checkTitle,
            'form[SEEMINFO_ID]': this.SEEMINFO_ID,
            'form[DEPTNAME]': this.checkUnit,
            'form[SUGGEST]': this.checkCondition,
            'form[SAVESTATUS]': type,
            'form[SUPERVISE_ID]': this.global.SUPERVISE_ID,
          };
          this.configService.supervisesave(params, false, res => {
            if (res !== 'error') {
              // alert(JSON.stringify(res));
              if (res.status === 'success') {
                this.presentToastWithOptions('上传成功');
                // 如果是提交的情况
                if (type === '1') {
                  // 将部分数据初始化
                  this.clearForm();
                  this.global.SUPERVISE_ID = '';
                  this.global.filesID = '';
                  this.fileID = '';
                  this.fileSuccessNum = 0; // 提交成功后数量初始化为 0
                }
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
      // if (this.progressNum >= 100) {
      //   this.loader.dismiss();
      // }
    });
  }

  /**
   * 根据url获取文件类型
   * @param fileUrl  string  文件url
   */
  getFileType(fileUrl: string): string {
    return fileUrl.substring(fileUrl.lastIndexOf('.') + 1, fileUrl.length).toLowerCase();
  }

  /**
   * 根据url获取文件名(包含文件类型)
   * @param fileUrl  string  文件url
   */
  getFileName(fileUrl: string): string {
    return fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length).toLowerCase();
  }

  /**
   * 根据文件类型获取文件的mimeType
   * @param fileUrl  string  文件url
   */
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
   * 暂存数据
   */
  saveData() {
    // 清空fileid
    this.fileID = '';
    // this.nowTime = this.getNowFormatDate(); // 获取暂存时间
    // 循环文件数组并且上传

    if (this.data.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        const fileName = this.fileNameArr[index];
        this.upload(element, fileName, index, '0');
      }
    } else {
      const params = {
        sessionId: this.global.sessionId,
        'form[TITLE]': this.checkTitle,
        'form[FILEIDS]': this.global.filesID,
        'form[SEEMINFO_ID]': this.SEEMINFO_ID,
        'form[DEPTNAME]': this.checkUnit,
        'form[SUGGEST]': this.checkCondition,
        'form[SAVESTATUS]': '0',
        'form[SUPERVISE_ID]': this.global.SUPERVISE_ID,
      };
      this.configService.supervisesave(params, true, res => {
        // alert(JSON.stringify(res));
        if (res !== 'error') {
          if (res.status === 'success') {
            this.presentToastWithOptions('暂存成功');
          }
        }
      });
    }
  }

  /**
   * 提交表单 以及长传
   */
  upLoad() {
    // 清空fileid
    this.fileID = '';
    // this.nowTime = this.getNowFormatDate(); // 获取暂存时间
    // 循环文件数组并且上传
    this.isValid = this.checkConfirm();
    // 如果验证通过，才能发送表单内容
    if (this.isValid) {
      if (this.data.length > 0) {
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          const fileName = this.fileNameArr[index];
          this.upload(element, fileName, index, '1');
        }
      } else {
        // alert('返回记录id' + this.global.SUPERVISE_ID);
        this.configService.supervisesave({
          sessionId: this.global.sessionId,
          'form[TITLE]': this.checkTitle,
          'form[FILEIDS]': this.global.filesID,
          'form[SEEMINFO_ID]': this.SEEMINFO_ID,
          'form[DEPTNAME]': this.checkUnit,
          'form[SUGGEST]': this.checkCondition,
          'form[SAVESTATUS]': '1',
          'form[SUPERVISE_ID]': this.global.SUPERVISE_ID,
        }, true, res => {
          // console.log(res);
          if (res !== 'error') {
            if (res.status === 'success') {
              this.presentToastWithOptions('提交成功');
              this.clearForm();
            }
          }
        });

      }
    }
  }

  checkConfirm() {
    if (this.checkTitle === '') {
      this.httpUtils.thsToast('您的监督管理标题不能为空'); return false;
    } else if (this.checkUnit === '') {
      this.httpUtils.thsToast('您的监督管理单位不能为空'); return false;
    } else if (this.checkCondition === '') {
      this.httpUtils.thsToast('您的督察管理情况不能为空'); return false;
    } else {
      return true;
    }
  }

  clearForm() {
    this.checkTitle = '';
    this.checkUnit = '';
    this.checkCondition = '';
  }
}
