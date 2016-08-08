$(document).ready(function() {
    //sets element to the variable $pic
    var pic = $("#pic");
    var ground = $('#ground');
    var picTop = $("#pic").offset().top;
    var picBottom = picTop + $('#pic').height();
    var groundTop = $("#ground").offset().top;
    var groundBottom = groundTop + $('#ground').height();

    function pixelate(numOfPixels) {
        return numOfPixels + "px";
    }

    $('#pic').click(function() {


        var myVar = setInterval(function() {

            picBottom = picTop + $('#pic').height();

            picTop = picTop + 1;
            pic.css("top", pixelate(picTop));

            if (picBottom >= groundTop) {
                clearInterval(myVar);
            }
        }, 8);


    });
});