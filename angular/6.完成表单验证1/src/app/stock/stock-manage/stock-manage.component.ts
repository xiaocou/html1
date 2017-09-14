import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StocksService} from "../stocks.service";
import {FormControl} from "@angular/forms";

// 38.引入time模块
import 'rxjs/Rx';
@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  StocksService: any;

  //2.创建数组,保存股票内容
  private stocks: Array<Stock>;

  // 33. 声明后台字段
  private nameFilter : FormControl = new FormControl();

  // 35. 存储input输入进来的关键字
  private  keyword:string;
  //25. 重新配置路由
  constructor(public router: Router, private StockService : StocksService ) { }

  ngOnInit() {
    this.stocks = this.StockService.getStocks();

    // 37.进行绑定
    this.nameFilter.valueChanges.debounceTime(500).subscribe(value=> this.keyword =value)
  }
  create(){
    this.router.navigateByUrl('/stock/0');
  }
  update(stock: Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
  }

}


