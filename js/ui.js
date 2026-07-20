function createCounter(player, property, icon, large = false) {

    const counter = document.createElement("div");

    counter.className = large
        ? "counter large"
        : "counter small";


    const iconElement = document.createElement("div");

    iconElement.className = "counter-icon";

    iconElement.textContent = icon;



    const valueRow = document.createElement("div");

    valueRow.className = "counter-value";



    const minus = document.createElement("button");

    minus.textContent = "−";



    const number = document.createElement("span");

    number.textContent = player[property];



    const plus = document.createElement("button");

    plus.textContent = "+";



    plus.addEventListener("click", () => {

        player.increment(property);

        updateCounter(number, player[property]);

    });



    minus.addEventListener("click", () => {

        player.decrement(property);

        updateCounter(number, player[property]);

    });



    valueRow.appendChild(minus);

    valueRow.appendChild(number);

    valueRow.appendChild(plus);



    counter.appendChild(iconElement);

    counter.appendChild(valueRow);



    return counter;

}



function updateCounter(element, value) {

    element.textContent = value;

    element.classList.remove("counter-pop");


    void element.offsetWidth;


    element.classList.add("counter-pop");


}



function createPlayerPanel(player) {


    const panel = document.createElement("section");


    panel.className = "player";


    panel.style.background = player.color;



    /*
        Vida
    */

    const life = document.createElement("div");

    life.className = "player-top";


    life.appendChild(

        createCounter(
            player,
            "life",
            "❤️",
            true
        )

    );



    /*
        Poder e Defesa
    */

    const combat = document.createElement("div");

    combat.className = "player-middle";


    combat.appendChild(

        createCounter(
            player,
            "power",
            "⚔"
        )

    );


    combat.appendChild(

        createCounter(
            player,
            "defense",
            "🛡"
        )

    );



    /*
        Canalização
    */


    const channel = document.createElement("div");


    channel.className = "player-bottom";


    channel.appendChild(

        createCounter(
            player,
            "channeling",
            "✨",
            true
        )

    );



    panel.appendChild(life);

    panel.appendChild(combat);

    panel.appendChild(channel);



    return panel;

}




function renderGame(players) {


    const app = document.getElementById("app");


    app.innerHTML = "";



    /*
        Barra superior
    */


    const toolbar = document.createElement("div");


    toolbar.className = "toolbar";



    const add = document.createElement("button");


    add.textContent = "+";


    add.onclick = addPlayer;



    const remove = document.createElement("button");


    remove.textContent = "−";


    remove.onclick = removePlayer;



    toolbar.appendChild(add);

    toolbar.appendChild(remove);



    app.appendChild(toolbar);



    /*
        Área dos jogadores
    */


    const game = document.createElement("div");


    game.className = `game players-${players.length}`;



    players.forEach(player => {


        game.appendChild(

            createPlayerPanel(player)

        );


    });



    app.appendChild(game);


}