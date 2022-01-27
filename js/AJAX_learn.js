//AJAX

//AJAX- asynchronous Javascript and XML

//asynchronous- not at the same time

//xml- extensible markUp language
// // designed to store and transport data

//webserver- server that holds your website
//software:handle requests, sends data, it understands URL's
//allows us to interact with the servers, host files,

//host: it gives it a location to live

//hardware: computers storing data

//HTTP server-software that understands URL's and is able to communicate with the browser to view webpage

//JSON- Javascript object notation
// {
//
// }

//.ajax sends request
// .done handles response
// Get --- $.ajax(URL)).done(function(data, status){
//              console.log("request done")
//              console.log(data.message)
//              console.log (status);
// }) ;
//
// $.ajax("URL", options{
//     type:"POST",
//         //data we want to send to the server
//     body: JSON.stringify( {
//         title: 'Example',
//         body:'ex',
//         UserId: 1,
//     }).done(funciton(data, status){
//

//SHORTHAND
//
//.get("URL")
//same as this ^
//.ajax(URL)

//.post()
// same as this ^
//.ajax(URL , options)


$.get(URL)
    .done(function(data){
        console.log(data); //--- log to confirm if object or an array
        $.each(data, function(i, comment){
            console.log(comment.name);

            let newEl = `<h1> ${comment.name} <h1>`;

            $(".container").append(newEl)
        })
    })


//SECURE WAY
let newEl = document.createElement("h1");
let name = comment.name;
newEl.innerHTML = name;
$(".container").append(newEl)










