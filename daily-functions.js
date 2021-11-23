// Write a function which determines is today is a good day to fly.
//     Its definition has two parameters: a boolean which informs if it's cloudy and a number which tells us how many planes are scheduled to fly
// If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!

function goodFlyDay(cloudy, planes) {
    if (cloudy == false && planes < 10) {
        console.log("Today is a good day too fly!")
    } else {
        console.log("I wouldn't leave the ground today...")
    }
}
goodFlyDay(false, 11)

// write 4 functions which each take in two parameters and return a number.  They will, respectively:
// Return the sum of two numbers
// Return the difference of two numbers
// Return the product of two numbers
// Return the dividend of two numbers

function sum (n1, n2){
    return n1 + n2;
}
function sub (n1, n2){
    return n1 - n2;
}
function multiply (n1, n2){
    return n1 * n2;
}
function divide (n1, n2){
    return n1 / n2;
}
function remain (n1, n2){
    return n1 % n2;
}

let n1 =22;
let n2 =7;
console.log(sum (n1,n2));
console.log(sub (n1,n2));
console.log(multiply (n1,n2));
console.log(divide (n1,n2));
console.log(remain (n1,n2));