$(function(){
	var now=0;		//定义当前的索引值
	var now1=0;		//定义鼠标移入时的某一个
	var time=null;		//定义定时器名字
	
	$(".nav>li").on(
	{	
		mouseover:function(){
			now1 = $(this).index(); 
			console.log(now);
			$('.nav>li').addClass('selected');
			$($('.nav>li')[now1]).removeClass('selected');
			clearInterval(time);
		},
		mouseout:function(){
			$($('.nav>li')[now1]).addClass('selected');
			$($('.nav>li')[now]).removeClass('selected');
			time = setInterval(next, 3000);
		},
		click:function(){
//			clearInterval(time);
			now = $(this).index();
			play();
		}
	});
	
	//播放函数
	function play(){
		$('.list>li>a>img').fadeOut(400);
		$($('.list>li>a>img')[now]).fadeIn(400);
		
		$('.nav>li').addClass('selected');
		$($('.nav>li')[now]).removeClass('selected');
	}
	
	//下一张图片
	function next(){
		if(now++==$('.list>li>a>img').length-1){
			now=0;
		}
		play();
	}
	
	//上一张图片
	function prev(){
		if(now--==0){
			now=$('.list>li>a>img').length-1;
		}
		play();
	}
	
	// 自动播放
	time = setInterval(next, 3000);
	
	// 左键
	$(".left").on(
	{
		mouseover:function(){
			$(this).css({background:'rgba(0, 0, 0, 0.9)'});
		},
		mouseout:function(){
			$(this).css({background:'rgba(0, 0, 0, 0.1)'});
		},
		click:function(){
			prev();
		}
	});
	
	//右键
	$(".right").on(
	{
		mouseover:function(){
			$(this).css({background:'rgba(0, 0, 0, 0.9)'});
		},
		mouseout:function(){
			$(this).css({background:'rgba(0, 0, 0, 0.1)'});
		},
		click:function(){
			next();
		}
	});
	
	// 鼠标移除暂停移出播放
	$('.bod').on({
		mouseover:function(){
			$(".left").css({opacity:'1'});
			$(".right").css({opacity:'1'});
			clearInterval(time);
		},
		mouseout:function(){
			time = setInterval(next, 3000);
			$(".left").css({opacity:'0'});
			$(".right").css({opacity:'0'});
		}
	});
});