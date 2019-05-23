import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public hostUrl = 'http://192.168.0.55:1012/bjsoilapi/'; // 服务器地址
  public versionUrl = ''; // 版本更新version.txt的服务器地址
  public curVersion = '1.0.0'; // 当前版本号

  public baiduAK = 'idh0uCR7rcC1sGclhscaxy2A5YIUPBUN'; // 安装插件时百度ak值

  public location: any = {}; // 当前位置信息
  public sessionId: string = '';  // 记录返回sessionid "233199EF038BDF6AD8AF390052EF0E19"
  public SEEMINFO_ID: string; // 记录返回SEEMINFO_ID
  public SUPERVISE_ID: string; // 记录暂存返回的SUPERVISE_ID
  public filesID = ''; // 记录暂存返回的文件id
  public imgPath = []; // 暂存图片
  public video: string; // 暂存视频
  public filesArr = []; // 暂存文件名
  public areaList: any = []; // 区域列表
  public industryList: any = []; // 行业列表
  public blockTypeList: any = []; // 地块类型列表

  //字典  
  public dectionary: any = {};
  //地区列表
  public AreaList: any = [];
  public plotDetailData = {};
  // 收藏地块列表
  public collectedPlots = [];
  public laterMonitorList = [];
  public laterMonitorDetail = {};
  public plotInspectorList = [];
  public inspecterDetail = {};
  constructor() { }
  // 登录接口
  public login = 'polluteland/login.vm';
  // 获取行政区
  public getArea = 'dictionary/listRegionByUser.vm';
  // 获取行业和地块类型
  public getListPolluteLand = 'polluteland/listPolluteLand.vm';
  // 获取字典
  public getDectionary = 'dictionary/listDictionarys.vm';
  // 获取督察列表全部数据
  public ListSupervise = 'polluteland/listSupervise.vm';
  //显示的tab名称
  public tab = 'tab1';
  //显示的数据类型  "inspection"/"pollute"
  public type: string = "pollute";

  // 通过筛选获取督察列表数据
  public listSuperviseByLand = 'polluteland/listSuperviseByLand.vm';
  // 获取行业
  public getIndustryList = 'dictionary/listDictionarys.vm';
  // 地块详情
  public plotDetailUrl = 'polluteland/baseinfo.vm';
  // 地块督察记录列表
  public plotInspectorListUrl = 'polluteland/listSuperviseByLand.vm';
  // 地块后期监管记录列表
  public plotLaterMonitorUrl = 'polluteland/listLaterMonitor.vm';
  // 地块附件信息
  public fileUrl = 'file/listFiles.vm';
  // 督察记录编辑
  public supervisesave = 'polluteland/supervisesave.vm';
  // 获取可编辑的督查记录
  public getUpdatedSuperviseByLand = 'polluteland/getUpdatedSuperviseByLand.vm';
  //上传文档
  public uploadUrl = 'file/uploadify.vm';
  // 下载文件
  public downFiles = 'file/listFiles.vm';
  // 下载地块附件
  public downUrl = 'file/download.vm';
  // 收藏/取消收藏
  public doCollectionUrl = 'polluteland/doCollection.vm';

}
