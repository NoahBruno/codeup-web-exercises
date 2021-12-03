function showMultiplicationTable(x){

for (var i = 1; i <= 10; i++) {
    var answer = (x * i)
    console.log(x + "x" + i + "=" + answer);
}
}
showMultiplicationTable(7)


// var r = Math.floor(Math.random() * 180) + 20;
//
// for (var i =0; i < 10; i++) {
//     if (r % 2 === 0 ){
//         console.log("Hi I'm an even number " + r )
//
//     }else {
//         console.log("Eww I'm Odd " + r)
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


var s = "";
for(var i = 1; i < 10; i ++) {
    for (var c = 0; c < i; c++) {
        s += i + " ";
    }
    s += "\n";
}
console.log(s);



for (var i = 105; i <= 5, i-=5; ){

    console.log(i)

}



