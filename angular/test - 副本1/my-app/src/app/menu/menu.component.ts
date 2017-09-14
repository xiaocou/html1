import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // 7.创建对象
  menus:Array<Menu>;
  // 11.创建id
  currentMenuId:number;
  // 5.设置方法
  constructor(public router: Router) { }

  ngOnInit() {
    //8.初始化对象
    this.menus = [
      new Menu(1,'首页','dashboard'),
      new Menu(2,'股票管理','stock')
    ];
  }
  // // 10.构造nav方法
  // nav (url : string ) {
  //   this.router.navigateByUrl(url);
  // }
  //10.改造后的nav方法
  nav(menu:Menu) {
    this.router.navigateByUrl(menu.link);
    // 12.赋值
    this.currentMenuId = menu.id;
  }
}
//改造 6.创建Menu类
export class Menu{
  constructor(
    public id: number,
    public name:string,
    public link:string,
  ){

  }
}

