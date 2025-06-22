
function setImagSkin() {
        const characterData = JSON.parse(localStorage.getItem("character"))
        console.log(characterData);
        const skin = Number(characterData[0])
        console.log(skin);
        
      
  
        switch (skin) {
            case 1: 
                document.getElementsByClassName("skinText")[0].innerText ="Mago"
                document.getElementsByClassName("skinImg")[0].src = `../assets/skin${skin}.png`;
            break;
            case 2: 
                document.getElementsByClassName("skinText")[0].innerText ="Arqueiro"
                document.getElementsByClassName("skinImg")[0].src = `../assets/skin${skin}.png`;
            break;
            case 3: 
                document.getElementsByClassName("skinText")[0].innerText ="Guerreiro"
                document.getElementsByClassName("skinImg")[0].src = `../assets/skin${skin}.png`;
            break;
            default:
                document.getElementsByClassName("skinText")[0].innerText ="Mago"
                document.getElementsByClassName("skinImg")[0].src = `../assets/skin${skin}.png`;
            break;
        }
}
setSkin()
function setSkin() {
    const characterData = JSON.parse(localStorage.getItem("character"))
    switch (Number(characterData[0])) {
        case 1:
            characterData[0] = 2;
            localStorage.setItem("character", JSON.stringify(characterData));
            setImagSkin()
            break;
        case 2:
            characterData[0] = 3;
            localStorage.setItem("character",JSON.stringify(characterData));
            setImagSkin()
            break;
        case 3:
            characterData[0] = 1;
            localStorage.setItem("character", JSON.stringify(characterData));
            setImagSkin()
            break;   
        default:
            break;
    }

}