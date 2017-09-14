<?php
	session_start();
//	unset复位
	unset($_SESSION['admin']);
	echo "<script>location.replace('login.php')</script>";
?>