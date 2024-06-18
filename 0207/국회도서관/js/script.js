const $slide = document.querySelectorAll('.slide li a');
const $pagerBtn = document.querySelectorAll('.pager li')
const $prev = document.querySelector('.arrow .prev')
const $next = document.querySelector('.arrow .next')
const $slideCount = $slide.length;
let $currentIndex = 0;

function fadeIn(element){
    element.style.opacity = 0;
    element.style.transition = 'opacity 1s ease-in-out';
    setTimeout(()=>{ // setTimeout 은 빼도 됨
        element.style.opacity = 1;
    },0);
    // 한번만 실행되는데 transition 이 적용되도록 시간차를 준다.
}
function fadeOut(element){
    element.style.transition = 'opacity 1s ease-in-out';
    element.style.opacity = 0;
}

function goToSlide(idx){
    fadeOut($slide[$currentIndex]);
    fadeIn($slide[idx]);
    $currentIndex=idx; 
    updatePagerButtons(idx);
}
goToSlide(0)

function updatePagerButtons(index){
    $pagerBtn.forEach((btn, i)=> {
        btn.classList.toggle('on', i === index);
    });
}

$pagerBtn.forEach((btn, idx)=> {
    btn.addEventListener('click', ()=>{
        goToSlide(idx);
    });
});
$next.addEventListener('click',function(){
    if($currentIndex==$slideCount-1){
        goToSlide(0);
    }else{
        goToSlide($currentIndex+1);
    }
});

$prev.addEventListener('click',function(){
    if($currentIndex==0){
        goToSlide($slideCount-1);//맨마지막슬라이드로간다.
    }else{
        goToSlide($currentIndex-1);
    }
});
