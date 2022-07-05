// _______________________________________________________________SPOILER on jQuery
$(document).ready(function () {

    $('.skils__title').click(function (event) {
        if ($('.skils').hasClass('one')) {
            $('.skils__title').not($(this)).removeClass('active');
            $('.skils__text').not($(this).next()).slideUp(200);
        }
        $(this).toggleClass('active').next().slideToggle(600);
    });

});
// _______________________________________________________________END

// _______________________________________________________________BURGER_MENU on jQuery

$(document).ready(function () {

    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});
// _______________________________________________________________END