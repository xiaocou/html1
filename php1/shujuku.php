<?php
//	链接数据库
//第一个参数：入口
//第二个参数：myaql用户名
//第三个参数：myaql密码
//第四个参数：数据库名
	$conn=mysqli_connect("localhost","root","123456","phpteach");
//	执行SQL语句
//第一个参数：数据库资源
//第二个参数：具体的SQL语句
	mysqli_query($conn,"set names gb2312");
	$result=mysqli_query($conn,"select * from hat_province");
	echo gettype($result);
//	$row=mysqli_fetch_assoc($result);
//	print_r($row);

//通过php包裹html标签
//	echo '<ul>';
//	while ($row=mysqli_fetch_assoc($result)) {
//		echo '<li>';
//		echo$row['id'];
//		echo$row['provinceID'];
//		echo$row['province'];
//		echo '</li>';
//	}
//	echo '</ul>';
	
//	html标签包裹php
	echo '<ul>';
	while ($row=mysqli_fetch_assoc($result)) {
	?>
	<li>
		<?php	
			echo$row['id'];
			echo$row['provinceID'];
			echo$row['province'];
		?>
	</li>
		
	<?php
	}
	echo '</ul>';
?>