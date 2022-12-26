import * as data from "./data.json" assert { type: "json" };

window.onload = function () {
  setBarHeights();
};

function setBarHeights() {
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.height = `${data[i].amount}px`;
  }
}

// function show prices on hover

// function make current day blue
