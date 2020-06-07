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

    // Fotorama
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

});