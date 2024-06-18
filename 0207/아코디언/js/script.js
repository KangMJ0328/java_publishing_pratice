const btnCollapse=document.getElementById('btn-collapse'); //all 버튼
const heading = document.getElementsByClassName('panel-heading');
const question=document.getElementsByClassName('panel-question');
/*heading 과 body를 감싸는 question*/
const p_body=document.getElementsByClassName('panel-body');

for(let i=0;i<heading.length; i++){
    heading[i].addEventListener('click',function(e){//heading클릭
        for(let j=0; j<question.length; j++){
            question[j].classList.remove('on');
            e.target.parentNode.classList.add('on');
            activeBody();
        }

    });
}
function activeBody(){
    for(let k=0; k<p_body.length; k++){
        p_body[k].style.display='none';
        let activePanel = document.querySelector('.panel-question.on .panel-body');
        activePanel.style.display='block';
    }
}
activeBody();

btnCollapse.addEventListener('click',function(){
    for(let k=0; k<p_body.length; k++){
        p_body[k].style.display='none';
    }

});