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


var darkMode;

if (localStorage.getItem('dark-mode')) {  
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';  
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);


if (localStorage.getItem('dark-mode') == 'dark') {
  // if the above is 'dark' then apply .dark to the body
  $('body').addClass('dark');  
  // hide the 'dark' button
  $('.dark-button').hide();
  // show the 'light' button
  $('.light-button').show();
}

$('.dark-button').on('click', function() {  
    $('.dark-button').hide();
    $('.light-button').show();
    $('body').addClass('dark');  
    // set stored value to 'dark'
    localStorage.setItem('dark-mode', 'dark');
  });
  
  
  $('.light-button').on('click', function() {  
    $('.light-button').hide();
    $('.dark-button').show();
    $('body').removeClass('dark');
    // set stored value to 'light'
    localStorage.setItem('dark-mode', 'light');   
  });