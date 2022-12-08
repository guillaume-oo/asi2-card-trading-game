import React from 'react';
import { LeftSide } from './LeftSide/LeftSide';
import { RightSide } from './RightSide/RightSide';
import { useSelector, useDispatch } from "react-redux"

export const MarketSell= (props) =>{

    const listcards = useSelector(state=>state.cardReducer.cards)
    const selectedcard = useSelector(state=>state.cardReducer.selectedCard)

    return(
        <div>
            <div className="row">
                <div className="left-66">
                    <LeftSide cards={listcards} action="sell"/>
                </div>
                <div className="right-33">
                    <RightSide card={selectedcard}/>
                </div>
            </div>
        </div>
    );
}