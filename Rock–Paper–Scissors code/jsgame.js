const point = JSON.parse(localStorage.getItem("score")) || {
  Win: 0,
  Lose: 0,
  Tie: 0,
  Total: 0
};

function reset() {
  point.Win = 0;
  point.Lose = 0;
  point.Tie = 0;
  point.Total = 0;

  localStorage.removeItem("score");

  document.querySelector('.your-move').innerHTML = "";
  document.querySelector('.computer-move').innerHTML = "";
  document.querySelector('.result').innerHTML = "";

  updateScoreDisplay();
}
function store_point(result) {
  if (result === "You Lose!") point.Lose++;
  else if (result === "You Win!") point.Win++;
  else point.Tie++;

  point.Total++;
  localStorage.setItem("score", JSON.stringify(point));
}
 function updateScoreDisplay() {
  document.querySelector(".Win").innerHTML = `Win: ${point.Win}`;
  document.querySelector(".Lose").innerHTML = `Lose: ${point.Lose}`;
  document.querySelector(".Tie").innerHTML = `Tie: ${point.Tie}`;
  document.querySelector(".Total").innerHTML = `Total: ${point.Total}`;
}
function display(user, computer_move) {
  let result;

  if (user === computer_move) {
    result = "Tie";
  } else if (
    (user === "rock" && computer_move === "scissors") ||
    (user === "paper" && computer_move === "rock") ||
    (user === "scissors" && computer_move === "paper")
  ) {
    result = "You Win!";
  } else {
    result = "You Lose!";
  }

  store_point(result);
  updateScoreDisplay();

  document.querySelector(".your-move").innerHTML = `Your move: ${user}`;
  document.querySelector(".computer-move").innerHTML = `Computer move: ${computer_move}`;
  document.querySelector(".result").innerHTML = result;
}
function computer(user) {
  let random = Math.random();
  let computer_move =
    random < 1/3 ? "rock" :
    random < 2/3 ? "paper" :
    "scissors";

  display(user, computer_move);
}
