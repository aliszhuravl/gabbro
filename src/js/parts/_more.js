$("#show-more").click(function(){
    $(".smth-else").fadeIn( 500 ).css('display', 'flex').removeClass('hidden');
    $("#show-more").addClass('hidden');
});
