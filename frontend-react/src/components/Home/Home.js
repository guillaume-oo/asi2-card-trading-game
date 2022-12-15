import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {SocketContext} from '../../context/socket';
import { useSelector } from "react-redux"


export const Home= (props) =>{
    const user = useSelector(state=>state.myUserReducer.user)

    const navigate = useNavigate();
    function handleClickAuth() {
        navigate('/')
    }
    function handleClickBuyCards() {
        navigate('/Market-Buy')
    }
    function handleClickSellCards() {
        navigate('/Market-Sell')
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,
            "Access-Control-Allow-Origin": "*"}
    };

    function handleClickPlay() {
        fetch('http://localhost:9999/room/join/'+user.id, requestOptions)
            .catch(error => console.log(error))
    }

    const socket = useContext(SocketContext);
    socket.on("You are in queue", data => {
        navigate('/WaitingRoom')
    })

    return(
        <div>
            <h1> Welcome to card game</h1>
            <button onClick={handleClickAuth}>Auth</button>
            <button onClick={handleClickBuyCards}>Buy Cards</button> 
            <button onClick={handleClickSellCards}>Sell Cards</button> 
            <button onClick={handleClickPlay}>Start a game</button> 
        </div>
    );
}