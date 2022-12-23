import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Deck } from '../Deck/Deck';
import { User} from '../User/User';
import { useSelector } from 'react-redux';
import { CombatCard } from '../Cards/CombatCard';

export const PlayerBoard= (props) =>{
    const listcards = useSelector(state=>state.cardReducer.cards);
    const self = useSelector(state=>state.userReducer.user);
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
         <div className='twelve wide column'>
               <h4 >{props.user.login}</h4>
               <Deck isCurrentUser={props.user.id == self.id } cards={userCards}/>
            </div>
            <div className='four wide column'>
                <h4 >Selected card:</h4>
                <CombatCard card={props.selectedCard}/>
            </div>
        </div>
    );
}
