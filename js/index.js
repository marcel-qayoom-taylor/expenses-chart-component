let tags = document.getElementsByClassName("priceTag");
let day = moment().format('ddd').toLowerCase();
let bars = document.querySelectorAll(".bar");

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

// Make current day blue
for (let i = 0; i < bars.length; i++){
  if (bars[i].children[0].innerText === day){
    console.log(bars[i]);
    bars[i].style.backgroundColor = "hsl(186, 34%, 60%)";
    break;
  }
}

function displayPriceTag(event, selector){
  if (event.type === "mouseover"){
    tags[selector].style.display = "block";
  } else {
    tags[selector].style.display = "none";
  }
}
