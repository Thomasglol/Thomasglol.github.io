var currentPlayer = 1;//current player 1 or two
var plays = 0;//counts number of plays taken

var board = document.querySelector("#board");//pointer to the form
//add event listeners
board.b0.addEventListener("click", takeTurn);
board.b1.addEventListener("click", takeTurn);
board.b2.addEventListener("click", takeTurn);
board.b3.addEventListener("click", takeTurn);
board.b4.addEventListener("click", takeTurn);
board.b5.addEventListener("click", takeTurn);
board.b6.addEventListener("click", takeTurn);
board.b7.addEventListener("click", takeTurn);
board.b8.addEventListener("click", takeTurn);



function takeTurn(){
	
	if(currentPlayer == 1 && this.value == ""){
		this.value = "X";
		currentPlayer = 2;
		this.style.color = "red";
		plays++;
		if(plays >= 5){
			checkWin();
		}//if
	}
	else if(currentPlayer == 2 && this.value == ""){
		this.value = "O";
		currentPlayer = 1;
		this.style.color = "green";
		plays++
		if(plays >= 5){
			checkWin();
		}//if
	}
	console.log("plays = " + plays);
}//end of takeTurn

function checkWin(){
	if(board.b0.value == board.b1.value && board.b1.value == board.b2.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	else if(board.b3.value == board.b4.value && board.b4.value == board.b5.value && board.b3.value != ""){
		announceWin(board.b3.value);
	}
	else if(board.b6.value == board.b7.value && board.b7.value == board.b8.value && board.b6.value != ""){
		announceWin(board.b6.value);
	}
	else if(board.b0.value == board.b3.value && board.b3.value == board.b6.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	else if(board.b1.value == board.b4.value && board.b4.value == board.b7.value && board.b1.value != ""){
		announceWin(board.b1.value);
	}
	else if(board.b2.value == board.b5.value && board.b5.value == board.b8.value && board.b2.value != ""){
		announceWin(board.b2.value);
	}
	else if(board.b0.value == board.b4.value && board.b4.value == board.b8.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	else if(board.b2.value == board.b4.value && board.b4.value == board.b6.value && board.b2.value != ""){
		announceWin(board.b2.value);
	}
	
	else if(plays == 9){
		announceCatsGame();	
	}
}//end of checkWin

function announceWin(winner){
	currentPlayer = -1;
	document.querySelector("#popup").innerHTML = '<img src="images/183568.png" alt="x button" id="xbutton"><h2>' + winner + ' Wins!</h2>';
	document.querySelector("#xbutton").addEventListener("click",hide);
	
	
	document.querySelector("#container").style.display = "flex";
}//end of announceWin

function announceCatsGame(){
	document.querySelector("#container").style.display = "flex";
}

document.querySelector("#xbutton").addEventListener("click",hide);

function hide(){
	document.querySelector("#container").style.display = "none";
}
