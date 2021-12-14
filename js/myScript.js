//Create computerPlay function
function computerPlay() {
//create array for computerChoice
  const choices = ['Rock', 'Paper', 'Scissors']; 
//randomly select from array for computerChoice
  var computerChoice = choices[Math.floor(Math.random()*choices.length)];
//return result for computerChoice
  return computerChoice;
}