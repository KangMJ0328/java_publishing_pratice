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


// for(let i=0; i<$slideCount; i++){
//     $slide[i].style.left=i*100+'%';
// }
function fadeIn(element){
    element.style.opacity=0;
    element.style.transition='opacity 1s ease-in-out';
    setTimeout(()=>{
        element.style.opacity = 1;
    },0);
    //한번만 실행되는데 transition이 적용되도록 시간차를 준다.
}
function fadeout(element){
    element.style.transition='opacity 1s ease-in-out';
    element.style.opacity=0;
}


//슬라이드 함수
function goToSlide(idx){
    fadeout($slide[$currentIndex]);
    fadeIn($slide[idx]);
    $currentIndex=idx; 
    updatePagerButtons(idx);
}
goToSlide(0)

function updatePagerButtons(index){
    $pagerBtn.forEach((btn,i)=>{
        btn.classList.toggle('active',i === index);
    });
}
//매개변수로 들어온 index번호와 현재 순회중인 인덱스 번호 
// 가 일치할때 active 클래스를 추가
//pager의 색상이 변경된다.

$pagerBtn.forEach((btn,idx) => {
    btn.addEventListener('click',()=>{
        goToSlide(idx);
    });
})

// btn은 현재 순회중인 페이징 버튼을 나타내고 
// idx는 해당버튼의 인덱스 번호 

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


// $next.addEventListener('click',function(){
   
//     goToSlide(($currentIndex+1) % $slideCount)

// })
// $prev.addEventListener('click',function(){
// goToSlide(($currentIndex-1 + $slideCount) % $slideCount)
// })

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
