let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".choice");
const gencompchoice=()=>{
    const option=["paper","rock","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
};

const drawgame=()=>{

console.log("Match is draw");
msg.innerText="Match was draw";
msg.style.backgroundColor="blue";
     
}

let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");


let msg=document.querySelector("#msg");

let showwinner=(userwin)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        console.log("you win");
        msg.innerText="You win.";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorepara.innerText=compScore;
        console.log("you lose");
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
};


const playgame=(userchoice)=>{
    console.log("choice was clicked =",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice =",compchoice);
 
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
       if(userwin==="rock"){
        userwin=compchoice==="paper"? false:true;
       }else if(userchoice==="paper"){

        userwin=compchoice==="scissor"?false:true;
       }else{
        userwin=compchoice==="rock"? false:true;
       }
       showwinner(userwin);
    }
};

choice.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
  
});