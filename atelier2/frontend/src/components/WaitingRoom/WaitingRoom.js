import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {SocketContext} from '../../context/socket';
import { gameAdversaryUpdate, chatRoomIDUpdate } from '../../core/actions';

export const WaitingRoom = (props) => {
    const navigate = useNavigate();
    let dispatch = useDispatch();

    const [secondUser,setSecondUser]= useState({
        id:"",
        surname:"",
        lastname:"",
        img:"",
        username:"",
        password:"",
        money:0,

    });

    const socket = useContext(SocketContext);
    socket.on("room-created", data => {
        // recupéere id room chat
        // recuperer adversaire
        navigate('/Play');
    })


    function getUserByID(userID){
        fetch('http://localhost:8083/user/'+userID)
            .then(response => {
                console.log("Fetched second user: "+ JSON.stringify(response));
                dispatch(gameAdversaryUpdate(response));
            })
            .catch(error => alert(error))
        return true;
    }

    return (
        <div>
            <h1>Waiting Room...</h1>
        </div>
    );
}