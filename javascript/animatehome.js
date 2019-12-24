$(document).ready(function(){
  function reveal(sectionid, initialdelay) {
    setTimeout(function(){
      let i = 1;
      let sectionelementid;
      sectionelementid = "#" + sectionid + i;
      while ($(sectionelementid).length) {
        let it = i;
        let sectionsave = "#" + sectionid + it
        setTimeout(function(){
          console.log(it);
          $(sectionsave).animate({'opacity': '1'}, 300);
        }, it * 100);
        i++;
        sectionelementid = "#" + sectionid + i;
      }
    }, initialdelay);
  }

  function animateHeader() {
    // butterfly out buttons
    setTimeout(function(){
      $('#headerHider').animate({'width': '100%'}, 3000);
    }, 50)
    setTimeout(function(){
      $('#introTitleHider').animate({'width': '100%'}, 1400);
    }, 50)
    setTimeout(function(){
      $('#introDescriptionHider').animate({'width': '100%'}, 1000);
    }, 600)
  }

  function animateIntro() {
    // animate arrow in
    setTimeout(function(){
      $('.arrowStem').animate({'height': '20px'}, 300);
    }, 1100)
    setTimeout(function(){
      $('.arrowTip').animate({'opacity': '1'}, 100);
    }, 1600)
    // animate images
    setTimeout(function(){
      $('#meflat').animate({'opacity': '1'}, 1200);
    }, 200)
    setTimeout(function(){
      $('#float').animate({'opacity': '1', 'bottom': '250'}, 600);
      $('#blob').animate({'opacity': '1'}, 600);
      $('#shadow').animate({'opacity': '0.3'}, 600);
    }, 600)
  }
  animateHeader();
  animateIntro();
})
