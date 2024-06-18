$(function(){
    $('form[name=rel_f]').on('submit',function(){
        var url = $('select',this).val();
        //현재선택한 select의 value값은 url에 저장
        window.open(url);
        //새창을 열어 url로 이동해라
        return false;
    });
    $('.tab li').click(function(e){
        e.preventDefault();
        var i=$(this).index();
        // alert(i);
        $('.tab li').removeClass('on');
        $('.tab li').eq(i).addClass('on');

        $('.tab_list ul').removeClass('on');
        $('.tab_list ul').eq(i).addClass('on');
    });
});