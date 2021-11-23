var a = 1;
console.log(a);
var b = a++;
console.log(a);
var c = ++a;
console.log(a);

var d = "hello";
var e = false;
d++;
console.log(d);
e++;
console.log(e);

var perplexed;
console.log(perplexed + 2);

var price = 2.7;
console.log(price.toFixed(2));

var price = "2.7";
console.log(parseFloat(price).toFixed(2));

console.log(isNaN(0));
//false
console.log(isNaN(1));
//false
console.log(isNaN(""));
//false
console.log(isNaN("string"));
//true
console.log(isNaN("0"));
//false
console.log(isNaN("1"));
//false
console.log(isNaN("3.145"));
//false
console.log(isNaN(Number.MAX_VALUE));
//false
console.log(isNaN(Infinity));
//false
console.log(isNaN("true"));
//true
console.log(isNaN(true));
//false
console.log(isNaN("false"));
//true
console.log(isNaN(false));
//false
console.log(NaN == NaN);
//false
console.log(!true);
//false
console.log(!false);
//true
console.log(!!true);
//true
console.log(!!false);
//false
console.log(!!0);
//false
console.log(!!-0);
//false
console.log(!!1);
//true
console.log(!!-1);
//true
console.log(!!0.1);
//true
console.log(!!"hello");
//true
console.log(!!"");
//false
console.log(!!'');
//false
console.log(!!"false");
//true
console.log(!!"0");
//true
let sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());
sample += " Students";
console.log(sample);
sample = sample.replace("Students", "Class");
console.log(sample);
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

var classNotFull= false;
var noConflictInSchedule= true;
console.log(classNotFull && noConflictInSchedule);

var boughtMoreThanTwo= false;
var offerNotExpired= true;
var premiumMember=true;
console.log(premiumMember || (boughtMoreThanTwo && offerNotExpired));

var username = 'codeup';
var password = 'notastrongpassword';
console.log(password.length > 5);
console.log(password == username);
console.log(username.length < 20);

console.log(username !== username.trim());
console.log(password !== password.trim());