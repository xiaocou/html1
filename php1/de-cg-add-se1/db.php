<?php
	header("Content-type:text/html;charset=utf-8");
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
//			print_r($row);
			return $row;
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
//			echo (substr($sql, 0,strlen($sql)-1));
//截取“，”号
			$sql = substr($sql, 0,strlen($sql)-1);
			$result = mysqli_query($this->conn,$sql);
			return $result;
		}

		
		//		修改
		public function save($data,$where){
			$sql="update $this->table set ";
			foreach ($data as $key => $value) {
				$sql .="$key='$value',";
			}
			$sql = substr($sql, 0,strlen($sql)-1);
			$sql .=" where $where";
			$result=mysqli_query($this->conn,$sql);
			return $result;
		}
		
		
		//		删除
		public function delete($sql){
//			delete from users where id=1 limit 1
//			$sql = substr($sql, 0,strlen($sql));
			$result=mysqli_query($this->conn,$sql);
			return $result;
		}
	}

?>