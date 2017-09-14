<?php
//header("Content-Type:text/html;charset=utf-8");
//资源
//单反引用外部都叫资源
//读取文件
//	$a= readfile("abc.txt");
//	echo gettype($a);
//	echo $a;
	
	echo file_put_contents("abc.txt", "hfjsdn",FILE_APPEND);
	
//"r"只读
//"w"只写
//"r+"、"w+"读写
//	$b=fopen("abc.txt", "r+");
//	echo fread($b,filesize("abc.txt")or die("unable to open file"));
//	fclose($b);
//	echo $b;

//	function myfun(){
//		echo "OK";
//		return 12;//返回值
//		return 22;
//		return 32;
//	}
//	myfun();
//	$a=myfun();
//	echo ($a);
	
//	调用 不写参 执行$x=0;
//	写参  执行$x=100;
	function myfun($x=0){
		$num=$x+100;
		return $num;
	}
	echo (myfun(100));
	
?>