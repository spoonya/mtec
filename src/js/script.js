jQuery(function ($) {
    $('#owl1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Pagination
    $('.pag__next').click(function () {
        $('.pag').find('pag__num.active').next().addClass('active');
        $('.pag').find('pag__num.active').prev().removeClass('active');
    });

    $('.pag__prev').click(function () {
        $('.pag').find('pag__num.active').prev().addClass('active');
        $('.pag').find('pag__num.active').next().removeClass('active');
    });

    //Fotorama
    var fotorama = $('.fotorama').fotorama({
        shadows: false,
        nav: 'thumbs',
        fit: 'cover',
        thumbwidth: 100,
        thumbheight: 70,
        loop: false,
        arrows: 'always',
        width: '100%',
        maxwidth: '100%',
        ratio: 16 / 10,
        allowfullscreen: 'native'
    }).data('fotorama');
    $('.fotorama').on('fotorama:fullscreenenter', function (e, fotorama) {
        fotorama.setOptions({
            fit: 'contain'
        });
    });
    $('.fotorama').on('fotorama:fullscreenexit', function (e, fotorama) {
        fotorama.setOptions({
            fit: 'cover'
        });
    });

    //Menu
    $('.menu__burger').click(function(){
        $('.hdr__menu-wrap').addClass('open');
        $('.hdr__menu-close').addClass('show');
        $('.menu__overlay').fadeIn(250);
    });

    $('.menu__overlay, .hdr__menu-close').click(function(){
        $('.open').removeClass('open');
        $('.hdr__menu-close').removeClass('show');
        $('.menu__overlay').fadeOut(250);
    });

    var items = $('.hdr__menu-item').has('.sub__menu');
    items.append('<span class="sub__menu-open"></span>');
    items.children('.sub__menu').prepend('<li class="hdr__menu-item"><span class="sub__menu-link sub__menu-close">Назад</span></li>');
    items.children('.sub__menu-open').click(function(){
        $(this).parent('.hdr__menu-item').children('.sub__menu').addClass('open');
    });

    $('.sub__menu-close').click(function(){
        $(this).parent('.hdr__menu-item').parent('.sub__menu').removeClass('open');
    });
});