(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person= {}
    person.firstname = "Noah";
    person.lastname = "Bruno";
    console.log(person.firstname)
    console.log(person.lastname)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello= function(){
        return("Hello " + this.firstname + " " + this.lastname)
    }

    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        if (shopper.amount > 200) {
            console.log("you got a discount! " + shopper.name)
            console.log(shopper.amount + "- 12%")
            console.log(shopper.amount - (shopper.amount * .12));
        } else {
            console.log("no dicount for you " + shopper.name)
            console.log(shopper.amount);
        }
    });


// console.log(name, amount before, discount, amount after)

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books= [
        {title: "The Salmon of Doubt", author:{firstName: "ted", lastName: "fred"}},
        {title: "Douglas", author: {firstName: "nancy", lastName: "drew"}},
        {title: "Adams",author: {firstName: "ronald", lastName: "mcdonald"}},
        {title: "blades of glory", author: {firstName: "will", lastName: "ferrel"}},
        {title: "freebird",author: {firstName: "ozzy", lastName: "osbourne"}},
    ];

    console.log(books[3].title)
    console.log(books[4].author.firstName)
    console.log(books[4].author.lastName)




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
     var bookNumber= books.indexOf()
     books.forEach(function(book){
         // console.log("Book #" + ++bookNumber ) OR (index + 1)
         // console.log(book.title)
         // console.log(book.author.firstName + " " + book.author.lastName)
         console.log(`Book # ${++bookNumber} ${book.title}\n Author: ${book.author.firstName} ${book.author.lastName}`)
         });




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // books.forEach(function (createBook) {
    //     console.log(createBook.title)
    //     console.log(createBook.author)
    //
    // });
    // function createBook(bookTitle, Afirst,  Alast) {
    //     return {
    //         title: bookTitle,
    //         author: {
    //             first: Afirst,
    //             last: Alast
    //         },
    //         showBookInfo: function () {
    //             console.log(this.title);
    //             console.log(this.author.first + " " + this.author.last);
    //
    //
    //         }
    //     }
    // }
    // const newBook = createBook("a","b","c")
    //
    // newBook.showBookInfo()








})();