var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
for (var i = 0; i < shapes.length; i++) {
    console.log('The shape at index ' + i + ' is: ' + shapes[i]);
}

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});

let students= ['marko','noah','polo','todd','pan','peter']
//Index of searches front to back and last index of searches back to front
//nameofArray [position within the array] array always start at zero
//
console.log(students.length)
console.log(students)
console.log(students[3])
console.log(students[2]);
students[2] += " dolo"
console.log(students[2])
console.log(students.indexOf("pan"))

let favFoods=['sushi','ramen','pickles','cheeseburgers','pizza',['beer', 'water', 'oj']]

console.log(favFoods[0]);
var favDrinks=favFoods[5];
console.log(favDrinks[1])
let indexOfRamen = favFoods.indexOf('ramen')
console.log(indexOfRamen)
console.log("-------------------------------------------------------");
favFoods[0] += " 3";
console.log(favFoods[0]);

favFoods[1] += " 1"
console.log(favFoods[1])

favFoods[2] += " 5"
console.log(favFoods[2])

favFoods[3] += " 2"
console.log(favFoods[3])

favFoods[4] += " 4"
console.log(favFoods[4])

//FUNCTIONS

function  nameOfFunction(num1, num2){
    return num1+num2;
}

console.log(nameOfFunction(2,4));

//MEHTODS are pre existing functions being excuted
//Math.random()
//console.log()
//parserInt()

let ages =[14,23,34,5,210]

for(i = 0; i<=ages.length - 1; i++){
    console.log(ages[i] * 2);

}


