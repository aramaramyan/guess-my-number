"use strict";

const root = document.querySelector(".root");

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

  section.appendChild(numberInput);
  section.appendChild(checkButton);

  return section;
}

App(createHeader(), createMain(sectionLeft()));