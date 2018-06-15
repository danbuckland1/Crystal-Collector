var wins = 0;
var losses = 0;
var score = [];
var sum = 0;
var randomNumber 
var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//Random number is diplayed at start of game that is between 18-120
var randomNumber = Math.floor(Math.random() * 120 + 1);
document.getElementById('random').innerHTML;


console.log("randomNumber:" + randomNumber);

$("#random").text(randomNumber);

//crystals have an assigned random number between 1-12
var crystalNumbers = Math.floor(Math.random() * 12 + 1);
// for(i = 0; i <= crystalNumbers.length; i++){

    // console.log("crystalNumbers:" + crystalNumbers);
// }

//
var blue = Math.floor(Math.random() * 12 + 1);
console.log("blue" + blue);

var green = Math.floor(Math.random() * 12 + 1);
console.log("green" + green);

var red = Math.floor(Math.random() * 12 + 1);
console.log("red" + red);

var purple = Math.floor(Math.random() * 12 + 1);
console.log("purple" + purple);


// for (var i = 0; i < score.length; i++) {
//     sum += score[i]

//     console.log(sum);
//   }




$("#blueGem").on("click", function(){
    alert("Blue gem clicked!"); 
    score.push(blue);
    sum = sum + blue;
    console.log("sum" + sum);

    console.log("score" + score);
});
$("#greenGem").on("click", function(){
    alert("Green gem clicked!");
    score.push(green);
    sum = sum + green;
    console.log("sum" + sum);

    console.log("score" + score);
 
});
$("#redGem").on("click", function(){
    alert("Red gem clicked!");
    score.push(red);
    sum = sum + red;
    console.log("sum" + sum);

    console.log("score" + score);   
});
$("#purpleGem").on("click", function(){
    alert("Purple gem clicked!");  
    score.push(purple);
    sum = sum + purple;
    console.log("sum" + sum);

    console.log("score" + score); 
});

//Print sum to total score on each click


//If total score equals sum of random number chosen win goes up

//If total score is greater than random number loss goes up

//Use start game function to reset when player wins or loses, values of gems and score









// var crystalPic = $("<img>");

// crystalPic.addClass("gem");

// crystalPic.attr("src", "assets/images/gem1.png");
// crystalPic.attr("src", "assets/images/gem2.png");
// crystalPic.attr("src", "assets/images/gem3.png");
// crystalPic.attr("src", "assets/images/gem4.png");

// crystalPic.attr("data-crystalvalue", crystalNumbers[i]);

//user clicks crystal
// $(".gem").on("click", function(){
//     var crystalValue = $(this).data("crystalvalue");
//     alert(crystalValue);

//     crystalValue = parseInt(crystalValue);

//     wins += crystalValue;
    

// })



// }


//That number is then added to score

//When user's are clicks equal to the random number, win goes up one point with text alert on page

//If clicks go over random number, loss goes up with text alert on page.


//After each win or loss, a new random number is selected and new random value is given to each crystal


//Score resets.
