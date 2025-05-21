function navigation(props){
    if (props === "gameMenu") {
            window.location.href=`gameMenu.html`
            localStorage.setItem("nav","1")
    }else if (props === "game") {
            window.location.href=`game.html`
            localStorage.setItem("nav","1")
    }
}

const page = window.location.pathname.split("/")[2].split(".")[0]
if (page !== "start") {
    if (Number(localStorage.getItem("nav")) !== 1) {
        window.location.href='start.html'
    }else{
        localStorage.setItem("nav","0")
    }
}

