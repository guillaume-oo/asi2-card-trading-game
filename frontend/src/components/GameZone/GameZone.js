import React, { Component, useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Deck } from '../Deck/Deck';
import { UserBoard } from '../UserBoard/UserBoard';
import { PlayerBoard } from '../PlayerBoard/PlayerBoard';
import { useSelector , useDispatch} from 'react-redux';
import { gameOpponentUpdate,gameRoomIdUpdate, currentPlayingUserIdUpdate, 
    gameOpponentSelectedCardUpdate, gameSelectedCardUpdate } from '../../core/actions';
import {SocketContext} from '../../context/socket';


export const GameZone = (props) => {
    const navigate = useNavigate();
    let dispatch = useDispatch();

    const socket = useContext(SocketContext);

    const cardMap = new Map();

    socket.on("game-room-created", data => {
        console.log("should get fet user's cards")
        getUserByID(data.opponentId);
        dispatch(gameRoomIdUpdate(data.gameRoomId));
        dispatch(currentPlayingUserIdUpdate(data.currentPlayingUserId));

        for (var i = 0; i++; user.cardList.length){
            getUserCards(user.cardList[i]);
        }
    })

    function getUserByID(userID){
        fetch('http://localhost:8083/user/'+userID)
            .then(response => {
                var opponent = response.json();
                console.log("Fetched second user: "+ opponent);
                dispatch(gameOpponentUpdate(response.json()));

                for (var i = 0; i++; opponent.cardList.length){
                    getUserCards(opponent.cardList[i]);
                }
            })
            .catch(error => alert(error))
    }

    function getUserCards(cardId){
        fetch('http://localhost:8083/card/'+cardId)
            .then(response => {
                console.log("Fetched second user: "+ JSON.stringify(response));
                cardMap.set(cardId, response.json())
            })
            .catch(error => alert(error))
    }

    const selectedCardSelf = useSelector(state=>state.gameReducer.selectedCardSelf);
    const selectedCardOpponent = useSelector(state=>state.gameReducer.selectedCardOpponent);
    const opponentUser = useSelector(state=>state.gameReducer.opponentUser);
    const user = useSelector(state=>state.userReducer.user);
    const gameId = useSelector(state=>state.gameReducer.gameRoomId);
    const currentPlayingUserId = useSelector(state=>state.gameReducer.currentPlayingUserId); // user who's actually playing


    //User1 et User2 sont les joueurs, User est celui qui s'est login

    //attackbutton
    function handleAttackButton(){
        let attaquantId;
        let victimeId;
        let attaquantCard;
        let victimeCard;
        if(user.id == currentPlayingUserId){
            attaquantId = user.id;
            victimeId = opponentUser.id;
            attaquantCard = selectedCardSelf;
            victimeCard = selectedCardOpponent;
        }
        else{
            attaquantId = opponentUser.id;
            victimeId = user.id;
            attaquantCard = selectedCardOpponent;
            victimeCard = selectedCardSelf;
        }
        console.log("attaque faite de : "+attaquantId + " avec la carte : "+attaquantCard);
    }


    //EndTurn button
    function handleEndTurnButton(){
        //todo requete pour changer isCurrentUser
    }

    return (
        <div className="ui grid">
            <div className="row">
                <PlayerBoard user={opponentUser} selectedCard={selectedCardOpponent} currentPlayingUserId={currentPlayingUserId} />
            </div>

            <div className='row'>
                <button onClick={() => handleEndTurnButton()}> End turn </button>
                <button onClick={() => handleAttackButton()}> Attack </button>
            </div>

            <div className="row">
                <PlayerBoard user={user} selectedCard={selectedCardSelf} currentPlayingUserId={currentPlayingUserId} />
            </div>
        </div>

    );

}