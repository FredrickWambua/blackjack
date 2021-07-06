// variables
var firstCard = 8;
var secondCard = 1;
var sum = firstCard + secondCard ;

// if statement
if (sum < 21){
    console.log("Do you want to draw a new card?");
} else if (sum === 21){
    console.log("Great! You have a blackjack!");
} else if(sum > 21){
    console.log("You are out of the game");
} 
    