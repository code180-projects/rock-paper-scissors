//define html variables
var userDisplay = document.getElementById("userDisplay")
var computerDisplay = document.getElementById("computerDisplay")
var resultDisplay = document.getElementById("resultDisplay")

//create user and computer
var user
var computer

//create choice prototype
function Choice(x, y) {
	this.choice= x;
	this.beats = y;
}

//create choices
var rock = new Choice("rock", "scissors");
var paper = new Choice("paper", "rock");
var scissors = new Choice("scissors", "paper");


//prepare computer choose function
var choices = [rock, paper, scissors]
function computerChoose(x){
	var index = Math.floor(Math.random() * x.length);
	computer = x[index];
}

//user chooses, causing computer to choose
function userChoose(choice){
	user = choice;
	userDisplay.innerHTML = "You: <b>"+user.choice+"</b>";
	computerChoose(choices);
	computerDisplay.innerHTML = "Computer: <b>"+computer.choice+"</b>";
	if(user.choice == computer.choice){
		resultDisplay.innerHTML = "Tie";
	} else if (user.beats == computer.choice) {
		resultDisplay.innerHTML = "You win!";
	} else {
		resultDisplay.innerHTML = "You lose";
	}
}
