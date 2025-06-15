const pg = window.location.pathname.split("/")[2].split(".")[0]
var life = ""
if (pg === "game") {
  life =    `
                    <div class="lifeBox">
                        <div class="characterLife">
                            <div class="baseLife">
                                <div class="lifeC"></div>
                            </div>
                            <p class="lifeTitle">Herói</p>
                        </div>
                        <div class="monsterLife">
                            <div class="baseLife">
                                <div class="lifeM"></div>
                            </div>
                            <p class="lifeTitle">Monstro</p>
                        </div>
                    </div>
            `
}
var isStore = ""
if (pg === "store") {
    isStore =    `
    <button onClick="navigation('gameMenu')" id="sound" class="home"></button>
    `
}else{
    isStore =    `
    <button onClick="navigation('store')" id="sound" class="store"></button>
    `
}
const characterPoints = JSON.parse(localStorage.getItem("character"))[1]

const mago      = Number(characterPoints[0]);
const arqueiro  = Number(characterPoints[1]);
const guerreiro = Number(characterPoints[2]);
const menu = document.querySelector(".menu")


menu.innerHTML = `
            <div class="menuStart">
                <ul class="menuList">
                    <li class="menuListItem">
                        <img src="../assets/magoMenu.png" alt="magoMenu">
                        <p class="mago">${mago}</p>
                    </li>
                    <li class="menuListItem">
                        <img src="../assets/arqueiroMenu.png" alt="arqueiroMenu">
                        <p class="arqueiro">${arqueiro}</p>
                    </li>
                    <li class="menuListItem">
                        <img src="../assets/guerreiroMenu.png" alt="guerreiroMenu">
                        <p class="guerreiro">${guerreiro}</p>
                    </li>
                </ul>
            </div>
            ${life}
            <div class="menuEnd" >
                ${pg === "gameMenu"||pg === "gamemenu" ? `<button onClick="openStatistics()" id="sound" class="openStatistics"></button>` : ""}
                ${pg !== "game" ? isStore : ""}
                ${pg === "game" ? `<button onClick="navigation('gameMenu')" id="sound" class="exitButton"></button>` : ""}
            </div>
`
if (pg === "store") {
    const menuList = document.querySelector(".menuStart")
    menuList.style = "background-color: rgb(0, 0, 0);"
    
}


// startAndStop()
// function startAndStop(){
//     if (!document.querySelector(".audioList")) {
//         const div = document.createElement("div")
//         div.setAttribute("class","audioList")
//         document.body.appendChild(div);
//     }
    
//     const audioList = document.querySelector(".audioList")
//     const  page = window.location.pathname.split("/")[2].split(".")[0]

//     const iconMusic = document.querySelector(".musicGame")

//     if (page === "gameMenu"  || page === "game" || page === "store" ) {
//         const autoplay = Number(localStorage.getItem("autoplay"))
//         if (autoplay==0) {
//             audioList.innerHTML = `
//                 <audio class="audioMusic" autoplay src = "../assets/game.mp3"/>
//             `   
//             iconMusic.style ="background-image: url(../assets/musicOn.png)"
//         }else{
//             audioList.innerHTML = `
//                 <audio class="audioMusic"  src = "../assets/game.mp3"/>
//             `   
//             iconMusic.style ="background-image: url(../assets/musicOff.png)"
//         }
    
//     }
// }



// document.querySelector(".musicGame").addEventListener('click',()=>{
//     const autoplay = Number(localStorage.getItem("autoplay"))
//     if (autoplay === 0) {
//         localStorage.setItem("autoplay","1")
//         //startAndStop()
        
//     }else
//     if(autoplay === 1){
//         localStorage.setItem("autoplay","0")
//         //startAndStop()
//     }
// })