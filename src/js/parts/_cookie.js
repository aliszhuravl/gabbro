
    jQuery(document).ready(function ($) {
        $('.cookie_window').addClass('c_opened');
    });

    $(".btn_close").click(function(){
        $(".cookie_window").removeClass('c_opened');
    });