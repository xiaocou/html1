// node工具模块
const util = require('util');
var a = [1,3,5];
console.log(util.isArray(a));//true


var arr = {'name':'dw','age':'18'};
console.log(util.inspect(arr)) ;//对象转变成字符串形式
console.log(typeof(util.inspect(arr)));
console.log(arr.name);


var time = new Date();
console.log(time);

console.log(util.isBoolean(1));

var show = function(){
	console.log('123');
}
console.log(util.isFunction(show()));
isObject();
isRegExp();