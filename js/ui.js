function createResource(player, property, icon){


    const resource = document.createElement("div");


    resource.className = "resource";



    const value = document.createElement("div");


    value.className = "resource-value";



    const minus = document.createElement("button");


    minus.textContent = "−";



    const number = document.createElement("span");


    number.textContent = player[property];



    const plus = document.createElement("button");


    plus.textContent = "+";



    minus.onclick = () => {


        player.decrement(property);


        number.textContent = player[property];


    };



    plus.onclick = () => {


        player.increment(property);


        number.textContent = player[property];


    };



    const iconElement = document.createElement("div");


    iconElement.className="resource-icon";


    iconElement.textContent=icon;



    value.appendChild(minus);


    value.appendChild(number);


    value.appendChild(plus);



    resource.appendChild(value);


    resource.appendChild(iconElement);



    return resource;

}





function createPlayerPanel(player){



    const panel=document.createElement("section");


    panel.className="player";


    panel.style.background=player.color;



    /*
        VIDA
    */


    const life=createResource(

        player,

        "life",

        "❤️"

    );


    life.classList.add("life");




    /*
        PODER / DEFESA
    */


    const combat=document.createElement("div");


    combat.className="combat";



    combat.appendChild(

        createResource(

            player,

            "power",

            "⚔"

        )

    );



    combat.appendChild(

        createResource(

            player,

            "defense",

            "🛡"

        )

    );




    /*
        CANALIZAÇÃO
    */


    const channel=createResource(

        player,

        "channeling",

        "✨"

    );


    channel.classList.add("channeling");




    panel.appendChild(life);


    panel.appendChild(combat);


    panel.appendChild(channel);



    return panel;

}






function renderGame(players){


    const app=document.getElementById("app");


    app.innerHTML="";



    const toolbar=document.createElement("div");


    toolbar.className="toolbar";



    const add=document.createElement("button");


    add.textContent="+";


    add.onclick=addPlayer;



    const remove=document.createElement("button");


    remove.textContent="−";


    remove.onclick=removePlayer;



    toolbar.appendChild(add);


    toolbar.appendChild(remove);



    app.appendChild(toolbar);




    const game=document.createElement("div");


    game.className=`game players-${players.length}`;




    players.forEach(player=>{


        game.appendChild(

            createPlayerPanel(player)

        );


    });



    app.appendChild(game);


}