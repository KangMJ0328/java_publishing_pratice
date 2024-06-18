$(function(){

    $(window).resize(function(){
        h = $(window).height(); //현재 브라우저 높이를 h에 저장
        $('section > div').height(h);
    });
    $(window).trigger('resize');

    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        $("#sTop").text(sct);
        if(sct >= 100){
            $('nav').addClass('fixed');
            $('#floatdiv').addClass('fixed')

        }else{
            $('nav').removeClass('fixed');
            $('#floatdiv').removeClass('fixed')
        }

        for(var i = 0; i<$('nav ul li').length;i++){
           if(sct >= $('section>div').eq(i).offset().top){
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(i).addClass('on');
            $('#floatdiv > ul > li').removeClass('on')
            $('#floatdiv > ul > li').eq(i).addClass('on');
        } 
        };
        

    });

    $('nav ul li').click(function(){
        var i = $(this).index();
        var offset_nav =$('section>div').eq(i).offset().top;
        $('html,body').stop().animate({
            scrollTop:offset_nav
        },1000);
        $('nav ul li').removeClass('on');
        $(this).addClass('on');
    });

    // $('section > div').mousewheel(function(event, d){
    //     // 마우스 휠을 위로 스크롤하면 d값이 양수(1) / 아래로 스크롤하면 음수(-1)
    //     if(d > 0){
    //         var prev = $(this).prev().offset().top;
    //         $('html,body').stop().animate({scrollTop:prev},1000,'easeOutBounce');
    //     }if(d< 0 ){
    //         var next = $(this).next().offset().top;
    //         $('html,body').stop().animate({scrollTop:next},1000,'easeOutBounce');
    //     }
    // });
    $('#popup').draggable();
    // jquery-ui.js 에서 제공하는 플러그인
    if($.cookie('pop')!="no"){
        $('#popup').show();
    }
    $('#popup area:eq(0)').click(function(){
        $('#popup').fadeOut('fade');
    });

    $('#popup area:eq(1)').click(function(){
        $.cookie('pop','no',{exfires:1})
        // 하룻동안 pop 에 no를 저장
        // 하룻동안 보지 않기.
        $('#popup').fadeOut('fade');
    });
    $('#notice_wrap').draggable();
    if($.cookie('popup')=='none'){
        $('#notice_wrap').hide();
    }
    var chk = $('#expiresChk');
    $('.closeBtn').on('click',closePop);

    function closePop(){
        if(chk.is(":checked")){
            $.cookie('popup','none',{exfires:3});
        }
        $('#notice_wrap').fadeOut('fast');
    }
});