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

function bowling(bowling){
    return((scoreOne + scoreTwo + scoreThree)/ 3)
}

console.log(bowling())

function bestScore(){
    return (Math.max(scoreOne,scoreTwo,scoreThree,scoreFour,scoreFive))

}
console.log(bestScore())

function divisable(x){
    return (x % 3 === 0 || x % 5 === 0 )
}
console.log(divisable(bestScore()))

var n =“ThEbEsTbOwLiNgPlAcEever”

function bowlingName(){
    return (n.toLowerCase())

}
console.log(bowlingName())