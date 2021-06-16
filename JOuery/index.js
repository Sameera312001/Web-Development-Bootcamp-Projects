//JQuery...

$("h1").css("color", "pink");
$("a").attr("href", "https://www.yahoo.com");


//click eventlistener...
//Detecting and changing color when we click on h1.
$("h1").click(function(){
  $("h1").css("color", "purple");
});


//Detecting and changing color when we click on button.
$("button").click(function(){
  $("h1").css("color", "blue");
});


//keydown eventlistener...
//Detecting and changing the txt in h1 when we type in our keyboard.
$("input").keydown(function(event){
  $("h1").text(event.key);
});


//mouseover eventlistener
//moving our mouse over h1 in order to change its color.
$("h1").mouseover(function(){
  $("h1").css("color", "orange");
});

//Adding Animations to website...
//1.
$("button").on("click", function(){
  $("h1").hide();
});

//2.
$("button").on("click", function(){
  $("h1").toggle();
});

//3.
$("button").on("click", function(){
  $("h1").fadeToggle();
});

//4.
$("button").on("click", function(){
  $("h1").fadeIn();
});

//5.
$("button").on("click", function(){
  $("h1").fadeOut();
});

//6.
$("button").on("click", function(){
  $("h1").slideUp();
});

//7.
$("button").on("click", function(){
  $("h1").slideToggle();
});

//8.
$("button").on("click", function(){
  $("h1").slideDown();
});

//9.
$("button").on("click", function(){
  $("h1").animate({opacity: 0.5});
});

//Chaining animations together
$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({margin : "20%"});
});
