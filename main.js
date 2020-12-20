/**Created by JYL on 2014/6/9 ...*/
//定义一个javascript数据
var board =new Array();

$(function () {
    newgame();
});
function newgame() {
    //初始化棋盘格
    init();
}
function init() {
    for (var i=0; i<4;i++){
        //定义了一个二维数组
        board[i] =new Array();
        for (var j=0;j<4;j++){
            board[i][j]=0;
            var gridCell = $("#grid-cell-"+i+"_"+j);
            //
        }
    }
}