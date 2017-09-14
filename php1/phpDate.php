<?php
//事件戳
//F月份全部英文;l日期全部英文,N星期数字表示,w星期数字表示
//	Y 四位年；y两位年；M三位英文；m两位月份；D三位星期；d日期
	echo (date("Y-m-d"))."<br>";
	echo (date("Y/m/d"))."<br>";
	echo (date("y/m/d"))."<br>";
	echo (date("y/M/d"))."<br>";
	echo (date("y/m/D"))."<br>";
	echo (date("y/F/d"))."<br>";
	echo (date("y/m/l"))."<br>";
	echo (date("y/m/N"))."<br>";
//	其他地区时间制
	echo (date("h:i:s"))."<br>";
	
//	设置时区
//Asia/shanghai可能也行
	date_default_timezone_set('PRC');
//	H 24小时制；h 12小时制
	echo (date("H:i:s"))."<br>";
//	a 自动在事件后带pm或者am
	echo (date("h:i:s a"))."<br>";
//	距离计算机元年1970/01/01 00:00:00秒数
	$t=time();
	echo $t."<br>";
?>