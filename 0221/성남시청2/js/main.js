
//목표
//1. 자동 슬라이드(setInterval) 구현
//2. prev, next 버튼 이동 구현(좌/정지/우)
//3. indicator 버튼 이동 구현(X)
//4. 버튼 이동에 따른 .count 숫자 증감
//페이지가 로드되고 실행하는 함수

$(function(){
    var i = 0;
    var k = 0;
    var repeat;


    function timer(){
        repeat = setInterval(function(){
            i++;

            if(i == 2){
                i = 0;
            }
            $('.main_visual_img li').eq(i).css('left',"100%").animate({
                'left':0
            },600);    
            $('.main_visual_img li').eq(i-1).css('left',"0%").animate({
                'left':'-100%'
            },600);
            $('.indicator li').removeClass('on').eq(i).addClass('on'); 
            $('.count span').text(i+1);
            // $('.count').html(`<span>${i + 1}</span>/6`); //.indicator 번호 변환(수정 중)
     
        },3000);
    }
    $('.next').on('click', next_slide);  
    $('.prev').on('click', prev_slide);
      function next_slide(){
        $('.next').off('click'); //.next를 클릭했을 때, 클릭 불가(더블 클릭 방지)
        $(document).off('keydown') //키보드 입력도 방지
        clearInterval(repeat); //자동슬라이드 중지
        i++; //i 증가
            if(i == 2){
            i = 0;
        }
        $('.main_visual_img li').eq(i).css('left',"100%").animate({
            'left':0
        },600);    
        $('.main_visual_img li').eq(i-1).css('left',"0%").animate({
            'left':'-100%'
        },600,function(){
            $('.next').on('click', next_slide);
            $(document).on('keydown', pressKey); //pressKey 함수 호출
            timer();
        });
        $('.indicator li').removeClass('on').eq(i).addClass('on'); 
        k = i;
        $('.count span').text(i+1);
    }
    function prev_slide(){
        $('.prev').off('click'); //.prev를 클릭했을 때, 클릭 불가(더블 클릭 방지)
        $(document).off('keydown') //키보드 입력도 방지
        clearInterval(repeat); //

        i--;
        $('.main_visual_img li').eq(i).css('left', '-100%').animate({
            'left': 0 //i번째 사진 선택하여 오른쪽에서 화면으로 이동, 애니메이션 0.6초(600밀리초) 동안 지속
          }, 600); //animate()는 css 속성을 ':'로 구분하여 각각 객체로 전달
        $('.main_visual_img li').eq(i + 1).css('left', '0%').animate({
          'left': '100%'      
        }, 600, function(){ //콜백함수로 초반 중지 코드 재생
          $('.prev').on('click',prev_slide);
          $(document).on('keydown', pressKey); //pressKey 함수 호출
          timer();
        });
        if(i == -1){
            i = 1;
          }
        $('.indicator li').removeClass('on').eq(i).addClass('on');
        k=i; 
        $('.count span').text(i+1);
    }
    $(document).on('keydown', pressKey); //키를 눌렀을 때 pressKey 함수 호출
    function pressKey(e){ //e가 누른 키의 정보
      if(e.keyCode == 65 || e.keyCode == 37){ //a 또는 왼쪽 화살표 키를 눌렀을 때
        prev_slide();
      }else if(e.keyCode == 68 || e.keyCode == 39){ //d 또는 오른쪽 화살표 키를 눌렀을 때
        next_slide();
      }
    };
});