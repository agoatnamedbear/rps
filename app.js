const computerChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn");

// Get computer choice
const computerChoice = () => {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// Get player choice
const playerChoice = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection = button.value;
      console.log(playerSelection);
      return playerSelection;
    });
  });
};
playerChoice();
