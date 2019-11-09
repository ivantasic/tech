document.onscroll = function() {
    if( $(window).scrollTop() > $('header').height() ) {
        $('nav > div.navbar-inverse').removeClass('navbar-relative-top').addClass('navbar-fixed-top');
    }
    else {
        $('nav > div.navbar-inverse').removeClass('navbar-fixed-top').addClass('navbar-relative-top');
    }
    };

    $('.carousel').carousel({
        interval: 8000
    });


