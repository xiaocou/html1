import { Injectable } from '@angular/core';

@Injectable()
export class StocksService {

  constructor() {

  }
  // 22.构造数据
  private stocks: Stock[] = [
    new Stock(1,"蓝科教育",100.25,4,"蓝科教育新三板上市",["IT","教育"]),
    new Stock(2,"阿里",30,3,"比较庞大的公司,老板很丑",["IT"]),
    new Stock(3,"京东",10.5,3,"一家专门卖奶茶的网站",["IT","电商"]),
    new Stock(4,"百度",20,3,"靠搜索引擎出卖客户资料赚钱的网站",["IT"]),
    new Stock(5,"腾讯",29,5,"一直在模仿,从未被超越",["教育"]),
    new Stock(6,"默默",10,2,"默默默默默默默默默",["电商","教育"]),
  ];
  // 23. 返回整个数组的方法
  getStocks() : Stock[] {
    return this.stocks;
  }
  //24. 返回单个股票的方法
  getStock(id : number):Stock{
    return this.stocks.find(stock=>stock.id == id);
  }
}

// 21. 从stockmange.ts中拿过来
export class Stock{
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}
