// 比较大小
jQuery.maxFunc=function(arr){
	// apply()应用某一对像的一个方法，用另一个对象替换当前对象:替换
	return Math.max.apply(this,arr);
}
// 为jQuery类本身，添加新的方法
jQuery.extend({
	minFunc:function(arr){
		return Math.min.apply(this,arr)
	}
})
// 创建jq对象插件
// 改变颜色
jQuery.fn.changeBgColor=function(color){
	// 获取当前对象
	this.css('backgroundColor',color);
	return this;
}
jQuery.fn.swapClass=function(c1,c2){
	this.each(function(index,item){
		if ($(item).hasClass(c1)) {
			$(item).removeClass(c1).addClass(c2);
		}else if($(item).hasClass(c2)){
			$(item).removeClass(c2).addClass(c1);
		}
	})
}