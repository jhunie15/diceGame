var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDice1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDice2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDice2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "You win!";
    document.querySelector("h1").style.fontSize= "5rem";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Senpai Jhunie wins!";
    document.querySelector("h1").style.color= "red";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("h1").style.color= "grey";
}
