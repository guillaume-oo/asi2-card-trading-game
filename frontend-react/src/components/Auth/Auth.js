import React, { useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { userUpdate } from "../../core/actions"

export const Auth = (props) =>{
       const [currentUser,setCurrentUser]= useState({
                                            // id:"",
                                            // surname:"",
                                            // lastname:"",
                                            // img:"",
                                            username:"",
                                            password:"",
                                            // money:0,

                                        });

    function processInput(event, { valueData }){
        // A chaque fois qu'on input qqch dans le formulaire on appelle cette fonction
        // Ici normalement on travaille sur un user donc on le créé vide et on rajoute ses détails
        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // let currentVal=currentUser;
        setCurrentUser({...currentUser, [name]: value});
        // currentVal[name]= value;
        // props.handleChange(currentVal);
    };
    const navigate = useNavigate();
    let dispatch = useDispatch();

    function submitOrder(data){
        props.submitUserHandler(data);
        console.log("current user : " + JSON.stringify(currentUser) );
        fetch('http://tp.cpe.fr:8083/auth',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then((response) => {
            if (response.status == 403){throw new Error('Invalid credentials');}
            else if (response.status == 200) {return response.json()}
        })
        .then((data) => {
            console.log("reponse: "  +JSON.stringify(data));
            if (getUserByID(data)){
                navigate('/home')
            }else{
                throw new Error('User not found');
            }
        })
        .catch(error => alert(error))
    }

    function getUserByID(userID){
        fetch('http://tp.cpe.fr:8083/user/'+userID)
        .then(response => {
            console.log("reponse: "+ response)
            if (response.status == 403){throw new Error('Invalid credentials');}
            else if (response.status == 200) {return response.json()}
        })
        .then(response => {
            console.log("Fetched user: "+ JSON.stringify(response));
            dispatch(userUpdate(response));
            
        })
        .catch(error => alert(error))
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
            <Button type='button' onClick={submitOrder}>Login</Button>
        </Form>

    );
    
    }