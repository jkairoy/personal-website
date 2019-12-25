$(document).ready(function(){
  function animateHeader() {
    // butterfly out buttons
    setTimeout(function(){
      $('#headerHider').animate({'width': '100%'}, 3000);
    }, 50)
  }
  setTimeout(function(){
    $('#titleHider').animate({'width': '100%'}, 1000);
  }, 500)
  setTimeout(function(){
    $('#title2Hider').animate({'width': '100%'}, 1000);
  }, 200)
  setTimeout(function(){
    $('#title3Hider').animate({'width': '100%'}, 1000);
  }, 300)
  setTimeout(function(){
    $('#title4Hider').animate({'width': '100%'}, 1000);
  }, 100)
  setTimeout(function(){
    $('#introPicture').animate({'opacity': Math.max(0, Math.min(1, ($(window).width()-600)/1000))}, 1000);
  }, 500)
  $(window).resize(function() {
    $("#introPicture").css({opacity: Math.max(0, Math.min(1, ($(window).width()-600)/1000))});
  });
  animateHeader();
})
