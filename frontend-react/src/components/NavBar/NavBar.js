import React, {useContext} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { User } from '../../components/User/User';
import {SocketContext} from '../../context/socket';

import "../../css/NavBar/NavBar.css"

export const NavBar= (props) =>{

    const socket = useContext(SocketContext);
    socket.emit("SEND_JOIN_REQUEST");

    let routeHashmap = new Map([
        ['/Auth', 'Log In'],
        ['/Home', 'Home'],
        ['/Market-Buy', 'Buy'],
        ['/Market-Sell', 'Sell'],
        ['/Play', 'Play']
    ])

    const routeName= routeHashmap.get(useLocation().pathname);

    const navigate = useNavigate();
    function handleClickHome() {
        navigate('/Home')
    }

    return(
        <nav className='navbar'>
            <div className='navbar--left'>
                <button onClick={handleClickHome} className={routeName=='Home' ? 'navbar--home-button hidden' : 'navbar--home-button'}>Home</button>
            </div>

            <h1>{routeName}</h1>
            <User/>
        </nav>
    );
}