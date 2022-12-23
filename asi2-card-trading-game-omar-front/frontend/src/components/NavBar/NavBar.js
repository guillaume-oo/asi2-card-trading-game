import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { UserOrButtons } from '../../components/User/UserOrButtons';
import {Button } from 'semantic-ui-react';
import { useSelector } from "react-redux";

import "../../css/NavBar/NavBar.css"

export const NavBar= (props) =>{
    const user = useSelector(state=>state.userReducer.user);
    const navigate = useNavigate();

    let routeHashmap = new Map([
        ['/auth', 'Log In'],
        ['/sign-up', 'Sign Up'],
        ['/home', 'Home'],
        ['/market-buy', 'Buy'],
        ['/market-sell', 'Sell'],
        ['/play', 'Play'],
        ['/waiting-room', 'Waiting For Player'],
    ])

    const routeName= routeHashmap.get(useLocation().pathname);

    function handleClickHome() {
        navigate('/home')
    }

    return(
        <nav className='navbar' class='row'>
            <div className='navbar--left'>
                <Button type='button' onClick={handleClickHome} className={routeName=='Home' ? 'navbar--home-button  hidden' : 'navbar--home-button'}>Home</Button>
            </div>

            <h1>{routeName}</h1>

            <div className='navbar--right'>
                <UserOrButtons/>
            </div>
        </nav>
    );
}