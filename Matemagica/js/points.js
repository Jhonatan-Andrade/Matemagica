const mago      = document.querySelector(".mago");
const arqueiro  = document.querySelector(".arqueiro");
const guerreiro = document.querySelector(".guerreiro");

mago.innerText = localStorage.getItem("skinPoints1")
arqueiro.innerText = localStorage.getItem("skinPoints2")
guerreiro.innerText = localStorage.getItem("skinPoints3")
