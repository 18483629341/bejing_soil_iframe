import { Injectable } from '@angular/core';

import { HttpUtilsService } from '../public/http-utils.service';
import { GlobalService } from '../public/global.service';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(public httpUtils: HttpUtilsService, public global: GlobalService) { }

  /**
   * 获取app版本信息
   * @param params  调用方法传过来的参数
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
  getAppVersion(params, showloading, callback) {
    return this.httpUtils.get(this.global.hostUrl+this.global.versionUrl, params, showloading, callback);
  }
  /**************************登录********************************/
  /**
    * 登录接口
    * @param params 调用方法传过来的参数
    * @param showloading 是否显示数据加载框
    * @param callback 回调函数
    */
  login(params, showloading, callback) {
    const url = `${this.global.hostUrl}${this.global.login}?loginName=${params.loginName}&password=${params.password}`;
    return this.httpUtils.post(url, {}, showloading, callback);
  }
  /**
   * 获取行业列表
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
  getListPolluteLand(params, showloading, callback) {
    return this.httpUtils.get(this.global.hostUrl + this.global.getListPolluteLand, params, showloading, callback);
  }
  /**
    * 获取地区列表
    * @param params  调用方法传过来的参数，根据城市代码查询进行获取
    * @param showloading 是否显示数据加载框
    * @param callback 回调函数 this.global.hostUrl + this.global.getArea
    */
  getAreaList(params, showloading, callback) {
    return this.httpUtils.get(this.global.hostUrl + this.global.getArea, params, showloading, callback);
  }
  //  获取行政区列表
  getIndustryList(params, showloading, callback) {
    return this.httpUtils.get(this.global.hostUrl + this.global.getIndustryList, params, showloading, callback);
  }
  /**
    * 获取字典
    * @param params  调用方法传过来的参数，根据城市代码查询进行获取
    * @param showloading 是否显示数据加载框
    * @param callback 回调函数
    */
  getDectionary(params, showloading, callback) {

    return this.httpUtils.get(this.global.hostUrl + this.global.getDectionary, params, showloading, callback);
  }
  /**
  * 获取督察列表全部数据
  * @param params 调用方法传过来的参数
  * @param showloading 是否显示数据加载框
  * @param callback 回调函数
  */
  getListSupervise(params, showloading, callback) {
    return this.httpUtils.get(this.global.hostUrl + this.global.ListSupervise, params, showloading, callback);
  }

  getListSuperviseByLand(params, showloading, callback) {
    return this.httpUtils.get(this.global.hostUrl + this.global.listSuperviseByLand, params, showloading, callback);
  }

  /**
   * 获取地块详情
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
  getPlotDetail(params, showloading, callback) {
    // return this.httpUtils.get('../../../assets/data/plot-detail.json', params, showloading, callback);
    const url = `${this.global.hostUrl}${this.global.plotDetailUrl}?id=${params.id}&sessionId=${params.sessionId}`;
    return this.httpUtils.post(url, params, showloading, callback);
  }

  /**
   * 收藏/取消收藏
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
  doCollection(params, showloading, callback) {
    const url = `${this.global.hostUrl}${this.global.doCollectionUrl}?seeminfoId=${params.seeminfoId}&sessionId=${params.sessionId}`;
    return this.httpUtils.post(url, params, showloading, callback);
  }

  /**
   * 获取地块督察记录列表信息
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
  getPlotInspectorList(params, showloading, callback) {
    // return this.httpUtils.get('../../../assets/data/inspecter-list.json', params, showloading, callback);
    const url = `${this.global.hostUrl}${this.global.plotInspectorListUrl}?id=${params.id}&sessionId=${params.sessionId}`;
    return this.httpUtils.post(url, params, showloading, callback);
  }

  /**
   * 获取地块后期监督记录列表信息
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
  getPlotLaterMonitor(params, showloading, callback) {
    // return this.httpUtils.get('../../../assets/data/later-monitor.json', params, showloading, callback);
    const url = `${this.global.hostUrl}${this.global.plotLaterMonitorUrl}?id=${params.id}&sessionId=${params.sessionId}&year=${params.year}`;
    return this.httpUtils.post(url, params, showloading, callback);
  }

  /**
   * 获取地块相关附件信息
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
  getFile(params, showloading, callback) {
    const url = `${this.global.hostUrl}${this.global.fileUrl}?ids=${params.ids}&sessionId=${params.sessionId}`;
    return this.httpUtils.post(url, params, showloading, callback);
  }

  /**
   * 督察列表提交暂存
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
  supervisesave(params, showloading, callback) {
    return this.httpUtils.get(this.global.hostUrl + this.global.supervisesave, params, showloading, callback);
  }

  /**
   * 获取可编辑的督查记录
   * @param params  调用方法传过来的参数，根据城市代码查询进行获取
   * @param showloading 是否显示数据加载框
   * @param callback 回调函数
   */
  getUpdatedSuperviseByLand(params, showloading, callback) {
    return this.httpUtils.get(this.global.hostUrl + this.global.getUpdatedSuperviseByLand, params, showloading, callback);
  }
  /****************************统计分析模块**********************************/

}
