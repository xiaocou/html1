'use strict';
//1.引入http模块
//1.自架web服务器
//引入http url queryString mysql
var http =require('http');
var url = require('url');
var queryString = require('querystring');
var mysql = require('mysql');

//2.回调函数
var cs = function(req,res){
	//这个值会经常变,请求一次就变一次
	// res.write('jQuery111308636421768088602_1493532902268({"id":"1"})');
	//3.1接收请求url
	var uri = req.url;
	var json = queryString.parse(url.parse(uri).query);
	console.log(json);
	var fname = json.cb;
	var id = json.id;
	//3.2 在原来串上加进去对象
	var jsonstr = fname+'({"ok":"1"})';
	console.log(jsonstr);
	//3.3连接操作数据库
	var conn = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'123456',
		database:'new1'
	});
	//3.4 打链接操作数据库
	conn.connect();
	//测试一下,是否能连接上数据库
	conn.ping(function(err){
		console.log('mysql is OK');
	});
	//3.5 操作数据库
	conn.query('delete from user where id= '+id,function(err,rs){
		if (rs.affectedRows == '1') {
			//给前段jsonp返回成功删除的消息 ok :1
			res.write(jsonstr);

			//关闭响应
			res.end();
		}
	});
	conn.end();
}
//3.打开8888端口
http.createServer(cs).listen(8889);

