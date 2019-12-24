// navigate
$(document).ready(function (){
  function navigate(href) {
    $("body").animate({opacity: 0}, 500)
    setTimeout(function(){
      window.location.href = href;
    }, 500)
  }
  $("#button1").click(function (){
    if ($("#index").length) {
      $(window).scrollTop($("#work").offset().top-70);
    } else {
      navigate("index.html");
    }
  });
  $("#arrow").click(function (){
    $(window).scrollTop($("#work").offset().top-70);
  });
  $("#button2").click(function (){
    navigate("about.html");
  });
});