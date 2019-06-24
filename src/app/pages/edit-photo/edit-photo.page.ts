import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/public/global.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.page.html',
  styleUrls: ['./edit-photo.page.scss'],
})
export class EditPhotoPage implements OnInit {
  imgPath: string;
  imgDate: string;
  name: string;
  skinName: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    public global: GlobalService,
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = decodeURI(params.name);
      this.imgPath = params.imgPath;
      this.imgDate = this.getNowFormatDate();
    });
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    // 设置头部皮肤
    this.skinName = localStorage.getItem('skinName') || 'blue';
  }
  ionViewWillLeave() {
    if (this.name) {
      this.global.editName = this.name;
      this.global.editTime = this.imgDate;
    }
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
}
