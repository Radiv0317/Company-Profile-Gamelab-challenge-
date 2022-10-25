// Change Navbar scrolled color
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
    });