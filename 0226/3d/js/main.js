$(function(){
// $('.btnMenu') 클릭하면 
//1. 현재.btnMenu 서서히 사라짐
//2. nav, section  on class를 넣는다.
$('.btnMenu').click(function(){
    $(this).fadeOut(); //햄버거메뉴가 서서히 사라짐
   // $('.btnMenu').fadeOut();
    $('nav').addClass('on');
    $('section').addClass('on');
});
//$('nav ul li') 클릭하면 
//1. nav, section  on class 제거한다.
// 현재.btnMenu 서서히  나타남
//2. 클릭한 인덱스 번호를 구한다.
// $('section>div') on class 제거한다.
//$('section>div') 구한 인덱스번호에 
// on class를 넣는다.


$('nav ul li').click(function(){
    $('nav').removeClass('on');//기울어진 nav 원래대로
    $('section').removeClass('on');//기울어진 section 원래대로
    $('.btnMenu').fadeIn();//햄버거 메뉴가 서서히 나타남
    var i = $(this).index();
    $('section>div').removeClass('on');
    $('section>div').eq(i).addClass('on');
    return false;
});





});