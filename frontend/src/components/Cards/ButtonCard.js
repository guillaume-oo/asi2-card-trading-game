import React from 'react';
import { Visual } from './containers/Visual';
import { Description } from './containers/Description';
import { selectedCardUpdate } from '../../core/actions';
import { useSelector, useDispatch } from "react-redux"

import { gameSelectedCardUpdate } from '../../core/actions';

export const ButtonCard = (props) => {
    const dispatch=useDispatch();

    function handleOnCardSelected(){
        console.log(props.isCurrentUser)
        if (props.isCurrentUser)
        {
            console.log("should set slected card");
            dispatch(gameSelectedCardUpdate(props.card));
            // do post request to alert other user
        }
    }

    if (props.card != null) {
        return (
            <div class="ui special cards" type='button' onClick={handleOnCardSelected}>
                <div class="card small-card">
                    <div class="image imageCard">
                        <Visual src={props.card.smallImgUrl} />
                    </div>
                    <div class="content">
                        <i class="heart outline icon"></i><span id="cardHPId">{props.card.hp}</span> 
                        <div class="right floated ">
                            <span id="cardEnergyId">{props.card.energy}</span>
                            <i class="lightning icon"></i>
                        </div>
                    </div>
                    <div class="content">
                        <span id="cardAttackId">{props.card.attack}</span> 
                        <i class=" wizard icon"></i>
                        <div class="right floated ">
                            <i class="protect icon"></i>
                            <span id="cardDefenceId">{props.card.defence}</span> 
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}