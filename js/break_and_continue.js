var oddNumber = prompt("type in an odd number between 1 and 50");



for (var i = 1; i <=50 ; i++){
    if (i === oddNumber){
        alert("your number")

        break;

        console.log("you won't see this")
    }else{
        alert("try again")

        continue;
    }
}
