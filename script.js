

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

/** Ask for player's input, if the input matches, return the input, otherwise continue. */
function playerPlay() {

    onGoing = true;

    while (onGoing) {

        let output = prompt("What are you going to deal? Paper, Scissor or Rock?");
        output = output.toLowerCase();

        if (output === "paper" || output === "scissor" || output === "rock") {
            return output;
        } else {
            alert("Input a correct option plz!");
        }
    }
}


/** A function that plays a single round of Rock Paper Scissors. The function 
 * should take two parameters - the playerSelection and computerSelection - 
 * and then return a string that declares the winner of the round like so: 
 * "You Lose! Paper beats Rock" 
 * */
function singleRound(playerSelection, computerSelection) {

    player = playerSelection();
    computer = computerSelection();
    
    if ((player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper") ||
        (player === "rock" && computer === "scissor")) {
        return `You won! ${player} beats ${computer}`;
    }
    else if ((computer === "paper" && player === "rock") ||
        (computer === "scissor" && player === "paper") ||
        (computer === "rock" && player === "scissor")) {
        return `You lost! ${computer} beats ${player}`;
    } else {
        return "It's a tie!";
    }

}

/** a NEW function called game(). Use the previous function inside of this one 
 * to play a 5 round game that keeps score and reports a winner or loser at the end. */
function game() {
    
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i+=1) {
        result = singleRound(playerPlay, computerPlay);
        console.log(result);

        switch (result.charAt(4)) {
            case "w": 
                player += 1;
                break;
            case "l": 
                computer += 1;
                break;
        }

        console.log(`Player: ${player}, Computer: ${computer}`);
    } 


    if (player > computer) {
        return "Player Wins!";
    } else if (computer > player) {
        return "Computer Wins!";
    } else {
        return "Tie!"
    }
}

console.log(game());

/** A helper method to get random number within a certain range.
 * the number will be floored from 0.0001~2.9999. */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}