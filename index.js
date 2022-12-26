// import * as data from './data.json';

window.onload = function () {
  console.log("Hello world!");
  setBarHeights();
};

console.log("Hello world!");
let bars = document.getElementsByClassName("bar");
for (let i = 0; i < bars.length; i++) {
  bars[i].style.height = `${data[i].amount}px`;
}

// function show prices on hover

// function make current day blue
