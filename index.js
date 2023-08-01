function playRound(playerSelection, computerSelection) {
  // your code here!
  if ((computerSelection == "rock" && playerSelection == "scissors") ||
  (computerSelection == "paper" && playerSelection == "rock") ||
  (computerSelection == "scissors" && playerSelection == "paper")){
    console.log ("computer wins")
  }

  return "hi";
}
 
const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function getComputerChoice() {
    return "scissors";
}

