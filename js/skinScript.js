

if (localStorage.getItem("skin") == null) {
    localStorage.setItem("skin", 1);
    localStorage.setItem("skinName", "Mago");
    setImagSkin(1)
}else{setImagSkin(localStorage.getItem("skin"))}

function setImagSkin(id) {
        document.getElementsByClassName("skinImg")[0].src = `../assets/skin${id}.png`;
        document.getElementsByClassName("skinText")[0].innerText = localStorage.getItem("skinName")
}
function setSkin() {
    switch (Number(localStorage.getItem("skin"))) {
        case 1:
            localStorage.setItem("skin", 2);
            localStorage.setItem("skinName", "Arquero");
            setImagSkin(2)
            break;
        case 2:
            localStorage.setItem("skin",3);
            localStorage.setItem("skinName", "Guerrero");
            setImagSkin(3)
            break;
        case 3:
            localStorage.setItem("skin", 1);
            localStorage.setItem("skinName", "Mago");
            setImagSkin(1)
            break;   
        default:
            break;
    }

}