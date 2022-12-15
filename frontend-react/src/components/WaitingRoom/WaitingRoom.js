import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { userUpdate } from "../../core/actions"
import { useDispatch } from "react-redux";

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

    function handleClickPlay() {
        navigate('/Play')
    }

    function getUserByID(userID){
        fetch('http://localhost:8083/user/'+12)
        .then(response => {
            console.log("Fetched second user: "+ JSON.stringify(response));
            dispatch(userUpdate(response));
        })
        .catch(error => alert(error))
        return true;
    }

    return (
        <div>
            <h1>Waiting Room...</h1>
            <button onClick={handleClickPlay}> Play Now </button>
        </div>
    );
}