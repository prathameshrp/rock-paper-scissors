// console.log("Hello!")

/*  1. computer can play the game. computer chooses rock, paper, scissors randomly
    2. human can play the game. human gives input rock or paper or scissors
    3. there are global variables to store humanScore and computerScore
    4. A single round is played by getting a random choice from computer and input from human.
    5. conditions - paper v/s rock - paper wins
                    rock v/s scissors - rock wins
                    scissors v/s papers - scissors wins
    6. do 6 such rounds
 */

/*
    - global variables - humanScore, computerScore = 0
    - function - getComputerChoice - to get computer choice randomly
    - function - getHumanChoice - to get human input
    - function - playRound - to compare both choices and declare winner
    - variables humanChoice and computerChoice in playRound scope to compare the choices
    - repeat playRound 5 times
*/


let humanScore = 0;
let computerScore = 0;
const btn_cont = document.querySelector(".btns");
const score_div = document.querySelector(".score");

score_div.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
function getComputerChoice()
{
    let computerChooses =  Math.floor(Math.random()*3);
    switch (computerChooses) {
        case 0:
            return "Paper";
            break;
        case 1:
            return "Rock";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            break;
    }
    return "error! couldn't get an appropriate computer choice";
}

function playRound(humanChoice, computerChoice) {
  
    const p = document.createElement("p");
    p.setAttribute("class", "innerScore");
    if(humanChoice === computerChoice)
    {
        p.textContent = `\n It's a TIE between ${humanChoice}`;
        
    }
    else if(humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper")
    {
        ++humanScore;

        p.textContent = `\n ${humanChoice} beats ${computerChoice}, human wins`;
     
    }
    else
    {
        ++computerScore;
        p.textContent = `\n${computerChoice} beats ${humanChoice}, computer wins`;
    }
    score_div.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    score_div.appendChild(p);
    if(humanScore === 5 || computerScore === 5)
        endResult();
    
}


function endResult() {

    score_div.textContent = '';
    const p = document.createElement("p");
    p.setAttribute("class", "innerScore");
    if(humanScore > computerScore)
    {
        score_div.textContent = `Congratulations! you win!!`; p.textContent = `You:${humanScore} Computer:${computerScore}`;
    }
    else if(humanScore < computerScore)
    {
        score_div.textContent = `You Lose!`;
        p.textContent = `You:${humanScore} Computer:${computerScore}`;
    }

    score_div.appendChild(p);
    humanScore = 0;
    computerScore = 0;
}

const i = document.querySelectorAll("i");
const h_sibling = document.createElement("p");
const c_sibling = document.createElement("p");
const h = document.querySelector(".humanHand");

btn_cont.addEventListener("click", (e) => {
    const humanChooses = e.target.value;
    if(!humanChooses) return;

    createBottomText(h_sibling, humanChooses);
    h.appendChild(h_sibling);
   

    const computerChooses = getComputerChoice();

    createBottomText(c_sibling, computerChooses);
    h.nextElementSibling.appendChild(c_sibling);
   
    for(let j = 0; j<i.length; ++j)
        i[j].setAttribute("style", "color: #2b5c5f; opacity: 1;");
    
    changeIcons(humanChooses, computerChooses);
    playRound(humanChooses.toLowerCase(),computerChooses.toLocaleLowerCase());
});

function createBottomText(node, value)
{
    node.textContent = value;
    node.setAttribute("class", "identifier");
    node.style.cssText = "margin-top: 40px; margin-bottom: 0;";
}



function changeIcons(human, computer) {
    const h_i = document.querySelector("#hicon");
    const c_i = document.querySelector("#cicon");

    const hClassName = getClassForIcon(human);
    const cClassName = getClassForIcon(computer);
    
    if(hClassName === 'fa-hand-scissors')
    h_i.style.rotate = "180deg";


    h_i.className = `fa-regular ${hClassName}`;
    c_i.className = `fa-regular ${cClassName}`;
}

function getClassForIcon(value)
{
    switch(value.toLowerCase())
    {
        case 'rock':
            return 'fa-hand-back-fist';
        case 'paper':
            return 'fa-hand';
        case 'scissors':
            return 'fa-hand-scissors';
    }
    return 'ERROR';
}
