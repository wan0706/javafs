$(function(){
    $('.c_bom ul li').css('display','none');
    $('.c_bom ul li').eq(0).css('display','block');

    $('.btn li').click(function(){
        var i = $(this).index();
        $('.btn li').removeClass('on');
        $('.btn li').eq(i).addClass('on');

        $('.c_bom ul li').css('display','none');
        $('.c_bom ul li').eq(i).css('display','block');

        return false;
    });    
});