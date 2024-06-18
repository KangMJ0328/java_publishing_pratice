$(function(){
    var i = 0 ;
    var li_w = $('.slide li').width();
    // alert(li_w);
    var whylength = $('ul.slide li').length
    var clone =$('.slide li').eq(0).clone();
    $('.slide').append(clone);

    $('.pager li').click(function(){
        i = $(this).index();
        $(".slide").stop().animate({
            'left':-i*li_w+'px'
        },600);
        $(".pager li").removeClass("on");
        $(this).addClass("on");
    });
    $('.next').click(function(e){
        e.preventDefault();
        i++;
        if(i==4){
            $(".slide").stop().animate({
                'left':-i*li_w+'px'
            },600,function(){ 
                $(".slide").css("left",0);
            });
            i=0;
        }else{
            $(".slide").stop().animate({
                'left':-i*li_w+'px'
            },600);
        }
        $(".pager li").removeClass("on");
        $(".pager li").eq(i).addClass("on");
    });
    $('.prev').click(function(e){
        e.preventDefault();
        if(i==0){
            i=4;
            $(".slide").css("left",-i*li_w+'px');
            
        }i--;
        $('.slide').stop().animate({'left':-i*li_w+'px'},600);
        $(".pager li").removeClass("on");
        $(".pager li").eq(i).addClass("on");
    });
    timer();
    function timer(){
        setInterval(function(){
            if(i==4){
                $('.slide').css('left',0);
                // $(".pager li").eq(4).addClass('on');
                i=0;
            }
            i++;
            $('.slide').stop().animate({'left':-i*li_w+"px"},600);
            if(i==4){
                $(".pager li").removeClass('on');
                $(".pager li").eq(0).addClass('on');
            }else{
                $(".pager li").removeClass('on');
                $(".pager li").eq(i).addClass('on');
            }
            
        },2000);
    }

});
