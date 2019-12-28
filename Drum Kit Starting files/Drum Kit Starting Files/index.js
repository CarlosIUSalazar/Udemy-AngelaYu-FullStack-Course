//Cuantos objetos con clase drum hay
var numberOfDrums = document.querySelectorAll(".drum").length;

//usa un for para loopear el array que regresa querySelectorAll
for (i=0; i<numberOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
  console.log(this.innerHTML);
  this.style.color = "white";
  // var audio = new Audio('sounds/tom-1.mp3');
  // audio.play();

  });

}

// Alternatively use that doesn't use an "Anonimous function" way:
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//   alert("I got clicked");
// }
