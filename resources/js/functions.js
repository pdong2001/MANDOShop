$(document).ready(function() {
    $('.color input').change(function() {
        $('.color .chose-color').html($('.color input:checked+label div').html());
    });
    $('.quantity input').change(function() {
        if ($(this).val() == '' || Number($(this).val()) < 1) {
            $(this).val('1');
        }
    });
    $('.drop-down-menu').hover(function() {
        $(this).find('.drop-down-content').slideDown('fast');
    }, function() {
        $(this).find('.drop-down-content').slideUp('fast');
    });

    $(window).scroll(function() {
        var wT = $(this).scrollTop();
        var mT = $('#main-menu').height() + 120;
        var top = 15;
        if (wT > mT) {
            $('#main-menu').css({
                'position': 'fixed',
                'background-color': 'white',
                'top': '0px',
                'width': '100%'
            });
            if ($(window).width() <= 768) {
                top = Number($('#main-menu').height());
            }
            $('.search div').css({
                'position': 'fixed',
                'background-color': 'white',
                'top': top + 'px',
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
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
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
        $('body').addClass('scroll-hidden');
    });
    $('.search button:first-child').click(function() {
        $('#searchbox').show();
        if ($(window).width() > 768) {
            $('#searchbox').animate({
                width: '30%'
            });
        } else {
            $('#searchbox').animate({
                width: '50%'
            });
        }
        $('.coverlay').show();
        $('body').removeClass('scroll-hidden');
    })
    $('.search button:last-child').click(function() {
        $('#cartbox').show();
        if ($(window).width() > 768) {
            $('#cartbox').animate({
                width: '30%'
            });
        } else {
            $('#cartbox').animate({
                width: '50%'
            });
        }
        $('.coverlay').show();
        $('body').removeClass('scroll-hidden');
    })
});

function getProduct() {
    var product = $('.c-product.temp').clone(true);
    product.removeClass('temp');
    return product;
}

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    value < 1 ? value = 1 : '';
    document.getElementById('number').value = value;
}