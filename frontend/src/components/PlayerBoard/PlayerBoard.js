import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Deck } from '../Deck/Deck';
import { User} from '../User/User';
import { useSelector } from 'react-redux';
import { RightSide } from '../Market/RightSide/RightSide';

export const PlayerBoard= (props) =>{
    const listcards = useSelector(state=>state.cardReducer.cards);
    let cards = [];
    let userCards = [];
    
    if (props.user != undefined && props.user.cardList)
    {
        cards = props.user.cardList;
        for(var i = 0; i< cards.length; i++){
            const index = listcards.findIndex(card => card.id == cards[i])
            if(index > -1){
                userCards.push(listcards[index])
            }
        }
    }


    return(
        <div class="ui grid">
            <div className='column'>
                <User user={props.user}/>
            </div>
            <div className='eight wide column'>
               <Deck isCurrentUser={props.user.id == props.currentlyPlayingUserId} cards={userCards}/>
            </div>
            <div className='four wide column'>
                <RightSide card={props.selectedCard}/>
            </div>
        </div>
    );
}
