
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

// if(randomNumber1 === 1)
//   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// else if(randomNumber1 === 2)
//   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// else if(randomNumber1 === 3)
//   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// else if(randomNumber1 === 4)
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// else if(randomNumber1 === 5)
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// else if(randomNumber1 === 6)
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
var imgName = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", "images/"+imgName);





var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

var imgName2 = "dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", "images/"+imgName2);


if(randomNumber1 > randomNumber2)
  document.querySelector("h1").textContent = "Player 1 Wins!";
else if(randomNumber2 > randomNumber1)
  document.querySelector("h1").textContent = "Player 2 Wins!";
else
  document.querySelector("h1").textContent = "It's a Draw!";
