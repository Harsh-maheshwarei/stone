let userScore = 0;
let compScore = 0;

let choice =document.querySelectorAll(".image")

const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user_score")
const compScorePara = document.querySelector("#comp_score")


 choice.forEach((image) => {
  image.addEventListener("click", () =>{
    const userChoice =image.getAttribute("id")
    
    playGame(userChoice);
  })    
});

const gencompchoice =() =>{
    let options = ["rock", "paper", "scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawGame= ()=>{
    msg.innerText ="Game was Draw, Try Again!"
    msg.style.backgroundColor ="black";
}

let showWinner =(userWin)=>{
if(userWin){
    userScore++;
    userScorePara.innerText =userScore;
    msg.innerText = "You Win!"
    msg.style.backgroundColor = "green";
}
else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText ="You lose!"
    msg.style.backgroundColor = "red";
}
}


const playGame= (userChoice)=>{
    console.log("user Choice is",userChoice);

    const compChoice = gencompchoice();
    console.log("computer choice is",compChoice);
 if (userChoice === compChoice) {
    drawGame();
 }
 else{
    let userWin = true;
    if(userChoice ==="rock"){
   userWin = compChoice === "paper"?false:true;
    }
    else if(userChoice==="paper"){
userWin = compChoice ==="scissors"? false: true;
    }
    else{
        userWin = compChoice ==="rock"? false: true;
    }
    showWinner(userWin);
 }   
}