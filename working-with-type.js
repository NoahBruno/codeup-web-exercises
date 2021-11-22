var a = 1;
console.log(a)
var b = a++;
console.log(a)
var c = ++a;
console.log(a)

var d = "hello";
var e = false;
d++;
console.log(d)
e++;
console.log(e)

var perplexed;
console.log(perplexed + 2)

var price = 2.7;
console.log(price.toFixed(2))

var price = "2.7";
console.log(parseFloat(price).toFixed(2))

console.log(isNaN(0))

console.log(isNaN(1))

console.log(isNaN(""))

console.log(isNaN("string"))

console.log(isNaN("0"))

console.log(isNaN("1"))

console.log(isNaN("3.145"))

console.log(isNaN(Number.MAX_VALUE))

console.log(isNaN(Infinity))

console.log(isNaN("true"))

console.log(isNaN(true))

console.log(isNaN("false"))

console.log(isNaN(false))

console.log(NaN == NaN)

console.log(!true)

console.log(!false)

console.log(!!true)

console.log(!!false)

console.log(!!0)

console.log(!!-0)

console.log(!!1)

console.log(!!-1)

console.log(!!0.1);

console.log(!!"hello");

console.log(!!"");

console.log(!!'');

console.log(!!"false");

console.log(!!"0");

let sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());
sample += " Students"
console.log(sample)
sample = sample.replace("Students", "Class")
console.log(sample)
console.log(sample.indexOf('c'));
console.log(sample.indexOf('C'));
console.log(sample.substring(6,12));


var movies = "3";
var days = "9";
console.log(movies * days);

var google= 400 * 6;
var amazon = 380 * 4;
var facebook= 350 * 10;
console.log(google + amazon + facebook);
