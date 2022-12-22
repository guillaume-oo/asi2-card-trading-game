import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Deck } from '../Deck/Deck';
import { User} from '../User/User';
import { useSelector } from 'react-redux';
import { RightSide } from '../Market/RightSide/RightSide';

export const PlayerBoard= (props) =>{

    return(
        <div class="ui grid">
            <div className='column'>
                <User user={props.user}/>
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
