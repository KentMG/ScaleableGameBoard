let BoardWidth;
let BoardHeight;
let Board=document.getElementById('board');
let BoardSize=600;
let BoardSizepx="600px";
let TileSize;
let TileSizeW;
let TileSizeH;
let Tiles={};



function makeBoard(){
	TileSize=document.getElementById('tileSize').value;
	BoardHeight=document.getElementById('boardHeight').value;
	BoardWidth=document.getElementById('boardWidth').value;
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
}