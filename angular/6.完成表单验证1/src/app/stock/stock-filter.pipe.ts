import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  // 39.构造list筛选列表,field过滤字段,根据么来过滤.keyword用户输入的文字
  transform(list:any[], field:string, keyword:string): any {
    if (!field || !keyword){
      return list;
    }

    return list.filter(item=>{
      let itemFieldValue = item[field].toLowerCase();
      return itemFieldValue.indexOf(keyword) >= 0;
    });

  }

}
