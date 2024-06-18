$(function(){

    var clone =$('.imgs li').eq(0).clone();
    // .imgs 안에 li 중 첫번쨰(인덱스0번) li를 복제 실행.
    $('.imgs').append(clone);
    // .imgs 선택자에게 자식요소로 clone에 저장된 요소를 추가

    var i = 0;
    // i라는 변수에 기준이 될 수 있는 수를 저장.
    var repeat;
    // repeat라는 변수 지정.

    $('.pager li').click(function(){
        i = $(this).index();
        $(".imgs").stop().animate({
            'margin-left':-i*100+'%'
        },600);
        $(".pager li").removeClass("on");
        $(this).addClass("on");
    });

    $('.next').click(function(){
        i++;
        //.next를 클릭할떄마다 변수 i가 1씩 증가됨.
        if(i==5){
            $(".imgs").stop().animate({
                'margin-left':-i*100+'%'
            },600,function(){ //콜백 함수
                $(".imgs").css("margin-left",0);
            });
            i=0;
        }else{
            $(".imgs").stop().animate({
                'margin-left':-i*100+'%'
            },600);
        }
        $(".pager li").removeClass("on");
        $(".pager li").eq(i).addClass("on");
    });
    $('.prev').click(function(){
        if(i == 0){
            i=5;
            $('.imgs').css("margin-left",-i*100+"%");
        }
        i--;
        $(".imgs").stop().animate({
            "margin-left":-i*100+"%"
        },600);
        $(".pager li").removeClass("on");
        $(".pager li").eq(i).addClass("on");
    });
    
    function timer(){
        repeat = setInterval(function(){
            if(i==5){
                i = 0;
                $(".imgs").css("margin-left",0);
                // $(".pager li").eq(i).addClass("on");
            }
            i++;
            $(".imgs").stop().animate({"margin-left":-i*100+"%"},600);
            if(i==5){
                $(".pager li").removeClass("on");
                $(".pager li").eq(0).addClass("on");
            }else
                $(".pager li").removeClass("on");
                $(".pager li").eq(i).addClass("on");
        },3000);
    }
    timer();
    $("#wrap").mouseover(function(){
        clearInterval(repeat);
        //setInterval이 저장되어있는 repeat한테 clearInterval을 실행함으로서 setInterval작동 중지
     });
     $("#wrap").mouseleave(function(){
        timer();
        //#wrap 선택자에서 마우스가 해당 영역을 떠났을 때 timer()안에 지정된 기능들을 실행한다.
     });

});