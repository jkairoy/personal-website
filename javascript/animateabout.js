$(document).ready(function(){
  function animateHeader() {
    // butterfly out buttons
    setTimeout(function(){
      $('#headerHider').animate({'width': '100%'}, 3000);
    }, 50)
    setTimeout(function(){
      $('#aboutHider').animate({'width': '100%'}, 2400);
    }, 100)
    setTimeout(function(){
      $('#bioHider').animate({'width': '100%'}, 1000);
    }, 400)
    setTimeout(function(){
      $('.profilePhoto').animate({'opacity': '1'}, 700);
    }, 800)
  }
  setTimeout(function(){
    $('footer').animate({'opacity': '1'}, 1400);
  }, 800)
  animateHeader();
});
