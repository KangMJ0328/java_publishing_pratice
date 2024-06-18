$(function(){

    setTimeout(function(){
        $('.slider li .text0').addClass('on');
        $('.slider li .atext0').addClass('on');
    },1000);

    var bx = $('.slider').bxSlider({
        auto:true,
        controls:false,
        pager:false,
        mode:'fade',
        pause:5000,//슬라이드 실제속도 - setInterval과 비슷
        autoHover:true, 
        onSlideBefore:function(){},
        onSlideAfter:function(){
           var k =  bx.getCurrentSlide();
           $('.slider li').find('h2').removeClass('on');
           $('.slider li').find('p').removeClass('on');
           $('.slider li .text'+k).addClass('on');
           $('.slider li .atext'+k).addClass('on');
        }
    });
    $('.btn2').click(function(){
        $('.popup').css('display','none');
    });
    $('.next').click(function(){
        bx.goToNextSlide();
        return false;
    });
    $('.prev').click(function(){
        bx.goToPrevSlide();
        return false;
    });
   //#s2 밑에 해당
   var a1 = $('.s2_title img').offset().top;//   '/'
   var a2 = $('.s2_title h2').offset().top; // 제목
   var a3 = $('.s2_title p').offset().top; // 내용
   var a4 = $('.s2_table li').offset().top; //사각박스


    $(window).scroll(function(){
        var sct = $(this).scrollTop();

        if(a1 < sct + 700){
            $('.s2_title img').addClass('slide');
        }    
        if(a2 < sct + 700){
            $('.s2_title h2').addClass('slide');
        }
        if(a3 < sct + 700){
         $('.s2_title p').addClass('slide');
        }
        if(a4 < sct + 700){
            $('.s2_table li').eq(0).addClass('slide');
            setTimeout(function(){
                $('.s2_table li').eq(1).addClass('slide');
            },300);
            setTimeout(function(){
                $('.s2_table li').eq(2).addClass('slide');
            },600);
            setTimeout(function(){
                $('.s2_table li').eq(3).addClass('slide');
            },900);
        }


    });

    var b1 = $('.s3_title img').offset().top;//   '/'
    var b2 = $('.s3_title h2').offset().top; // 제목
    var b3 = $('.s3_title p').offset().top; // 내용
    var b4 = $('.s3_table li').offset().top; //사각박스

    $(window).scroll(function(){
        var sct = $(this).scrollTop();

        if(b1 < sct + 700){
            $('.s3_title img').addClass('slide');
        }    
        if(b2 < sct + 700){
            $('.s3_title h2').addClass('slide');
        }
        if(b3 < sct + 700){
         $('.s3_title p').addClass('slide');
        }
        if(b4 < sct + 700){
            $('.s3_table li').eq(0).addClass('slide');
            setTimeout(function(){
                $('.s3_table li').eq(1).addClass('slide');
            },300);
            setTimeout(function(){
                $('.s3_table li').eq(2).addClass('slide');
            },600);
            setTimeout(function(){
                $('.s3_table li').eq(3).addClass('slide');
            },900);
            setTimeout(function(){
                $('.s3_table li').eq(4).addClass('slide');
            },1200);
        }


    });
});