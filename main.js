//Select elements of the web page 
const computer = document.querySelector(".computer span");
const scores = Array.from(document.querySelectorAll(".scores span"));
let playerScore = 0;
let aiScore = 0;
let buttonArray = Array.from(document.querySelectorAll(".buttons button"));

//Return the computer's choice (selected randomly)
const computerPlay = () => {
    //Select random number between 0 and 2, return a choice
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "err";
    }
};

//Play the actual round and return an object containing the result
const roundLogic = (computerSelection = "rock", playerSelection = "rock") => {
    playerSelection = playerSelection.toLowerCase();

    //This  object contains the result of a single round
    let roundObj = {
        points: {
            ai: 0,
            player: 0
        },
        result: "",
        err: false
    }
    
    //Possibility of a draw
    if (computerSelection === playerSelection) {
        roundObj.result = `Computer chose ${computerSelection}. It's a draw! ${playerSelection} and ${computerSelection}.`;
        roundObj.points.ai = 0
        roundObj.points.player = 0;
        return roundObj;
    } 
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    roundObj.result =`Computer chose ${computerSelection}. You win! ${playerSelection} beats ${computerSelection}.`;
                    roundObj.points.player = 1;
                    roundObj.points.ai = 0;
                    return roundObj;
                } 
                else if (computerSelection === "paper") {
                    roundObj.result = `Computer chose ${computerSelection}. You lose! ${computerSelection} beats ${playerSelection}.`;
                    roundObj.points.player = 0;
                    roundObj.points.ai = 1;
                    return roundObj;
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    roundObj.result = `Computer chose ${computerSelection}. You win! ${playerSelection} beats ${computerSelection}.`;
                    roundObj.points.player = 1;
                    roundObj.points.ai = 0;
                    return roundObj;
                } 
                else if (computerSelection === "scissors") {
                    roundObj.result = `Computer chose ${computerSelection}. You lose! ${computerSelection} beats ${playerSelection}.`;
                    roundObj.points.player = 0;
                    roundObj.points.ai = 1;
                    return roundObj;
                }
                break;
            case "scissors":
                if (computerSelection === "paper") {
                    roundObj.result = `Computer chose ${computerSelection}. You win! ${playerSelection} beats ${computerSelection}.`;
                    roundObj.points.player = 1;
                    roundObj.points.ai = 0;
                    return roundObj;
                } 
                else if (computerSelection === "rock") {
                    roundObj.result = `Computer chose ${computerSelection}. You lose! ${computerSelection} beats ${playerSelection}.`;
                    roundObj.points.player = 0;
                    roundObj.points.ai = 1;
                    return roundObj;
                }
                break;
            default:
                roundObj.result = "Some error occurred.";
                roundObj.err = true;
                return roundObj;
        }
    }
};

//Execute roundLogic function, print results, modify the scores
const playRound = (e) => {
    console.log(e.id);

    //Get a random computer choice
    let aiChoice = computerPlay();
    let resultObj = roundLogic(aiChoice, e.id);
    
    //Modify the scores as per the round result
    playerScore += resultObj.points.player;
    aiScore += resultObj.points.ai;

    //Update DOM
    computer.innerText = aiChoice;
    scores[0].innerText = playerScore;
    scores[1].innerText = aiScore;

    //If any scores have reached 5, Alert to refresh
    if (playerScore >= 5 || aiScore >= 5) {
        for (let i = 0; i < buttonArray.length; i += 1) {
            buttonArray[i].addEventListener("click", () => { alert(`Game Over. ${playerScore > aiScore ? "Player" : "Computer"} won. Refresh to play again`); });
        }
    }
};

//let playerSelection = prompt();
//console.log(playRound(computerPlay(), playerSelection));


//Attach "click" event listeners on all the buttons
console.log(buttonArray);
for (let i = 0; i < buttonArray.length; i += 1) {
    buttonArray[i].addEventListener("click", () => { playRound(buttonArray[i]) });
}