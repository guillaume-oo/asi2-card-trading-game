import React, { Component, useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { PlayerBoard } from '../PlayerBoard/PlayerBoard';
import { useSelector, useDispatch } from 'react-redux';
import { SocketContext } from '../../context/socket';
import { refreshUser1, refreshUser2 } from '../../core/actions';



export const GameZone = (props) => {

    let dispatch = useDispatch();

    const navigate = useNavigate();

    const [gameId, setGameId] = useState(0);//unused
//Current user selected card and other user selected card
    const selectedcard1 = useSelector(state=>state.gameReducer.selectedCardSelf)
    const selectedcard2 = useSelector(state=>state.gameReducer.selectedCardOpponent)
   
    
//----recuperer users via requete / listen socket----
    //const [user2, setUser2] = useState({ userid: 7, userSurname: "a", card_list: [{ name: "gg", id: 1, hp: 10, attack: 5, defense: 1, energy: 60 }], action_pts: 1000, isCurrentUser: false });   //isCurrentUser = playing user
    //const [user1, setuser1] = useState({ userid: 14, userSurname: "b", card_list: [{ name: "jj", id: 2, hp: 10, attack: 5, defense: 2, energy:500 }], action_pts: 1000, isCurrentUser: true });

    //with socket do fetch request          -------------------------!!arriver a le mettre en place!!-------------------------------------------------------------------------------------------------------------------------------------
    const socket = useContext(SocketContext);
    socket.on("game_users_id", (arg1, arg2) => {
        const userid1 = Number(arg1) +1;
        const userid2 = Number(arg2) +1;
        console.log("-> users id from the Node via socket: " + userid1+", "+ userid2);

        //requete pour recup les users complets
            //todo : 
        getUserByID(userid1);   //fetch request
        getUserByID(userid2);

        //getUserByID(7);    //userid1 (a mettre quand on enverra la VRAIE socket)
        var user1 = useSelector(state => state.gameReducer.user1);
        //getUserByID(14);   //userid2
        var user2 = useSelector(state => state.gameReducer.user2);
        //log
        console.log("-> user by fetch et dispatch:" + user1.id + ", " + user2);    //=true true
    })

    //------------------------------error ici j'arrive pas a retourner une valeur de ma requete get--------------------------------------------
    //getUserByID(7);    //userid1 (a mettre quand on enverra la VRAIE socket)
    var user1 = useSelector(state => state.gameReducer.user1);

    //getUserByID(14);   //userid2
    var user2 = useSelector(state => state.gameReducer.user2);

    


    function getUserByID(userID) {
        fetch('http://localhost:8083/user/' + userID, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => {
            if (response.status == 200) { return response.json(); }
        })
        .then(data => {
            console.log("Fetched user GameZone to dispatch: " + JSON.stringify(data));
            dispatch(refreshUser1(data));
        })
        .catch(error => console.log(error))
        return true;
    }

//User1 et User2 sont les joueurs, choisir a qui c'est le tour
    const CurrentUser = user1;
    if (user1.isCurrentUser) {
        const CurrentUser = user1;
        console.log("new current user id: " + CurrentUser.userid);
        }
    if (user2.isCurrentUser) {
        const CurrentUser = user2;
        console.log("new current user id: " + CurrentUser.userid);
        }

//attackbutton
    function handleAttackButton(){
        //verifier si le user1 (=celui de la page) c'est a son tour
        if (CurrentUser.userid == user1.userid) {    //user 1 attaque, donc peut "cliquer" sur le bouton attack
            console.log("playing user id: " + CurrentUser.userid);
            let attaquantId = -1;
            let victimeId = -1;
            let attaquantCard = -1;
            let victimeCard = -1;
            let attaquantActionPts = -1;


        if (user1.isCurrentUser){     //donc user1 est l'attaquant
            attaquantId = user1.userid;
            victimeId = user2.userid;
            attaquantCard = selectedcard1;
            victimeCard = selectedcard2;
            attaquantActionPts = user1.action_pts;  //car doit changer aussi
            //todo requete
        }
        else{                         //donc user2 est l'attaquant
            attaquantId = user2.userid;
            victimeId = user1.userid;
            attaquantCard = selectedcard2;
            victimeCard = selectedcard1;
            attaquantActionPts = user2.action_pts;
            //todo requete
            }

        //json for attack request
            const attackJSON = {
                attaquantId: attaquantId,
                victimeId: victimeId,
                attaquantCard: attaquantCard,
                victimeCard: victimeCard,
                attaquantActionPts: attaquantActionPts
            }
        //requete pour notifier de l'attaque
        fetch('http://localhost:9999/game/attack', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(attackJSON)
            })
            
            .catch(error => console.log(error))


        console.log("attaque faite de : "+attaquantId + " avec la carte : "+attaquantCard);
        }
        
         //toto recup data et envoyer requete au back 
    }

//EndTurn button
    function handleEndTurnButton(){
        //todo requete pour changer isCurrentUser
    }


//---listen socket1 from Node.js---
    const socket1 = useContext(SocketContext);
    socket1.on("attack-done", (arg1, arg2, arg3) => {     //=(card attack, action point, card victim)
        console.log("recu socket attaquant");
        console.log("arg1: " + Object.values(arg1));    //card a
        console.log("arg2: " + arg2);                   //points
        console.log("arg3: " + Object.values(arg3));    //card v

        if (user1.isCurrentUser) {  //user1 is attanquant
            let ind_card = -1;
            for (let i = 0; i < user1.cardList.length; i++) {
                console.log("id card: " + user1.cardList[i].id);
                console.log("id arg1: " + arg1.id);
                if (user1.cardList[i].id == arg1.id) {
                    ind_card = i;
                    break;
                }
                
            }
            user1.cardList[ind_card].hp = arg1.hp;             //on "refresh" les hp
            user1.action_pts = Number(arg2);                    //put new points total
            console.log("new points : " + user1.action_pts);
            console.log("new card list attacker : " + Object.values(user1.cardList[0]));
                //->for victime update
            let ind_cardv = -1;
            let i = 0;
            for (const card in user2.cardList) {
                if (card.id == arg3.id) {
                    ind_cardv = i;
                    break;
                }
                i++;
            }
            user2.cardList[ind_card].hp = arg1.hp;
            console.log("new card list victime: " + Object.values(user2.cardList[0]));
        }

        if (user2.isCurrentUser) {  //user2 attaquant
            let ind_card = -1;
            for (let i = 0; i < user2.cardList.length; i++) {
                console.log("id card: " + user2.cardList[i].id);
                console.log("id arg1: " + arg1.id);
                if (user2.cardList[i].id == arg1.id) {
                    ind_card = i;
                    break;
                }

            }
            user2.cardList[ind_card].hp = arg1.hp;             //on "refresh" les hp
            user2.action_pts = Number(arg2);                    //put new points total
            console.log("new points : " + user2.action_pts);
            console.log("new card list attacker: " + Object.values(user2.cardList[0]));
                //->for victime update
            let ind_cardv = -1;
            let i = 0;
            for (const card in user1.cardList) {
                if (card.id == arg3.id) {
                    ind_cardv = i;
                    break;
                }
                i++;
            }
            user1.cardList[ind_card].hp = arg1.hp;
            console.log("new card list victime: " + Object.values(user1.cardList[0]));




            let ind_card2 = user2.cardList.indexOf(arg1.id);
            user2.cardList.splice(ind_card2, 1, arg1);      //on remplace par la nouvelle card
            user2.action_pts = arg2;                        //put new points total
            console.log("new card list : " + Object.values(user2.cardList));
                //for victime update
            let ind_cardv2 = user1.cardList.indexOf(arg3.id);
            user1.cardList.splice(ind_cardv2, 1, arg3);
            console.log("Victime card changed : " + Object.values(user1.cardList[0]))
        }

        //dispatch les users, donc leurs cartes
        dispatch(refreshUser1(user1));
        dispatch(refreshUser2(user2));
    })





    return (
        <div className="ui grid">
            <div className="row">
                <PlayerBoard user={user2} selectedCard={selectedcard2} />
            </div>

            <div className='row'>
                <button onClick={() => handleEndTurnButton()}> End turn </button>
                <button onClick={() => handleAttackButton()}> Attack </button>
                <h2>--- Tour de l'user id : {CurrentUser.userid} ---</h2>
            </div>

            <div className="row">
                <PlayerBoard user={user1} selectedCard={selectedcard1} />
            </div>
        </div>

    );

}