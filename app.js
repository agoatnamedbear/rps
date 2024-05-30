const computerChoices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn");

// Get computer choice
const computerChoice = () => {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};
const computerSelection = computerChoice();

// Get player choice
const playerChoice = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection = button.value;
      console.log(`Player chose ${playerSelection}`);
      console.log(`Computer chose ${computerSelection}`);
      playRound(playerSelection, computerSelection);
      return playerSelection;
    });
  });
};

playerChoice();

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log("Tie");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
};
