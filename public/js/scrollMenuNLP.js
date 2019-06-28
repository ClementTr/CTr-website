$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#nlpScrollspy a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

window.onscroll = function() {menuStickyNLP(), scrollNLP()};

let nlp_menu = document.getElementById("nlp-menu");
let sticky_nlp = nlp_menu.offsetTop;

function menuStickyNLP() {
  if (window.pageYOffset - 120 >= sticky_nlp) {
    nlp_menu.classList.add("sticky")
  } else {
    nlp_menu.classList.remove("sticky");
  }
}

function scrollNLP(event){
    let scrollPos = $(document).scrollTop();
    $('#nlp-menu-center a').each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nlp-menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
