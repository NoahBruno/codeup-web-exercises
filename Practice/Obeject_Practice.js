console.log("welcome to objects")

// let person = {}
//
// person["name"] = "Noah"
// person.isTall=true
//
// console.log(person)

// let birthdayObject = {
//     month: "Mar",
//     day: 10,
//     getDetails: function () {
//         return this.month + "," + this.day
//     }
// }
//
//
// let person = {
//
//     name: "Noah",
//     birthday: birthdayObject,
//     isTall: true
// }
//
// console.log(person)


// function createPerson(name){
//  return {
//   firstName : name
//   greeting: function(){
//    //use this. or both names cant be read
//    console.log("hi im" + this.firstName)
//   }
//  }
// }
//
// let personOne = createPerson("bob")
// let personTwo = createPerson("joe")

// let dog = {
//     breed: "Husky",
//     colors: ["brown", "black", "white"],
//     sex: "f",
//     isFLoofer: true,
//     bark: function (loud) {
//         if (loud) {
//             console.log("Woof, Woof!")
//         } else {
//             console.log("woof.")
//         }
//
//     },
//     getDetails: function () {
//         return this.colors[0] + " " + this.breed
//
//     }
// }
//
//
//
// function createDog() {
//     return{
//             breed: "bulldog",
//             colors: ["red", "white", "yellow"],
//             sex: "m",
//             isFLoofer: true,
//             bark: function (loud) {
//                 if (loud) {
//                     console.log("Woof, Woof!")
//                 } else {
//                     console.log("woof.")
//                 }
//
//             },
//             getDetails: function () {
//                 return this.colors[0] + " " + this.breed
//
//             }
//         }
//
//     }
// console.log(createDog.getDetails('Rex', ['brown', 'black'], 'German Shepherd'));


// var delay = 2000; // delay time in milliseconds
//
// var timeoutId = setTimeout(function () {
//     console.log('Here is a delayed hello!');
// }, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring


// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);


