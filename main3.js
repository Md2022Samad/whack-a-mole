const boxes=document.querySelectorAll(".square");
const mole=document.querySelectorAll(".mole");
const reset=document.getElementById("reset");
const timeCounter =document.getElementById("time");
const scoreCounter=document.getElementById("score");

let score=0;
let currentBox=0;
let isLocked=false;
let currentTime=10;
function showMole(){
    boxes.forEach((square)=>{
        square.classList.remove("mole");
    });
     isLocked=false;
    let randomBox=boxes[Math.floor(Math.random()*9)];
    randomBox.classList.add("mole");
    
    currentBox=randomBox.id;
}
function start(){
   
    score=0;
    currentTime=10;
    moleTimer=setInterval(showMole,1000);
   timeTimer=setInterval(countTime,1000);
   timeCounter.innerText=currentTime;
   scoreCounter.innerText=score;
}
    start();
//Hit mole
boxes.forEach((square)=>{
    square.addEventListener("click",()=>{
        if(square.id==currentBox){
            if(isLocked) return;
            score++;
            scoreCounter.innerText=score;
            square.classList.remove("mole");
            isLocked=true;
        }
    });
});
function countTime(){
   currentTime--;
   timeCounter.innerText=currentTime;
   if(currentTime==0){
    clearInterval(timeTimer);
    clearInterval(moleTimer);
    alert("game over"+ score);
   }
}
function resetGame(){
    clearInterval(timeTimer);
    clearInterval(moleTimer);
    start();
}
reset.addEventListener("click",resetGame);