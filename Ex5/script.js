$(window).on("load", start);

function start(){

    $('#slideshow').slick({
        nextArrow: $("#index_slides_right"),
        prevArrow: $("#index_slides_left"),
        autoplay: true,
        fade: true        
    });
    ScrollReveal().reveal('.reveal1');
    ScrollReveal().reveal('.reveal2', { delay: 500 });
    ScrollReveal().reveal('.reveal3', { delay: 1000 });

}