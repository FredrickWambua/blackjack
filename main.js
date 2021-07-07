// variables
var firstCard = 13;
var secondCard = 11;
var cards =[firstCard, secondCard]
var sum = firstCard + secondCard ;
var age = 22;
var hasBlackJack = false;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardEl =document.getElementById("cards-el");

// starting game function
function startGame(){
    renderGame()
}
//rendering game function
function renderGame(){
    cardEl.textContent = `Cards: ${cards[0]}, ${cards[1]}`
    sumEl.textContent = `Sum : ${sum}`
    // if statement on sum range
if (sum <= 20){
    message ="Do you want to draw a new card?";
} else if (sum === 21){
    message = "Great! You have a blackjack!";
    hasBlackJack = true;
} else {
    message = "You are out of the game.";
} 

//message display
messageEl.textContent = message;
}

function newCard(){
    console.log("Drawing a new card from the deck");
    let card = 8;
    sum += card;
    cards.push(card)
    console.log(cards)
    renderGame();
}

for (let i= 0; i < cards.length; i++){
    console.log(cards[i])
}

// if statement on age range
// if (age <= 21){
//     console.log("You can not enter the club")
// } else {
//     console.log("You are welcome!")
// }