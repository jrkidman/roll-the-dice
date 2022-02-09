/** Create a new file, `rigged-dice.js`, which prompts the user first for a number of 
 * sides, then for a rigged number. The dice should roll the rigged number twice as 
 * frequently as the other numbers!
 * 
 * 1- prompt for number of sides
 * 2- prompt for the rigged number
 * 3- get rigged number to roll twice as frequently as other numbers
 *          dice side + one extra side then change result of extra side to rigged number
 * 4- roll the dice
 * 5- log result(s)
 * */

const prompt = require("prompt-sync")();

//prompts for input
let sides = Number(prompt("How many sides would you like your dice to have? Enter any whole number greater than zero. "));
let chooseRigged = Number(prompt("Now let's rig the dice. What number would you like the dice to roll to more often than other numbers? "));

//change number of chosen dice sides to add 1 more side
let riggedSides = (sides + 1);

//this generates a random number based on the rigged number of sides
let riggedResult = Math.floor(Math.random() * riggedSides) + 1;

//prompt to "roll"
let roll = Number(prompt("Now enter 1 to roll the dice and get a number! "));

if (roll === 1) {
    //if riggedresult random number is within original number of sides chosen, then log result
    if (riggedResult <= sides) {
        console.log(riggedResult);
    }
    //if riggedresult random number is greater than original number of sides, then log the chosen rigged number
    else if (riggedResult > sides) {
        console.log(chooseRigged);
    }
}

