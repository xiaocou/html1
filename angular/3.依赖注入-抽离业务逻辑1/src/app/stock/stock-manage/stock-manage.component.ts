import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StocksService} from "../stocks.service";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  StocksService: any;

  //2.创建数组,保存股票内容
  private stocks: Array<Stock>;
  //25. 重新配置路由
  constructor(public router: Router, private StockService : StocksService ) { }

  ngOnInit() {
    this.stocks = this.StockService.getStocks();
  }
  create(){
    this.router.navigateByUrl('/stock/0');
  }
  update(stock: Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
  }

}


