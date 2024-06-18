$(function(){
    $('.btn1 > li').click(function(e){
        var i = $(this).index();

        $('.btn1>li').removeClass('on');
        $('.btn1>li').eq(i).addClass('on');

        $('.c_bom ul li').fadeOut(); //천천히 사라지다
        $('.c_bom ul li').eq(i).fadeIn();
        return false;
    });
    $('.ft_form').submit(function(){
        var url = $('.ft_select').val();
        window.open(url);
    });
});