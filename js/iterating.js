// (function(){
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an array of 4 people's names and store it in a variable called
//      * 'names'.
//      */
var names = ["tom", "jerry", "ren", "stimpy"]
//
//     /**
//      * TODO:
//      * Create a log statement that will log the number of elements in the names
//      * array.
//      */
console.log(names.length)
//     /**
//      * TODO:
//      * Create log statements that will print each of the names individually by
//      * accessing each element's index.
//      */
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
//     /**
//      * TODO:
//      * Write some code that uses a for loop to log every item in the names
//      * array.
//      */
for (var i = 0; i < names.length; i++){
    console.log("The names " + names[i] + ", James " + names[i])
}
//     /**
//      * TODO:
//      * Refactor your above code to use a `forEach` loop
//      */
names.forEach(function(name) {
    console.log("Hi my name is chika chika slim " + name);
});
//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
//      *
//      * Example:
var name = ["noah", "john", "bruno", "dede"]

function first(array){
    return (name[0])
}

function second(array){
    return (name[1])
}

function last(array){
    let Li = array.length - 1;
    return (name[Li])
}

console.log(first(name))
console.log(second(name))
console.log(last(name))

//     var first = ([1, 2, 3, 4, 5]) // returns 1
//     var second = ([1, 2, 3, 4, 5]) // returns 2
//     var last = ([1, 2, 3, 4, 5]) // return 5
//
// //      */
// console.log("I'm first " + first[0])
// console.log("I'm second " + second[1])
// console.log("I'm last  " + last [4])

//
// })();