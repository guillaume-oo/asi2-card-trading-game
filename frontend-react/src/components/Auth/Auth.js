import React, { useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

export const Auth = (props) =>{
       const [currentUser,setCurrentUser]= useState({
                                            // id:"",
                                            // surname:"",
                                            // lastname:"",
                                            // img:"",
                                            login:"",
                                            pwd:"",
                                            // money:0,

                                        });

    function processInput(event, { valueData }){
        // A chaque fois qu'on input qqch dans le formulaire on appelle cette fonction
        // Ici normalement on travaille sur un user donc on le créé vide et on rajoute ses détails
        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(event.target.value);
        // let currentVal=currentUser;
        setCurrentUser({...currentUser, [name]: value});
        // currentVal[name]= value;
        // props.handleChange(currentVal);
    };
    const navigate = useNavigate();

    function submitOrder(data){
        props.submitUserHandler(data);
        navigate("/Home");
    }
    
    return (
        <Form>
            <Header as='h4' dividing>
                User Login
            </Header>
            <Form.Field>
                <Form.Input label="Login" placeholder="Login" onChange={processInput}  name="login" value={currentUser.login}/>
            </Form.Field>
            <Form.Field>
                <Form.Input type="password" label="Pwd" placeholder="password" onChange={processInput}  name="pwd" value={currentUser.pwd}/>
            </Form.Field>
            <Button type='button' onClick={submitOrder}>Login</Button>
        </Form>

    );
    
    }