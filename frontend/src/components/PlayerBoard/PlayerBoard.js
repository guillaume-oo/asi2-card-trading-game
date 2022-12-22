import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Deck } from '../Deck/Deck';
import { UserBoard } from '../UserBoard/UserBoard';
import { useSelector } from 'react-redux';
import { RightSide } from '../Market/RightSide/RightSide';

export const PlayerBoard= (props) =>{

    console.log(props.user);

    // let cardsToPlay = [];
    // for(var i = 0; i< props.user.card_list.length; i++){
    //     const index = props.user.card_list.findIndex(card => card.id == props.user.card_list[i])
    //     if(index > -1){
    //         cardsToPlay.push(props.user.card_list[index])
    //     }
    //     console.log("cardsToPlay dans player board: " + cardsToPlay);
    // }

    return(
        
        <div class="ui grid">
            <div className='column'>
                <UserBoard userId={props.user.userid} actionPoints={1000}></UserBoard>
            </div>
            <div className='eight wide column'>
               <Deck isCurrentUser={props.user.id == props.currentlyPlayingUserId} cards={props.user.card_list}/>
            </div>
            <div className='four wide column'>
                <RightSide card={props.selectedCard}/>
            </div>
        </div>
    );
}

/*



export const PlayerBoard= (props) =>{
    const navigate = useNavigate();
    const listcards = useSelector(state=>state.cardReducer.cards);
    const user = useSelector(state=>state.userReducer.user);
    const UserCards = user.cardList;
    let cardsToPlay = [];

    for(var i = 0; i< UserCards.length; i++){
        const index = listcards.findIndex(card => card.id == UserCards[i])
        if(index > -1){
            cardsToPlay.push(listcards[index])
        }
        console.log("cardsToPlay dans player board: " + cardsToPlay);
    }

    return(
        
        <div class="ui grid">
            <div className='column'>
                <UserBoard ></UserBoard>
            </div>
            <div className='eight wide column'>
               <Deck cards={cardsToPlay}/>
            </div>
            <div className='four wide column'>
            <RightSide card={selectedcard}/>
            </div>
        </div>
    );
}

*/