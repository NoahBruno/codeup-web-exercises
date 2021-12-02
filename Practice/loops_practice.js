//20 parking spots
//1 car
//? how many times we'll have to drive around to get spot

// while(condition){
//     //code here at every iteration
// }
let parkingSpots = 20;
var movingCars = 1;
var emptySpots = 0
openSpot = 1

while(emptySpots <= 1 ){
    console.log("not empty yet ")
    emptySpots++
    if (openSpot === emptySpots)
        console.log("I found " + emptySpots + "!")
        break;
}

var i = 0

do {
    console.log("plus two " + i);
    i+=2;
}while ( i<=51);

var n=0

do {
    console.log( "iteration" + n );
    n++;
}while (n<=10);

console.log("----------------------------------------")


var m = 0

while(m<=10){
    console.log("iteration" + m);
    m++;
}

// : using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.

// var p= prompt("Enter password")
//
// while(p!== "password"){
//     var tryAgain=prompt("Wrong password.");
//     if (tryAgain="password"){
//         alert("correct!")
//         break;
//     }
//
// }

//NESTED FOR LOOPS

for (let counter =1; counter <=5; counter++){
    console.log ("first " + counter)
    for (let counterTwo=5 ; counterTwo>0; counterTwo--)
        console.log("secondcounter" + counterTwo)
}
