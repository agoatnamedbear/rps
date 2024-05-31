const buttons = document.querySelectorAll(".btn");
const playrScore = document.querySelector(".plyrScore");
const compScore = document.querySelector(".compScore");
const roundWinner = document.querySelector(".round_winner");
const gameWinner = document.querySelector(".game_winner");
const reset = document.querySelector(".resetBtn");

let playerScore = 0;
let computerScore = 0;

// Get computer choice
const computerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

// Get player choice
const playerChoice = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection = button.value;
      let computerSelection = computerChoice();
      playGame(playerSelection, computerSelection);
    });
  });
};
playerChoice();
const playGame = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    roundWinner.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    roundWinner.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
  playrScore.textContent = playerScore;
  compScore.textContent = computerScore;

  gameOver();

  if (playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    gameWinner.textContent = "You won the game!";
  } else if (computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    gameWinner.textContent = "You lost the game!";
  } else {
    gameWinner.textContent = "";
  }

  resetGame();
};

const gameOver = () => {
  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
};

const resetGame = () => {
  reset.addEventListener("click", () => {
    playrScore.textContent = 0;
    compScore.textContent = 0;
    roundWinner.textContent = "";
    gameWinner.textContent = "";
    buttons.forEach((button) => {
      button.disabled = false;
    });
  });
};
