document.getElementById('btn-right').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='flex';
});

//close
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none';
});