import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {SocketContext} from '../../context/socket';


export const WaitingRoom = (props) => {
    const navigate = useNavigate();

    const socket = useContext(SocketContext);
    socket.on("matchmaking", data => {
        navigate('/Play');
    })

    return (
        <div>
            <h1>Waiting Room...</h1>
        </div>
    );
}