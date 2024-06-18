var naviLiuls = document.querySelectorAll('.m_menu li ul');
naviLiuls.forEach(function(ul){

    ul.style.height = "0px";
});
var firstChildUl = document.querySelector('.m_menu li:nth-child(1) ul');
if(firstChildUl){
    firstChildUl.style.height="108px";
}



var sub =  document.querySelectorAll('.sub');
function slideUp(){
    sub.forEach(function(item){
        item.style.height = "0px";
    });
}

var menuLiA = document.querySelectorAll('.m_menu>li>a');

menuLiA.forEach(function(item){
    item.addEventListener('click',function(){
    var subHeight= getComputedStyle(this.nextElementSibling).height;
   // getComputedStyle는 DOM 요소의 현재 스타일을 가져오기 위한 메서드
   // 이 메서드를 사용하면 특정 요소에 적용된 모든 스타일 속성과 
   // 그 값에 대한 정보를 얻을 수 있습니다.
   // alert(subHeight);   
       if(subHeight === '0px'){
            slideUp(); //현재 열려있는게 있으면 모두 닫고
            this.nextElementSibling.style.height = '108px';
       }else{
           this.nextElementSibling.style.height = '0px';
       } 
    });
});