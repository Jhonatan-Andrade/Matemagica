function navigation(props){
    if (props === "gameMenu") {
        setTimeout(()=>{
            window.location.href=`gameMenu.html`
            localStorage.setItem("nav","1")
        },200)
    }else if (props === "game") {
        setTimeout(()=>{
            window.location.href=`game.html`
            localStorage.setItem("nav","1")
        },200)
    }else if (props === "store") {
        setTimeout(()=>{
            window.location.href=`store.html`
            localStorage.setItem("nav","1")
        },200)
    }
}

const page = window.location.pathname.split("/")[2].split(".")[0]
if (page == "game") {
    if (Number(localStorage.getItem("nav")) !== 1) {
        window.location.href='start.html'
    }else{
        localStorage.setItem("nav","0")
    }
}
if (page == "gameMenu") {
    if (Number(localStorage.getItem("nav")) !== 1) {
        window.location.href='start.html'
    }else{
        localStorage.setItem("nav","0")
    }
}

