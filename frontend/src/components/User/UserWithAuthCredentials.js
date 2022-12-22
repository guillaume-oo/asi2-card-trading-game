import React from 'react';
import { User } from '../../components/User/User';

import { Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { userUpdate } from "../../core/actions"
import { socket } from "../../context/socket"

export const UserWithAuthCredentials = (props)=>{
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const user = props.user;

    function loginUser(){
        if ( dispatch(userUpdate(user)) && sendUserIDToSocket(user.id)){
            navigate('/home');
        }else{
            throw new Error('User not found');
        }
    }

    function sendUserIDToSocket(userID){
        fetch('http://localhost:9999/user',  {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({socketID: socket.id, userID: userID})
        })
        return true;
    }

    if (user != undefined){
        return ( 
            <>
                <User user={user}/>
                <Button type='button' onClick={loginUser}>Login</Button>
                <h4> {"Login: " + user.login + " Password: " + user.pwd} </h4>
            </>
        )
    }

}