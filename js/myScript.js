//Create computerPlay function
function computerPlay() {
  //create array for computerChoice
  const choices = ['rock', 'paper', 'scissors']; 
  //randomly select from array for computerChoice
  var computerChoice = choices[Math.floor(Math.random()*choices.length)];
  //return result for computerChoice
  return computerChoice;
}
//User input
const playerInput = "";
//Make playerInput lowercase
const playerChoice = playerInput.toLowerCase();
//Make variables for round #, playerScore, computerScore
let round = 0;
let playerScore = 0;
let computerScore = 0;

//make playerInput case insensitive
let computerChoice = computerPlay();

//increment round by one
function countRound() {
   return round ++;
}

//increment computerScore by one
function addComputerScore() {
  return computerScore ++;
}

//increment playerScore by one
function addPlayerScore() {
  return playerScore ++;
}

// create singleRound function
function playRound(playerChoice, computerChoice) {
  // userChoice vs computerChoice
  //decides winner
  //returns message
  if (playerChoice == computerChoice) {
    return 'It\'s a tie!!!';
  } else if (playerChoice == 'rock' && computerChoice == 'paper') {
      console.log('You Lose! Paper beats rock!!!');
      return addComputerScore();
    } else if (playerChoice == 'paper' && computerChoice == 'rock') { 
        console.log('You win! Paper beats rock!!!');
        return addPlayerScore();
      } else if (playerChoice == 'scissors'  && computerChoice == 'rock') {
          console.log('You Lose!  Rock beats scissors!!!');
          return addComputerScore();
        } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
            console.log('You win!  Rock beats scissors!!!');
            return addPlayerScore();
          } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
              console.log('You lose!  Scissors beat paper!!!');
              return addComputerScore();
            } else if (playerChoice == 'scissors'  && computerChoice == 'paper') {
                console.log('You win!  Scissors beat paper!!!');
                return addPlayerScore();
              }
}   
function game() {
  let playerInput = prompt('Choose rock, paper, ,scissors');
  playRound(playerChoice, computerChoice);
  return {
    computerScore,
    playerScore
  };
  let

}
console.log(playRound(playerChoice, computerChoice))
//create game() function
