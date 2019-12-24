$(document).ready(function(){
  $("body").mousemove(function(e) {
    parallaxIt(e, "#float", -5, true);
    parallaxIt(e, "#blob", -20, true);
    parallaxIt(e, "#shadow", -20, false);
  });
  function parallaxIt(e, target, movement, moveY) {
    if(e.pageY < 1000) {
      var $this = $("#float");
      var relX = e.pageX - $this.offset().left;
      if (moveY) {
        var relY = e.pageY - $this.offset().top;
      } else {
        var relY = $this.offset().top;
      }
      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }
  }
})
