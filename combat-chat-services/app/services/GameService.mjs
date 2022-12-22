import GameDAO from '../dao/GameDAO.mjs';
import socketManager from "../../app/SocketManager.mjs";
import Card from '../model/Card.mjs';
import util from 'util'

class GameService {
    constructor({}) {
        console.log(`new GameService`);
    }


    createGameRoomRemotly(user1, user2){
        var game = GameDAO.createGame(user1, user2);
        console.log("game created (user1 et 2 id):" + game.user1ID+" "+game.user2ID);
        this.sendGameToFront(game);           
    }

    sendGameToFront(game){
        //todo envoyer les usersId en jeu pour que le front demande tout de eux (cards ect..)
        
        const id1 = game.user1ID;
        const id2 = game.user2ID;

        var socket1 = socketManager.getSocketFromUserId(id1); 
        socket1.emit("game_users_id",id1 , id2);

        var socket2 = socketManager.getSocketFromUserId(id2); 
        socket2.emit("game_users_id", id1, id2);

        console.log("socket emit pour : game_users_id");
    }

    attackRequest(bodyRequest){
        //extract all from body
        const attaquantCard = bodyRequest['attaquantCard'];
        var CardAttacker= new Card(attaquantCard['id'], attaquantCard['attack'], attaquantCard['defense'], attaquantCard['energy'], attaquantCard['hp']);
        
        const victimeCard = bodyRequest['victimeCard'];
        var CardVictim = new Card(victimeCard['id'], victimeCard['attack'], victimeCard['defense'], victimeCard['energy'], victimeCard['hp']);
        
        var actionPointAttaker = bodyRequest['attaquantActionPts'];

        //do changements
        const nouveauActionPts = this.ActionPointCalcul(actionPointAttaker,CardAttacker.getEnergy() );   //enlever les action points
        console.log("action point recalcule: " + nouveauActionPts);

        let cards = this.CalculOnCards(CardAttacker, CardVictim);
        const attackCard = cards.cardAttacker;
        const cardVictim = cards.cardVictim;

        console.log("attaque " + util.inspect(attackCard, {depth: null}) +" et victime " +  util.inspect(cardVictim, {depth: null}));

        //send data to the front
        this.sendChangementsToFront(attackCard, cardVictim, nouveauActionPts, bodyRequest['attaquantId'], bodyRequest['victimeId']);
    }

    ActionPointCalcul(actionPointAttaker,energyCard){
        return actionPointAttaker - energyCard;
    }

    CalculOnCards(cardAttacker, cardVictim){
        if(cardVictim.getHp() <= cardAttacker.getAttack()){
            //delete card
            console.log("attaque fatale pour la carte");
            cardVictim.setHp(0);    //pour le moment
        }
        else{
            //do the changements on hp
            cardVictim.setHp(cardVictim.getHp() - cardAttacker.getAttack());
        }
        return {cardAttacker, cardVictim};          //return refresh cards
    }

    sendChangementsToFront(attackCard, cardVictim, nouveauActionPts, attaquantId, victimeId){

        //envoyer les cards a l'user conserné
            //var socket1 = socketManager.getSocketFromUserId(attaquantId); 
            //socket1.emit("attack-done-attaquant", attackCard, nouveauActionPts);

            //var socket2 = socketManager.getSocketFromUserId(victimeId);
            //socket2.emit("attack-done-victime", cardVictim);

        var socket1 = socketManager.getSocketFromUserId(attaquantId); 
        socket1.emit("attack-done", attackCard, nouveauActionPts, cardVictim);
        var socket2 = socketManager.getSocketFromUserId(victimeId);
        socket2.emit("attack-done", attackCard, nouveauActionPts, cardVictim);
        console.log("sockets envoyées");
    }
}

export default new GameService({});