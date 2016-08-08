//sets element to the variable $pic
var pic = $("#pic");
var ground = $('#ground');
var picBottom = pic.top + pic.length;
var groundTop = ground.top;
$(document).ready(function() {
    $('#pic').click(function() {


        var myVar = setInterval(function() {
            gravity()
        }, 1000);

        function gravity() {
            console.log("1second");
            $('#pic').top = $('#pic').top + 10;
            $("#pic").css("top", $('#pic').top);
        }

        function myStopFunction() {
            if (picBottom === groundTop) {
                clearInterval(myVar);
            }
        }



    });
});