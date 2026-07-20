let playerCount = 2;

const playerCountElement = document.getElementById("playerCount");

document
.getElementById("increasePlayers")
.addEventListener("click", () => {

    if(playerCount < 6){

        playerCount++;

        playerCountElement.textContent = playerCount;

    }

});

document
.getElementById("decreasePlayers")
.addEventListener("click", () => {

    if(playerCount > 2){

        playerCount--;

        playerCountElement.textContent = playerCount;

    }

});

document
.getElementById("startButton")
.addEventListener("click", () => {

    console.log(`Iniciar partida com ${playerCount} jogadores.`);

});