$(function(){
    // 화면에 사이즈를 조절하면 
    $(window).resize(function(){
        var w = $(this).width();
        console.log(w);
        if(w <=850){

        }else{
            if($('.mobile_nav').hasClass('active')==true){
                $('.mobile_nav').removeClass('active');
                $('.transparency').removeClass('active');
            }
        }
    });
    $(window).trigger('resize');
    //화면을 시작할때 강제로 resize를 한번 실행시켜라
    $(".nav ul").mouseenter(function(){
        $(this).addClass('over')
    });
    $(".nav ul").mouseleave(function(){
        $(this).removeClass('over')
    });
    $('.mobile_tab').click(function(){
        $('.mobile_nav').addClass('active');
        $('.transparency').addClass('active');
        return false;
    });
    $('.transparency, .close').click(function(){
        $('.mobile_nav').removeClass('active');
        $('.transparency').removeClass('active');
        $('.mobile_nav .sub').css('display','none');
        return false;
    });
    $('.mobile_nav ul  li  a').click(function(){
        $('.sub').css('display','none');
        if($(this).next('.sub').css('display','none')){
            $(this).next('.sub').css('display','block') ;
        }else{
            $(this).next('.sub').css('display','none');
        }return false;
    });
});