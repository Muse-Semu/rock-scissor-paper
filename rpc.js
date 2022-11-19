const weaponBtn = document.querySelectorAll("[btn]");
const yourChoice = document.querySelector("[yourChoice]");
const computerChoice = document.querySelector("[computerChoice]");
const yourResult = document.querySelector("[yourResult]");
const computerResult = document.querySelector("[computerResult]");
const beater = document.querySelector("[beater]");
const winner = document.querySelector("[winner]");
const disc = document.querySelector("[disc]");
choice = document.querySelector(".choice");
results = document.querySelector(".result");

let yourScore = 0;
let computerScore = 0;

computerWeapon = ["Paper", "Scissor", "Rock"];

weaponBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (yourScore === 4 || computerScore === 4) {
      declareWinner();
      clearResults();
      //   winner.innerHTML = "You Won the game";
      createTryAgainButton();
    } else {
      beater.innerHTML = "";
      playerSelection = button.innerText;
      computerSelection = computerPlayed();
      showChoice(playerSelection, computerSelection);
      showScore(playerSelection, computerSelection);
    }
  });
});

function showChoice(playerSelection, computerSelection) {
  yourChoice.innerHTML = "Your choice is : " + playerSelection;
  computerChoice.innerHTML = "Computer Choice : " + computerSelection;
}

function showScore(playerSelection, computerSelection) {
  if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissor") ||
    (playerSelection === "Scissor" && computerSelection === "Paper")
  ) {
    bool = true;
    yourScore = ++yourScore;

    if (bool === true) {
      beater.innerHTML = `You Won !  ${playerSelection} beats ${computerSelection}`;
    }
    yourResult.innerHTML = yourScore;
  } else if (computerSelection == playerSelection) {
    beater.innerHTML = `Ohh a tie Game`;
  } else if (
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Rock" && playerSelection === "Scissor") ||
    (computerSelection === "Scissor" && playerSelection === "Paper")
  ) {
    bool = true;
    computerScore = ++computerScore;
    if (bool === true) {
      beater.innerHTML = `You lose ! ${computerSelection}  beats ${playerSelection}`;
    }
    computerResult.innerHTML = computerScore;
  }
}

function computerPlayed() {
  return computerWeapon[~~(Math.random() * computerWeapon.length)];
}

function resetGame() {
  yourChoice.innerHTML = "";
  computerChoice.innerHTML = "";
  yourScore = 0;
  computerScore = 0;
  beater.innerHTML = "";
  yourResult.innerHTML = "0";
  computerResult.innerHTML = "0";
  winner.innerHTML = "";
  disc.innerHTML = "Choice your Weapon";
}

function clearResults() {
  choice.style = "display:none";
  results.style = "display:none";
  disc.innerHTML = "";
}

function createTryAgainButton() {
  tryAgain = document.createElement("button");
  tryAgain.className = "win";
  tryAgain.textContent = "Play Again";
  tryAgain.setAttribute(
    "style",
    "color:blue;background:white;padding:6px;border-box:10px;margin:2rem"
  );
  winner.appendChild(tryAgain);

  tryAgain.addEventListener("click", () => {
    choice.style = "display:flex";
    results.style = "display:grid";
    resetGame();
  });
}

function declareWinner() {
  if (yourScore > computerScore) {
      winner.innerHTML = "You win the game";
      yourResult.innerHTML = yourScore + 1;
  } else {
      winner.innerHTML = "You loose the game";
      computerResult.innerHTML = computerScore + 1
  }
}
