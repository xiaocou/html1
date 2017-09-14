<?php 
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "new1";
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
$sql = "SELECT * FROM user";
$result = mysqli_query($conn, $sql);

 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>index</title>
	<style type="text/css">
		*{
			font-family: 微软雅黑;
		}
	</style>
	<link rel="stylesheet" type="text/css" href="bs/css/bootstrap.min.css">
	<script type="text/javascript" src="bs/js/jquery.min.js"></script>
	<script type="text/javascript" src="bs/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<h2 class='page-header'>查看用户:</h2>
		<table class='table table-bordered table-hover'>
			<tr>
				<th>编号</th>
				<th>用户名</th>
				<th>密码</th>
				<th>删除</th>
			</tr>
			<?php 
			while($row = mysqli_fetch_assoc($result)) {
				// echo "<pre>";
				// print_r($row);
				// echo "</pre>";
				// 
				echo "<tr>";
				echo "<td>{$row['id']}</td>";
				echo "<td>{$row['username']}</td>";
				echo "<td>{$row['password']}</td>";
				echo "<td><a href='javascript:' class='del' id='{$row['id']}'>删除</a></td>";
				echo "</tr>";
			}
			 ?>
		</table>
	</div>	
</body>

<script type="text/javascript">
	$('.del').click(function(){
	id=this.id;
	console.log(id);
	obj = $(this);
	//ajax无刷新删除
	//遇到如下错误需要跨域
	//XMLHttpRequest cannot load http://localhost:8888/?id=4. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost' is therefore not allowed access.
	//getJSON()允许通过使用jsonp形式的回调函数来加载其他网络的JSON数据
	//使用$.getJSON进行跨域是，需要在请求路径上加上"callback=?",jQuery自动替换请求路径？为正确的函数名，从而执行回调函数
	//jQuery自动随机生成的函数名
	$.getJSON('http://localhost:8888?cb=?',{id:id},function(json){
			if (json.ok == '1') {
			obj.parent().parent().hide(1000);
		}
	});
});





// 	$('.del').click(function(){
// 	id=this.id;
// 	// console.log(id);
// 	obj=$(this);
// 	//跨域
// 	// $.get('http://localhost:8888',{id:id},function(r){
// 	// 	if(r=='1'){
// 	// 		obj.parent().parent().hide();
// 	// 	}
// 	// });
	
// 	//跨域有问题,换成jsonp
// 	//此时已经能删除了,但是需要刷新
// 	$.getJSON('http://localhost:8888?cb=?',{id:id},function(json){
// 		if (json.ok == '1') {
// 			obj.parent().parent().hide(1000);
// 		}
// 	});
// });
</script>