let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) return "It's a tie!";
  
  const win = (humanChoice === "rock" && computerChoice === "scissors") ||
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper");

  if (win) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  for (let i = 0; i < 3; i++) {
    const result = playRound(getHumanChoice(), getComputerChoice());
    console.log(result);
  }
  return humanScore > computerScore ? "You win the game!" :
         computerScore > humanScore ? "You lose the game!" :
         "The game is a tie!";
}

console.log(playGame());
