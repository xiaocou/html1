'use strict';
var http = require('http');
var url = require('url');
var queryString = require('queryString');
var mysql = require('mysql');
var cs = function(req,res){
	var uri = req.url;
	var json = queryString.parse(url.parse(uri).query);
	console.log(json);
	res.write('1');
	res.end();
}
http.createServer(cs).listen(8888);