document.addEventListener("DOMContentLoaded",function(){
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slides li');
    let currentIdx = 0;
    const slideCount = slide.length;
    const slideWidth = 300;
    const slideMargin = 30;
    const prevBtn = document.querySelector('.prev');//왼쪽화살표
    const nextBtn = document.querySelector('.next');

    const sl = slides.style.width = (slideWidth+slideMargin)*slideCount-slideMargin+'px'
    // alert(sl); // 슬라이드 전체 넓이를 구해서 나열

    function moveSlide(num){
        slides.style.left = -(num*330) + "px";
        currentIdx = num;
    }

    nextBtn.addEventListener('click', function(){
        if(currentIdx < slideCount - 1){
            moveSlide(currentIdx+1)
        } else{
            return false;
        }
    });

    prevBtn.addEventListener('click', function(){
        if(currentIdx > 0){
            moveSlide(currentIdx -1)
        } else{
            return false
        }
    });

});