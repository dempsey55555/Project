$().ready(function () {
    $('.testimonials__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        draggable: true,
        responsive:
            [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    },
                },
                {
                    breakpoint: 500,
                    settings: {
                        variableWidth: true,
                    },
                },
            ]

    });

    $(".header__nav-list a, .footer__link, .header__btn-box a").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)
    $('.burger, .overlay, .header__top a').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })

    $('.footer__top-title--slide').on('click', function () {
        $(this).next().slideToggle()
    })

});