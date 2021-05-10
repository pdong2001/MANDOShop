$(document).ready(function() {
    $('.drop-down-menu').hover(function() {
        $(this).find('.drop-down-content').slideDown('fast');
    }, function() {
        $(this).find('.drop-down-content').slideUp('fast');
    });

    document.documentElement.style.setProperty('--height', $('.slide .product').height() + 'px');

    $(window).scroll(function() {
        var wT = $(this).scrollTop();
        var mT = $('#main-menu').height() + 120;
        if (wT > mT) {
            $('#main-menu').css({
                'position': 'fixed',
                'background-color': 'white',
                'top': '0px',
                'width': '100%'
            });
        } else {
            $('#main-menu').css({
                'position': 'relative',
                'background-color': 'white',
                'top': '0px',
                'width': '100%'
            });
        }
    });
    $(".center").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});