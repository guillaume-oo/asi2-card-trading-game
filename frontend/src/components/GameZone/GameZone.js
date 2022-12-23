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
    function handleAttackButton(){
        let attaquantId;
        let victimeId;
        let attaquantCard;
        let victimeCard;
        if(user.id == currentlyPlayingUserId){
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
                <PlayerBoard user={opponentUser} selectedCard={selectedCardOpponent} 
                currentlyPlayingUserId={currentlyPlayingUserId}/>
            </div>

            <div className='row '>
                <div className='right'>
                    <Button type='button' onClick={() => handleEndTurnButton()}> End turn </Button>
                    <Button type='button' onClick={() => handleAttackButton()}> Attack </Button>
                </div>
            </div>

            <div className="row">
                <PlayerBoard user={user} selectedCard={selectedCardSelf} 
                currentlyPlayingUserId={currentlyPlayingUserId} />
            </div>
        </div>

    );

}