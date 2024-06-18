$(function(){
   $(window).scroll(function(){
        var sct = $(this).scrollTop();
        for(var i = 0;i<$('section > article').length;i++){
        $('section > article').eq(i).css({'transform':'translateZ('+((i*-5000)+sct)+'px)'})
        if(sct >=(i*5000) && sct < ((i+1)*5000)){
            $('article').removeClass('on');
            $('article').eq(i).addClass('on');
            $('.scrollNav li').removeClass('on');
            $('.scrollNav li').eq(i).addClass('on');
        }
        };
        
        
    });
    $('.scrollNav li').click(function(){
        var i = $(this).index();
        $('html,body').stop().animate({scrollTop:5000*i},1500,'swing');
    });
    $('body').on('mousemove',function(e){
        var posX = e.pageX/100;
        var posY = e.pageY/100;
        $('.obj11').css({
            'left':-270 -posX, 'bottom':-100 -posY
        });
        $('.obj12').css({
            'right':-590 -posX, 'bottom':-90 -posY
        });
        $('.obj13').css({
            'left':-100 -posX, 'bottom': 20 -posY
        });
        $( '.obj21' ).css( { 
            'right': -710 - posX, 'bottom': -420 - posY 
        } );
        $( '.obj22' ).css( { 
            'right': -50 + posX, 'bottom': -100 + posY 
        } );
    
        $( '.obj31' ).css( { 
            'right': 110 - posX, 'bottom': -70 - posY 
        } );
        $( '.obj32' ).css( { 
            'left': 100 - posX, 'bottom': -160 - posY 
        } );
        $( '.obj41' ).css( { 
            'left': 350 + posX, 'bottom': -150 - posY 
        } );
        $( '.obj42' ).css( { 
            'right': 170 + posX, 'top': -260 - posY 
        } );
        $( '.obj43' ).css( { 
            'right': -100 + posX, 'bottom': -120 + posY 
        } );
        
        $( '.obj51' ).css( { 
            'left': -100 - posX, 'bottom': -300 - posY 
        } );
        $( '.obj52' ).css( { 
            'right': 30 + posX, 'top': 180 - posY 
        } );
        $( '.obj53' ).css( { 
            'left': -30 + posX, 'bottom': 0 - posY 
        } );
    });

});