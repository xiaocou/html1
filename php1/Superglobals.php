<?php
	header("Content-Type:text/html;charset=utf-8");
//	echo $_GET;
	print_r($_POST);
	echo "<br>";
	echo md5($_POST["pwd"]);
	echo "<br>";
//	md5不安全 撒盐
//要求：猪狗长
	echo md5($_POST["pwd"].'12345sdcvdsfvdsfvbdwfsgvdfvbsdfvsdfvdsfbdscbfgvbcvbcvxbfcbdbdgbfdgbsdfnbfgsdfbdfb67');
	echo "<br>";
	echo md5(md5($_POST["pwd"].'12345sdcvdsfvdsfvbdwfsgvdfvbsdfvsdfvdsfbdscbfgvbcvbcvxbfcbdbdgbfdgbsdfnbfgsdfbdfb67'));
	echo "<br>";
?>