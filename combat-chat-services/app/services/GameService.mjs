class GameService {
    constructor({}) {
        console.log(`new GameService`);
    }

    startGame(roomData) {
        // choisir qui vas commencer
        userPlaying = roomData.user1

        // affecter des pts d'actions
        user1.ptsActions = 10
        user2.ptsActions = 10

        // informer le front
        //      socketManager.send(user1, event: "Game started", msg: {ptsActions,"tuCommence"})
        //      socketManager.send(user2, event: "Game started", msg: {ptsActions,"l'autre Commence"})
    }

    attack(user1,card1,user2,card2){
        // calcul du resutat d'attack : crits, aléa, esquive

        // request vers spring de changer les pts de vie
        // informer le front 
        // depenser pts d'actions
        //      if pts d'actions devient 0 -> ChangeTurns $ inform front
        //      else turn to user1
    }


}

export default new GameService({});