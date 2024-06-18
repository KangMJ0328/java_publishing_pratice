//main2
let m2_slideIndex = 1;
m2_showSlide(m2_slideIndex);

function m2_Slide(n){
    m2_showSlide(m2_slideIndex = n);
}

function m2_showSlide(n){
    let i;
    const m2_slides = document.getElementsByClassName('slide');
    const m2_dots = document.getElementsByClassName('dot');

    if(n > m2_slides.length){m2_slideIndex = 1;}

    for(i = 0; i < m2_slides.length; i++){
        m2_slides[i].classList.remove('active');
    }
    for(i = 0; i < m2_dots.length; i++){
        m2_dots[i].classList.remove('on');
    }

    m2_slides[m2_slideIndex - 1].classList.add('active');
    m2_dots[m2_slideIndex - 1].classList.add('on');
}

//main3
let m3_slideIndex = 1;
m3_showSlide(m3_slideIndex);

function m3_Slide(n){
    m3_showSlide(m3_slideIndex = n);
}

function m3_showSlide(n){
    let i;
    const m3_slides = document.getElementsByClassName('m3_slide');
    const m3_dots = document.getElementsByClassName('m3_dot');

    if(n > m3_slides.length){m3_slideIndex = 1;}

    for(i = 0; i < m3_slides.length; i++){
        m3_slides[i].classList.remove('m3_active');
    }
    for(i = 0; i < m3_dots.length; i++){
        m3_dots[i].classList.remove('m3_on');
    }

    m3_slides[m3_slideIndex - 1].classList.add('m3_active');
    m3_dots[m3_slideIndex - 1].classList.add('m3_on');
}



