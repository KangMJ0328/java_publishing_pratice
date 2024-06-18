const $slideWrap=document.querySelector('.main_visual');
const $slideContainer=document.querySelector('.main_visual .main_visual_img');
const $slide=document.querySelectorAll('.main_visual .main_visual_img .banner_img');
const $stopBtn=document.querySelector('.stop_btn a')
const $overBtn=document.querySelector('.over-btn')
const $prev=document.querySelector('.prev')
const $next=document.querySelector('.next')
const $pager=document.querySelectorAll('.indicator')
const $pagerBtn=document.querySelectorAll('.indicator li')
let $currentIndex=0;
const $slideCount=$slide.length;
let $timer=undefined;
let $true=true;
const $img=document.querySelector('.stop_btn a img');
const $imgOn=$img.getAttribute('src')
const $imgOff=$imgOn.replace('stop','play')


for(let i=0; i<$slideCount; i++){
    $slide[i].style.left=i*100+'%';
}
//슬라이드 함수
function goToSlide(idx){
    $slideContainer.classList.add('animate')
    $slideContainer.style.left=-100*idx+'%';
    $currentIndex=idx; 
    for(let a=0;a<$pagerBtn.length;a++){
        $pagerBtn[a].classList.remove('active')
    }
    $pagerBtn[idx].classList.add('active');
}
goToSlide(0)

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


//자동슬라이드
startAutoSlide();
function startAutoSlide(){
    $timer = setInterval(function(){
        let nextIdx = ($currentIndex+1) % $slideCount;
        goToSlide(nextIdx)
    },2000);
}

function stopAutoSlide(){
    clearInterval($timer);
}

$stopBtn.addEventListener('click',function(){
    if($true == true){
        stopAutoSlide();
        this.querySelector('img').src=$imgOff
        $true=false;
    }else{
        startAutoSlide();
        this.querySelector('img').src=$imgOn;
        //stop버튼으로 이미지 변경
        $true=true;
    }

});

$overBtn.addEventListener('mouseover',function(){
    stopAutoSlide();
    
});

$overBtn.addEventListener('mouseleave',function(){
    startAutoSlide();
    
});
