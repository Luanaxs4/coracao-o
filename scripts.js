var btn = document.querySelector('#botao');
var coracao = document.querySelector('.coracao');

btn.addEventListener('click', function(){

    if(coracao.style.display === 'none'){
        coracao.style.display = 'block';
    }else{
        coracao.style.display = 'none'
    }
});
