const projects = [
  {
    name: "Tiny Todo",
    category: "Design and Development",
    href: "portfolio_tinytodo.html",
    img: "images/tinyTodo.png"
  },
  {
    name: "Been There",
    category: "Web Development",
    href: "portfolio_beenthere.html",
    img: "images/beenthere.gif"
  },
  {
    name: "Venue",
    category: "Web Development",
    href: "portfolio_venueweb.html",
    img: "images/venueWeb.png"
  },
  {
    name: "Venue",
    category: "App Design",
    href: "portfolio_venuemobile.html",
    img: "images/venueMobile.png"
  },
  {
    name: "FlashFloat",
    category: "Development",
    href: "portfolio_flashfloat.html",
    img: "images/flashFloat.png"
  },
  {
    name: "Optec Sentinel",
    category: "Illustration and Animation",
    href: "portfolio_optec.html",
    img: "images/finaltransfer.gif"
  }
]

$(document).ready(function (){
  for (var i = 0; i < projects.length; i++ ) {
    let item = projects[i]
    var html = '<div class="portfolioGridBox">' +
                  '<a class="portfolioFrame" href="' + item.href + '">' +
                    '<img class="portfolioImage" src="' + item.img +'"/>' +
                      '<div class="portfolioText">' +
                        item.name +
                        '<br/>' +
                        '<span style="font-weight: 200; font-size: 22px;">' +
                           item.category +
                        '</span>' +
                      '</div>' +
                    '</a>' +
                  '</div>'
    html = $.parseHTML(html);
    $("#portfolioContent").append(html);
  }
})
