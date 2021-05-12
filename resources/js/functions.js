$(document).ready(function() {
    $('.drop-down-menu').hover(function() {
        $(this).find('.drop-down-content').slideDown('fast');
    }, function() {
        $(this).find('.drop-down-content').slideUp('fast');
    });

    $('#product-page button').click(function() {
        $('.search div button:last-child span').text(Number($('.search div button:last-child span').text()) + 1);
        $('#cartbox .container .ctn').append(getProduct());
    });

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
            $('.search div').css({
                'position': 'fixed',
                'background-color': 'white',
                'top': '15px',
            });
        } else {
            $('#main-menu').css({
                'position': 'relative',
                'background-color': 'white',
                'top': '0px',
                'width': '100%'
            });
            $('.search div').css({
                'position': 'relative',
                'background-color': 'white',
                'top': '0px',
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
    
    $('.coverlay, .right-nav .controller button').click(function() {
        $('.right-nav').animate({
            width: '0%'
        });
        $('.coverlay').hide();
    });
    $('.search button:first-child').click(function() {
        $('#searchbox').show();
        $('#searchbox').animate({
            width: '30%'
        });
        $('.coverlay').show();
    })
    $('.search button:last-child').click(function() {
        $('#cartbox').show();
        $('#cartbox').animate({
            width: '30%'
        });
        $('.coverlay').show();
    })
});

function getProduct() {
    var product = $('.c-product.temp').clone(true);
    product.removeClass('temp');
    return product;
}