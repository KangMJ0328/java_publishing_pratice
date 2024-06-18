$(function(){
    var h;

    $(window).resize(function(){
      h = $(window).height(); //현재 브라우저 높이를 h에 저장 
      $('section>div').height(h);
       //저장한 높이 h를 section > div에 각각 넣는다.
       //section>div{height:100vh}를 준것과 동일
    });
    $(window).trigger('resize');
    //브라우저 시작시 강제로 resize를 실행

    var dTop = $('#floatdiv').offset().top; //250
    //var dTop1 = parseInt($('#floatdiv').css('top')); 
    //parseInt(250px) -> 250 ex) parseInt(123.45px) = 123
    //alert(dTop1);

    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        $('#sTop').text(sct);
        pdt = sct * 0.001;
        if(pdt <= 1){
            $('#pdt_basic').css('opacity',pdt);
        }
        //$('#pdt_basic').css('transform',"rotate("+sct+"deg)");
        console.log(pdt);
        if(sct>=100){
            $('nav').addClass('fixed');
        }else{
            $('nav').removeClass('fixed');
        }

        $('#floatdiv').stop().animate({top:dTop+sct},500);

        if(sct >= $('section>div').eq(0).offset().top){
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(0).addClass('on');
            $('#floatdiv ul li').removeClass('on');
            $('#floatdiv ul li').eq(0).addClass('on');
            $('#leftdiv ul li').removeClass('on');
            $('.leftdiv_title').addClass('on');
        }
        if(sct >= $('section>div').eq(1).offset().top){
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(1).addClass('on');
            $('#floatdiv ul li').removeClass('on');
            $('#floatdiv ul li').eq(1).addClass('on');
            $('#leftdiv ul li').removeClass('on');
            $('#leftdiv ul li').eq(0).addClass('on');
        }

        if(sct >= $('section>div').eq(2).offset().top){
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(2).addClass('on');
            $('#floatdiv ul li').removeClass('on');
            $('#floatdiv ul li').eq(2).addClass('on');
            $('#leftdiv ul li').removeClass('on');
            $('#leftdiv ul li').eq(1).addClass('on');
        }
        if(sct >= $('section>div').eq(3).offset().top){
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(3).addClass('on');
            $('#floatdiv ul li').removeClass('on');
            $('#floatdiv ul li').eq(3).addClass('on');
            $('#leftdiv ul li').removeClass('on');
            $('#leftdiv ul li').eq(2).addClass('on');
        }
        if(sct >= $('section>div').eq(4).offset().top){
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(4).addClass('on');
            $('#floatdiv ul li').removeClass('on');
            $('#floatdiv ul li').eq(4).addClass('on');
            $('#leftdiv ul li').removeClass('on');
            $('#leftdiv ul li').eq(3).addClass('on');
        }

        if(sct >= $('section>div').eq(5).offset().top){
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(5).addClass('on');
            $('#floatdiv ul li').removeClass('on');
            $('#floatdiv ul li').eq(5).addClass('on');
        }


    });

    $('nav ul li').click(function(){
        var i = $(this).index();
        var offset_nav = $('section>div').eq(i).offset().top;
        // $('nav ul li').removeClass('on');
        // $(this).addClass('on');
        // $('#floatdiv ul li').removeClass('on');
        // $('#floatdiv ul li').eq(i).addClass('on');
        $('html, body').stop().animate({scrollTop:offset_nav},1000);
    });

    $('#floatdiv ul li').click(function(){
        var i = $(this).index();
        var offset_div = $('section>div').eq(i).offset().top;
        // $('#floatdiv ul li').removeClass('on');
        // $(this).addClass('on');
        // $('nav ul li').removeClass('on');
        // $('nav ul li').eq(i).addClass('on');
        $('html, body').stop().animate({scrollTop:offset_div},1000);
    });

    // $('section>div').mousewheel(function(event, d){
    //     console.log(d); 
    //     //마우스 휠을 위로 스크롤하면 양수 / 아래는 음수
    //     if(d > 0){
    //         var prev = $(this).prev().offset().top;
    //         $("html, body").stop().animate({scrollTop:prev},1000,'easeOutBounce');
    //     } 
    //     if(d < 0 ){
    //         var next = $(this).next().offset().top;
    //         $('html, body').stop().animate({scrollTop:next},1300,'easeOutBounce');
    //     }


    // });
    

//#leftdiv ul li 클릭했을때 animate 
$('#leftdiv ul li').click(function(){
    var i = $(this).index();
    var offset_leftdiv = $('section>div').eq(i+1).offset().top;

    $('html, body').stop().animate({scrollTop:offset_leftdiv},1000);
});



//leftdiv_title 클릭했을때 animate
$('.leftdiv_title').click(function(){
    var offset_leftdiv = $('section>div').eq(0).offset().top;
    $('html, body').stop().animate({scrollTop:offset_leftdiv},1000);
}); 


//#leftdiv ul li   .hover했을때 새우가 나와야함
$('#leftdiv ul li').hover(function(){
    $(this).addClass('on');
},function(){
  $('#leftdiv ul li').removeClass('on');
  $(window).trigger('scroll'); 
  //mouseout 시 모든 li removeClass 되므로
  //강제로 스크롤 해서 현재 머물고 있는 li addClass를 해준다.
});
//leftdiv_title   .hover했을때 주황색집이 나와야함 
$('.leftdiv_title').hover(function(){
    $(this).addClass('on');
},function(){
    $(this).removeClass('on');
});



//스크롤시 오렌지색으로 색상변경




$('#popup').draggable();
//jquery-ui.js 지원하는 플러그인
if($.cookie('pop')!="no"){
    $('#popup').show();
}
$('#popup area:eq(0)').click(function(){
    $('#popup').fadeOut('fast');
    //서서히 사라짐	
});
$('#popup area:eq(1)').click(function(){
    $.cookie('pop','no',{expires:1});
        //하루동안 pop 에 no를 저장
		//하루동안 보지않기
    $('#popup').fadeOut('fast');
    //서서히 사라짐	
});

if($.cookie('popup')=='none'){
    $('#notice_wrap').hide();
}
var chk = $('#expiresChk');
$('.closeBtn').on('click',closePop);

function closePop(){
    if(chk.is(":checked")){ //input창이 checked 가 되있으면
        $.cookie('popup',"none",{expires:3});
            //chk 변수가 checked를 가지고 있으면
			//popup에 none을 3일동안 저장해라
    }
    $("#notice_wrap").fadeOut("fast");
}



});