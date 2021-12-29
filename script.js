/** Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this 
 * function in the game to make the computer’s play.  */
function computerPlay() {

    const number = getRandomInt(3);

    switch (number) {
        case 0:
            return "paper";
        case 1:
            return "scissor";
        case 2:
            return "rock";
    }

    return;
}

/** A function that plays a single round of Rock Paper Scissors. The function 
 * should take two parameters - the playerSelection and computerSelection - 
 * and then return a array that declares the winner of the round like so: 
 * "You Lose! Paper beats Rock" */
function singleRound(player, computer) {

    if ((player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper") ||
        (player === "rock" && computer === "scissor")) {
        // return `You won! ${player} beats ${computer}`;
        return [1, firstUpper(player), firstUpper(computer)];
    }
    else if ((computer === "paper" && player === "rock") ||
        (computer === "scissor" && player === "paper") ||
        (computer === "rock" && player === "scissor")) {
        // return `You lost! ${computer} beats ${player}`;
        return [-1, firstUpper(player), firstUpper(computer)];
    } else {
        // return "It's a tie!";
        return [0];
    }

}

function firstUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/** A function that records the score and make it into the textContent. Also, 
 * It will take the input from the user(button);
 */
function game(event) {

    const mainClass = document.querySelector(".main");
    const playerPoints = document.querySelector(".pPoints");
    const computerPoints = document.querySelector(".cPoints");
    const roundResult = singleRound(event.currentTarget.className, computerPlay())
    
    switch (roundResult[0]) {
        case 1:
            mainClass.textContent = `You Win! ${roundResult[1]} beats ${roundResult[2]}.`;
            playerPoints.textContent = +(playerPoints.textContent) + 1;
            break;
        case -1:
            mainClass.textContent = `You Lose! ${roundResult[2]} beats ${roundResult[1]}.`;
            computerPoints.textContent = +(computerPoints.textContent) + 1;
            break;
        case 0:
            mainClass.textContent = `It's a Tie!`;

    }

    if (+(playerPoints.textContent) === 5) {
        mainClass.textContent = "YOU WIN THE GAME!";
        reset();
    } else if (+(computerPoints.textContent) === 5) {
        mainClass.textContent = "YOU LOSE THE GAME!";
        reset();
    }
    
    function reset() {
        computerPoints.textContent = 0;
        playerPoints.textContent = 0;
    }
}



/** A helper method to get random number within a certain range.
 * the number will be floored from 0.0001~2.9999. */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* Events that make button call sigleround */
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', game);
});


