<?php
//创建db类
	class db{
		public $name=null;
		public $num=10;
		public $conn=null;
		public $table=null;
//		构造函数,当new db创建对象，构造函数开始执行
		public function __construct($table){
			$this->table=$table;
			//			链接到库
			$this->conn=mysqli_connect("localhost", "root", "123456", "news");			
//			$this->name="hello";
		}
//		public function test(){
//			echo "hello";
//		}




//		查询多条语句
		public function  select($sql){
//			查找库
			$result=mysqli_query($this->conn,$sql);

//判断库里是否有$sql语句，有：一列列打印
			while ($row=mysqli_fetch_assoc($result)) {
				$list[]=$row;
			}
//			mysqli_close($this->conn);
			return $list;
		}
//		查询一条语句
		public function find($sql){
//			查找库
			$result=mysqli_query($this->conn,$sql);

			$row=mysqli_fetch_assoc($result);
			print_r($row);
			echo "<br>";
//			关闭数据库
//			mysqli_close($this->conn);		
		}
		
		
		
//		添加
		public function add($data){
//			insert into users set name="hanyingbo",pwd="123";
//			$result=mysqli_query($this->conn,$sql);
//			$data['name']
			$sql="insert into $this->table set ";
			foreach ($data as $key => $value) {
				$sql .="$key='$value',";
			}
			echo (substr($sql, 0,strlen($sql)-1));
//截取“，”号
//			$sql = substr($sql, 0,strlen($sql)-1);
			mysqli_query($this->conn,$sql);
		}

		
		//		修改
		public function save($data,$where){
			$sql="update $this->table set ";
			foreach ($data as $key => $value) {
				$sql .="$key='$value',";
			}
			$sql = substr($sql, 0,strlen($sql)-1);
			$sql .=" where $where";
			mysqli_query($this->conn,$sql);
		}
		
		
		//		删除
		public function delete($sql){
//			delete from users where id=1 limit 1
			$sql = substr($sql, 0,strlen($sql));
			mysqli_query($this->conn,$sql);
		}
	}

	
	//	创建对象
	$mydb=new db("users");
//	调用
	$a=$mydb->select("select * from users limit 2");
	print_r($a);
	echo "<br>";
	$mydb->find("select * from users limit 2");
//	$mydb->test();
//	$mtdb->add('insert into users set name="hanyingbo",pwd="123"');
	$array['name']="hanyingbo123";
	$array['pwd']="123";
	$mydb1=new db("users");
	$mydb1->add($array);
	
	$mydb2=new db('users');
	$array1['pwd']='5555555';
	$tiaojian="name='zhangsan'";
	$mydb2->save($array1,$tiaojian);
	
	$mydb->delete("delete from users where id>10 limit 1");
?>