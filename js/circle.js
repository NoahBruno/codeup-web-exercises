(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * (this.radius ** 2); // TODO: return the proper value
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (this.getArea() % 1 !=0){
                return Math.round(this.getArea());
            }else{
                return this.getArea();
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    console.log("Area", circle.getArea());

    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();
