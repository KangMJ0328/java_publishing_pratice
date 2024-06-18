$(function(){
    //사진 크기 198px;
    var num= 0;
    var li_w = $('.ban li').eq(0).width();
    var copy1 = $('.ban li:lt(6)').clone();
    $('.ban').append(copy1);
    // alert($('.ban li').length);
    $('.next').click(function(){
        if(num == $('.ban li').length-6){
            num = 0;
            $('.ban').css('margin-left','0');
        }
        num++;
        $('.ban').stop().animate({'margin-left':-li_w*num},500);
        return false;
    });
    $('.prev').click(function(){
        if(num == 0){
            num = $('.ban li').length-6;
            $('.ban').css('margin-left','0');
        }
        num--;
        $('.ban').stop().animate({'margin-left':-li_w*num},500);
        return false;
    });
});