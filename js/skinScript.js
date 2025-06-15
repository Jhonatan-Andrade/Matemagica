

if (localStorage.getItem("skin") == null) {
    localStorage.setItem("skin", 1);
    setImagSkin(1)
}else{
    setImagSkin(localStorage.getItem("skin"))
}

function setImagSkin(id) {
        const skin = Number(localStorage.getItem("skin"));
        switch (skin) {
            case 1: 
                document.getElementsByClassName("skinText")[0].innerText ="Mago"
                document.getElementsByClassName("skinImg")[0].src = `../assets/skin${id}.png`;
            break;
            case 2: 
                document.getElementsByClassName("skinText")[0].innerText ="Arqueiro"
                document.getElementsByClassName("skinImg")[0].src = `../assets/skin${id}.png`;
            break;
            case 3: 
                document.getElementsByClassName("skinText")[0].innerText ="Guerreiro"
                document.getElementsByClassName("skinImg")[0].src = `../assets/skin${id}.png`;
            break;
            default:
                document.getElementsByClassName("skinText")[0].innerText ="Mago"
                document.getElementsByClassName("skinImg")[0].src = `../assets/skin${id}.png`;
            break;
        }
}
function setSkin() {
    switch (Number(localStorage.getItem("skin"))) {
        case 1:
            localStorage.setItem("skin", 2);
            setImagSkin(2)
            break;
        case 2:
            localStorage.setItem("skin",3);
            setImagSkin(3)
            break;
        case 3:
            localStorage.setItem("skin", 1);
            setImagSkin(1)
            break;   
        default:
            break;
    }

}