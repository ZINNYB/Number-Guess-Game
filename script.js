"use strict";
const body = document.querySelector("body");
const message = document.querySelector(".message");
const num = document.querySelector(".number");
const score = document.querySelector(".score");
let scoreValue = 20;
let randomNum = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector(".check");
const reset = document.querySelector(".again");
let highScore = document.querySelector(".highscore");
let highScoreValue = 0;

// the Dom and dom methods are part of webApis These are libraries that browsers implement
/**
 * These libraries are also written in Javascript
 */

// Message
const displayMessage = function (message) {
  message.textContent = message;
};

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // Function To Create Audio Element
  const audioElem = function (src, path) {
    const audio = document.createElement("audio");
    const source = document.createElement("source");
    source.setAttribute(src, path);
    audio.setAttribute("controls", "autoplay");
    audio.appendChild(source);
    audio.play();
    return audio;
  };

  // Guess
  if (!guess) {
    message.textContent = "Please input a Number";
  } else if (guess === randomNum) {
    // always use a string to define style values because javascript works with datatypes
    message.textContent = "Correct Number";
    body.style.background = "#60b347";
    num.style.width = "30rem";
    num.textContent = randomNum;
    audioElem("src", "audio/win.wav");

    // setting highScore
    if (highScoreValue < scoreValue) {
      highScoreValue = scoreValue;
      highScore.textContent = highScoreValue;
    }
  }
  //high or low randomNum
  else if (guess !== randomNum) {
    if (score.textContent >= 1) {
      message.textContent = guess > randomNum ? "Too high" : "Too low";
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      message.textContent = "you lost the game";
      audioElem("src", "audio/game-over.wav");
    }
  }
});

// RESET FUNCTIONALITY
reset.addEventListener("click", function () {
  Number((document.querySelector(".guess").value = ""));
  message.textContent = "Start guessing...";
  body.style.background = "#3f646d";
  num.style.width = "15rem";
  scoreValue = 20;
  score.textContent = scoreValue;
  num.textContent = "?";
  randomNum = Math.floor(Math.random() * 20) + 1;
});
