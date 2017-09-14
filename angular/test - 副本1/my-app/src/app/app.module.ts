import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StartsComponent } from './starts/starts.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StocksService} from "./stock/stocks.service";

// 1. 点击不同的按钮,导航到不同的页面地址
const routeConfig:Routes =  [
  //重定向, 用户访问一个地址,将这个地址指向新地址
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'stock',component:StockManageComponent},
  {path:"stock/:id",component:StockFormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StartsComponent,
    StockManageComponent,
    DashboardComponent,
    StockFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // 2.将模块添加进来
    RouterModule.forRoot(routeConfig),
    // 32.加入响应式编程模块
    ReactiveFormsModule
  ],
  // 21.添加stocks服务
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }


