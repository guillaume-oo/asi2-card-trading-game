import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {SocketContext} from '../../context/socket';
import { useSelector } from "react-redux"


export const Home= (props) =>{
    const navigate = useNavigate();
    const user = useSelector(state=>state.userReducer.user)

    function handleClickCreateUser() {
        navigate('/sign-up')
    }
    function handleClickAuth() {
        navigate('/auth')
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
        fetch('http://localhost:9999/room/join/'+user.id +'/100', requestOptions)
            .catch(error => console.log(error))
    }

    const socket = useContext(SocketContext);
    socket.on("user-put-in-queue", data => {
        navigate('/WaitingRoom')
    })

    return(
        <div>
            <h1> Welcome to card game</h1>
            <button onClick={handleClickCreateUser}>CreateUser</button> 
            <button onClick={handleClickAuth}>Auth</button>
            <button onClick={handleClickBuyCards}>Buy Cards</button> 
            <button onClick={handleClickSellCards}>Sell Cards</button> 
            <button onClick={handleClickPlay}>Start a game</button> 
        </div>
    );
}