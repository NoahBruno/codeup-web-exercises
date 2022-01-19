//declaring an object
// let USA = {
//     Texas: {
//         size: "big",
//         flower: "bluebonnet",
//         bird: "mockingbird",
//         people: 30,
//         //method
//         addPeople: function(){
//             let newPeople = this.people
//
//         }
//     }
// }
//
// let sirius = {
//     numStudents: 29,
//     city: [
//         "dallas",
//         "San Antonio",
//         ["downtown", "rim", "north central", "museum district"],
//         "houston",
//         {city: "Austin", numPeople: 40, lake: true, weird: true}
//     ],
//     inPerson: false,
//     theBest: true,
//
//     //methods store functions
//     returnCity: function(){
//         console.log(8 + 8);
//         console.log("hello world");
//         return this.city;
//     }
// }
// console.log(sirius.city[0]);//first item in city array
// console.log(sirius.city[sirius.city.length - 1]);//last item in array
// console.log(sirius.inPerson);//dot notation
// // console.log(sirius.returnCity());
// console.log(sirius.city[2][2])
// console.log(sirius.city[4].weird)

// accessing obbjects
//accessing arrays in an object
//object methods



//ARRAYS
let cities = [
    {city: "San Antonio", people:30, isGreat: true, team: "spurs"},
    {city: "Houston", people:40, isGreat: false, team: "rockets"},
    {city: "Dallas", people:50, isGreat: false, team: "mavericks"},
    {city: "Austin", people:10, isGreat: true, team: "weird"},
]

cities.forEach(function(city){
    console.log("is " + city.city + " great " + city.isGreat);
})

let sports = ["spurs", "rockets", "knicks", "bucks"];
// sports.forEach(function (team){
//     if (team === "spurs"){
//         console.log("the best " + team)
//     }
// })
//
// for(let i = 0 ; i <= sports.length -1 ; i++){
//     if (sports[i] === "spurs"){
//         console.log("best team " + sports[i])
//     }
//     else{
//         console.log("lame " + sports[i])
//     }
// }

sports.forEach(function(team ){
    let firstLetter = team.charAt(0)
    if(firstLetter == "r"){
        console.log("yepp starts with r its the " + team)
    }else{
        console.log("nope dont start with r its the " + team)
    }
})