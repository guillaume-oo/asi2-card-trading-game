import React from 'react';
import { Visual } from './containers/Visual';
import { Description } from './containers/Description';
import { selectedCardUpdate } from '../../core/actions';
import { useSelector, useDispatch } from "react-redux"

import { gameSelectedCardUpdate,gameOpponentSelectedCardUpdate } from '../../core/actions';

export const CardShort = (props) => {

    const dispatch=useDispatch();

    function handleOnCardSelected(card){
        console.log("handleOnCardSelected card: "+ card)
        if(props.isCurrentUser){
            dispatch(gameSelectedCardUpdate(card));
        }
        if(!props.isCurrentUser){
            dispatch(gameOpponentSelectedCardUpdate(card));
        }
    }


    if (props.card != null) {
        return (
            <tr onClick={() => handleOnCardSelected(props.card)}>
                <td>{props.card.name}</td>
                <td aria-label='hp'> {props.card.hp} </td>
                <td aria-label='energy'> {props.card.energy} </td>
                <td aria-label='id'> {props.card.id} </td>
                <br></br>
                <Visual src={props.card.smallImgUrl} />
            </tr>
        );
    }
}