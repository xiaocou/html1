import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StocksService} from "../stocks.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  //2.创建数组,保存股票内容
  private stocks: Array<Stock>;

  // 33.生成后台字段
  private nameFilter : FormControl = new FormControl();
  // 25.重新配置路由
  constructor(public router: Router,private  StocksService:StocksService) { }

  ngOnInit() {
    // 3.添加数据
    this.stocks = this.StocksService.getStocks();
  }
  // 22.创建与修改
  create(){
    this.router.navigateByUrl('/stock/0');
  }
  update(stock: Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
  }

}




