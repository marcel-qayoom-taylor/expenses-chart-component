let bars = document.getElementsByClassName("bar");
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.height = `${data[i].amount * 3}px`;
    }
  });

// function show prices on hover

// function make current day blue
