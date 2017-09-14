// 游戏状态常量
// 游戏进行中
const PLAYING=0;
// 方块一定中
const CELL_MOVING=1;
// 游戏结束
const GAME_OVER=2;
// 分数
var score=0;
// 当前游戏状态
var state=PLAYING;
// 游戏初始化
var cells;
// 工厂函数
function $(id){
	return document.getElementById(id);
}
document.body.onload=function(){
	// 添加向上按钮的时间
	$('upBtn').onclick=upAction;
	// 添加向下按钮事件
	$('downBtn').onclick=downAction;
	// 添加向左的点击事件
	$('leftBtn').onclick=leftAction;
	// 右边
	$('rightBtn').onclick=rightAction;
	// newGame
	$('newGame').onclick=init;
	$('restart').onclick=init;
	// 初始化函数
	init();
}

// 初始化函数
function init(){
	// 隐藏游戏结束页面
	document.getElementById('gameOver').style.display='none';
	cells=[[],[],[],[]];//四行一列
	for(var row=0;row<4;row++){
		for(var col=0;col<4;col++){
			cells[row][col]=0;
		}
	}
	// 初始化分数
	score=0;
	// 生成随机数
	randomNumber();
	randomNumber();
	// 根据最新状态更新页面视图
	updateView();
	// 状态为游戏中
	state=PLAYING;
}
// 在空白出生成随机数
function randomNumber(){
	if (full()) {
		return;
	}
	while(true){
		// 随机生成位置
		var row=Math.floor(Math.random()*4);
		var col=Math.floor(Math.random()*4);		
		if (cells[row][col]==0) {
		// 随机生成2或者4
			var n=Math.random()<0.5?2:4;
			cells[row][col]=n;	
			break;
		}
		
	}
}
// 16给我位置都满时，不能放数字
function full(){
	for(var row=0;row<4;row++){
		for(var col=0;col<4;col++){
			if (cells[row][col]==0) {
				return false;
			}
		}
	}
	return true;
}
// 更新视图函数
function updateView(){
	for(var row=0;row<4;row++){
		for(var col=0;col<4;col++){
			var num=cells[row][col];
			// 清楚当前样式和数值
			var cell=document.getElementById('cell'+row+col);
			if (num>0) {
				cell.className='cell num'+num;
				cell.innerHTML=num;
			}else{
				cell.className='cell';
				cell.innerHTML='';
			}
		}
	}
	// 更新分数
	document.getElementById('Score').innerHTML=score;
	document.getElementById('finalScore').innerHTML=score;
	gameOver();
}
// 向上操作处理函数
function upAction(){
	// 向上移动列
	if (canMoveUp()) {
		// 逐列往上移动
		for(var col=0;col<4;col++){
			// 移动每一列的方法
			upCol(col);
		}
		// 随机生成新数字
		randomNumber();
		// 更新视图
		updateView();
	}
}
// 向上移动条件:1、上放格子为空；2、上下两个格子数值相等
function canMoveUp(){
	for(var row=1;row<4;row++){
		for(var col=0;col<4;col++){
			// 判断当前格子非零
			if (cells[row][col]!=0) {
				// 1、上方格子为空。2、上方格子数值与当前格子数值相同
				if (cells[row-1][col]==0||cells[row-1][col]==cells[row][col]) {
					return true;
				}
			}
		}
	}
	return false;
}
// 移动单位
// 根据指定列号执行向上操作
function upCol(col){
	for(var row=0;row<4;){
		// 获取当前的值
		var current=cells[row][col];
		// 尝试查找下一个数的位置
		var nextRow=getNextInCol(col,row+1,1);
		// 没有找到下一个
		if (nextRow==-1) {
			return;
		}
		var next=cells[nextRow][col];
		if (current==0) {
			cells[row][col]=next;
			cells[nextRow][col]=0;
			// 移动操作不能改变行号
		}else if (current==next) {
			cells[row][col]=current+next;
			cells[nextRow][col]=0;
			score+=cells[row][col];
			row++;
		}else{
			// 当前行和查找的值不想等
			row++;
		}
	}
}
// 获取当前行接下来第一个带数字的格子的行号，向上找或者向下找
function getNextInCol(col,row,step){
	while(true){
		// 判断是否越界
		if (row<0||row>=4) {
			return -1;
		}
		// 没有越界,格子的值不为零，返回一个行号
		if (cells[row][col]!=0) {
			return row;
		}
		row+=step;
	}
}

// 向下按钮处理
function downAction(){
	// 向下移动列
	if (canMoveDown()) {
		// 逐列往上移动
		for(var col=0;col<4;col++){
			// 移动每一列的方法
			downCol(col);
		}
		// 随机生成新数字
		randomNumber();
		// 更新视图
		updateView();
	}
}
function canMoveDown(){
	for(var row=0;row<3;row++){
		for(var col=0;col<4;col++){
			// 判断当前格子非零
			if (cells[row][col]!=0) {
				// 1、下方格子为空。2、上方格子数值与当前格子数值相同
				if (cells[row+1][col]==0||cells[row+1][col]==cells[row][col]) {
					return true;
				}
			}
		}
	}
	return false;
}
function downCol(col){
	for(var row=3;row>=0;){
		// 获取当前的值
		var current=cells[row][col];
		// 尝试查找下一个数的位置
		var nextRow=getNextInCol(col,row-1,-1);
		// 没有找到下一个
		if (nextRow==-1) {
			return;
		}
		var next=cells[nextRow][col];
		if (current==0) {
			cells[row][col]=next;
			cells[nextRow][col]=0;
			// 移动操作不能改变行号
		}else if (current==next) {
			cells[row][col]=current+next;
			cells[nextRow][col]=0;
			score+=cells[row][col];
			row--;
		}else{
			// 当前行和查找的值不想等
			row--;
		}
	}
}
document.onkeydown = function(e) { //改变蛇方向 
	var code = e.keyCode - 37; 
	switch(code){ 
		case 1 : upAction();break;//上 
		case 2 : rightAction();break;//右 
		case 3 : downAction();break;//下 
		case 0 : leftAction();break;//左 
	} 
}
// 向左处理
function leftAction(){
	// 先判断能否向左移动
	if (canMoveLeft()) {
		// 向左移动
		for(var row=0;row<4;row++){
			// 移动
			leftRow(row);
		}
	// 生成 随机数
	randomNumber();
	// 更新视图
	updateView();
	}	
}
function canMoveLeft(){
	for(var col=1;col<4;col++){
		for(var row=0;row<4;row++){
			if(cells[row][col]!=0){
				if (cells[row][col-1]==0||cells[row][col]==cells[row][col-1]) {
					return true;
				}
			}
		}
	}
	return false;
}
function leftRow(row){
	for(var col=0;col<4;){
		// 获取当前的值
		var current=cells[row][col];
		// 尝试查找下一个数的位置
		var nextCol=getNextInRow(row,col+1,1);
		// 没有找到下一个
		if (nextCol==-1) {
			return;
		}
		var next=cells[row][nextCol];
		if (current==0) {
			cells[row][col]=next;
			cells[row][nextCol]=0;
			// 移动操作不能改变行号
		}else if (current==next) {
			cells[row][col]=current+next;
			cells[row][nextCol]=0;
			score+=cells[row][col];
			col++;
		}else{
			// 当前行和查找的值不想等
			col++;
		}
	}
}
function getNextInRow(row,col,step){
	while(true){
		// 判断是否越界
		if (col<0||col>=4) {
			return -1;
		}
		// 没有越界,格子的值不为零，返回一个行号
		if (cells[row][col]!=0) {
			return col;
		}
		col+=step;
	}
}
// 向右按钮处理
function rightAction(){
	// 向右移动列
	if (canMoveRight()) {
		// 逐列往右移动
		for(var row=0;row<4;row++){
			// 移动每一行的方法
			rightRow(row);
		}
		// 随机生成新数字
		randomNumber();
		// 更新视图
		updateView();
	}
}
function canMoveRight(){
	for(var col=0;col<3;col++){
		for(var row=0;row<4;row++){
			// 判断当前格子非零
			if (cells[row][col]!=0) {
				// 1、右方格子为空。2、右方格子数值与当前格子数值相同
				if (cells[row][col+1]==0||cells[row][col+1]==cells[row][col]) {
					return true;
				}
			}
		}
	}
	return false;
}
function rightRow(row){
	for(var col=3;col>=0;){
		// 获取当前的值
		var current=cells[row][col];
		// 尝试查找下一个数的位置
		var nextCol=getNextInRow(row,col-1,-1);
		// 没有找到下一个
		if (nextCol==-1) {
			return;
		}
		var next=cells[row][nextCol];
		if (current==0) {
			cells[row][col]=next;
			cells[row][nextCol]=0;
			// 移动操作不能改变行号
		}else if (current==next) {
			cells[row][col]=current+next;
			cells[row][nextCol]=0;
			score+=cells[row][col];
			col--;
		}else{
			// 当前行和查找的值不想等
			col--;
		}
	}
}
// 游戏结束
function gameOver(){
	// if (!full()&&!canMoveRight()&&!canMoveLeft()&&!canMoveDown()&&!canMoveUp()){
	// 	$('gameOver').style.display='block';
	// }
// 	// 能够移动，不结束
	if (canMoveUp()||canMoveDown()||canMoveLeft()||canMoveRight()) {
		return true;
	}
	// 判断格子有没有满
	if (full()) {
		$('gameOver').style.display='block';
		return false;
	}
	state=GAME_OVER;	
 }
