function showMultiplicationTable(){

}
var num = 7
for (var i = 1; i <= 10; i++) {
    console.log("%d * %d = %d \n", num, i, num * i);
}
// var r = Math.floor(Math.random() * (200 - 20)) + 20;
//
// for (var i =1; i < 11; i++) {
//     if (r % 2 === 0 ){
//         console.log("Hi I'm an even number " + r )
//
//     }else if(r % 2 !==0){
//         console.log("Eww I'm Odd " + r )
//
//     }else{
//         console.log("done")
//     }
//
// }

for (var i = 1 ; i <= 10 ; i++)
{
    var random= Math.floor(Math.random() * (200 - 20)) + 20;
    if (i < 10 && random % 2 === 0)
    {
        console.log(random + " Even" + " " + i);
    }
    else
    {
        console.log (random + " Eww I'm Odd" + " " + i);
    }
}



for (var i = 105; i <= 5, i-=5; ){

    console.log(i)

}



