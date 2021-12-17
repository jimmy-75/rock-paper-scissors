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
const playerInput = prompt('rock, paper, or scissors?');
//Make playerInput lowercase
const playerChoice = playerInput.toLowerCase();
//Make variables for round #, playerScore, computerScore
let round = 0;
let playerScore = 0;
let computerScore = 0;

//make playerInput case insensitive
const computerChoice = computerPlay();

// create singleRound function
function playRound(playerChoice, computerChoice) {
  // userChoice vs computerChoice
  //decides winner
  //returns message
  if (playerChoice == computerChoice) {
    return 'It\'s a tie!!!';
  } else if (playerChoice == 'rock' && computerChoice == 'paper') {
      return 'You Lose! Paper beats rock!!!';
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return 'You win! Paper beats rock!!!';
      } else if (playerChoice == 'scissors'  && computerChoice == 'rock') {
          return 'You Lose!  Rock beats scissors!!!';
        } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
            return 'You win!  Rock beats scissors!!!';;
          } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
              return 'You lose!  Scissors beat paper!!!';
            } else if (playerChoice == 'scissors'  && computerChoice == 'paper') {
                return 'You win!  Scissors beat paper!!!';
              }
}   
console.log(playRound(playerChoice, computerChoice))
//