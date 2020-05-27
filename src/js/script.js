jQuery(function ($) {
    $('#owl1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // Pagination
    $('.pag__next').click(function(){
        $('.pag').find('pag__num.active').next().addClass('active');
        $('.pag').find('pag__num.active').prev().removeClass('active');
    });

    $('.pag__prev').click(function(){
        $('.pag').find('pag__num.active').prev().addClass('active');
        $('.pag').find('pag__num.active').next().removeClass('active');
    });
});