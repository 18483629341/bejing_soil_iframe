import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genPositionStr'
})
export class GenPositionStrPipe implements PipeTransform {
  getS;//得到剩余转化成秒
  transform(value: any, args?: any): string {
    const getNum=Math.floor(value) ;//得到度
    this.getS=( value - getNum ) * 3600 ;
    this.getS=parseInt( this.getS );//取证
    const getM=(this.getS)/60;//求商
    this.getS=(this.getS)%60;//求余
    return getNum+','+getM+','+this.getS+',';
  }

}
