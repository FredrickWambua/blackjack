// variables
var firstCard = 56;
var secondCard = 13;
var sum = firstCard + secondCard ;
var age = 22;
var hasBlackJack = false;
var message = "";

//start game function
function startGame(){
    // if statement on sum range
if (sum <= 20){
    message ="Do you want to draw a new card?";
} else if (sum === 21){
    message = "Great! You have a blackjack!";
    hasBlackJack = true;
} else {
    message = "You are out of the game";
} 
// if statement on age range
if (age <= 21){
    console.log("You can not enter the club")
} else {
    console.log("You are welcome!")
}
console.log(message)
}
