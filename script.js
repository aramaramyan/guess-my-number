"use strict";

const root = document.querySelector(".root");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
    highscore = 0;

function App(...sections) {
  sections.forEach(el => {
    root.appendChild(el);
  })
}

function createHeader() {
  const header    = document.createElement("header"),
        h1        = document.createElement("h1"),
        p         = document.createElement("p"),
        button    = document.createElement("button"),
        numberDiv = document.createElement("div");

  h1.insertAdjacentText("afterbegin", "Guess My Number!");
  p.insertAdjacentText("afterbegin", "(Between 1 and 20)");
  button.insertAdjacentText("afterbegin", "Again!");
  numberDiv.insertAdjacentText("afterbegin", "?");

  p.className = "between";
  button.className = "btn again";
  numberDiv.className = "number";

  button.addEventListener("click", () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".score").textContent = String(score);
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  })

  header.appendChild(h1);
  header.appendChild(p);
  header.appendChild(button);
  header.appendChild(numberDiv);

  return header;
}

function createMain(...sections) {
  const main = document.createElement("main");

  sections.forEach(el => {
    main.appendChild(el);
  })

  return main;
}

function sectionLeft() {
  const section     = document.createElement("section"),
        numberInput = document.createElement("input"),
        checkButton = document.createElement("button");

  section.className     = "left";
  numberInput.className = "guess";
  numberInput.type      = "number";
  checkButton.className = "btn check";

  checkButton.insertAdjacentText("afterbegin", "Check!");

  checkButton.addEventListener("click", () => {
    const guess = Number(numberInput.value);

    // When there is no input
    if(!guess) {
      document.querySelector(".message").textContent = "⛔️ No Number!";

      // When player wins
    } else if(guess === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector(".number").textContent = String(secretNumber);
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if(score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }

      // When guess is too high
    } else if(guess > secretNumber) {
      if(score > 1) {
        document.querySelector(".message").textContent = "📈 Too High!";
        score--;
        document.querySelector(".score").textContent = String(score);
      } else {
        document.querySelector(".message").textContent = " 🥲 You LOST The Game!";
        document.querySelector(".score").textContent = "0";
      }

      // When guess is too low
    } else if(guess < secretNumber) {
      if(score > 1) {
        document.querySelector(".message").textContent = "📉 Too Low!";
        score--;
        document.querySelector(".score").textContent = String(score);
      } else {
        document.querySelector(".message").textContent = " 🥲 You LOST The Game!";
        document.querySelector(".score").textContent = "0";
      }
    }
  });

  section.appendChild(numberInput);
  section.appendChild(checkButton);

  return section;
}

function sectionRight() {
  const section        = document.createElement("section"),
        message        = document.createElement("p"),
        labelScore     = document.createElement("p"),
        labelHighScore = document.createElement("p");

  section.className        = "right";
  message.className        = "message";
  labelScore.className     = "label-score";
  labelHighScore.className = "label-highscore";

  message.insertAdjacentText("afterbegin", "Start guessing...");
  labelScore.insertAdjacentHTML("afterbegin", "💯 Score: <span class=\"score\">20</span>");
  labelHighScore.insertAdjacentHTML("afterbegin", "🥇 Highscore: <span class=\"highscore\">0</span>");

  section.appendChild(message);
  section.appendChild(labelScore);
  section.appendChild(labelHighScore);

  return section;
}

App(createHeader(), createMain(sectionLeft(), sectionRight()));