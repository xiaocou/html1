<?php
	include 'new2.php';
	$admin = new db('users');
	$list=$admin->select("select * from users order by id desc");
	if(!empty($_GET['id'])){
		$id = $_GET['id'];
		$lab = $admin->find("select * from users where id='$id' limit 1");
	}	
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="bootstrap.css"/>
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
		h2{
			text-align: center;
		}
		th{
			text-align: center;
		}
		</style>
	</head>
	<body>
		<main role="main">
			<div class="container">
				<h2>查看用户:</h2>	
				<table class="tab table table-condensed col-xs-12">
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
							<td><?php echo $value['user'] ?></td>
							<td><?php echo $value['pwd'] ?></td>
							<td>
								<a onclick="return confirm('确定删除吗？')" href="admin_del.php?id=<?php echo $value['id'] ?>">删除</a>
							</td>
						</tr>
						<?php
							}	
						?>
					</tbody>
				</table>
			</div>
		</main>
	</body>
</html>
