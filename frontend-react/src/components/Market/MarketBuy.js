import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Card } from 'semantic-ui-react';
import { Cards } from '../Cards/Card';
import { LeftSide } from './LeftSide.js/LeftSide';
import { useSelector } from "react-redux/es/exports"

export const MarketBuy= (props) =>{
    const navigate = useNavigate();

    //const [cards, setCards] = useState("");

    const Listcards = useSelector(state=>state.cardReducer.cards)
    console.log(Listcards)

    /*useEffect( ()=> {
        fetch('/cards_to_sell')
            .then(response => response.json())
            .then((response) => {
                setCards(response)
                alert(response)
            })
            .catch(error => alert(error))
    }, [])*/

    return(
        <div>
            <h1> Market</h1>
            <LeftSide cards={Listcards}/>
        </div>
        
    );
}