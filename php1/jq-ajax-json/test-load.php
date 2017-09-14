<?php
  //返回的数据是html
header('Content-Type:text/html');
$param = $_REQUEST['user'];
if($param=='abc')
	echo '<span style="color:red">我是一段HTML</span>';
else
	echo '<span style="color:blue">我是另一段HTML</span>';
?>