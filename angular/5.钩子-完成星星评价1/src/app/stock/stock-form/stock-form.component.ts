import { Component, OnInit } from '@angular/core';
import {Stock, StocksService} from "../stocks.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  //26.创建对象
  stock: Stock;
  constructor(private StocksService : StocksService,private routeInfo:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //19.初始化
    let stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.StocksService.getStock(stockId);

    // this.stock = new Stock(1,"蓝科教育",100.25,4,"蓝科教育新三板上市",["IT","教育"]);
  }

  // 实现取消保存方法
  cancel(){
    this.router.navigateByUrl('/stock');
  }
  save(){
    this.router.navigateByUrl('/stock');

  }
}
