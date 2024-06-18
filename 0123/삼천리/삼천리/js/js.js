//메인2
let slideIndex = 1;
showSlide(slideIndex);

function dotSlide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    let i;
    const sls = document.getElementsByClassName('slide');
    const dos = document.getElementsByClassName('dot');

    if(n > sls.length){slideIndex = 1;}

    for(i = 0; i < sls.length; i++){
        sls[i].classList.remove('act');
    }
    for(i = 0; i < dos.length; i++){
        dos[i].classList.remove('on');
    }

    sls[slideIndex - 1].classList.add('acti');
    dos[slideIndex - 1].classList.add('on');
}