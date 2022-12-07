import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { User } from '../../components/User/User';

import "../../css/NavBar/NavBar.css"

export const NavBar= (props) =>{
    let routeHashmap = new Map([
        ['/Auth', 'Log In'],
        ['/Home', 'Home'],
        ['/Market-Buy', 'Buy'],
        ['/Market-Sell', 'Sell'],
        ['/Play', 'Sell']
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
                <div className='navbar--link-item'>Argent</div>
            </div>

            <div className='navbar--link-item'>{routeName}</div>
            <User/>
        </nav>
    );
}