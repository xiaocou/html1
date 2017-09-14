<?php 
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "new1";
// 创建连接
$conn =mysqli_connect($servername, $username, $password, $dbname);

$id = $_GET['id'];
$sql = "delete from users where id={$id}";
if (mysqli_query($conn,$sql)) {
	echo 1;
}
?>