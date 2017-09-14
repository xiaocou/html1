<?php
//    private     protected   public
//本类               是        		  是			是
//子类					  是			是
//对象					  			是
	//	类与对象
	header("Content-Type:text/html;charset=utf-8");
	class Person{
//		成员变量/属性
		var $name;
		var $age;
		function say(){
			echo "我的名字叫".$this->name."<br>";
			echo "今年年龄".$this->age."<br>";
		}
	}
	$xjp=new Person();
	$xjp->name="xibigbig";
	$xjp->age=60;
	$xjp->say();
	
	$lkq=new Person();
	$lkq->name="lishushu";
	$lkq->age=60;
	$lkq->say();
	
//	public公共的，var
	class Dushen{
		public $name="高进";
//	protected受保护的
		protected $age=19;
//	private私有的
		private $height=180;
		function info(){
			echo $this->name;
		}
		function say(){
			echo "I my dushen";
		}
	}
	$d1=new Dushen();
	echo $d1->name."<br>";
//		echo $d1->age."<br>";
//		echo $d1->height."<br>";
	echo $d1->info()."<br>";
	echo $d1->say()."<br>";
//	继承
	class Tudi extends Dushen{
		function info(){
			echo "我是赌神的徒弟<br>";
			echo $this->age;
		}
	}
	$xiaodao=new Tudi();
	echo $xiaodao->name."<br>";
//	echo $xiaodao->age;
//	echo $xiaodao->height;
	echo $xiaodao->info()."<br>";
//	echo $xiaodao->say()."<br>";

//常量
	define("PI",3.1415926);
	echo PI;
	echo "<br>";
//	true忽略大小写，false不能忽略
	define("E",2.7,true);
	echo E;
	echo "<br>";
	echo e;
	echo "<br>";
	
	$result=89;
//						if判断语句求成绩
	if($result>90){
		echo "A";
	}else if($result>80){
		echo "B";
	}else if($result>70){
		echo "C";
	}else if($result>60){
		echo "D";
	}else{
		echo "E";
	}
	echo "<br>";
	
//								switch语句求成绩
	switch(floor($result/10)){
		case 10:
		case 9:
			echo "A";
			break;
		case 8:
			echo "B";
			break;
		case 7:
			echo "C";
			break;
		case 6:
			echo "D";
			break;
		default:
			echo "E";
			break;
	}
	echo "<br>";

//						while求1~100求和
	$sum=0;
	$num=1;
	while ($num<=100) {
		$sum+=$num;
		$num++;
	}
	echo $sum."<br>";

	
//								for求1~100求和
	$sum=0;
	for ($i=1; $i <= 100; $i++) { 
		$sum+=$i;
	}
	echo $sum."<br>";

//						do...while求2+4+...100求和
	$i=2;
	$sum=0;
	do{
		$sum+=$i;
		$i+=2;
		
	}while($i<=100);
	echo $sum."<br>";
?>