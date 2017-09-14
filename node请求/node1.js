// var arr = [1,2,2,3,2];
// console.log(arr);


// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`);
// });
// 
// 
// 
// 引入http模块
// const http = require('http');
// var cs;
// // 创建请求函数
// // 两个参数，req：require请求
// // res：result请求结果
// cs = function(req,res){
// 	res.write("hello node.js");
// 	res.end();
// }
// // 创建服务器
// http.createServer(cs).listen(666);
// console.log("ok");


// const http = require('http');
// var cs;
// // 创建请求函数
// // 两个参数，req：require请求
// // res：result请求结果
// cs = function(req,res){
// 	// 输出中文时，必须加相应头
// 	res.writeHead("200",{"content-type":"text/html;charset=utf-8"})
// 	res.write("<h1>方式对你抠门</h1>");
// 	res.write("hello node.js");
// 	res.end();
// }
// // 创建服务器
// http.createServer(cs).listen(666);
// console.log("ok");


// 加载文件
// 引入文件模块  同步
// const fs = require('fs');
// // 取出文件
// var file = 'test.txt';
// var data = fs.readFileSync(file);
// console.log(data.toString());

// 加载文件  异步
// const fs = require('fs');
// var file = 'test.txt';
// console.log('file start');
// fs.readFile(file,function(err,data){
// 	console.log(data.toString());
// });
// console.log('file end');


var  events = require('events');
var emitter = new events.EventEmitter();
 
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener1', arg1, arg2);
})
 
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener2', arg1, arg2);
})
 
emitter.emit('someEvent', 'byvoid', 1991);
