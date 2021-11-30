// Write a function that accepts the top three bowling scores and returns the average.
//     Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
// Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case BONUS: return it with a space between each word
// Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”]; Write a function that returns the type of each of the variables (call the function once per variable);
// Write a function that executes all of the above functions
var scoreOne = 220
var scoreTwo = 240
var scoreThree = 300
var scoreFour = 215
var scoreFive = 150

function bowling(bowling) {
    return ((scoreOne + scoreTwo + scoreThree) / 3)
}

console.log(bowling())

function bestScore() {
    return (Math.max(scoreOne, scoreTwo, scoreThree, scoreFour, scoreFive))

}

console.log(bestScore())

function divisable(x) {
    return (x % 3 === 0 || x % 5 === 0)
}

console.log(divisable(bestScore()))

var n = 'ThEbEsTbOwLiNgPlAcEever'

function bowlingName() {
    return (n.toLowerCase())

}

console.log(bowlingName(n))

let score = 109
let name = "bowlingisfun"
let bowlingisfun = true
let players = ["tom", "jerry", "garfield"]

function whatIsIt(x) {
    return (typeof (x))
}

console.log(whatIsIt(score))
console.log(whatIsIt(name))
console.log(whatIsIt(bowlingisfun))
console.log(whatIsIt(players))

var averageScore = bowling()
var highestScore = bestScore()
var zero = divisable()
var bestPlace = bowlingName()
var type = whatIsIt()

function allOfThese() {

    console.log(averageScore)
    console.log(highestScore)
    console.log(zero)
    console.log(bestPlace)
    console.log(type)
}

allOfThese()

function myFunction(firstName, lastName) {
    return (firstName + lastName)
}

console.log(myFunction("Noah", "bruno"))


function thatsNotMyName(name) {
    if (name === "Laura") {
        return ("that's me!, I'm " + "name")
    } else {
        return "that's not my name"
    }
}

console.log(thatsNotMyName("Laura"))




