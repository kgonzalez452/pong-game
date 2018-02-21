export default 

class Game {
    constructor(isPlayer){
        if(isPlayer){
            this.player = new Player(name);
        }
        else {
            this.spectator = new Spectator(name);
        }
        this.playing = isPlayer;
    }

}

class Player {
    constructor(name){
        this.name = name || '';
    }
}

class Spectator {
    constructor () {
        this.name = name || '';
    }
}