#! /usr/bin/env node

import inquirer from "inquirer"

const randomnumber = Math.floor(Math.random() * 10 + 1)
const answer = await inquirer.prompt([
{ 

    name : "userguessednumber" ,
    type : "number",
   message : "Please Guess a Number between 0-9: "
},

]);
if (answer.userguessednumber != randomnumber) {console.log("you guessed wrong number")}

else console.log("your guessed number is correct")

