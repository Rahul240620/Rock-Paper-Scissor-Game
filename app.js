let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector(" #user-score ");
const compScorePara=document.querySelector(" #comp-score ")

const genCompChoice=()=>
{
    const option=["rock","scissor","paper"];
   const randidx =Math.floor(Math.random()*3);
   return option[randidx];

}
const drawGame= ()=>{
    console.log("Game Was Drawn");
    msg.innerText=" Game Was Drawn. Play Again !";
    msg.style.backgroundColor = "#081b31";
};

function showWinner(userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win !");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Loose");
        msg.innerText = `You Loose.Computer ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame=(userChoice)=>{
   
   const compChoice =genCompChoice();  
  
   if(userChoice === compChoice){
    drawGame(); 
  
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true; }
        else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true; } 
        else{
            userWin=compChoice==="rock"?false:true; 
        }
        showWinner(userWin, userChoice,compChoice );
        
}
};




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
} );
 