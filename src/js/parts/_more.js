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