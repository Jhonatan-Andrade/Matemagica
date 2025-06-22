const data = [
    {
        "map": [{
            1:{
                "victory": 0,
                "defeat": 0
            },
            2:{
                "victory": 0,
                "defeat": 0
            },
            3:{
                "victory": 0,
                "defeat": 0
            },
            
        }],
        "charactersVictoryDefeat": [{
            1:{
                "victory": 0,
                "defeat": 0
            },
            2:{
                "victory": 0,
                "defeat": 0
            },
            3:{
                "victory": 0,
                "defeat": 0
            },
            
        }],
        "calculationsVictoryDefeat": [{
            1:{
                "victory": 0,
                "defeat": 0
            },
            2:{
                "victory": 0,
                "defeat": 0
            },
            3:{
                "victory": 0,
                "defeat": 0
            },
            4:{
                "victory": 0,
                "defeat": 0
            },
            5:{
                "victory": 0,
                "defeat": 0
            },
            
        }],
        "victory": 0,
        "defeat": 0,
    }
]
if (localStorage.getItem("statisticsData") == null) {
    localStorage.setItem("statisticsData", JSON.stringify(data));
}
function openStatistics(){
    const statistics = document.querySelector(".statistics");
    if (statistics.style.display === "flex") {
        statistics.style.display = "none";
    } else {
        statistics.style.display = "flex";
        openStatisticsData();
    }
}

function openStatisticsData() {
    const statisticsData = JSON.parse(localStorage.getItem("statisticsData"));
    const currentData = statisticsData[0];
    const dataShow = {
        map1:[
            currentData.map[0][1].victory*100/currentData.victory,
            currentData.map[0][1].defeat*100/currentData.defeat
        ],
        map2:[
            currentData.map[0][2].victory*100/currentData.victory,
            currentData.map[0][2].defeat*100/currentData.defeat
        ],
        map3:[
            currentData.map[0][3].victory*100/currentData.victory,
            currentData.map[0][3].defeat*100/currentData.defeat
        ],
        char1:[
            currentData.charactersVictoryDefeat[0][1].victory*100/currentData.victory,
            currentData.charactersVictoryDefeat[0][1].defeat*100/currentData.defeat
        ],
        char2:[
            currentData.charactersVictoryDefeat[0][2].victory*100/currentData.victory,
            currentData.charactersVictoryDefeat[0][2].defeat*100/currentData.defeat
        ],
        char3:[
            currentData.charactersVictoryDefeat[0][3].victory*100/currentData.victory,
            currentData.charactersVictoryDefeat[0][3].defeat*100/currentData.defeat
        ],
        calc1:[
            currentData.calculationsVictoryDefeat[0][1].victory*100/currentData.victory,
            currentData.calculationsVictoryDefeat[0][1].defeat*100/currentData.defeat
        ],
        calc2:[
            currentData.calculationsVictoryDefeat[0][2].victory*100/currentData.victory,
            currentData.calculationsVictoryDefeat[0][2].defeat*100/currentData.defeat
        ],
        calc3:[
            currentData.calculationsVictoryDefeat[0][3].victory*100/currentData.victory,
            currentData.calculationsVictoryDefeat[0][3].defeat*100/currentData.defeat
        ],
        calc4:[
            currentData.calculationsVictoryDefeat[0][4].victory*100/currentData.victory,
            currentData.calculationsVictoryDefeat[0][4].defeat*100/currentData.defeat
        ],
        calc5:[
            currentData.calculationsVictoryDefeat[0][5].victory*100/currentData.victory,
            currentData.calculationsVictoryDefeat[0][5].defeat*100/currentData.defeat
        ],
    }

    const statisticsLayout = `
        <div class="statisticsLayout">
            <button onClick="openStatistics()" id="sound" class="openStatistics"></button>
            <h2>Estatísticas do Jogo</h2>
            <div class="statisticsMap">
                <h3>Mapas</h3>
                <div class="statisticsVictoryDefeat">
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Mapa 1</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.map1[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.map1[0].toFixed(0)}%</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Mapa 2</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.map2[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.map2[1].toFixed(0)}%</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Mapa 3</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.map3[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.map3[1].toFixed(0)}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="statisticsCharacters">
                <h3>Personagem</h3>
                <div class="statisticsVictoryDefeat">
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Mago</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.char1[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.char1[1].toFixed(0)}%</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Arqueiro</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.char2[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.char2[1].toFixed(0)}%</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Guerreiro</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.char3[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.char3[1].toFixed(0)}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="statisticsCalculations">
                <h3>Cálculos</h3>
                <div class="statisticsVictoryDefeat">
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Adição</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.calc1[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.calc1[1].toFixed(0)}%</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Subtração</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.calc2[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.calc2[1].toFixed(0)}%</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Multiplicação</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.calc3[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.calc3[1].toFixed(0)}%</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Divisão</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.calc4[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.calc4[1].toFixed(0)}%</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Aleatório</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">${dataShow.calc5[0].toFixed(0)}%</p>
                            <p class="statisticsDefeat">${dataShow.calc5[1].toFixed(0)}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="statisticsTotal">
                <p class="statisticsVictoryDefeatTitle statisticsTitleTotal">Total</p>
                <div class="statisticsVictoryDefeatRes">
                    <p class="statisticsVictory">V = ${currentData.victory}</p>
                    <p class="statisticsDefeat">D = ${currentData.defeat}</p>
                </div>
            </div>
        </div>
    `
    document.querySelector(".statistics").innerHTML = statisticsLayout;
}
