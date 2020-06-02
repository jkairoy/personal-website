// navigate
$(document).ready(function() {
  function navigate(href) {
    $("body").animate({ opacity: 0 }, 500)
    setTimeout(function() {
      window.location.href = href;
    }, 500)
  }
  $("#button1").click(function() {
    if ($("#index").length) {
      $(window).scrollTop($("#work").offset().top - 70);
    } else if ($("#portfolio").length) {
      navigate("../index.html");
    } else {
      navigate("index.html");
    }
  });
  $("#arrow").click(function() {
    $(window).scrollTop($("#work").offset().top - 70);
  });
  $("#button2").click(function() {
    if ($("#portfolio").length) {
      navigate("../about.html");
    } else {
      navigate("about.html");
    }
  });
  $("#buttonvenue").click(function() {
    navigate("portfolio/venue.html");
  });
  $("#buttonaudioalpaca").click(function() {
    navigate("portfolio/audioalpaca.html");
  });
  $("#buttonfullstack").click(function() {
    navigate("portfolio/fullstack.html");
  });
  $("#buttontinytodo").click(function() {
    navigate("portfolio/tinytodo.html");
  });
  $("#buttonbeenthere").click(function() {
    navigate("portfolio/beenthere.html");
  });
  $("#buttonmylkguys").click(function() {
    navigate("portfolio/mylkguys.html");
  });
  $("#buttonnordson").click(function() {
    navigate("portfolio/nordson.html");
  });
  $("#buttonbrownapi").click(function() {
    navigate("portfolio/brownapi.html");
  });
});
