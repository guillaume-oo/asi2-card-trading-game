import React from 'react';
import { LeftSide } from './LeftSide/LeftSide';
import { RightSide } from './RightSide/RightSide';
import { useSelector, useDispatch } from "react-redux"

export const MarketBuy= (props) =>{

    const listcards = useSelector(state=>state.cardReducer.cards)
    const selectedcard = useSelector(state=>state.cardReducer.selectedCard)

    console.log(selectedcard);

    return(
        <div>
            <h1> Market</h1>
            <div className="row">
                <LeftSide cards={listcards}/>
                <RightSide card={selectedcard}/>
            </div>
        </div>
        
    );
}