import { Component, OnInit } from '@angular/core';
import {Stock, StocksService} from "../stocks.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  //50 声明formgroup 接管表单
  formModel:FormGroup;
  //52. 声明数组
  categories = ["IT","教育","电商"];
  //26.创建对象
  stock: Stock;
  constructor(private StocksService : StocksService,private routeInfo:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //19.初始化
    let stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.StocksService.getStock(stockId);

    // 51 . 声明数据
    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name:[this.stock.name,[Validators.required, Validators.minLength(3)]]  ,
      price:[this.stock.price,[Validators.required]] ,
      desc: [this.stock.desc],
      categories:fb.array(
      [new FormControl(this.stock.categories.indexOf(this.categories[0])!=-1),
        new FormControl(this.stock.categories.indexOf(this.categories[1])!=-1),
        new FormControl(this.stock.categories.indexOf(this.categories[2])!=-1),
      ],this.categoriesSelectValidator )
  }
);
  }
  // 54 类型的验证规则
  categoriesSelectValidator(control:FormArray){
    var valid = false;
    control.controls.forEach(control=>{
      if(control.value){
        valid = true;
      }
    });
    if(valid){
      return null;
    }else{
      return{categoriesLegth:true}
    }
} // 实现取消保存方法
  cancel(){
    this.router.navigateByUrl('/stock');
  }
  save(){

    var chineseCategories = [];
    var index = 0;
    for(var i=0;i<3;i++){
      if (this.formModel.value.categories[i]){
        chineseCategories[index++] = this.categories[i];
      }
    }
    this.formModel.value.rating = this.stock.rating;
    this.formModel.value.categories = chineseCategories;
    console.log(this.formModel.value);
    this.router.navigateByUrl('/stock');

  }
}
