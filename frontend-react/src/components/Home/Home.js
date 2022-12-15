import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {SocketContext} from '../../context/socket';


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

    const [id,setId] = useState(101);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,
            "Access-Control-Allow-Origin": "*"}
    };

    function handleClickPlay() {
        
        fetch('http://localhost:9999/room/join/'+id, requestOptions)
            .catch(error => console.log(error))

        
        setId(id + 1);
    }

    const socket = useContext(SocketContext);
    socket.on("Partner found", data => {
        navigate('/Play')
    })

    socket.on("You are in queue", data => {
        console.log("waiting for a partner")
    })

    return(
        <div>
            <h1> Welcome to card game</h1>
            {/* <button onClick={handleClickAuth}>Auth</button> */}
            <button onClick={handleClickBuyCards}>Buy Cards</button> 
            <button onClick={handleClickSellCards}>Sell Cards</button> 
            <button onClick={handleClickPlay}>Play</button> 


        </div>
    );
}