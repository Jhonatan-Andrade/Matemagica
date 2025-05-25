function setLayout(params) {
    document.getElementsByClassName("sum")[0].classList.remove("selectMath");
    document.getElementsByClassName("sub")[0].classList.remove("selectMath");
    document.getElementsByClassName("mul")[0].classList.remove("selectMath");
    document.getElementsByClassName("div")[0].classList.remove("selectMath");
    document.getElementsByClassName("all")[0].classList.remove("selectMath");

    document.getElementsByClassName(params)[0].classList.add("selectMath");

}



function setMath(params) {
    switch (params) {
        case 1:
            localStorage.setItem("math", 1);
            setLayout("sum")
            break;
        case 2:
            localStorage.setItem("math", 2);
            setLayout("sub")
            break;
        case 3:
            localStorage.setItem("math", 3);
            setLayout("mul")
            break;
        case 4:
            localStorage.setItem("math", 4);
            setLayout("div")
            break;
        case 5:
            localStorage.setItem("math", 5);
            setLayout("all")
            break;            
        default:
            localStorage.setItem("math", 1);
            setLayout("all")
            break;
    }
    
}