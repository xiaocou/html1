// os模块operating system
// var os = require('os');
// // mem:memory存储空间
// // totalmem：总共内存
// var tot = os.totalmem();
// console.log(tot);
// // freemem剩余空间
// console.log(os.freemem());
// // tmpdir：默认的临时文件夹
// console.log(os.tmpdir());
// // hostname：默认操作系统主机名
// console.log(os.hostname());
// // type：操作系统名（Windows_NT）
// console.log(os.type());
// // platform：操作系统平台（win32）
// console.log(os.platform());
// // loadavg：包含1,5,15时间段平均负载的数组（[ 0, 0, 0 ]）
// console.log(os.loadavg());
// // cpus：cpu信息
// console.log(os.cpus());
// // networkInterfaces：网络接口信息
// console.log(os.networkInterfaces());
// // cpu:构架（x64）
// console.log(os.arch());



//path模块
// var path = require('path');

// var str = '/user/local/www/lamco.sh';
// //路径
// //dirname：/user/local/www/
// console.log(path.dirname(str));
// //文件名
// //basename：lamco.sh
// console.log(path.basename(str));
// //后缀名
// console.log(path.extname(str));
// //解析路径
// //parse：解析
// //字符串解析成相应的对象
// console.log(path.parse(str));


// var pobj = 
// 	{ root: '/',
//   dir: '/user/local/www',
//   base: 'lamco.sh',
//   ext: '.sh',
//   name: 'lamco' }
// //win系统中以\结束
// //把路径对象转成路径字符串
// console.log(path.format(pobj));


// dns
// 解析域名
// var dns = require('dns');

// var domain = 'www.lamco.com.cn';
// // 将域名解析成第一条找到的结果
// dns.lookup(domain,function(err,ip,family){
// 	console.log('ip is '+ip);
// 	// 反向解析IP地址
// 	dns.reverse(ip,function(err,name){
// 	if (err) {
// 		console.log(err.stack);
// 	}
// 	console.log(JSON.stringify(name));
// });
// });


//net模块
//提供一些用于底层的网络通信工具，包含创建服务器和客户端的方法
// const net=require('net');
// // 创建服务器
// var chat=net.createServer();
// // 绑定网络
// chat.on('connection',function(client){
// 	client.write('hello world');

// 	client.end();
// });
// chat.listen(9001);

// console.log('telnet server ok!');



// //聊天原理, 终端中输入, 控制台中显示
const net=require('net');
// 建立服务器
var chat=net.createServer();
chat.on('connection',function(client){
	client.write('hello world');

	client.on('data',function(data){
		console.log(data.toString());
	})
});
chat.listen(9006);

console.log('telnet server ok!');





