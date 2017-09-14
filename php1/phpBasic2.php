<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
	<?php
	//	字符串
		$c="string";
		$d="world";
		echo strlen("hello world");
		echo "<br>";
	//	检索字符串中是否还有某个关键字，返回关键字首字母下标
		echo strpos("xianMin like iphone", "like");
		echo "<br>";
	//	通过“.”链接字符串
		$e="zhu";
		$f="guo qing";
		$g=$e.$f;
		echo $g;
		echo "<br>";
		
//		布尔值
		$h=true;
//		1代表true，0代表false
		var_dump($h) ;
		if($h==0){
			echo "true";
		}else{
			echo "false";
		}
		echo "<br>";
		
//		运算符
//		赋值运算符
		$i="song";
		$j="ling";
		$k=$i.$j;
		echo $k;
		echo "<br>";
//		$i=$i.$j;
		$i.=$j;
		echo $i;
		echo "<br>";
//		关系运算符
//		== === ！= > < >= <=
//		逻辑运算符
//		与&& and 或|| or 非！
		$m=200;
		$n=$m;
//		引用
		$x=&$m;
		$m=50;
		echo $m;
		echo "<br>";
		echo $n;
		echo "<br>";
		echo $x;
		echo "<br>";
		
//		扩展类型
//		null ,数组,对象,资源
		$a1=null;
		$b="string";
		if(is_null($a1)){
		echo "这是null";
		}
		echo "<br>";
		if(!is_null($b)){
			echo "这是空<br>";
		}	
//		unset释放
//		if(is_null(unset($b))){
//			echo "这是null";
//		}
		$array = array("BENZ" ,"BMW","AUDI" );
		echo "sunyuanchao like".$array[1];
		echo "<br>";
		$array1[5]="huawei";
		$array1[6]="xiaomi";
		$array1[7]="mi";
		echo "renhuan like".$array1[6];
		echo "<br>";
		echo count($array);
		echo "<br>";
		echo count($array1);
		echo "<br>";
		for($i=0;$i<count($array);$i++){
			echo $array[$i];
			echo "<br>";
		}
//		关联数组
//		对象 成员对象：成员对象值
//		键=>值  对
		$age=array("mxl"=>"17","yjw"=>"20","lxw"=>"15");
		echo "lixinwei is".$age['lxw']."years old<br>";
		
		
		$age1['hyb']="p10";
		$age1['lgh']="p20";
		$age1['zm']="p30";
		echo "zengmin like".$age1['zm'];
		echo "<br>";
//		遍历关联数组
		foreach($age as $xx =>$xxv){
			echo "key:".$xx.",value:".$xxv;
			echo "<br>";
		}
//		多维数组
		
	?>
</body>
</html>
	