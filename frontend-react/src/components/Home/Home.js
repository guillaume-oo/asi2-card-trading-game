import React from 'react';
import { useNavigate } from "react-router-dom";


export const Home= (props) =>{
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

    function handleClickWaitingRoom() {
        navigate('/WaitingRoom')
    }

    return(
        <div>
            <h1> Welcome to card game</h1>
            <button onClick={handleClickAuth}>Auth</button>
            <button onClick={handleClickBuyCards}>Buy Cards</button> 
            <button onClick={handleClickSellCards}>Sell Cards</button> 
            <button onClick={handleClickWaitingRoom}>Start a game</button> 
        </div>
    );
}