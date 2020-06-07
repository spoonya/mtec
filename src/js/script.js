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

<<<<<<< HEAD
    // Fotorama
=======
    //Fotorama
>>>>>>> 830684c53e2363b1c839fa3ba18313c2a88cd073
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

<<<<<<< HEAD
    //Mobile menu
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var body = document.querySelector('body');
    if (isMobile.any()) {
        body.classList.add('touch');
        var arrow = document.querySelectorAll('.arrow');
        for (i = 0; i < arrow.length; i++) {
            var thisLink = arrow[i].previousElementSibling;
            var subMenu = arrow[i].nextElementSibling;
            var thisArrow = arrow[i];

            thisLink.classList.add('parent');
            arrow[i].addEventListener('click', function () {
                subMenu.classList.toggle('open');
                thisArrow.classList.toggle('active');
            });
        }
    } else {
        body.classList.add('mouse');
    }

=======
    //Menu*
    $('.menu__burger').click(function(){
        $('.hdr__menu-wrap').toggleClass('open');
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
>>>>>>> 830684c53e2363b1c839fa3ba18313c2a88cd073
});