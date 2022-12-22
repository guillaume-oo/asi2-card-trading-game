import React, { useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { userUpdate } from "../../core/actions"
import { socket } from "../../context/socket"

export const Auth = (props) =>{
    const navigate = useNavigate();
    let dispatch = useDispatch();

    const [currentUser,setCurrentUser]= useState({
                                        username:"",
                                        password:"",
                                    });


    function processInput(event){
        const target = event.currentTarget;
        var name = target.name;
        var value = target.value;

        setCurrentUser({...currentUser, [name]: value});
    };

    function loginUser(data){
        console.log("current user : " + JSON.stringify(currentUser) );
        fetch('http://localhost:8083/auth',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(currentUser)
        })
        .then((response) => {
            if (response.status == 403){
                throw new Error('Invalid credentials');
            }
            else if (response.status == 200) {
                return response.json()
            }
        })
        .then((data) => {
            console.log(data)
            if (getUserByID(data) && sendUserIDToSocket(data)) {
                navigate('/home')
            }else{
                throw new Error('User not found');
            }
        })
        .catch(error => console.log(error))
    }

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
            console.log("Fetched user: "+ JSON.stringify(data));
            dispatch(userUpdate(data)); 
        })
        .catch(error => console.log(error))
        return true;
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
    
    return (
        <Form>
            <Header as='h4' dividing>
                User Login
            </Header>
            <Form.Field>
                <Form.Input label="Login" placeholder="Login" onChange={processInput}  name="username" value={currentUser.login}/>
            </Form.Field>
            <Form.Field>
                <Form.Input type="password" label="Pwd" placeholder="password" onChange={processInput}  name="password" value={currentUser.pwd}/>
            </Form.Field>
            <Button type='button' onClick={loginUser}>Login</Button>
        </Form>

    );
    
    }