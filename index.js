#! /usr/bin/env node
import inquirer from "inquirer";
let shouldContinue = true;
while (shouldContinue) {
    const { firstNumber, secondNumber, operator } = await inquirer.prompt([
        {
            name: "firstNumber",
            message: "Please enter first number: ",
            type: "number",
            filter: (input) => input || 0,
        },
        {
            name: "secondNumber",
            message: "Please enter second number: ",
            type: "number",
            filter: (input) => input || 0,
        },
        {
            name: "operator",
            message: "Select operation you want to perform: ",
            type: "list",
            choices: ["Addition", "Substraction", "Multiplication", "Division"],
        },
    ]);
    if (operator === "Addition") {
        console.log(firstNumber + secondNumber);
    }
    else if (operator === "Substraction") {
        console.log(firstNumber - secondNumber);
    }
    else if (operator === "Multiplication") {
        console.log(firstNumber * secondNumber);
    }
    else if (operator === "Division") {
        console.log(firstNumber / secondNumber);
    }
    else {
        console.log("Something went wrong");
    }
    const { didUserContinue, didUserLike } = await inquirer.prompt([
        {
            message: "Do you want to perform more calculations? ",
            type: "confirm",
            name: "didUserContinue",
        },
        {
            message: "Do you like our Calculator?",
            type: "confirm",
            name: "didUserLike",
            when: ({ didUserContinue }) => !didUserContinue,
        },
    ]);
    if (!didUserContinue) {
        console.log(didUserLike
            ? "Thanks for liking our calculator."
            : "We will try our best to further improve our calculator.");
    }
    shouldContinue = didUserContinue;
}
