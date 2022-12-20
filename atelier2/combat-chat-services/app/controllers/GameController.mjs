import GameService from "../services/GameService.mjs";
import util from 'util'

class GameController {
    constructor({}) {
        console.log("new GameController")
    }


    createGameRoomRemotly(user1, user2){                    //possible seulement les id ici
    console.log("created game is coming :" + user1 + user2);
        GameService.createGameRoomRemotly(user1, user2);
    }

    attack(request, response){
        console.log("---POST REQUEST--- ATTACK : " + util.inspect(request.body, {depth: null}));
        const bodyRequest = request.body;
        GameService.attackRequest(bodyRequest);
    }
}

export default new GameController({});


