// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.

// var names = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

// for (var i = 0; i < names.length; i++){
//     if (newName > 4){
//         console.log(names)
//     }
// }

// names.forEach(function (name){
//     if (parseInt(name) > 4){
//         console.log("more than 4 " + name)
//     }else{
//         console.log("nope")
//     }
// })

// let name = names.join(" ")
// console.log(name)

// for (var i = 0; i < names.length; i++){
//     if(names[i].length === 4){
//         console.log("The names " + names[i] + ", James " + names[i])
//     }else{
//         console.log("nope")
//     }
// }
//
// for (let i = 0; i < 10; i++){
//     console.log("Repetition is a good thing.");
// }

// PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34 (edited)

// let num = "42958372";
// let nums = num.split(",")
// console.log(nums)
//
// for (let i = 0; i < num.length; i++){
//     console.log(i)
// }

// Find any duplicates in a string of numbers, return an object that shows which letters where duplicated how many times

// function removeDuplicateCharacters(string) {
//     return string
//         .split('')
//     if()
//
// }
// console.log(removeDuplicateCharacters('baraban'));

// INPUT: “42992338111134”
// EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4}
// var input = "42992338111134";
// var arr = input.split('')
//
//
// var array = [1, 2, 2, 3, 3, 4, 5, 6, 2, 3, 7, 8, 5, 22, 1, 2, 511, 12, 50, 22];
//
// console.log([...new Set(
//     arr.filter((value, index, self) => self.indexOf(value) !== index))]
// );
//
// console.log('-')

//----------------------------------------------------------------------------------------------------------------
// Morning Warmup:
//     Write a function that removes any duplicates from an array.
//    let inputOne= [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
//
//
// console.log([...new Set(
//     inputOne.filter((value, index, self) => self.indexOf(value) !== index))]
// );
//
// console.log('-')
// let str = input.split
//
// // expected output: [2,3,5,8,1,6,7,4]
//
// let num = str.reduce((pValue, cValue) => {
//     if (!pValue.includes(cValue.)){
//         pValue.push(cValue.);
//     }
//     return pValue
// }, [])
//
// console.log(num)