"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

function selctor(element, value) {
  document.querySelector(element).textContent = value;
}

document.querySelector(".check").addEventListener("click", function () {
  let click = new Audio("/click.mp3");
  click.play();
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    selctor(".message", "not a number ⛔");
    let error = new Audio("/error1.mp3");
    error.play();
  } else if (guess === secretNumber) {
    document.body.style.background =
      "linear-gradient( 109.6deg,  rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% )";
    selctor(".message", "corect number 🎉");
    selctor(".number", secretNumber);
    let win = new Audio("/win.wav");
    win.play();
    this.style.cursor = "not-allowed";
    this.disabled = true;
    if (score > highScore) {
      highScore = score;
      selctor(".highscore", highScore);
    } else if (highScore >= 20) {
      highScore++;
      selctor(".highscore", highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      selctor(".message", guess > secretNumber ? "to high 📈" : "to low 📉");
      score--;
      selctor(".score", score);
    } else {
      selctor(".message", "You lost the game 💥");
      document.body.style.background =
        "linear-gradient(141deg, rgba(168,9,9,1) 47%, rgba(247,36,9,1) 75%)";
      this.style.cursor = "not-allowed";
      this.disabled = true;
      let over = new Audio("/game over.wav");
      over.play();
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  selctor(".message", "Start guessing...");
  selctor(".number", "?");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.background =
    "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)";
  score = 20;
  selctor(".score", score);
  document.querySelector(".check").style.cursor = "pointer";
  document.querySelector(".check").disabled = false;
  document.querySelector(".guess").value = "";
});
