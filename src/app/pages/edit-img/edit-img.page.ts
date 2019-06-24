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
import { Key } from 'protractor';

@Component({
  selector: 'app-edit-img',
  templateUrl: './edit-img.page.html',
  styleUrls: ['./edit-img.page.scss'],
})
export class EditImgPage implements OnInit {
  imgWidth: string;
  imgPath: string;
  item: any = 0; //  选项卡切换默认选项
  imgArr: any[] = []; //  展示图片数组
  filesArr: any[] = []; //  展示图片数组
  nameArr0 = [];  // 展示图片的名称
  mediaObjectArr = []; // 媒体的对象数组
  mediaObjectArr0 = [];
  mediaObjectArr1 = [];
  mediaObjectArr2 = [];
  videoUrl: string; //  用户上传的视频地址(未转换)
  video: string; //  用户上传的视频地址(转换后的)
  showVideoDel = false; // 是否删除视频
  hasVideoData = true ; //
  isShowPlus = true; //  是否展示加号
  fileUrl: string; //  文件路径
  newSkinName: string; //  获取新的皮肤名称
  skinName: string; //  皮肤名称
  hostUrl = '';
  editIndex = 0;  // 点击图片时，所在数组的下标
  themeIndex = 0; // 点击图片时，所在的主题下标
  isSaved = false; // 进入以前该地块是否暂存
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
    public global: GlobalService,
    public httpUtils: HttpUtilsService,
  ) {
    //  设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
    this.hostUrl = this.global.hostUrl + this.global.downUrl;
  }

  /**
   * 点击保存按钮
   */
  publishEvents() {
    this.mediaObjectArr = [...this.mediaObjectArr0, ...this.mediaObjectArr1, ...this.mediaObjectArr2];
    console.log(this.mediaObjectArr);
    this.events.publish('user:created', this.mediaObjectArr);
    this.router.navigate(['inspection-record']);
  }
  ngOnInit() {
    this.imgWidth = (window.innerWidth - 30) / 3 + 'px';
    // 暂存信息回显
    this.configService.getFile({
      sessionId: this.global.sessionId,
      ids: this.global.filesID,
    }, true, res => {
      if (res !== 'error') {
        //  tslint:disable-next-line:forin
        for (const key of res) {
          console.log(JSON.stringify(key));
          key.name = key.FILENAME;
          // 文件类型为图片的
          if (key.FILETYPE.indexOf('image') !== -1 || key.FILETYPE.indexOf('jpg') !== -1) {
            const imgPath = `${this.hostUrl}?sessionId=${this.global.sessionId}&fileid=${key.FILEID}`;
            key.path = imgPath;
            key.isDelete = false;
            this.mediaObjectArr0.unshift(key);
          // 文件类型为video或MP4的
          } else if (key.FILETYPE.indexOf('mp4') !== -1 || key.FILETYPE.indexOf('video') !== -1) {
            this.video = `${this.hostUrl}?sessionId=${this.global.sessionId}&fileid=${key.FILEID}`;
            key.path = this.video;
            this.isShowPlus = false;
            this.hasVideoData = false ;
            this.mediaObjectArr1.unshift(key);
          // 其他文件类型
          } else {
            const filePath = `${this.hostUrl}?sessionId=${this.global.sessionId}&fileid=${key.FILEID}`;
            key.path = filePath;
            key.isDelete = false;
            this.mediaObjectArr2.unshift(key);
          }
        }
      }
    });
  }

  ionViewWillEnter() {
    this.skinName = localStorage.getItem('skinName') || 'blue';
    // 获取编辑的名称
    if (this.global.editName) {
      if (this.themeIndex === 0) {
        this.mediaObjectArr0[this.editIndex].name = this.global.editName;
      } else if (this.themeIndex === 1) {
        this.mediaObjectArr1[this.editIndex].name = this.global.editName;
      } else if (this.themeIndex === 2) {
        this.mediaObjectArr2[this.editIndex].name = this.global.editName;
      }
      this.global.editName = '';
    }
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
          // console.log('Delete clicked');
          this.openCamera('CAMERA');
        }
      }, {
        text: '选择照片',
        handler: () => {
          // console.log('Share clicked');
          this.openCamera('PHOTOLIBRARY');

        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
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
          // console.log('Delete clicked');

        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
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
          // console.log('Delete clicked');
          this.chooseFile();
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
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
      quality: 50,                                                   //  相片质量 0 -100
      destinationType: this.camera.DestinationType.FILE_URI,        //  DATA_URL 是 base64   FILE_URL 是文件路径
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,                                       //  是否保存到相册
      sourceType: this.camera.PictureSourceType[option],         //  是打开相机拍照还是打开相册选择  PHOTOLIBRARY : 相册选择, CAMERA : 拍照,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        //  If it's base64:
        //  const base64Image = 'data:image/jpeg;base64,' + imageData;

        const fileImg = this.webView.convertFileSrc(imageData);
        this.imgPath = fileImg;
        this.hasVideoData = true ;
        // alert(JSON.stringify(this.getFileName(fileImg))); // app储存路径
        this.mediaObjectArr0.unshift(
          { data: imageData, path: fileImg, name: this.getFileName(fileImg), showDel: false }); //  页面展示图片数组

      }, (err) => {
        //  Handle error
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
        this.videoUrl = res[0].fullPath;
        this.video = this.webView.convertFileSrc(res[0].fullPath);
        this.mediaObjectArr1 = [{ data: res[0].fullPath, name: this.getFileName(this.videoUrl), path: this.videoUrl }];
        this.isShowPlus = false;
      }, (err: CaptureError) => {
        // console.log(err);
      });
  }

  /**
   * 选择文件
   */
  chooseFile() {
    this.fileChooser.open()
      .then(uri => {
        this.mediaObjectArr2.unshift({ data: uri, name: this.getFileName(uri), showDel: false, path: uri });
      })
      .catch(e => alert(e));
  }

  /**
   * 跳转照片编辑
   * @param tab 执行对象所在的tab标签，取值为 0,1，2
   * @param index 所在数组的下标
   */
  goEdit(item, tab, index) {
    if (item.data) {
      this.editIndex = index;
      this.themeIndex = tab;
      item.showDel = false;
      this.router.navigate(['edit-photo'], { queryParams: { themeIndex: this.themeIndex, imgPath: item.path , name: item.name} });
    }

  }

  /**
   * 展示照片对应的删除按钮
   * @param tab 执行对象所在的tab标签，取值为 0,2
   * @param index 所在数组的下标
   */
  showDelBtn(tab, index) {
    if (tab === 0) {
      const obj = this.mediaObjectArr0[index];
      obj.showDel = true;
    } else if (tab === 2) {
      const obj = this.mediaObjectArr2[index];
      obj.showDel = true;
    }
  }

  /**
   * 删除所选照片照片
   * @param tab 执行对象所在的tab标签，取值为 0,2
   * @param index 所在数组的下标
   */
  delete(tab, index, item) {
    // alert(JSON.stringify(index));
    if (tab === 0) {
      this.mediaObjectArr0.splice(index, 1);
      // console.log(this.mediaObjectArr0);
    } else if (tab === 1) {
      this.mediaObjectArr1 = [];
      this.isShowPlus = true ;
      // console.log(this.mediaObjectArr2);
    } else if (tab === 2) {
      this.mediaObjectArr2.splice(index, 1);
      // console.log(this.mediaObjectArr2);
    }
    console.log(item.FILEID);
    if (item.FILEID && this.global.filesID.indexOf(item.FILEID) !== -1) {

      this.global.filesID = this.global.filesID.replace(item.FILEID + ',', '');
    }
    console.log(this.global.filesID);
  }

  // deleteVedio(){
  //   alert(JSON.stringify(this.video));
  // }
  /**
   * 根据url获取文件名(包含文件类型)
   * @param fileUrl 文件路径
   */
  getFileName(fileUrl: string): string {

    let fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length).toLowerCase();
    // 如果有image% 给它加上后缀名.jpg
     // 处理文件名称的异常情况
    if (fileName.indexOf('image%') !== -1 && fileName.indexOf('.jpg') === -1) {
      const arr = fileName.split('%');
      fileName = arr[0] + arr[1] + '.jpg';
    } else if (fileName.indexOf('video%') !== -1 && fileName.indexOf('.mp4') === -1) {
      const arr = fileName.split('%');
      fileName = arr[0] + arr[1] + '.mp4';
    }
    fileName.replace(/(\\|\/|\:|\*|\?|\"|\<|\>|\|)/g, '_');
    return fileName;
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

    this.streamingMedia.playVideo('http:// v.qq.com/x/page/r0506bwgizi.html', options);
  }
}
