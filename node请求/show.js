// 自定义模块
function show(){
	this.name = 'user1';
	this.say = function(){
		console.log('my name is '+this.name);
	}
}
// obj = new show();
// obj.say();
// 把show类扔出去
// module.exports = show;
module.exports = new show(); 