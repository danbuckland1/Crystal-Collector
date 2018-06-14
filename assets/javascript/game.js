var wins = 0;
var losses = 0;
var score = 0;
var randomNumber 
var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//Random number is diplayed at start of game that is between 18-120
var randomNumber = Math.floor(Math.random() * 120 + 1);
document.getElementById('random').innerHTML;


console.log(randomNumber);

$("#random").text(randomNumber);

//crystals have an assigned random number between 1-12
var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for(i = 1; i <= crystalNumbers.length; i++){
    console.log([i]);
var crystalPic = $("<img>");

crystalPic.addClass("gem");

crystalPic.attr("src", "assets/images/gem1.png");
crystalPic.attr("src", "assets/images/gem2.png");
crystalPic.attr("src", "assets/images/gem3.png");
crystalPic.attr("src", "assets/images/gem4.png");

crystalPic.attr("data-crystalvalue", crystalNumbers[i]);

//user clicks crystal
$(".gem").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    alert("hi");

    crystalValue = parseInt(crystalValue);

    wins += crystalValue;
    

})



}


//That number is then added to score

//When user's are clicks equal to the random number, win goes up one point with text alert on page

//If clicks go over random number, loss goes up with text alert on page.


//After each win or loss, a new random number is selected and new random value is given to each crystal


//Score resets.
