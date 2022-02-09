//Promises

// a js object, used as a placeholder , used often with requests

function add (a,b){
    return a + b;
}

add (4,6)// trigger immediatley once its called

$.ajax ("\"https://api.github.com/zen\"")
.done(function(res){
    console.log(res);
})//waits for response before it is executed

//similar to a conditional in that a fucction will not run unless X
//condition(typically timely condition) is ready

//promise states
//pending - waiting for the response/ condition to be met
//resolved - condition successfully met
//rejected - condition not successfully met = triggers function to handle failed request

//get request

//fetch

fetch("https://api.github.com/zen")

//.then()
//handle response accepts 2 parameters
//callback functions of successful and rejected

.then(function (res){
    console.log(res);
}, function(err){
    console.log(err);
})

//can use users, res, or what you are getting back
// fetch("https://www.boredapi.com/activity")
// .then(function(users){
//     console.log()
// })

//arrow function ^SAME
fetch("https://dog.ceo/api/breeds/image/random")
    .then(result => result.json())
.then(res => {
    console.log(res);
    $("#dog").attr('src','res.message ')
})
    .catch(err => {
        console.log(err);
});

