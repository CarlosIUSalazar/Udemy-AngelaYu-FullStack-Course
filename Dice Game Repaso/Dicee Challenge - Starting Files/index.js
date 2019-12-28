var randomNumber1 = (Math.floor(Math.random() * 6 + 1));
var randomNumber2 = (Math.floor(Math.random() * 6 + 1));
document.querySelector("div div img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("div").lastElementChild.lastElementChild.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("H1").innerHTML = "🚩Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("H1").innerHTML = "Player 2 Wins🚩!";
  }
  else if (randomNumber1 === randomNumber2) {
    document.querySelector("H1").innerHTML = "It's a Tie!";
  }
