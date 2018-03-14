//----------------------------------------------------
//  Services
//----------------------------------------------------

$(function () {
    new WOW().init();
});

//----------------------------------------------------
//  Work
//----------------------------------------------------

$(function () {
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

//----------------------------------------------------
//  Work
//----------------------------------------------------

$(function () {
    $('.owl-carousel').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});