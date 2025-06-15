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
                            <p class="statisticsVictory">V = ${currentData.map[0][1].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.map[0][1].defeat}</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Mapa 2</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">V = ${currentData.map[0][2].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.map[0][2].defeat}</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Mapa 3</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">V = ${currentData.map[0][3].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.map[0][3].defeat}</p>
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
                            <p class="statisticsVictory">V = ${currentData.charactersVictoryDefeat[0][1].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.charactersVictoryDefeat[0][1].defeat}</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Arqueiro</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">V = ${currentData.charactersVictoryDefeat[0][2].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.charactersVictoryDefeat[0][2].defeat}</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Guerreiro</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">V = ${currentData.charactersVictoryDefeat[0][3].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.charactersVictoryDefeat[0][3].defeat}</p>
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
                            <p class="statisticsVictory">V = ${currentData.calculationsVictoryDefeat[0][1].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.calculationsVictoryDefeat[0][1].defeat}</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Subtração</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">V = ${currentData.calculationsVictoryDefeat[0][2].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.calculationsVictoryDefeat[0][2].defeat}</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Multiplicação</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">V = ${currentData.calculationsVictoryDefeat[0][3].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.calculationsVictoryDefeat[0][3].defeat}</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Divisão</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">V = ${currentData.calculationsVictoryDefeat[0][4].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.calculationsVictoryDefeat[0][4].defeat}</p>
                        </div>
                    </div>
                    <div class="statisticsVictoryDefeatItem">
                        <p class="statisticsVictoryDefeatTitle">Aleatório</p>
                        <div class="statisticsVictoryDefeatRes">
                            <p class="statisticsVictory">V = ${currentData.calculationsVictoryDefeat[0][5].victory}</p>
                            <p class="statisticsDefeat">D = ${currentData.calculationsVictoryDefeat[0][5].defeat}</p>
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
