var wins = 0;
var losses = 0;
var score = 0;
var randomNumber 
//Random number is diplayed at start of game that is between 18-120
var randomNumber = Math.floor(Math.random() * 120 + 1);
document.getElementById('random').innerHTML;


console.log(randomNumber);


//crystals have an assigned random number between 1-12

//user clicks crystal
$(".gem1").on("click", function(){
    alert("hi");
})

$(".gem2").on("click", function(){
    alert("you did it");
})

$(".gem3").on("click", function(){
    alert("proud of you");
})

$(".gem4").on("click", function(){
    alert("good job");
})
//That number is then added to score

//When user's are clicks equal to the random number, win goes up one point with text alert on page

//If clicks go over random number, loss goes up with text alert on page.


//After each win or loss, a new random number is selected and new random value is given to each crystal


//Score resets.
