let bars = document.getElementsByClassName("bar");
let tags = document.getElementsByClassName("priceTag");
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.height = `${data[i].amount * 3}px`;
      tags[i].innerHTML = `$${data[i].amount}`;
      bars[i].addEventListener("mouseover", function(event){ displayPriceTag(event, i); });
      bars[i].addEventListener("mouseout", function(){ displayPriceTag(event, i); });
    }
  });

function displayPriceTag(event, selector){
  if (event.type === "mouseover"){
    tags[selector].style.display = "block";
  } else {
    tags[selector].style.display = "none";
  }
}

// function make current day blue
