const classes = [
  {
    name: "CSCI1320",
    topics: "Web Design, Web Security, Databases, Servers, Browsers, Mobile Applications, Visual Design, User Testing, Iterative Design",
    languages: ["JavaScript", "HTML", "SQL", "Python"],
    href: "classes/class_cs1320.html"
  },
  {
    name: "APMA1690",
    topics: "Stochastic Approximation, PRNG, Random Walks, Markov Models, Bayes Nets, Markov Random Fields, Dynamic Programming, Dimensionality Reduction",
    languages: ["MatLab"],
    href: "classes/class_apma1690.html"
  },
  {
    name: "CSCI0330",
    topics: "Computer Systems, Storage Units, Caches, Processors, I/O Controllers, Optimization, Network Programming, Virtual Memory, Concurrent Programming",
    languages: ["C", "x86 Assembly"],
    href: "classes/class_cs0330.html"
  },
  {
    name: "CSCI0170",
    topics: "Algorithms, Functional Programming, Time Complexity, Graph Theory, Searching, Sorting, Recurrence Relations",
    languages: ["OCaml", "Lisp", "Racket"],
    href: "classes/class_cs0170.html"
  },
  {
    name: "CSCI1300",
    topics: "User Testing, Personas, Visual Design, Design Heuristics, Prototyping, Design Methodologies, AB Testing, JavaScript",
    languages: ["JavaScript", "HTML"],
    href: "classes/class_cs0330.html"
  },
  {
    name: "CSCI0180",
    topics: "Data Structures, Optimization, Object Oriented Programming, Web Architecture, Networks",
    languages: ["Java", "Scala"],
    href: "classes/class_cs0330.html"
  },
]

$(document).ready(function (){
  for (var i = 0; i < classes.length; i++ ) {
    var langhtml = ""
    var item = classes[i]
    for (var j = 0; j < item.languages.length; j++) {
      langhtml = langhtml + '<div class="classLanguage">' +
                  item.languages[j] + '</div>'
    }
    var html =  '<div class = "classGridBox">' +
                  '<a href="' + item.href + '" class="classButton">' +
                    '<div class="classTitle">' + item.name + '</div>' +
                    '<div class="classSubtitle">' + item.topics + '</div>' +
                    '<div class="languageContainer">' + langhtml + '</div>' +
                  '</a>'
                '</div>'
    html = $.parseHTML(html);
    $("#classesContainer").append(html);
  }
})
