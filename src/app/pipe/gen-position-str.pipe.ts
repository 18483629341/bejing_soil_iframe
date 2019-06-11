import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genPositionStr'
})
export class GenPositionStrPipe implements PipeTransform {
  getS;//得到剩余转化成秒
  transform(value: any, args?: any): string {
    if(!value){
      return '- -';
    }
    const getNum=Math.floor(value) ;//得到度
    this.getS=( value - getNum ) * 3600 ;
    this.getS=Math.round( this.getS );//取证
   
    let second= Math.round((this.getS) % 60)//求余
    const minute=Math.round((this.getS - second ) / 60);//求商
    return getNum+'°'+minute+'\''+second+'\"';
  }

}
