import React from 'react';
import { LeftSide } from './LeftSide/LeftSide';
import { RightSide } from './RightSide/RightSide';
import { useSelector, useDispatch } from "react-redux"
import { wait } from '@testing-library/user-event/dist/utils';

export const MarketSell= (props) =>{

    const listcards = useSelector(state=>state.cardReducer.cards);
    const selectedcard = useSelector(state=>state.cardReducer.selectedCard);
    const user = useSelector(state=>state.myUserReducer.user);
    const UserCards = user.cardList;
    let cardToSell = [];
    
    for(var i = 0; i< UserCards.length; i++){
        const index = listcards.findIndex(card => card.id == UserCards[i])
        if(index > -1){
            cardToSell.push(listcards[index])
        }
        
    }


        return(
            <div>
                <div className="row">
                    <div className="left-66">
                        <LeftSide cards={cardToSell} action="sell"/>
                    </div>
                    <div className="right-33">
                        <RightSide card={selectedcard}/>
                    </div>
                </div>
            </div>
        );
    
}