
const characterData = JSON.parse(localStorage.getItem("character"))
const character = Number(characterData[0])

switch (character) {
    case 1:
        document.getElementsByClassName("character")[0].src = "../assets/skin1.png";
        document.getElementsByClassName("characterPower")[0].src = "../assets/power1.png";
    break;
    case 2:
        document.getElementsByClassName("character")[0].src = "../assets/skin2.png";
        document.getElementsByClassName("characterPower")[0].src = "../assets/power2.png";
    break;
    case 3:
        document.getElementsByClassName("character")[0].src = "../assets/skin3.png";
        document.getElementsByClassName("characterPower")[0].src = "../assets/power3.png";
    break;
    default:
        document.getElementsByClassName("character")[0].src = "../assets/skin1.png";
        document.getElementsByClassName("characterPower")[0].src = "../assets/power1.png";
    break;
}

document.getElementsByClassName("monster")[0].src = "../assets/monster1.png";
document.getElementsByClassName("monsterPower")[0].src = "../assets/powerM1.png";

