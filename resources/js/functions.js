$(document).ready(function() {
    $('.drop-down-menu').hover(function() {
        $(this).find('.drop-down-content').slideDown('fast');
    }, function() {
        $(this).find('.drop-down-content').slideUp('fast');
    });
    document.documentElement.style.setProperty('--height', $('.slide .product').height() + 'px');
});