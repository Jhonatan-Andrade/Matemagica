


const botaoes =  document.querySelectorAll('#sound')
botaoes.forEach((botao)=>{
    const audio = document.getElementById('somBotao');
    botao.addEventListener('click', function() {  
    audio.currentTime = 0; 
    audio.play();
    });
});

function startAndStop(){
    const main = document.querySelector(".musicGame")
    const  page = window.location.pathname.split("/")[2].split(".")[0]

    if (page === "game") {
        const autoplay = Number(localStorage.getItem("autoplay"))
        main.innerHTML = `
        <audio class="audioMusic" ${autoplay==0?"autoplay":""} src = "../assets/game.mp3"/>
    `   
    }else
    if (page === "gameMenu") {
        const autoplay = Number(localStorage.getItem("autoplay"))
        main.innerHTML = `
        <audio class="audioMusic" ${autoplay==0?"autoplay":""} src = "../assets/game.mp3"/>
    `
    }
}

startAndStop()

document.querySelector(".musicGame").addEventListener('click',()=>{
    const but = document.querySelector(".musicGame")
    if (but.id ==="on") {
        but.style = "background-image:url(../assets/musicOff.png)"
        but.id ="off"
        localStorage.setItem("autoplay","1")
        startAndStop()
        
    }else
    if(but.id ==="off"){
        but.style = "background-image:url(../assets/musicOn.png)"
        but.id ="on"
        localStorage.setItem("autoplay","0")
        startAndStop()
    }
})

