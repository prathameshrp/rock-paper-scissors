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

function getComputerChoice()
{
    let computerChooses =  Math.floor(Math.random()*3);
    switch (computerChooses) {
        case 0:
            return "paper";
            break;
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
        default:
            break;
    }
    return "error! couldn't get an appropriate computer choice";
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let humanChooses = prompt("Enter a choice between rock, paper and scissors: ");
    if(humanChooses == null) 
    {   
        alert("Given inputs are not valid options! Try again?");
        return getHumanChoice();
    }
    return humanChooses.toLowerCase();
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  

    if(humanChoice === computerChoice)
    {
        alert(`It's a TIE between ${humanChoice} and ${computerChoice}`);
    }
    else if(humanChoice === "paper" && computerChoice === "rock")
    {
        ++humanScore;
        alert("paper beats rock, human wins");         
     
    }
    else if(humanChoice === "rock" && computerChoice === "scissors")
    {
        ++humanScore;
        alert("rock beats scissors, human wins");
    }
    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        ++humanScore;
        alert("scissors beats paper, human wins");
    }

    else
    {
        ++computerScore;
        alert(`${computerChoice} beats ${humanChoice}, computer wins`);
    }
}

// playRound();

// console.log(`human score: ${humanScore} and computer score: ${computerScore}`);

function playGame() {
    for(let i=0; i<5; ++i){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore)
    {
        alert(`Congratulations! you win!! \n final score - human:${humanScore} computer:${computerScore}`);
    }
    else if(humanScore < computerScore)
    {
        alert(`You Lose! \n final score - human:${humanScore} computer:${computerScore}`);
    }
    else
    {
        alert( `It's a tie! \n final score -human:${humanScore} computer:${computerScore}`)
    }
}

playGame();