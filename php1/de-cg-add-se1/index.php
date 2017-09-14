<?php
	session_start();
//	empty检查一个变量是否为空
//变量是空，返回true，非空，返回false ,
//防止沒有输入名字，而复制地址直接能链接到index.php页面
	if(empty($_SESSION['admin'])){
		echo "<script>location.replace('login.php')</script>";
		exit;
	}
	include 'db.php';
	$admin = new db('users');
	$list=$admin->select("select * from users order by id desc");
	if(!empty($_GET['id'])){
		$id = $_GET['id'];
		$lab = $admin->find("select * from users where id='$id' limit 1");
	}
//	print_r($list);
	
	
?>
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>Document</title>
	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<link rel="stylesheet" type="text/css" href="css/__main.css"/>
    <link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/buttons.css"/>
    <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    <script src="js/holder.js"></script>
	<style>
		.tab{
			border: 1px solid #000;
			border-collapse: collapse;
			padding: 10px;
			text-align: center;
		}
		.tab td{
			border: 1px solid #000;
			line-height: 30px;
		}
		.tr:nth-child(odd){
			background-color: #ff0;
		}
		.tr:nth-child(even){
			background-color: #ccc;
		}
		i{
			font-size: 20px;
			color: #f00;
		}
		span{
			font-size: 20px;
			background-color: #ccc;
			color: #000;
		}
		.discolor{
			margin-top: 10px;
		}
		.discolor tr:nth-child(odd){
			background-color: #ccc;
		}
		.discolor tr:nth-child(even){
			background-color: #ff0;
		}
		h2,p{
			font-weight: bold;
			text-align: center;
		}
		.container a{
			display: block;
			text-align: center;
		}
	</style>
</head>
<body>
	<main role="main">
		<div class="container">
			<h2>首页</h2>
			<p><span><?php echo $_SESSION['admin'] ?></span><b><i>欢迎登陆！</i></b></p>
			<a href="login_out.php">退出账号</a>
		</div>
		<table class="tab table table-condensed col-xs-12" style="width: 50%;">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Pwd</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<?php
					foreach($list as $key=>$value){					
				?>
				<tr class="tr">
					<td><?php echo $value['id'] ?></td>
					<td><?php echo $value['name'] ?></td>
					<td><?php echo $value['pwd'] ?></td>
					<td>
						<a href="index.php?id=<?php echo $value['id'] ?>">修改</a>
						<a onclick="return confirm('确定删除吗？')" href="admin_del.php?id=<?php echo $value['id'] ?>">删除</a>
					</td>
				</tr>
				<?php
					}	
				?>
			</tbody>
		</table>
		<form action="admin_post.php" method="post">
			<input type="hidden" name="hid" value="<?php echo !empty($lab['id'])?$lab['id']:'' ?>"/>
		<table class="tab discolor table table-condensed col-xs-12" style="width: 50%;">
			<tr>
				<th>项目</th>
				<th>内容</th>			
			</tr>
			<tr>
				<td>用户名</td>
				<td>
					<input type="text" name="user" value="<?php echo !empty($lab['name'])?$lab['name']:'' ?>"/>
				</td>
			</tr>
			<tr>
				<td>密码</td>
				<td>
					<input type="password" name="pwd" />
				</td>
			</tr>
			<tr>
				<td>确定密码</td>
				<td>
					<input type="password" name="pwd1" />
				</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<input type="submit" value="提交" />
				</td>
			</tr>
		</table>
		</form>
	</main>
	<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X','auto');ga('send','pageview');
    </script>
</body>
</html>