import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./components/Home/Home";
import { Auth } from './components/Auth/Auth';
import { SignUp } from './components/Auth/SignUp';
import { MarketBuy } from './components/Market/MarketBuy';
import { MarketSell } from './components/Market/MarketSell';
import { NavBar } from './components/NavBar/NavBar';
import { useDispatch, useSelector } from "react-redux/es/exports"
import { cardsUpdate , defaultUsersUpdate} from './core/actions';
import { selectedCardUpdate } from './core/actions';
import { Play } from './components/Play/Play';
import { WaitingRoom } from './components/WaitingRoom/WaitingRoom';

import {SocketContext, socket} from './context/socket.js';

export const Main= (props) =>{
    let dispatch=useDispatch();
    const [usersCreated, setUsersCreated] = useState(0);
    
    useEffect( ()=> {
        fetch('http://localhost:8083/cards')
            .then(response => response.json())
            .then((response) => {
                dispatch(cardsUpdate(response));    
                dispatch(selectedCardUpdate(response[0]));            
            })
            .catch(error => console.log(error));
    }, [])

    const userA = {
        surName:"John",
        lastName:"Doe",
        login:"xXnoobmaster",
        pwd:"passwd",
        account: 5000,
    }

    const userB = {
        surName:"Eli",
        lastName:"Strauss",
        login:"petitPoney",
        pwd:"passwd",
        account: 5000,
    }

    useEffect( ()=> {
        fetch('http://localhost:8083/users',{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            if (response.length < 2){
                createTwoDefaultUsers()
            }
            else{
                dispatch(defaultUsersUpdate(response));
            }            
        })
        .catch(error => console.log(error));
    }, [usersCreated] );

    function createTwoDefaultUsers(){
        fetch('http://localhost:8083/user',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userA)
        })
        .then((response) => {
            if (response.status == 200) {
                setUsersCreated(usersCreated+1)
            }
        })
        .catch(error => console.log(error))

        fetch('http://localhost:8083/user',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userB)
        })
        .then((response) => {
            if (response.status == 200) {
                setUsersCreated(usersCreated+2)
            }
        })
        .catch(error => console.log(error))

        
    }


    // return JSX components
     return (
        <>
            <SocketContext.Provider value={socket}>
                <BrowserRouter>
                    <NavBar/>
                    <div className='body-content'>
                        <Routes>
                            <Route path='/auth' element={<Auth />} />
                            <Route path='/sign-up' element={<SignUp />} />
                            <Route path='/' element={<Home/>} />
                            <Route path='/home' element={<Home/>} />
                            <Route path='/market-buy' element={<MarketBuy />} />
                            <Route path='/market-sell' element={<MarketSell/>} />
                            <Route path='/play' element={<Play/>} />
                            <Route path='/waiting-room' element={<WaitingRoom/>} />
                        </Routes>
                    </div>
            </BrowserRouter>
        </SocketContext.Provider>
    </>
 );
  

}