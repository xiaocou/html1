<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{
			font-weight: bold;
			font-family: "微软雅黑";
		}
		form{
			width: 400px;
			height: 400px;
			background-color: #0ff;
			margin: 60px auto;
		}
		p{
			width: 400px;
			height: 100px;
			text-align: center;
			line-height: 100px;
			font-size: 20px;
		}
		.content{
			position: relative;
			left: 75px;
			width: 250px;
			height: 120px;
		}
		label{
			display: block;
			width: 240px;
			height: 22px;
			margin-top: 10px;
		}
		button{
			width: 120px;
			height: 46px;
			display: block;
			margin: 5px auto;
		}
	</style>
</head>
<body>
	<form action="loginto.php" method="post">
		<p>登陆页面</p>
		<div class="content">
			<label>用户名：<input type="text" name="user" placeholder="请输入用户名" /></label>
			<br>
			<label>密 &nbsp;&nbsp;码：<input type="password" name="pwd" placeholder="请输入密码" /></label>
			<br>
			<button type="submit">登录</button>
		</div>		
	</form>
</body>
</html>