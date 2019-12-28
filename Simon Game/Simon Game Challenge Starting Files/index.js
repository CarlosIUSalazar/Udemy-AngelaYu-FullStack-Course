
var started = false;
var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];



$(document).keypress(function(){
  if (started == false) {
    $("h1").text("Level "+level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});


function nextSequence() {
  //step 8.6
  userClickedPattern = [];

  level++;
  $("h1").text("Level "+level);

  var randomNumber = (Math.floor(Math.random() * 4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour+"").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

    console.log(userClickedPattern);

}

function playSound(name){
  var colourAudio = new Audio("sounds/" + name + ".mp3");
  colourAudio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");

  var delayInMilliseconds = 100; //100 millisecond
  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, delayInMilliseconds);
}

function checkAnswer(currentLevel){
    console.log(userClickedPattern);
    console.log(gamePattern);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
          nextSequence();
        },1000);
      }
    } else {
        console.log("wrong");
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");
        },100);

        $("h1").text("Gave Over, Press Any Key To Restart");
        startOver();
      }
}


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
