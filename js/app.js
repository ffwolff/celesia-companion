const players = [];


function addPlayer(){


    if(players.length >= 6){

        return;

    }


    const player = new Player(

        players.length + 1,

        DEFAULT_COLORS[players.length]

    );


    players.push(player);


    render();


}



function removePlayer(){


    if(players.length <= 1){

        return;

    }


    players.pop();


    render();


}



function render(){

    renderGame(players);

}



function initialize(){


    players.push(

        new Player(
            1,
            DEFAULT_COLORS[0]
        )

    );


    players.push(

        new Player(
            2,
            DEFAULT_COLORS[1]
        )

    );


    render();


}



initialize();