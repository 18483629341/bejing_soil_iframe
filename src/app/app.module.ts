import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx'; // toast插件
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'; // No provider for Http 要添加这个
import { HttpClientModule } from '@angular/common/http'; // 引入http接口方法
import { MapService } from '../components/ths-map/map.service';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpReqInterceptor } from '../app/services/public/http-req-interceptor.service';//拦截器
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
//import { GenPositionStrPipe } from './pipe/gen-position-str.pipe';
//import { ThsMapComponent } from '../components/ths-map/ths-map';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    MapService,
    FileChooser,
    Toast,
    Geolocation,
    InAppBrowser,
    File,
    FileOpener,
    FileTransfer,
    AppVersion,
    Camera,
    AppMinimize,
    MediaCapture,
    WebView,
    StreamingMedia,
    Keyboard,
    HttpReqInterceptor,
    FingerprintAIO,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
