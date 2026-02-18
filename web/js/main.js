(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '.link-to-block' );

})(jQuery);
$('.dropdown').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdowns = $('.dropdown').not(this),
        $dropdownText = $dropdown.find('.dropdown__text'),
        $dropdownList = $dropdown.find('.dropdown__list'),
        $dropdownListItems = $dropdown.find('.dropdown__item');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdown.on('click', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').slideUp(250);

        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdown.removeClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideUp(250);
        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideDown(250);
        }
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $dropdownListItems.click(function(e) {
        e.stopPropagation();
        $dropdownText.text($(this).text());
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click( function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
    });
});
(function($) {

    $('.tabs').each( function() {

        $('.tabs__buttons').on('click', '.tabs__btn:not(.tabs__btn_active)', function () {
            $(this).addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('tabs__item_active').eq($(this).index()).addClass('tabs__item_active');
        });
    });
})(jQuery);
(function($) {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('accordion__item_open');

        // collapse other accordions
        if (!e.data.multiple) {
            $el.find('.accordion__content').not($next).slideUp().parent().removeClass('accordion__item_open');
        };
    };

    var accordion = new Accordion($('.accordion'), false);

})(jQuery);

    jQuery(document).ready(function ($) {
        $('.cookie_window').addClass('c_opened');
    });

    $(".btn_close").click(function(){
        $(".cookie_window").removeClass('c_opened');
    });
$(document).ready(function(){
    if($('.gb_animate').length) {
        $('.gb_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 200
        });
        $('.gs_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 100
        });
    }
});

$(document).ready(function() {
    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 80) {
            $(".header").addClass('header_sticky')
        }
        if (80 > scrolled) {
            $(".header").removeClass('header_sticky')
        }

    }
});
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('stopped');
        $('.menu_opener').addClass('menu-mobile_opened');
        $('.logo').addClass('logo-white');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('stopped');
        $('.menu_opener').removeClass('menu-mobile_opened');
        $('.logo').removeClass('logo-white');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose();
            $('body').removeClass('stopped');
        } else {
            hamburgerOpen();
            $('body').addClass('stopped');
        }
    });

})(jQuery);
$(function() {

    $('.types_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 1,
        speed: 300,
        fade: true,
        arrows: true
    });

    $('.projects_slider').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    fade: true,
                    dots: true
                }
            }
        ]
    });

    $('.article_slider').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 4,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

    $('.personal_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centerMode: false,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

    $('.slider_main').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 1,
        arrows: false,
        fade: true,
        centerMode: false
    });

    $('.cat-slider').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

    $('.feedback').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

    $('.simple_slider').slick({
        dots: false,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centermode: false,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

    $('.docs-slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centermode: false,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

    $('.project_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 2,
        arrows: true,
        variableWidth: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    variableWidth: false,
                    fade: true
                }
            }
        ]
    });

    $('.ps_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 5,
        centermode: false,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

    $('.foto_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centermode: false,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

});
$(document).ready(function() {
    $(".fancybox").fancybox();
});

// Fires whenever a player has finished loading
function onPlayerReady(event) {
    event.target.playVideo();
}

// Fires when the player's state changes.
function onPlayerStateChange(event) {
    // Go to the next video after the current one is finished playing
    if (event.data === 0) {
        $.fancybox.next();
    }
}


// The API will call this function when the page has finished downloading the JavaScript for the player API
function onYouTubePlayerAPIReady() {

    // Initialise the fancyBox after the DOM is loaded
    $(document).ready(function() {
        $(".fancybox-video")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');

                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });
    });

}
(function($) {

    $('.sticky').hcSticky({
        top: 180,
        bottomEnd: 40,
        className: 'is-sticky',
        wrapperClassName: 'wrapper-sticky'
    });

})(jQuery);
(function($) {
    $('.search_btn').on('click', function () {
        $('.search_window').addClass('sw_opened');
    });
    $('.close_btn').on('click', function () {
        $('.search_window').removeClass('sw_opened');
    });
})(jQuery);
$("#show-more").click(function(){
    $(".smth-else").fadeIn( 500 ).css('display', 'flex').removeClass('hidden');
    $("#show-more").addClass('hidden');
});

var $input = $('input.tel');
if(!mobilecheck()){
    //для ПК
    $input.attr('type', 'text').mask("(999) 999-9999");;
} else {
    //для телефона
    $input.attr('type', 'number'); //или 'tel'
}