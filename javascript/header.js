$(window).scroll(function() {
var yPos = window.pageYOffset;
var yPoint = 899;
if(yPos > yPoint) {
   $(".homeHeaderButton").addClass("homeHeaderButtonBlack");
   $(".homeHeader").css("background-color","white");
} else {
   $(".homeHeaderButton").removeClass("homeHeaderButtonBlack");
   $(".homeHeader").css("background-color","transparent");
 }
});

$(document).ready(function (){
    $("#moreButton").click(function (){
        $('html, body').animate({
            scrollTop: $("#profile").offset().top
        }, 300);
    });
});
$(document).ready(function (){
    $("#button1").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 400);
    });
});
$(document).ready(function (){
    $("#button2").click(function (){
        $('html, body').animate({
            scrollTop: $("#profile").offset().top
        }, 400);
    });
});
$(document).ready(function (){
    $("#button3").click(function (){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 400);
    });
});
$(document).ready(function (){
    $("#button4").click(function (){
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 400);
    });
});
$(document).ready(function (){
    $("#button5").click(function (){
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 400);
    });
});
