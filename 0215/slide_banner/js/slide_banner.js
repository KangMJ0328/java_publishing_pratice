$(function(){
    var visual = $('#brandVisual > ul > li'); //큰 사진
    var button = $('#buttonList > li'); //pager 버튼
    var current = 0; //현재
    var id;

    button.click(function(){
        var i = $(this).index();
        button.removeClass('on');
        button.eq(i).addClass('on');
        move(i);

        return false;
    });
    
    function timer(){
        id = setInterval(function(){
            var n = current + 1;
            if(n === 3) n = 0;
            button.eq(n).trigger('click');
        },3000);
    }
    timer();

    function move(i){
        if(current == i) return; 
        //현재 활성화된 button과 클릭한 버튼이 같으면 빠져 나간다.
        var cu = visual.eq(current);
        var ne = visual.eq(i);
        cu.css('left','0').stop().animate({'left':'-100%'},500);
        ne.css('left','100%').stop().animate({'left':'0'},500);
        current = i;
    }
    
    
});