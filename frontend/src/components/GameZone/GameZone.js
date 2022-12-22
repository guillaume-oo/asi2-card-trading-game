import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Deck } from '../Deck/Deck';
import { UserBoard } from '../UserBoard/UserBoard';
import { PlayerBoard } from '../PlayerBoard/PlayerBoard';
import { useSelector } from 'react-redux';


export const GameZone = (props) => {
    const navigate = useNavigate();

    const selectedCardSelf = useSelector(state=>state.gameReducer.selectedCardSelf);
    const selectedCardOpponent = useSelector(state=>state.gameReducer.selectedCardOpponent);
    const opponentUser = useSelector(state=>state.gameReducer.opponentUser);
    const user = useSelector(state=>state.userReducer.user);
    const gameId = useSelector(state=>state.gameReducer.gameId);
    const currentUserId = useSelector(state=>state.gameReducer.gameId); // user who's actually playing


    //User1 et User2 sont les joueurs, User est celui qui s'est login

    //attackbutton
    function handleAttackButton(){
        let attaquantId;
        let victimeId;
        let attaquantCard;
        let victimeCard;
        if(user.id == currentUserId){
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
                <PlayerBoard user={user2} selectedCard={selectedCardOpponent} />
            </div>

            <div className='row'>
                <button onClick={() => handleEndTurnButton()}> End turn </button>
                <button onClick={() => handleAttackButton()}> Attack </button>
            </div>

            <div className="row">
                <PlayerBoard user={user1} selectedCard={selectedCardSelf} />
            </div>
        </div>

    );

}