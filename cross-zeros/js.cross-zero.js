$(".cell").click (function(){
var id = $(this).attr('id');
// getting x,y coords from id of canvas-div
var x = id[0]-1;
var y = id[2]-1;
// check empty of cell
if(board[x][y]!=2){
return;
}
//1 - cross; 3- zero
var c = document.getElementById(id);
var ctx = c.getContext("2d");
ctx.lineWidth = 5;
if(t){
t = false;
board[x][y] = 3;
ctx.beginPath();
ctx.arc(50, 50, 45, 0, 2 * Math.PI);
ctx.stroke();
}
else{
t = true;
board[x][y] = 1;
for(var i = 5; i < 96; i++){
  animate(i, i, i+1, i+1, ctx);
}
for(var i = 5; i < 96; i++){
  animate(100-i, i, 100-i-1, i+1, ctx);
}
}
var res = checkEnd();
if(res != 2){
if(res == 0) $(".modal-body p").text("Draw");
if(res == 1) $(".modal-body p").text("Crosses win!");
if(res == 3) $(".modal-body p").text("Zeros win!");
$('#Modal').modal('show');
}


});

$('#Modal').on('hidden.bs.modal', function () {
refresh();
})


$("#refresh").click(function(){
refresh();
});

// variable to hold current sign: 1-cross or 3-zero
var t = false;

// start position of field / 2 - empty
var board = [
[2,2,2],
[2,2,2],
[2,2,2]];

// method for drawing elements line by line
function animate(x1, y1, x2, y2, ctx) {
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
}

// method for refresh playground

function refresh(){
$("canvas").each(function(){
this.getContext("2d").clearRect(0, 0, this.width, this.height);
});
t = false;
board = [
[2,2,2],
[2,2,2],
[2,2,2]];
}

//win - sum in some direction equives 3(crosses) or 9(zeros);

function checkEnd(){
var checkSumHorisontal = 0;
var checkSumVertical = 0;
var checkSumDiagonalMain = 0;
var checkSumDiagonalAnother = 0;
var checkDraw = true;
for (var i = 0; i < 3; i++){
for (var j = 0; j < 3; j++){
  checkSumHorisontal += board[i][j];
  checkSumVertical += board[j][i];
  if(board[i][j] == 2) checkDraw = false;
  if(i==j) checkSumDiagonalMain+= board[i][j];
  if(i+j == 2) checkSumDiagonalAnother+= board[i][j];
}
if(checkSumHorisontal == 3) return 1;
else if(checkSumHorisontal == 9) return 3;
else checkSumHorisontal = 0;
if(checkSumVertical == 3) return 1;
else if(checkSumVertical == 9) return 3;
else checkSumVertical = 0;
}
if(checkSumDiagonalMain == 3) return 1;
if(checkSumDiagonalMain == 9) return 3;
if(checkSumDiagonalAnother == 3) return 1;
if(checkSumDiagonalAnother == 9) return 3;

if(checkDraw) return 0;
return 2;
}
