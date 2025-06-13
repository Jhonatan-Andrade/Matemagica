localStorage.setItem("lifeM",100)
localStorage.setItem("lifeC",100)
// Numeros aleatórios
function randomPlay(operation) {

    // Função que gera um número aleatório entre 1 e 100
    // e adiciona o número ao elemento com a classe "n1" e "n2"
    const boxN1 = document.getElementsByClassName(`n1`)[0];
    const boxN2 = document.getElementsByClassName(`n2`)[0];
    const n1 = Math.floor(Math.random() * 100)
    const n2 = Math.floor(Math.random() * 100)
    boxN1.innerText = n1;
    boxN2.innerText = n2;

    // Função que verifica qual operação foi escolhida
    // e adiciona a operação matemática
    // ao elemento com a classe "cal"
    // e calcula o resultado
    let res;
    const boxCal = document.getElementsByClassName("cal")[0];
    switch (operation) {
        case 1:boxCal.innerText = "+";res = n1 + n2 
        break;
        case 2:boxCal.innerText = "-";res = n1 - n2
        break;
        case 3:boxCal.innerText = "x";res = n1 * n2;
        break;
        case 4:
            boxCal.innerText = "/";
            resCal = n1 / n2;
            res = resCal.toFixed(1)
        break;
    }
    function numberFake(params,numberFakeSize) {
        const math = Number(localStorage.getItem("math"))
        const mathAll = Number(localStorage.getItem("mathAll"))
        var numberFake =  Math.floor(Math.random() * numberFakeSize)
        if (math == 4 || math == 5 && mathAll == 3 ) {
            if (numberFake === params) {
                numberFake = numberFake + Math.floor(Math.random() * 4)
                if (!Number.isInteger(params)) {
                    return numberFake.toFixed(1)
                }else{
                    return numberFake
                }
            }else{
                if (!Number.isInteger(params)) {
                    return numberFake.toFixed(1)
                }else{
                    return numberFake
                }
            }
        }
        else{
            if (numberFake === params) {
                numberFake = numberFake + Math.floor(Math.random() * 4)
                return numberFake
            }
            return numberFake
        }
    }
    function randomNumberFake(params) {
        if (params < 10) {
            const data = numberFake(params,10);
            return data;
        }else if (params > 10 && params < 50) {
            const data = numberFake(params,50);
            return data;

        }else if (params > 50 && params < 100) {
            const data = numberFake(params,100);
            return data;

        }else if (params > 100 && params < 1000) {
            const data = numberFake(params,1000);
            return data;

        }
        const data = numberFake(params,10000);
        return data;
    }
    function response(params) {
        const math = Number(localStorage.getItem("math"))    
        const mathAll = Number(localStorage.getItem("mathAll"))
        if (math == 4 || math == 5 &&  mathAll == 3) {
            return params
        }else{
            return params.toFixed(0)
        }
    }
    
    // Função que gera um número aleatório entre 1 e 4
    // e adiciona o resultado ao elemento com a classe "res"
    // exemplo: res1, res2, res3, res4
    const n =  Math.floor(Math.random() * 4+1)
    for (let i = 1; i < 5; i++) {
        if (n == i) {
            document.getElementsByClassName(`res${n}`)[0].innerText = response(res);
        }else {
            for (let j = 1; j < 5; j++) {
                const  nr = document.getElementsByClassName(`res${j}`)[0].innerText;
                if (Number(nr) === res) {
                    document.getElementsByClassName(`res${i}`)[0].innerText = randomNumberFake(res + n);
                }else{
                    document.getElementsByClassName(`res${i}`)[0].innerText = randomNumberFake(res);
                }
            }

        }
        
    }

    // Função que adiciona o resultado ao localStorage
    localStorage.setItem("res", res);


}


// Função que chama a operação matemática
// e verifica qual operação foi escolhida
mathCal()
function mathCal() {

    switch (Number(localStorage.getItem("math"))) {
        case 1:randomPlay(1)  
        break;
        case 2:randomPlay(2)  
        break;
        case 3:randomPlay(3)  
        break;
        case 4:randomPlay(4)  
        break;
        case 5: 
            const n =  Math.floor(Math.random() * 4)
            localStorage.setItem("mathAll",n)
            switch (n) {
                case 0:randomPlay(1);
                break;
                case 1:randomPlay(2);
                break;
                case 2:randomPlay(3);
                break;
                case 3:randomPlay(4);
                break;
            } 
        break;
        default:randomPlay(1)
        break;

    }
}
function disabledButtonList(isDisabled) {
        const resButtonList = document.querySelectorAll("#res") 

    if (isDisabled) {
        for (let i = 0; i < 4; i++) {
            resButtonList[i].disabled = true;
        }
    }else{
        for (let i = 0; i < 4; i++) {
            resButtonList[i].disabled = false;
        }
    }
    
}
function isGameOver(gameOver) {
        const gameEnd = document.querySelector(".gameEnd") 
        const gameEndBox = document.querySelector(".gameEndBox") 
        const gameEndText = document.querySelector(".gameEndText") 
        
        if (gameOver) {
            gameEndText.innerText = "Game Over"
            gameEndText.style = "color:red"
            const skin = Number(localStorage.getItem("skin"))
            const skinPoints = Number(localStorage.getItem(`skinPoints${skin}`))
            if (skinPoints > 4) {
                localStorage.setItem(`skinPoints${skin}`,`${skinPoints-5}`)
            }else{
                localStorage.setItem(`skinPoints${skin}`,"0")
            }
        }else{
            gameEndText.innerText = "Victory"
            gameEndText.style = "color:#00ff22"
            const skin = Number(localStorage.getItem("skin"))
            const skinPoints = Number(localStorage.getItem(`skinPoints${skin}`))
            localStorage.setItem(`skinPoints${skin}`,`${skinPoints+10}`)
        }
        gameEnd.style.display = "flex"
        gameEndBox.addEventListener('click',()=>{
            window.location.href = "gameMenu.html";
            localStorage.setItem("nav","1")
        })
        
}
function res(resId) {
    const res = localStorage.getItem("res");
    const resBox = Number(document.getElementsByClassName(`res${resId}`)[0].innerText);
    
    disabledButtonList(true)
    
    if (res == resBox) {
        const characterPower = document.querySelector(".characterPower");
        characterPower.style = "display: flex;animation: characterPowerAnimation 1s linear;"
        
        const  character  = Number(localStorage.getItem("skin"))
        const audio1 = document.querySelector(`.audioPower${character}`)
        audio1.currentTime = 0; 
        audio1.play()
        const lifeM = document.querySelector(".lifeM");

        const life = Number(localStorage.getItem("lifeM")) ;
        const dano = life - 20;
        localStorage.setItem("lifeM",dano)
        lifeM.style = `width:${dano}%`
        
         
        if (lifeM.clientWidth == 0 ) {
            isGameOver(false) 
        }
       
        setTimeout(() => {
            characterPower.style = "display: none;animation:none;"
        
            const resButtonList = document.querySelectorAll("#res") 
            for (let i = 0; i < 4; i++) {
                resButtonList[i].disabled = true;
            }
            disabledButtonList(false)
            mathCal();
        }, 1000);
    }else {
        const monsterPower = document.querySelector(".monsterPower");
        monsterPower.style = "display: flex;animation: monsterPowerAnimation 1s linear;"
        
        const audio1 = document.querySelector(`.audioPowerM1`)
        audio1.currentTime = 0; 
        audio1.play()

        const lifeC = document.querySelector(".lifeC");
     
        const life = Number(localStorage.getItem("lifeC")) ;
        const dano = life - 20;
        localStorage.setItem("lifeC",dano)
        lifeC.style = `width:${dano}%`

        if (lifeC.clientWidth == 0 ) {
            isGameOver(true) 
        }
       
        setTimeout(() => {
            monsterPower.style = "display: none;animation:none;"
    
            disabledButtonList(false)
            mathCal();
            
        }, 1000);
        
    }
  
}