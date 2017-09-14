<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style>
			p{
				color: #f00;
			}
		</style>
	</head>
	<body>
		<?php
			echo "<h1>hello php!</h1><br>";
			echo "<p>我是php</p><br>";
			echo "hello","word<br>";
			echo ("hello");
			echo "<br>";
			$firstname="qin";
			echo "$firstname<br>guo wen<br>";
			echo '$firstname guo wen<br>';
			print "gyxy<br>";
			print ("H5");
			echo "<br>";
			$a=print("666H5<br>");
			echo $a;
			echo "<br>";
			$b=print("666H5<br>");
			echo $b;
			echo "<br>";
			$c=100.11;
			echo $c;
			echo "<br>";
			var_dump($c);

			// 变量
			$a=5;//全局变量
			function myTest(){
				global $a,$b;//变为全局变量
				$b=10;//局部变量
				echo "函数里面<br>";
				echo "变量a的值：$a<br>";
				echo "变量b的值：$b<br>";
			}
			myTest();
			echo "函数外面<br>";
			echo "变量a的值：$a<br>";
			echo "变量b的值：$b<br>";
			$c=100;
			$d=200;
			function myCesi(){
				$GLOBALS['c']=$GLOBALS['c']+$GLOBALS['d'];
			}
			myCesi();
			echo $c;
			echo "<br>";

			function myadd(){
				static $e=0;//保存当前变量
				echo $e;
				$e++;
			}
			myadd();
			myadd();
			myadd();

		?>
	</body>
	</html>	
	