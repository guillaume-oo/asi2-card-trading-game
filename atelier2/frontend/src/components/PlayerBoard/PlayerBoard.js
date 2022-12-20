import React, { Component, useEffect, useState } from 'react';
import { Deck } from '../Deck/Deck';
import { UserBoard } from '../UserBoard/UserBoard';
import { useSelector } from 'react-redux';
import { RightSide } from '../Market/RightSide/RightSide';

export const PlayerBoard= (props) =>{
    // const selectedcard = useSelector(state=>state.cardReducer.selectedCard)
    // useSelector checker si c'est le current user et passer à RightSide
    let CardSelected1 = useSelector(state=> state.gameReducer.selected_card_u1);
    let CardSelected2 = useSelector(state => state.gameReducer.selected_card_u2);
   

    let cardsToPlay = [];
    for (var i = 0; i < props.user.cardList.length; i++){
        const index = props.user.cardList.findIndex(card => card.id == props.user.cardList[i])
        if(index > -1){
            cardsToPlay.push(props.user.cardList[index])
        }
        console.log("cardsToPlay dans player board: " + cardsToPlay);
    }

    return(
        
        <div class="ui grid">
            <div className='column'>
                <UserBoard userId={props.user.userid} userSurname={props.user.userSurname} actionPoints={props.user.action_pts}></UserBoard>
            </div>
            <div className='eight wide column'>
                <Deck isCurrentUser={props.user.isCurrentUser} cards={props.user.cardList}/>
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