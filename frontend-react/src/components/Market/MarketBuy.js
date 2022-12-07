import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const MarketBuy= (props) =>{
    const navigate = useNavigate();

    const [cards, setCards] = useState("");

    useEffect( ()=> {
        fetch('/cards_to_sell')
            .then(response => response.json())
            .then((response) => {
                setCards(response)
                alert(response)
            })
            .catch(error => alert(error))
    }, [])

    return(
        <div>
            <h1> Market</h1>
        </div>
    );
}