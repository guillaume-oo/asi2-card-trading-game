import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CardShort } from '../Cards/CardShort';
import { useSelector, useDispatch } from "react-redux"
import { Card } from 'semantic-ui-react';
import { gameSelectedCardUpdate,gameOpponentSelectedCardUpdate } from '../../core/actions';

export const Deck = (props) => {
    const navigate = useNavigate();
    // const dispatch=useDispatch();

    // function handleOnClick(card){
    //     console.log("handleOnClick card: "+ card)
    //     if(props.isCurrentUser){
    //         dispatch(gameSelectedCardUpdate(card));
    //     }else{
    //         dispatch(gameOpponentSelectedCardUpdate(card));
    //     }
    // }


    function getAllCards() {
        let array_render = [];
        if (props.cards != null) {
            if (props.cards.length >= 3) {
                const listIndex=[];
                for (var i = 0; i < 3; i++) {
                    let randIndex = Math.floor(Math.random() * props.cards.length);

                    while (listIndex.includes(randIndex) ){       //pour ne pas avoir de doublons
                        randIndex = Math.floor(Math.random() * props.cards.length);
                    }

                    listIndex.push(randIndex);
                    console.log("randindex: " + randIndex)
                    array_render.push(
                        <div className='eight wide column'>
                        <div className='ui segment'>
                        <CardShort
                            key={randIndex}
                            card={props.cards[randIndex]}
                            isCurrentUser = {props.isCurrentUser}
                        />
                        </div>
                        </div>
                    );
                }
            }
            else{   //si pas assez de cartes ( 3 minimum )
                for (var i = 0; i < props.cards.length; i++) {
                    array_render.push(
                        <div className='four column'>
                        <div className='ui segment'>
                        <CardShort
                            key={i}
                            card={props.cards[i]}
                            isCurrentUser = {props.isCurrentUser}
                        />
                        </div>
                        </div>
                    );
                } 
            }
        }
        return array_render;
    }

    const display_list = getAllCards();

    return (
        <div>
            <h1> Deck</h1>
            <div className='ui three column grid'>
                {display_list}
            </div>
        </div>
    );
}