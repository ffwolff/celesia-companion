class Player {

    constructor(id, color) {

        this.id = id;

        this.color = color;

        this.life = 20;

        this.power = 0;

        this.defense = 0;

        this.channeling = 0;

    }


    increment(property) {

        this[property]++;

    }


    decrement(property) {

        if(this[property] > 0){

            this[property]--;

        }

    }

}