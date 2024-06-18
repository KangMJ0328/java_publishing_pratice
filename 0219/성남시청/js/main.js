
//목표
//1. 자동 슬라이드(setInterval) 구현
//2. prev, next 버튼 이동 구현(좌/정지/우)
//3. indicator 버튼 이동 구현
//4. 버튼 이동에 따른 .count 숫자 증감
//페이지가 로드되고 실행하는 함수

$(function(){
    var i = 0;
    var k = 0;
    var repeat;

    $(".indicator li").on('click',click_slide);

    function click_slide(){
        $('.indicator li').off('click'); //중복클릭방지
        i = $(this).index();
        // i = $(this).attr('data-idx);

        $('.count span').text(i+1);
       // $('.count').html(`<span>${i + 1}</span>/6`); //.indicator 번호 변환(수정 중)

       if(i > k){
        $('.main_visual_img li').eq(i).css('left',"100%").animate({
            'left':0
        },600);
        
        $('.main_visual_img li').eq(k).css('left',"0%").animate({
            'left':'-100%'
        },600,function(){
            $(".indicator li").on('click',click_slide);
        });
       }else if(i < k){
        $('.main_visual_img li').eq(i).css('left',"-100%").animate({
            'left':0
        },600);
        
        $('.main_visual_img li').eq(k).css('left',"0%").animate({
            'left':'100%'
        },600,function(){
            $(".indicator li").on('click',click_slide);
        });

       }else{
         $('.indicator li').on('click', click_slide);
       }
       $('.indicator li').removeClass('on').eq(i).addClass('on'); 
       // li 모든 클래스 제거한 후, 클릭된 li에  클래스 추가
       // pager의 색상변경
    }
    timer();
    function timer(){
        repeat = setInterval(function(){
            i++;

            if(i==5){
                i = 0;
            }
            $('.main_visual_img li').eq(i).css('left',"100%").animate({
                'left':0
            },600);
            $('.main_visual_img li').eq(i-1).css('left',"0%").animate({
                'left': '-100%'
            },600);
            $('.indicator li').removeClass('on').eq(i).addClass('on');
            $('.count span').text(i+1);
        },3000);
    }
    $('.indicator li').mouseover(function(){
        clearInterval(repeat);
    });
    $('.indicator li').mouseleave(function(){
        timer();
    });
    $('.next').on('click',next_slide);

    $('.prev').on('click', prev_slide);

    function next_slide(){
        $('.next').off('click');
        $(document).off('keydown');
        clearInterval(repeat);

        $('.main_visual_img li').eq(i).css('left',"100%").animate({
            'left':0
        },600);
        $('.main_visual_img li').eq(i-1).css('left','0%').animate({
            'left':'-100%'
        },600,function(){
            $('.next').on('click',next_slide);
            $(document).on('keydown',pressKey);
            timer();
        });
        $('.indicator li').removeClass('on').eq(i).addClass('on');
        $('.count span').text(i+1);

    };

    function prev_slide(){
        $('.prev').off('click');
        $(document).off('keydown')
        clearInterval(repeat);

        $('.main_visual_img li').eq(i).css('left','-100%').animate({
            'left':0
        },600);
        $('.main_visual_img li').eq(i+1).css('left','0%').animate({
            'left':'100%'
        },600, function(){
            $('.prev').on('click',prev_slide);
            $(document).on('keydown',pressKey);
            timer();
        });

        if(i ==-1){
            i = 5;
        }
        $('.indicator li').removeClass('on').eq(i).addClass('on');
        $('.count span').text(i+1);
    }
    $(document).on('keydown',pressKey);
    function pressKey(e){
        if(e.keyCode ==65 || e.keyCode ==37){
            prev_slide();

        }else if(e.keyCode ==68 || e.keyCode ==39){
            next_slide();
        }
    };
    // $('.stop_btn').click(function(){
    //     if($(this).hasClass('on') ==false){
    //         $(this).addClass('on');
    //         clearInterval(repeat);

    //     }else{
    //         $(this).removeClass('on');
    //         timer();
    //     }
    // });
    
    var is_play = false;

    $('.stop_btn').click(function(){
        if(is_play){
            $(this).removeClass('on');
            timer();
        }else{
            $(this).addClass('on');
            clearInterval(repeat);
        }

        is_play = !is_play;

    });

});