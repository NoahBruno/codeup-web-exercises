"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color == "green") {
//         console.log("Green is my favorite color!")
//     }
//     else if (color == "red")
//     {
//         console.log("Red is ight I guess")
//     }
//     else
//     {
//         console.log(color + "? What color is that?")
//     }
// }
// console.log(analyzeColor("blue"))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
switch (randomColor) {
    case "green":
        console.log("Green is my favorite color!");
        break;
    case "red":
        console.log("Red is ight I guess");
        break;
    default:
        console.log(randomColor + "? What color is that?");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let C = prompt("What color do you like?");
// alert(analyzeColor())
//
// function analyzeColor() {
//     if (C === "green") {
//         return("Green is my favorite color!")
//     }
//     else if (C === "red")
//     {
//         return("Red is ight I guess")
//     }
//     else
//     {
//         return(C + "? What color is that?")
//     }
// }
// analyzeColor(C)


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(L, D) {
    if (L === 0) {
        return (D)
    } else if (L === 1) {
        return (D - (D * .1))
    } else if (L === 2) {
        return (D - (D * .25))
    } else if (L === 3) {
        return (D - (D * .35))
    } else if (L === 4) {
        return (D - (D * .50))
    } else {
        return (D - D)
    }
}

calculateTotal(4, 100)

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var Bill = prompt ("What was your total bill total?")
// alert(calculateTotal(luckyNumber,Bill))

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var Yes = confirm("would you like to enter a number?")
var userInput = prompt("What number would you like to enter?")
console.log(userInput);

function ifEvenOrOdd(Number) {
    if (Number % 2 === 0) {
        return ("Its even!")
    } else if (Number % 2 === 1)
    {
        return ("Its odd!")
    } else{
        return ("thats not a number!")
    }
}

alert(ifEvenOrOdd(userInput))

function numPlus(Number){
    return (parseInt(Number) + 100)
}
alert(numPlus(userInput) + " That\'s your number plus 100")

function negativeOrPositive(Number){
    if (Number < 0){
        return ("I'm a negative number!")
    }else if (Number > 0){
        return("I'm a positive number!")
    }else{
        return("I'm a Zero!")
    }
}
alert(negativeOrPositive(userInput))

