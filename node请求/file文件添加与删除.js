const fs = require('fs');
var file = 'test1.txt';
var str1 = 'html\ncss\njs\n';
fs.writeFile(file,str1);//添加文件
fs.unlink(file);//删除文件
// fs.mkdir('myweb');//创建文件夹
// fs.rmdir('myweb');//删除文件夹