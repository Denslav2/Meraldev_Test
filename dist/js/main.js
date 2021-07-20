$(function(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="arrow-next" src="img/arrow-next.svg" alt="btn-prew">',
        nextArrow: '<img class="arrow-prev" src="img/arrow-prev.svg" alt="btn-prew">',
        responsive: [
            {
              breakpoint: 1221,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 780,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
    });

    new WOW().init();
    
});