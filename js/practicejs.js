// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.

var names = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

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

for (var i = 0; i < names.length; i++){
    if(names[i].length > 4){
        console.log("The names " + names[i] + ", James " + names[i])
    }else{
        console.log("nope")
    }
}

for (let i = 0; i < 10; i++){
    console.log("Repetition is a good thing.");
}