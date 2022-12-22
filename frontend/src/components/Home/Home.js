import React, { useState, useContext } from 'react';
import {Button } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";
import {SocketContext} from '../../context/socket';
import { useSelector } from "react-redux";
import { User } from '../../components/User/User';
import { UserWithAuthCredentials } from '../User/UserWithAuthCredentials';

export const Home= (props) =>{
    const navigate = useNavigate();

    const socket = useContext(SocketContext);
    const user = useSelector(state=>state.userReducer.user);
    const defaultUsers = useSelector(state=>state.userReducer.defaultUsers);

    function handleClickBuyCards() {
        navigate('/market-buy')
    }

    function handleClickSellCards() {
        navigate('/market-sell')
    }

    function handleClickPlay() {
        fetch('http://localhost:9999/room/join/'+user.id +'/100', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' ,
                "Access-Control-Allow-Origin": "*"
            }
        })
        .catch(error => console.log(error))
    }

    socket.on("user-put-in-queue", data => {
        navigate('/waiting-room')
    })

    if (user!= undefined && user.login != undefined){
        return ( 
            <div>
                <h1> Welcome to card game</h1>
                <Button type='button' onClick={handleClickBuyCards}>Buy Cards</Button> 
                <Button type='button' onClick={handleClickSellCards}>Sell Cards</Button> 
                <Button type='button' onClick={handleClickPlay}>Start a game</Button> 
            </div>
        );
    }
    else {
        return(
            <div>
                <h1> Welcome to card game </h1>
                <h3> You need to create a user and login first </h3>

                
                <h3> To be faster, you can use one of our default users: </h3>
                    <UserWithAuthCredentials user={defaultUsers[0]}/>

                    <UserWithAuthCredentials user={defaultUsers[1]}/>
            </div>
        );
    }
}