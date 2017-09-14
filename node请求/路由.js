// 路由，有一个主入口，在这个路口上分配到不同的页面
// 引入模块
const http = require('http');
const url = require('url');
const fs = require('fs');
var cs;
cs = function(req,res){
	var uri = req.url;
	if (uri !=='/favicon.ico') {
		// var arr = url.parse(uri);
		// console.log(arr);
		var path = url.parse(uri).pathname;
		switch(path){
			case "/user/add":
			res.write('<h1>user add</h1>');
			break;
			case "/user/delete":
			res.write('<h1>user delete</h1>');
			break;
			case "/user/update":
			res.write('<h1>user update</h1>');
			break;
			case "/user/add":
			res.write('<h1>user add</h1>');
			break;
			case "/user/add":
			res.write('<h1>user add</h1>');
			break;
			default:
				var indexFile = 'index.html';
				// 同步
				var data = fs.readFileSync(indexFile);
				res.write(data);
				break;
		}
	}
	res.end();
}
// 键服务器，打开端口
http.createServer(cs).listen(551);
console.log('wan le');