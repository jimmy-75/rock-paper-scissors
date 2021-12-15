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
const playerInput = 'papEr';
const playerChoice = playerInput.toLowerCase();
//make userInput case insensitive
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
            return 'You win!  Rock beats scissors!!!';
          } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
              return 'You lose!  Scissors beat paper!!!';
            } else if (playerChoice == 'scissors'  && computerChoice == 'paper') {
                return 'You win!  Scissors beat paper!!!';
              }
}   
console.log(playRound(playerChoice, computerChoice))