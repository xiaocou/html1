<?php
	 session_start();
//	 print_r($_POST);
	 $user=$_POST["user"];
	 $pwd=$_POST["pwd"];
	 include 'db.php';
	// 创建对象
	 $mydb=new db('users');
	 $row=$mydb->find("select * from users where name='$user' and pwd='$pwd'");
	// select * from users where name=yuanjinwei and pwd=222
	if($row['id']>0){
	 	 $_SESSION['admin'] = $row['name'];
		echo "登录成功";
		echo "<script>location.replace('index.php')</script>";
	}else{
//		echo "登录不成功";
//		echo "<script>alert('登录失败');location.replace('login.php')</script>";
	}
?>