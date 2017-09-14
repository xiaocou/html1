<?php
	header("Content-Type:text/html;charset=utf-8");
//	数学函数
//	绝对值
	echo (abs(5.5))."<br>";
//	向上取整
	echo (ceil(5.1))."<br>";
//	取整
	echo (floor(10.9))."<br>";
//	四舍五入
	echo (round(5.12))."<br>";
//	保留两位小数
	echo (round(5.789,2))."<br>";
//	随机数10~30
	echo (rand(10, 30))."<br>";
//	在windows平台上，rand（）获取0~rand-max（32798）最小为0
	echo (rand())."<br>";
//	Math常量
//	M_1_PI  1/PI	
//	M_2_PI 2/PI
	echo (M_PI)."<br>";
	
//	数组常用方法
	$people=array("dw","gww","mkx","cjb");
//	in_array查询检索数组内是否有指定的值
//	in_array（"关键字",数组名,数据类型）
//	type true false 数据类型
	if(in_array("dw", $people,true)){
		echo "OK";
	}else{
		echo "NO";
	}
	echo "<br>";
//	sort()排序
	sort($people);
//	输出数组
	print_r ($people);
	echo "<br>";
//	rsort()倒序
	rsort($people);
	print_r($people);
	echo "<br>";
	$person=array("hlz"=>"18","qgw"=>"12","sl"=>"13","hf"=>"21","zm"=>"31");
//	按照下标排序
//	sort($person);
//	print_r($person);
//	echo "<br>";
//	根据键值对按正序排列
	asort($person);
	print_r($person);
	echo "<br>";
	//	根据键值对按倒序排列
	arsort($person);
	print_r($person);
	echo "<br>";
//	根据键按正序排序
	ksort($person);
	print_r($person);
	echo "<br>";
//	根据键按倒序排序
	krsort($person);
	print_r($person);
	echo "<br>";
?>