/**************************************************************
Variable Creation
**************************************************************/
let BoardWidth;
let BoardHeight;
let Board=document.getElementById('board');
let BoardSize=600;
let BoardSizepx="600px";
let TileSize;
let TileSizeW;
let TileSizeH;
let Tiles={};


/**************************************************************
Create the tiles according to input on the html page.
**************************************************************/
function makeBoard(){
	TileSize=document.getElementById('tileSize').value;
	BoardHeight=document.getElementById('boardHeight').value;
	BoardWidth=document.getElementById('boardWidth').value;
	Board.innerHTML="";
	for(i=0;i<BoardHeight;i++){
		for(j=0;j<BoardWidth;j++){
			Board.innerHTML+=("<input type='button' class='Tile' id='" + i + "-" + j + "'></div>");
		}
	}	
	Tiles=document.getElementsByClassName('Tile');
	if(TileSize==""){
		scaleOffBoard();
	}
	else{
		scaleOffTile();
	}
}
/**************************************************************
If they do not specify a tile size then the tiles are scaled 
off of the set board size.
**************************************************************/
function scaleOffBoard(){
	TileSizeW=Math.floor(Number(parseInt(BoardSize)/Number(BoardWidth)));
	TileSizeW+="px";
	TileSizeH=Math.floor(Number(parseInt(BoardSize)/Number(BoardHeight)));
	TileSizeH+="px";
	Board.style.width=BoardSizepx;
	for(i=0;i<Tiles.length;i++){
		Tiles[i].style.width=TileSizeW;
		Tiles[i].style.height=TileSizeH;
	}
}
/**************************************************************
If they specify a tile size then the board is sized according
to the size of the tiles.
**************************************************************/
function scaleOffTile(){
	BoardSizepx=((TileSize*BoardWidth) + "px");
	Board.style.width=BoardSizepx;
	BoardSizepx=((TileSize*BoardHeight) + "px");
	Board.style.height=BoardSizepx;
	TileSizeH=(TileSize + "px");
	TileSizeW=TileSizeH;
	for(i=0;i<Tiles.length;i++){
		Tiles[i].style.width=TileSizeW;
		Tiles[i].style.height=TileSizeH;
	}
	for(i=2; i<7;i++){
		for(j=3;j<6;j++){
			document.getElementById(i + "-" + j).style.backgroundColor = "#00FF00";
		}
	}
}
let child1 , child2 = [2,3,4];
grass = [child1, child2];
for(i=0; i<grass.length; i++){
	grass[1][4];
}

document.body.addEventListener(keyof, function(e){
	moveBy(e);
});

function moveBy(e){
	if(e = 'a'){
		moveBy(x-1, y);
	}
	if(e = 'w'){
		moveBy(x, y-1);
	}
	if(e = 's'){
		moveBy(x, y+1);
	}
	if(e = 'd'){
		moveBy(x+1, y);
	}
}
function moveBy(hor, vert){
	for(var i = hor-10; i< x + hor+11; i++){
		for(var j = vert - 10; i<vert + 11;i++){

		}
	}
	x = hor;
	y = vert;
}