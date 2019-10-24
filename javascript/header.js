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
      $(window).scrollTop($("#profile").offset().top);
    });
    $("#button1").click(function (){
      $(window).scrollTop($("#home").offset().top);
    });
    $("#button2").click(function (){
      $(window).scrollTop($("#profile").offset().top);
    });
    $("#button5").click(function (){
      $(window).scrollTop($("#skills").offset().top);
    });
    $("#button4").click(function (){
      $(window).scrollTop($("#education").offset().top);
    });
    $("#button3").click(function (){
      $(window).scrollTop($("#portfolio").offset().top);
    });
    $("#button6").click(function (){
      $(window).scrollTop($("#classes").offset().top);
    });
});
