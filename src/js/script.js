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

    //Fotorama
    jQuery(function($){var fotorama = $('.fotorama').fotorama({shadows: false, nav: 'thumbs', fit: 'cover', thumbwidth: 100, thumbheight: 70, loop: false, arrows: 'always', width: '100%', maxwidth: '100%', ratio: 16/10, allowfullscreen: 'native'}).data('fotorama'); $('.fotorama').on('fotorama:fullscreenenter', function (e, fotorama) {fotorama.setOptions({fit: 'contain'});});$('.fotorama').on('fotorama:fullscreenexit', function (e, fotorama) {fotorama.setOptions({fit: 'cover'});});})
});