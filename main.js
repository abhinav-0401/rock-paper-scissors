const computerPlay = () => {
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

const playRound = (computerSelection = "rock", playerSelection = "rock") => {
    playerSelection = playerSelection.toLowerCase();
    let roundObj = {
        didWin: 0,
        result: "",
        err: false
    }
    
    if (computerSelection === playerSelection) {
        roundObj.result = `Computer chose ${computerSelection}. It's a draw! ${playerSelection} and ${computerSelection}.`;
        roundObj.didWin = 1;
        return roundObj;
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    roundObj.result =`Computer chose ${computerSelection}. You win! ${playerSelection} beats ${computerSelection}.`;
                    roundObj.didWin = 2;
                    return roundObj;
                } else if (computerSelection === "paper") {
                    roundObj.result = `Computer chose ${computerSelection}. You lose! ${computerSelection} beats ${playerSelection}.`;
                    roundObj.didWin = 0;
                    return roundObj;
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    roundObj.result = `Computer chose ${computerSelection}. You win! ${playerSelection} beats ${computerSelection}.`;
                    roundObj.didWin = 2;
                    return roundObj;
                } else if (computerSelection === "scissors") {
                    roundObj.result = `Computer chose ${computerSelection}. You lose! ${computerSelection} beats ${playerSelection}.`;
                    roundObj.didWin = 0;
                    return roundObj;
                }
                break;
            case "scissors":
                if (computerSelection === "paper") {
                    roundObj.result = `Computer chose ${computerSelection}. You win! ${playerSelection} beats ${computerSelection}.`;
                    roundObj.didWin = 2;
                    return roundObj;
                } else if (computerSelection === "rock") {
                    roundObj.result = `Computer chose ${computerSelection}. You lose! ${computerSelection} beats ${playerSelection}.`;
                    roundObj.didWin = 0;
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

//let playerSelection = prompt();
//console.log(playRound(computerPlay(), playerSelection));

const game = () => {
    console.log("Welcome! This is a five round game of Rock-Paper-Scissors!");
    let score = 0;
    console.log(`Your score is ${score}`);

    for (let count = 1; count <= 5; count += 1) {
        console.log("This is round " + count);
        
        const playerSelection = prompt(`Enter your choice for round ${count}`);
        const computerSelection = computerPlay();
        
        let resultObj = playRound(computerPlay(), playerSelection);
        score += resultObj.didWin;
        console.log(resultObj.result);
        console.log("Your score is " + score);
    }
}

game();