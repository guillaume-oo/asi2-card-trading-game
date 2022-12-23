import Game from '../models/Game.mjs';

class GameDAO {
    constructor() {
        this.listGame = new Array();
        console.log(`new GameDAO`);
    }

    getAllGames() {
        return this.listGame;
    }

    getGame(gameID) {
        return this.listGame.filter(
            g => g.id === Number(gameID)
        );
    }

    deleteGame(gameID) {
        return this.listGame.filter(
            g => g.id === Number(gameID)
        ).pop();
    }

    createGame(user1,user2) {
        var game = new Game(this.listGame.length+1, user1, user2);
        this.listGame.push(game);
        return game;
    }
}
    
export default new GameDAO();