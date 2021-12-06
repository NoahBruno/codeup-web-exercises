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

let dog = {
    breed: "Husky",
    colors: ["brown", "black", "white"],
    sex: "f",
    isFLoofer: true,
    bark: function (loud) {
        if (loud) {
            console.log("Woof, Woof!")
        } else {
            console.log("woof.")
        }

    },
    getDetails: function () {
        return this.colors[0] + " " + this.breed

    }
}


function createDog() {
    return{
            breed: "bulldog",
            colors: ["red", "white", "yellow"],
            sex: "m",
            isFLoofer: true,
            bark: function (loud) {
                if (loud) {
                    console.log("Woof, Woof!")
                } else {
                    console.log("woof.")
                }

            },
            getDetails: function () {
                return this.colors[0] + " " + this.breed

            }
        }

    }
console.log(createDog.getDetails('Rex', ['brown', 'black'], 'German Shepherd'));

