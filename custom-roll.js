/* ## Stretch goals

* Create a new file, `custom-roll.js`, that prompts the user for how many sides 
the dice should have, then simulates a roll of a dice with that many sides. */


const prompt = require("prompt-sync")();


let num = Number(prompt("How many sides would you like your dice to have? Enter any whole number. "));
let roll = Number(prompt("Now enter 1 to roll the dice and get a number! "));

if (roll === 1){
    console.log(Math.floor(Math.random()*num));
}