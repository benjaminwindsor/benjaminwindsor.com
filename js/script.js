/*
**************
SCRIPT.JS FILE
**************
*/


// INDEX-HTML PAGE JS


//JUMBOTRON BACKGROUND EFFECT


var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});


//FULL SCREEN NAVIGATION EFFECT


function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

//JUMBOTRON SCROLL EFFECT


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//INDEX BANNER DISAPPEAR EFFECT


$(window).scroll(function(){
    $(".banner").css("opacity", 1 - $(window).scrollTop() / 250);
  });


$(window).scroll(function(){
    $(".banner-2").css("opacity", 1 - $(window).scrollTop() / 250);
  });



//CSS3 NAVBAR TOGGLE EFFECT


$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});

//ANIMATE ON SCROLL EFFECT

    AOS.init({
      duration : 1200,
    });

//JQUERY IMAGE SLIDER EFFECT

