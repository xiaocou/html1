<?php
	header("Content-Type:text/html;charset=utf-8");
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