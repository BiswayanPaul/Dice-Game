let randomNumber1 = Math.floor(6*Math.random())+1;
document.querySelector(".dice1 img").setAttribute("src","images/dice"+randomNumber1+".png");

let randomNumber2 = Math.floor(6*Math.random())+1;
document.querySelector(".dice2 img").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 is the winner";
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 is the winner";
}
else{
    document.querySelector("h1").textContent = "It is a draw";
}


function change(){
    document.querySelector("h1").textContent = "Wlcome to our Dice Game";
    document.querySelector(".dice1 img").setAttribute("src","images/dice6.png");
    document.querySelector(".dice2 img").setAttribute("src","images/dice6.png");
}
