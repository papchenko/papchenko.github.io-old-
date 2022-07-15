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

$(document).ready(function () {

  $('.skils__titleMobile').click(function (event) {
    if ($('.skils__mobileVersion').hasClass('one')) {
      $('.skils__titleMobile').not($(this)).removeClass('active');
      $('.skils__text1').not($(this).next()).slideUp(200);
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


// _______________________________________________________________DARK_MODE on jQuery
var darkMode;

if (localStorage.getItem('dark-mode')) {
  darkMode = localStorage.getItem('dark-mode');
} else {
  darkMode = 'light';
}

localStorage.setItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
  $('body').addClass('dark');
  $('.dark-button').hide();
  $('.light-button').show();
}

$('.dark-button').on('click', function () {
  $('.dark-button').hide();
  $('.light-button').show();
  $('body').addClass('dark');
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function () {
  $('.light-button').hide();
  $('.dark-button').show();
  $('body').removeClass('dark');
  localStorage.setItem('dark-mode', 'light');
});
  // _______________________________________________________________END