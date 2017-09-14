// 全局对象
// window
// global
// __filename脚本文件名，带绝对路径
console.log(__filename);
console.time('x');
for(var i=0;i<100000;i++){

}
console.timeEnd('x');
var i=0;
setTimeout(function(){
	console.log(++i);
},1000);
setInterval(function(){
	console.log(++i);
},1000)

