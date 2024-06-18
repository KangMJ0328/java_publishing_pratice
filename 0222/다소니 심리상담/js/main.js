$(function(){


    setTimeout(function(){
        $('.s1_tbox h2').addClass('on');
       $('.s1_tbox p').addClass('on');
    },1000);



    var bx = $('.slider').bxSlider({
    auto:true,
    controls:true,
    // mode:'fade',
    pager:false,
    pause:5000, //슬라이드 실제속도 - setInterval과 비슷
    // autoHover:true, 
    onSlideBefore:function(){},
    onSlideAfter:function(){
       var k = bx.getCurrentSlide();
    //    $('.s1_tbox').find('h2').removeClass('on');
    //    $('.s1_tbox').find('p').removeClass('on');
    
       $('.s1_tbox h2'+k).addClass('on');
       $('.s1_tbox p'+k).addClass('on');
    }
    });

});