document.addEventListener('DOMContentLoaded',function(){
    
    var tabLi = document.querySelectorAll('.tab li');
    var tabList = document.querySelectorAll('.tab_list ul');

    tabLi.forEach(function(ea,index){
        ea.addEventListener('click',function(e){
            e.preventDefault();
            handleTabClick(index);
        });
        
    });

    function handleTabClick(index){
        
        tabLi.forEach(function(e){
            e.classList.remove('on');
        });
        tabLi[index].classList.add('on');

        tabList.forEach(function(e){
            e.classList.remove('on');
        });
        tabList[index].classList.add('on');
        // e.preventDefault();
    };
    // return false;
});