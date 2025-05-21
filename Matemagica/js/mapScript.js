setImagMap()

function setImagMap() {
    if (localStorage.getItem("map") == null) {
        setMap(1)
    }else {
        let map = Number(localStorage.getItem("map"));  
        document.getElementsByTagName("body")[0].style.backgroundImage = `url('../assets/cena0${map}.png')`;
    }
}
function setMap(map) {
    switch (map) {
        case 1: 
            localStorage.setItem("map", 1);
            setImagMap()
            break;
        case 2:
            localStorage.setItem("map", 2);
            setImagMap()
            break;
        case 3:
            localStorage.setItem("map", 3);
            setImagMap()
            break;
        default:
            localStorage.setItem("map", 1);
            setImagMap()
            break;
    }
 
}