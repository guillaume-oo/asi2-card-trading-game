import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./components/Home/Home";
import { Auth } from './components/Auth/Auth';
import { MarketBuy } from './components/Market/MarketBuy';
import { MarketSell } from './components/Market/MarketSell';
import { NavBar } from './components/NavBar/NavBar';
import { useDispatch, useSelector } from "react-redux/es/exports"
import { cardsUpdate } from './core/actions';
import { selectedCardUpdate } from './core/actions';

import {SocketContext, socket} from './context/socket.js';

export const Main= (props) =>{
    let dispatch=useDispatch();
    
    useEffect( ()=> {
        fetch('http://localhost:8083/cards')
            .then(response => response.json())
            .then((response) => {
                dispatch(cardsUpdate(response));    
                dispatch(selectedCardUpdate(response[0]));            
            })
            .catch(error => console.log(error))
    }, [])

    function submitUserHandler(data){
        console.log("user to submit"+data);
    };

    // return JSX components
     return (
        <>
            <SocketContext.Provider value={socket}>

                <BrowserRouter>
                    <NavBar/>
                    <div className='body-content'>
                        <Routes>
                            <Route path='/' element={<Auth submitUserHandler={submitUserHandler}/>} />
                            <Route path='/Home' element={<Home/>} />
                            <Route path='/Market-Buy' element={<MarketBuy />} />
                            <Route path='/Market-Sell' element={<MarketSell/>} />
                            {/* <Route path='/Play' element={<Market/>} /> */}

                        </Routes>
                    </div>
            </BrowserRouter>
        </SocketContext.Provider>
    </>
 );
  

}