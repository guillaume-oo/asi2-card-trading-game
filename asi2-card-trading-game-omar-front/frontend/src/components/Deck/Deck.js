import React, { Component, useEffect, useState } from 'react';
import { ButtonCard } from '../Cards/ButtonCard';

export const Deck = (props) => {
    const display_list = getAllCards();

    function getAllCards() {
        let array_render = [];
        if (props.cards != null) {
            for (var i=0; i< 3; i++){
                array_render.push(

                    <ButtonCard
                        card={props.cards[i]}
                        isCurrentUser = {props.isCurrentUser}
                    />
                );
            }

        }
        return array_render;
    }

    return (
        <div>
            <h4>{props.isCurrentUser? " Choose a Card and Attack !":""}</h4>
            <br></br>
            <div className='ui three column grid'>
                {display_list}
            </div>
        </div>
    );
}