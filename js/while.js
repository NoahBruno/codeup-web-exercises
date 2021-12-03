var i = 2
while (i < 66536){
    console.log(i)
    i*=2;

}


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var ran= Math.floor(Math.random() * 5) + 1;



//lllll
do {
    console.log("less " + allCones);
    allCones-=ran;
}while ( allCones>=0);
console.log("cones all gone")
