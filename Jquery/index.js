// $("button").on("click",function(){
//   $("h1").toggle();     //.show .hide .toggle
// })

// $("button").on("click",function(){
//   $("h1").fadeOut();    //.slideup  .slidedown .slideToggle
// })
//
// $("button").on("click", function(){
//   $("h1").animate({opacity: 0.5});   //you can only add css properties that have numeric value (eg. "red" no se puede) eg. Margin 20px si se piuede.
// })

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
})


// $("h1").text("Bye");
//
// $("button").html("<em>Hey</em>");
//
// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function() {
//   $("h1").css("color", "purple");
// })
//
// $("button").click(function() {
//   $("h1").css("color","purple");
// })
//
// $("input").keypress(function() {
//   console.log(event.key);
// })
//
// $("body").keypress(function(){  //It can be also $(document).keypress(function(){})
//   console.log(event.key);
// })
//
// $(document).keypress(function(){
//   $("h1").text(event.key);
// })
//
// $("h1").on("mouseover",function(){   //Any events in here https://developer.mozilla.org/en-US/docs/Web/Events
//   $("h1").css("color","purple");
// })
//
// $("h1").on("click",function(){  ////Any events in here https://developer.mozilla.org/en-US/docs/Web/Events
//   $("h1").css("color","purple");
// })

//Adding buttons on the fly:
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

//Removes all burrons on webpage:
//$("button").remove();
