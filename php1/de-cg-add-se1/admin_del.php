<?php
	include 'db.php';
	
	$id = $_GET['id'];
	$admin = new db('users');
	$result = $admin->delete("delete from users where id='$id' limit 1");
	if($result){
		echo "<script>alert('删除成功');location.replace('index.php')</script>";
	}
	else{
		echo "<script>alert('删除失敗');location.replace('index.php')</script>";
	}
?>