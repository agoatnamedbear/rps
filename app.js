const computerChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn");

// Get computer selection
const computerChoice = () => {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// Get player selection
