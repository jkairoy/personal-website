$(window).scroll(function() {
  var yPos = window.pageYOffset;
  var yPoint = window.innerHeight - 100;

  // latch header
  $("header").css({"padding-top": Math.max(50-yPos, 0)});
  console.log(Math.max(50-yPos, 0))

  // check for work hilight
  if ($("#index").length) {
    if(yPos > yPoint) {
      $("#button1").addClass("headerButtonActive");
    } else {
      $("#button1").removeClass("headerButtonActive");
    }
  }
});
