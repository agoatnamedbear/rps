const computerChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn");

// Get computer selection
const computerChoice = () => {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// Get player selection
let playerChoice = () => {
  let choice;
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      choice = e.target.value;
      console.log(button.value);
    });
  });
  return choice;
};
playerChoice();
// const playRound = (playerSelection, computerSelection) => {
//   if (playerSelection === computerSelection) {
//     return "It's a draw!";
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
//   ) {
//     playerScore++;
//     return "Player wins this round";
//   } else {
//     computerScore++;
//     return "Computer wins this round";
//   }
// };

// const playGame = () => {
//   while (playerScore < 5 && computerScore < 5) {
//     const playerSelection = playerChoice();
//     const computerSelection = computerChoice();
//     const roundResult = playRound(playerSelection, computerSelection);

//     console.log(`Player Selection: ${playerSelection}`);
//     console.log(`Computer Selection: ${computerSelection}`);
//     console.log(`Round Result: ${roundResult}`);
//     console.log(`Player Score: ${playerScore}`);
//     console.log(`Computer Score: ${computerScore}`);
//   }

//   if (playerScore > computerScore) {
//     console.log("Player Wins the Game!");
//   } else {
//     console.log("Computer Wins the Game!");
//   }
// };

// playGame();
