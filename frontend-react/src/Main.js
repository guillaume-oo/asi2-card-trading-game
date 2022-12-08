import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./components/Home/Home";
import { Auth } from './components/Auth/Auth';
import { MarketBuy } from './components/Market/MarketBuy';
import { MarketSell } from './components/Market/MarketSell';
import { NavBar } from './components/NavBar/NavBar';
import { useDispatch } from "react-redux/es/exports"
import { cardUpdate } from './core/actions';


export const Main= (props) =>{

    const [v,setV] = useState("");

    const [cards, setCards] = useState("");

    let dispatch=useDispatch()
    
    useEffect( ()=> {
        fetch('http://tp.cpe.fr:8083/cards')
            .then(response => response.json())
            .then((response) => {
                setCards(response)
                
               
                dispatch(cardUpdate(response));
                
                
                //alert(response)
                
            })
            .catch(error => alert(error))
    }, [])

    function submitUserHandler(data){
        
        console.log("user to submit"+data);
    };

    // return JSX components
     return (
        <>

            <BrowserRouter>
                <NavBar/>
                <div className='body-content'>
                    <Routes>
                        <Route path='/' element={<Auth submitUserHandler={submitUserHandler}/>} />
                        <Route path='/Home' element={<Home/>} />
                        <Route path='/Market-Buy' element={<MarketBuy/>} />
                        <Route path='/Market-Sell' element={<MarketSell/>} />
                        {/* <Route path='/Play' element={<Market/>} /> */}

                    </Routes>
                </div>
        </BrowserRouter>
    </>
 );
  

}