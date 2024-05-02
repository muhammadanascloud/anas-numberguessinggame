#!/usr/bin/env node
import inquirer from "inquirer";
// 1)computer will pick a random number
// 2)use will guess a number that computer have picked
// 3)if the user has guessed right computer will show him a message
// 4)if the user has guessed wrong computer will show him a message
let randomNumber = Math.floor(Math.random() * (5));
let isContinue = true;
while (isContinue) {
    let userNumber = await inquirer.prompt([{
            type: "number",
            name: "userNumber",
            message: "Please guess a number between 0-4.\nDont worry, you won't get killed:"
        }]);
    if (userNumber.userNumber === randomNumber) {
        console.log("HURRAY!!! CONGRATULATIONS.\nYou'ev guessed correct number.\nYou have won the game.");
    }
    else if (userNumber.userNumber !== randomNumber) {
        console.log("SORRIEEE.\nYou have lost the game.");
    }
    let replay = await inquirer.prompt([{
            type: "confirm",
            name: "continue",
            message: "Do you want to play again?"
        }]);
    isContinue = replay.continue; //it will become false if user select "n" and program will be terminated
}
