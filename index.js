const numbdivs = document.querySelectorAll(".grid-item");
const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");
const gaming=document.querySelector(".gaming");
const points=document.querySelector(".number");
const title=document.querySelector("h1");
const buttons=document.querySelector(".btn");
const button3=document.querySelector(".btnReplay");
var turn = 0;
playing = true;
var totalX = 0;

gaming.style.visibility="hidden";
button3.style.visibility="hidden";

function getnumbers() {
  for (var i = 0; i < numbdivs.length; i++) {
    document.getElementById(`${i+1}`).innerHTML = Math.floor(Math.random() * 10) + 1;
  }
}

function play() {
  turn++;
  if (playing == true) {

    var newNum = Math.floor(Math.random() * 10) + 1;
    points.innerHTML=newNum;
    console.log("THIS IS THE NEW NUMBER: " + newNum);
    for (var j = 0; j < numbdivs.length; j++) {
      if (numbdivs[j].innerHTML == newNum) {
        document.getElementById(`${j+1}`).innerHTML = "X";
        document.getElementById(`${j+1}`).classList.add("red-glow");
        totalX++
      }
    }
    if (totalX === 9) {
      document.querySelector("h1").classList.add("green-glow")
      document.querySelector("h1").innerHTML = "🏁 BINGOOOOO 🏁"
      buttons.style.visibility="hidden";
      button3.style.visibility="visible";
    }
  }
  gaming.style.visibility="visible";
}

function changeTitle(){
  var letters="LET'S PLAY BINGO !!!!!!"
  for(let i=0;i<letters.length;i++){
    setTimeout(function(){
            title.innerHTML+=letters[i];
    },100*i)


   }
}
changeTitle();


button.addEventListener("click", getnumbers,{once:true});
button2.addEventListener("click", play);
button3.addEventListener("click",function(){
  location.reload()
})
