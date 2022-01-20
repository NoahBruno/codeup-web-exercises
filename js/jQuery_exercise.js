// window.onload = function() {
//     alert( 'The page has finished loading!' );
// }

// $(document).ready();
//
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
//
// $("li").css("font-size", "20px");
//
// $("h1,p,li").css("background-color", "yellow")
//
// $(document).ready(function(){
//     alert($("h1").text());
// })

$("#head").click(
    function(){
        $(this).css("background", "orange");
    }
);

$("p").dblclick(
    function(){
        $(this).css("font-size", "18px");
    }
)

$("li").hover(
    function(){
        $(this).css("color", "red");
    },
    function(){
        $(this).css("color", "black");
    }
)