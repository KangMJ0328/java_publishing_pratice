

$(function(){
// $('.m_menu li ul').css('display','none');
// $('.sub').css('display','none');
// $('.m_menu li ul').hide();


// $('.m_menu li:nth-child(1) ul').css('display','block');
// $('.m_menu li:nth-child(1) ul').show();
// $('.m_menu li:eq(0) ul').show();
// $('m_menu li:first ul').show();

// 이 두가지를 합쳐서 한방에
// $('.m_menu li:eq(0)').siblings('li').find('.sub').hide();
//.m_menu li중 첫번째를 제외한 li형제들의 .sub를 찾아 가린다.
$('.m_menu li:not(:first) ul').hide();
// 처음 아닌애들은 가려라


    $('.m_menu>li>a').click(function(){
       var kkk =  $(this).next('.sub').css('display');
       //현재 클릭한 다음에 있는 .sub가 none인지
       //block인지를 kkk에 저장
       //alert(kkk);  
        if(kkk==='none'){
            $('.sub').slideUp();
            $(this).next('.sub').slideDown();
        }else{
            $('.sub').slideUp();
        }
        return false;
    });

});

