import React, { Component, useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Deck } from '../Deck/Deck';
import { UserBoard } from '../UserBoard/UserBoard';
import { Form, Header,Button } from 'semantic-ui-react'
import { PlayerBoard } from '../PlayerBoard/PlayerBoard';
import { useSelector , useDispatch} from 'react-redux';
import { gameOpponentUpdate,gameRoomIdUpdate, currentlyPlayingUserIdUpdate, 
    gameOpponentSelectedCardUpdate, gameSelectedCardUpdate } from '../../core/actions';
import {SocketContext} from '../../context/socket';


export const GameZone = (props) => {
    let dispatch = useDispatch();

    const selectedCardSelf = useSelector(state=>state.gameReducer.selectedCardSelf);

    console.log(selectedCardSelf);
    const selectedCardOpponent = useSelector(state=>state.gameReducer.selectedCardOpponent);
    const opponentUser = useSelector(state=>state.gameReducer.opponentUser);
    const user = useSelector(state=>state.userReducer.user);
    const gameId = useSelector(state=>state.gameReducer.gameRoomId);
    const currentlyPlayingUserId = useSelector(state=>state.gameReducer.currentlyPlayingUserId); // user who's actually playing
    console.log("curently playing user id :" +currentlyPlayingUserId);

    const socket = useContext(SocketContext);

    socket.on("game-room-created", data => {
        console.log("received msg:  game-room-created " + JSON.stringify(data));
        getUserByID(data.opponentId);
        dispatch(gameRoomIdUpdate(data.gameRoomId));
        dispatch(currentlyPlayingUserIdUpdate(data.currentlyPlayingUserId));
    })

    function getUserByID(userID){
        fetch('http://localhost:8083/user/'+userID, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => {
            if (response.status == 200) {return response.json();}
        })
            .then(data => {
            dispatch(gameOpponentUpdate(data));
        })
        .catch(error => console.log(error))
        return true;
    }

    //attackbutton
    function handleAttackButton() {
        
        let attaquantId;
        let victimeId;
        let attaquantCard;
        let victimeCard;

        if (user.id == currentlyPlayingUserId) {    //condition pour cliquer sur le bouton
            
            if (user.id == currentlyPlayingUserId) {
                attaquantId = user.id;
                victimeId = opponentUser.id;
                attaquantCard = selectedCardSelf;
                victimeCard = selectedCardOpponent;
            }
            else {
                attaquantId = opponentUser.id;
                victimeId = user.id;
                attaquantCard = selectedCardOpponent;
                victimeCard = selectedCardSelf;
            }

        //send to the Node.js back 
            const attackJSON = {
                attaquantId: attaquantId,
                victimeId: victimeId,
                attaquantCard: attaquantCard,
                victimeCard: victimeCard,
                attaquantActionPts: 10
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



            console.log("attaque faite de : " + attaquantId + " avec la carte : " + attaquantCard.name + " sur la carte :" + victimeCard.name + " de l'user (id): " + victimeId);

        }
        
    }

    //ecoute pour recevoir les changements sur les cards...
    socket.on("attack-done", (arg1, arg2, arg3) => {
        console.log("received msg:  attack done " + JSON.stringify(arg1) + JSON.stringify(arg2) + JSON.stringify(arg3));

        if (user.id == currentlyPlayingUserId) {               //=attaquant
            user.action_pts = Number(arg2);                    //put new points total
            console.log("new points : " + user.action_pts);


            //->for victime update
            
            console.log("opponent card list : " + opponentUser.cardList);
            let ind_cardv = -1;
            for (let i = 0; i < opponentUser.cardList.length; i++) {
                const card = opponentUser.cardList[i];
                if (card.id == arg3.id) {                       //si on trouve notre carte a changer
                    ind_cardv = i;
                    console.log("index trouvé");
                    break
                }
            }
            opponentUser.cardList[ind_cardv].hp = arg3.hp;     //effectuer changement
            console.log("changements faits sur la carte victime: " + opponentUser.cardList[ind_cardv]);
            
        }
    })

    



    //EndTurn button
    function handleEndTurnButton(){
        //todo requete pour changer isCurrentUser
        if (currentlyPlayingUserId == user.id) {
            dispatch(currentlyPlayingUserIdUpdate(opponentUser.id));
            console.log("Fin du tour, au tour de (id) : " + currentlyPlayingUserId);
        }  
    }

    return (
        <div className="ui grid">
            <div className="row">
                <PlayerBoard user={user} selectedCard={selectedCardSelf} 
                currentlyPlayingUserId={currentlyPlayingUserId} />
            </div>

            <div className=' centered row '>
                <div className='right'>
                    <h5>{currentlyPlayingUserId==user.id?"Your Turn to Attack !":"Opponents turn, please wait !"}</h5>
                    <Button type='button' onClick={() => handleEndTurnButton()}> End turn </Button>
                    <Button type='button' onClick={() => handleAttackButton()}> Attack </Button>
                </div>
            </div>

            <div className="row">
                <PlayerBoard user={opponentUser} selectedCard={selectedCardOpponent} 
                currentlyPlayingUserId={currentlyPlayingUserId}/>
            </div>
        </div>

    );

}