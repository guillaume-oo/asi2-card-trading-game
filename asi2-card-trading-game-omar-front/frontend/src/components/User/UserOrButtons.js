
import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import {Button } from 'semantic-ui-react';
import { useSelector } from "react-redux";
import { User } from '../../components/User/User';

import "../../css/NavBar/NavBar.css"

export const UserOrButtons= (props) =>{
    const navigate = useNavigate();
    const user = useSelector(state=>state.userReducer.user);

    function handleClickCreateUser() {
        navigate('/sign-up')
    }
    function handleClickAuth() {
        navigate('/auth')
    }


    if (user!= undefined && user.login != undefined){
        return <User user={user}/>
    }
    else {
        return ( 
            <div>
                <Button type='button' onClick={handleClickCreateUser}>Create User</Button>
                <Button type='button' onClick={handleClickAuth}>Log In</Button>     
            </div>
        )
    } 

}