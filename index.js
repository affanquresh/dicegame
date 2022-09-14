function diceGame(){
  var number1=Math.floor(Math.random()*6)+1

var randomdice="images/dice" + number1 +".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdice);


var number2=Math.floor((Math.random()*6)+1)

var randomdice2="images/dice" + number2 +".png";


var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",  randomdice2 )

if(number1 > number2){
  document.querySelector("h1").innerHTML="🎉 player 1 won!!";
}else if(number1 < number2){
  document.querySelector("h1").innerHTML="🎉 player 2 won!!";

}else{
  document.querySelector("h1").innerHTML=" 🤝its a tie!!";

}
}
