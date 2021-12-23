
//User input
let playerInput 
let playerChoice
//Make variables for round #, playerScore, computerScore
let playerScore = 0;
let computerScore = 0;
let playerWins, computerWins
let computerChoice

//Create computerPlay function
function computerPlay() {
  //create array for computerChoice
  let choices = ['rock', 'paper', 'scissors']; 
  //randomly select from array for computerChoice
  computerChoice = choices[Math.floor(Math.random()*choices.length)];
  //return result for computerChoice
  return computerChoice;
}

// create singleRound function
function playRound(playerChoice, computerChoice) {
  computerChoice = computerPlay();
  //take player input for playerChoice
  playerInput = prompt('Choose rock, paper, scissors');
  //make player input lowercase
  playerChoice = playerInput.toLowerCase();
  // userChoice vs computerChoice
  //decides winner
  //returns message
  //add score to player, computer
  if (playerChoice === computerChoice) {
    playerWins = false;
    computerWins = false;
    console.log('It\'s a tie!!!');
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
      playerWins = false;
      computerWins = true;      
      console.log('You Lose! Paper beats rock!!!');
  } else if (playerChoice === 'paper' && computerChoice === 'rock') { 
      playerWins = true;
      computerWins = false;
      console.log('You win! Paper beats rock!!!');
  } else if (playerChoice === 'scissors'  && computerChoice === 'rock') {
      playerWins = false;
      computerWins = true;
      console.log('You Lose!  Rock beats scissors!!!');
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      playerWins = true;
      computerWins = false;
      console.log('You win!  Rock beats scissors!!!');
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      playerWins = false;
      computerWins = true;
      console.log('You lose!  Scissors beat paper!!!');
  } else if (playerChoice === 'scissors'  && computerChoice === 'paper') {
      playerWins = false;
      computerWins = true;
      console.log('You win!  Scissors beat paper!!!');
  }
} 
//create game function
function game() {
  //create loop, iterate 5 rounds
  for (round = 1; round <= 5; round ++) {
    playRound(playerChoice, computerChoice);
      if (playerWins) {
        playerScore++;
      }  else if (computerWins) {
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




