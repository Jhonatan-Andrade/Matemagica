
const botaoes =  document.querySelectorAll('#sound')


botaoes.forEach((botao)=>{
    const audio = document.getElementById('somBotao');
    botao.addEventListener('click', function() { 
        audio.currentTime = 0; 
        audio.play();
    });
});