import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, Events } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { ConfigService } from '../../services/public/config.service';
import { GlobalService } from '../../services/public/global.service';
import { HttpUtilsService } from '../../services/public/http-utils.service';

@Component({
  selector: 'app-edit-img',
  templateUrl: './edit-img.page.html',
  styleUrls: ['./edit-img.page.scss'],
})
export class EditImgPage implements OnInit {
  imgWidth: string;
  imgPath: string;
  item: any = 0; // 选项卡切换默认选项
  imgArr: any[] = []; // 展示图片数组
  imgArr2: any[] = []; // 图片绝对路径数组
  filesArr: string[] = [];
  videoUrl: string; // 用户上传的视频地址(未转换)
  video: string; // 用户上传的视频地址(转换后的)
  isShow = true; // 是否展示加号
  fileUrl: string; // 文件路径
  newSkinName: string; // 获取新的皮肤名称
  skinName: string; // 皮肤名称
  hostUrl = 'http://192.168.0.55:1012/bjsoilapi/file/download.vm?';
  constructor(
    public activatedRoute: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private router: Router,
    private fileChooser: FileChooser,
    private fileTransfer: FileTransfer,
    private mediaCapture: MediaCapture,
    public webView: WebView,
    public streamingMedia: StreamingMedia,
    public events: Events,
    public configService: ConfigService,
    public globalService: GlobalService,
    public httpUtils: HttpUtilsService,
  ) {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }
  publishEvents() {
    this.events.publish('user:created', this.imgArr2);
    this.router.navigate(['inspection-record']);
  }
  ngOnInit() {
    this.imgWidth = window.innerWidth / 3 + 'px';
    this.configService.getFile({
      sessionId: this.globalService.sessionId,
      ids: this.globalService.filesID,
    }, true, res => {
      //console.log(res);
      if (res !== 'error') {
        // tslint:disable-next-line:forin
        for (const key of res) {
          // const arr = key.FILENAME.split('%');
          // const imgPath = this.hostUrl + arr[0] + '%' + arr[1].toUpperCase();
          // console.log(imgPath);
          // this.imgArr.push(imgPath);
          if (key.FILETYPE.indexOf('image') !== -1) {
            //console.log(`${this.hostUrl}sessionId=${this.globalService.sessionId}&fileid=${key.FILEID}`);
            const imgPath = `${this.hostUrl}sessionId=${this.globalService.sessionId}&fileid=${key.FILEID}`;
            this.imgArr.push(imgPath);
          } else if (key.FILETYPE.indexOf('mp4') !== -1 || key.FILETYPE.indexOf('video') !== -1) {
            this.video = `${this.hostUrl}sessionId=${this.globalService.sessionId}&fileid=${key.FILEID}`;
          } else {
            this.filesArr.push(key.FILENAME);
          }

        }
      }
    });
  }

  ionViewWillEnter() {
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }

  /**
   * 选中切换
   * @param num 下标
   */
  OnitemClick(num) {
    this.item = num;
  }

  /** 
   * 选择照相
   */
  addCamera() {
    this.presentCamera();
  }

  /** 
   * 选择视频拍摄
   */
  addVideo() {
    this.presentVideo();
  }

  /** 
   * 选择文件
   */
  addFiles() {
    this.presentFiles();
  }
 
  /** 
   * 弹出层相机
   */
  async presentCamera() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: '拍摄照片',
        role: 'destructive',
        handler: () => {
          //console.log('Delete clicked');
          this.openCamera('CAMERA');
        }
      }, {
        text: '选择照片',
        handler: () => {
          //console.log('Share clicked');
          this.openCamera('PHOTOLIBRARY');

        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          //console.log('Cancel clicked');
        }
      }],
    });
    await actionSheet.present();
  }
 
  /** 
   * 弹出层摄像
   */
  async presentVideo() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: '视频拍摄',
        role: 'destructive',
        handler: () => {
          this.openVideo();
          //console.log('Delete clicked');

        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          //console.log('Cancel clicked');
        }
      }],
    });
    await actionSheet.present();
  }

  /** 
   * 弹出层文件
   */
  async presentFiles() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: '在手机文件中选择',
        role: 'destructive',
        handler: () => {
          //console.log('Delete clicked');
          this.chooseFile();
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          //console.log('Cancel clicked');
        }
      }],
    });
    await actionSheet.present();
  }

  /**
   * 拍照
   * @param option  对象
   */
  openCamera(option) {
    const options: CameraOptions = {
      quality: 50,                                                   // 相片质量 0 -100
      destinationType: this.camera.DestinationType.FILE_URI,        // DATA_URL 是 base64   FILE_URL 是文件路径
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,                                       // 是否保存到相册
      sourceType: this.camera.PictureSourceType[option],         // 是打开相机拍照还是打开相册选择  PHOTOLIBRARY : 相册选择, CAMERA : 拍照,
    };

    this.camera.getPicture(options).then((imageData) => {
      // If it's base64:
      // const base64Image = 'data:image/jpeg;base64,' + imageData;
      const fileImg = this.webView.convertFileSrc(imageData);
      // alert(fileImg);
      this.imgPath = fileImg;
      this.imgArr.unshift(fileImg); // 页面展示图片数组
      this.imgArr2.push(imageData); // 添加到同一个数组
    }, (err) => {
      // Handle error
    });
  }

  /**
   * 拍视频
   */
  openVideo() {
    const options: CaptureVideoOptions = {
      limit: 1,
      quality: 60,
      duration: 60
    };

    this.mediaCapture.captureVideo(options).then(
      (res: MediaFile[]) => {
        // alert(JSON.stringify(res));
        this.videoUrl = res[0].fullPath;
        this.video = this.webView.convertFileSrc(res[0].fullPath);
        this.imgArr2.push(res[0].fullPath); // 添加到同一个数组
        this.isShow = false;
      }, (err: CaptureError) => {
        console.log('Something went wrong');
        // alert(JSON.stringify(err));
      });
  }
 
  /**
   * 选择文件
   */
  chooseFile() {
    this.fileChooser.open()
      .then(uri => {
        // alert(uri);
        this.imgArr2.push(uri); // 添加到同一个数组
        const fileName = this.getFileName(uri);
        this.filesArr.unshift(fileName);
      })
      .catch(e => console.log(e));
  }

  /**
   * 跳转照片编辑
   * @param item 对象
   */
  goEdit(item) {
    this.router.navigate(['edit-photo'], { queryParams: { imgPath: item } });
  }

  /**
   * 根据url获取文件名(包含文件类型)
   * @param fileUrl 文件路径
   */
  getFileName(fileUrl: string): string {
    return fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length).toLowerCase();
  }
  
  /**
   * 播放视频
   */
  playVideo() {
    const options: StreamingVideoOptions = {
      successCallback: () => { this.httpUtils.thsToast('Video played'); },
      errorCallback: (e) => { this.httpUtils.thsToast(e); },
      orientation: 'portrait',
      shouldAutoClose: true,
      controls: true
    };

    this.streamingMedia.playVideo('http://v.qq.com/x/page/r0506bwgizi.html', options);
  }
}
