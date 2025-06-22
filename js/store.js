
localStorage.setItem("skinStore",1)
setSkin()

// troca de skin e atualiza o armazenamento
function setScreenSkin(skin) {
            document.getElementsByClassName("skinText")[0].innerText = skin.skinName;
            document.getElementsByClassName("skinImg")[0].src = `../assets/skin${skin.id}.png`;
            
            switch (skin.id) {
                case 1:localStorage.setItem("skinStore",2)
                break;
                case 2:localStorage.setItem("skinStore",3)
                break;
                case 3:localStorage.setItem("skinStore",1)
                break;
            }
            const powerImages = document.querySelectorAll(".power img");
            powerImages.forEach((img, index) => {
                img.src = skin.powerImgs[index];
            });
    
}
function setSkin() {
    const  data = [
        {
            id:1,
            skinName:"Mago",
            powerImgs:[
                "../assets/wind-power.png",
                "../assets/ice-power.png",
                "../assets/arcano-power.png"
            ]
        },
        {
            id:2,
            skinName:"Arqueiro",
            powerImgs:[
                "../assets/arrow-fire-power.png",
                "../assets/arrow-poison-power.png",
                "../assets/three-arrow-power.png"
            ]
        },
        {
            id:3,
            skinName:"Guerreiro",
            powerImgs:[
                "../assets/ax-power.png",
                "../assets/sword-power.png",
                "../assets/spear-power.png"
            ]
        },
    ]
    const skin = Number(localStorage.getItem("skinStore"))

        switch (skin) {
        case 1:setScreenSkin( data[0])
        break;
        case 2:setScreenSkin( data[1])
        break;
        case 3:setScreenSkin( data[2])
        break;
    }
        // atualiza as imagens dos poderes

}

function setPower() {
}