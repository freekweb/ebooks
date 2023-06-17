$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    // $('.carousel.carousel-slider').carousel({
    //     fullWidth: true,
    //     indicators: true,
    //     noWrap: false
    // });
    $('.slider').slider();

    $('#top').on('click', function(){
        $("html, body").animate({
            scrollTop: "0"
        }, 1000)
    });
    
});