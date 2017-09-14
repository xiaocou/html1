'use strict';

// // 事件：引入事件模块
// const events = require('events');
// // 创建触发器对象
// var evt = new events.EventEmitter();
// // 创建函数
// function eventhandler(){
// 	console.log('111');
// 	console.log('222');
// }
// // 绑定事件和事件的处理程序
// evt.on("eventName",eventhandler);
// // 触发
// evt.emit('eventName');
// // node里面的事件，只要有异步，就有事件
// // node模块：把一个文件包起来，得到一个对象


// 引入show.js中的show模块（自己写的要加‘./’）
const show = require('./show');
// 使用show类构造方法
// var obj1 = new show();
// // 让方法调用
// obj1.say();
show.say();