$(function () {
    $('a[href^="#"]').on('click', function (evt) {
        evt.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({ scrollTop: dn }, 1000);
    });
});

$(function () {
    $('.slider-services').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nav: true,
        prevArrow: '<button class="arrow-prev"></button>',
        nextArrow: '<button class="arrow-next"></button>',
        appendArrows: '.slider-arrows',
        autoplay: true,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    var slider = $('.slider-services');
    $('.sl-count__total').text(slider.slick("getSlick").slideCount);
    $(".slider-services").on('afterChange', function (event, slick, currentSlide) {
        $(".sl-count__current").text(currentSlide + 1);
    });
})

$(function () {
    $('.slider-maintenance').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nav: true,
        prevArrow: '<button class="arrow-prev"></button>',
        nextArrow: '<button class="arrow-next"></button>',
        appendArrows: '.slider-arrows2',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });
    var slider = $('.slider-maintenance');
    $('.sl-count__total2').text(slider.slick("getSlick").slideCount);
    $(".slider-maintenance").on('afterChange', function (event, slick, currentSlide) {
        $(".sl-count__current2").text(currentSlide + 1);
    });
})


$(document).ready(function () {
    $('.press-down').click(function () {
        $(this).siblings().toggle();
        $(this).toggleClass('current');
    })
})

$(document).ready(function () {
    $('#show-more').click(function () {
        $(this).siblings('.content-hidden').toggleClass('show');
        $(this).toggleClass('current');
    })
})

$(document).ready(function () {
    $('.burger').click(function () {
        $('.burger-menu').toggle();
        $(this).toggleClass('active');
        $('.wrapper-header__phone').toggleClass('active');
        $('body').toggleClass('scroll-hidden');
    })
})

$(document).ready(function () {
    $('#modal-show-order').on('click', function () {
        $('.modal--order').addClass('active');
    })
});

$(document).ready(function () {
    $('#modal-show').on('click', function () {
        $('.modal--feedback').addClass('active');
    })
});

$(document).mouseup(function (e) { // событие клика по веб-документ
    var div = $(".modal-content"); // тут указываем class элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        &&
        div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".modal").removeClass('active');
    }
});

$(document).ready(function () {
    $('.modal__close').click(function () {
        $('.modal').removeClass('active');
    })
})