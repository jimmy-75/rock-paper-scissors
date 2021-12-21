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
let playerScore = 0;
let computerScore = 0;
let playerWins, computerWins
let computerChoice = computerPlay();

// create singleRound function
function playRound(playerChoice, computerChoice) {
  //take player input for playerChoice
  let playerInput = prompt('Choose rock, paper, ,scissors');
  // userChoice vs computerChoice
  //decides winner
  //returns message
  //add score to player, computer
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!!!';
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
      playerWins = false;
      computerWins = true;      
      return 'You Lose! Paper beats rock!!!';
  } else if (playerChoice === 'paper' && computerChoice === 'rock') { 
      playerWins = true;
      computerWins = false;
      return 'You win! Paper beats rock!!!';
  } else if (playerChoice === 'scissors'  && computerChoice === 'rock') {
      playerWins = false;
      computerWins = true;
      return 'You Lose!  Rock beats scissors!!!';
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      playerWins = true;
      computerWins = false;
      return 'You win!  Rock beats scissors!!!';
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      playerWins = false;
      computerWins = true;
      return 'You lose!  Scissors beat paper!!!';
  } else if (playerChoice === 'scissors'  && computerChoice === 'paper') {
      playerWins = false;
      computerWins = true;
      return 'You win!  Scissors beat paper!!!';
  }
} 
//create game function
function game() {
  //create loop, iterate 5 rounds
  for (round = 1; round <= 5; round ++) {
    playRound(playerChoice, computerChoice);
      if (playerWins == true) {
        playerScore++;
      }  else if (computerWins == true) {
        computerScore++;
      }
    
  } 
  console.log(`Your score is ${playerScore}
  The computer\'s score is ${computerScore}.`);
  if (playerScore > computerScore) {
    console.log('You win overall!!');
  } else {
    console.log('Computer wins overall');
  }
}

game();



