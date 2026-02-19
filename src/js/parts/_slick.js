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
                    arrows: false,
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
                    arrows: false,
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
                    arrows: false,
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
                    arrows: false,
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
                    slidesToShow: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
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
                    arrows: false,
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
                    arrows: false,
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
                    arrows: false,
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
                    arrows: false,
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
                    arrows: false,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

});