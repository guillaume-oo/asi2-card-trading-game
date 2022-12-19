import React, { useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { userUpdate } from "../../core/actions"

export const SignUp = (props) =>{
    const navigate = useNavigate();

    const [currentUser,setCurrentUser]= useState({
                                        id:"",
                                        surname:"",
                                        lastname:"",
                                        img:"",
                                        login:"",
                                        pwd:"",
                                        money: 5000,
                                    });

    function processInput(event){
        const target = event.currentTarget;
        var name = target.name;
        var value = target.value;

        setCurrentUser({...currentUser, [name]: value});
    };

    function createUser(data){
        console.log("current user : " + JSON.stringify(currentUser) );
        fetch('http://localhost:8083/user',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then((response) => {
            if (response.status == 200) {navigate('/auth')}
        })
        .catch(error => alert(error))
    }
    
    return (
        <Form>
            <Form.Field>
                <Form.Input label="Surname" placeholder="john" onChange={processInput}  name="surname" value={currentUser.surname}/>
            </Form.Field>
            <Form.Field>
                <Form.Input label="Lastname" placeholder="doe" onChange={processInput}  name="lastname" value={currentUser.lastname}/>
            </Form.Field>
            <Form.Field>
                <Form.Input label="Login" placeholder="Login" onChange={processInput}  name="login" value={currentUser.login}/>
            </Form.Field>
            <Form.Field>
                <Form.Input type="password" label="Pwd" placeholder="password" onChange={processInput}  name="pwd" value={currentUser.pwd}/>
            </Form.Field>
            <Button type='button' onClick={createUser}>Create User</Button>

        </Form>

    );    
}