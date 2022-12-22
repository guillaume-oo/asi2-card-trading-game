import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CardShort } from '../Cards/CardShort';
import { useSelector, useDispatch } from "react-redux"
import { Card } from 'semantic-ui-react';
import { gameSelectedCardUpdate,gameOpponentSelectedCardUpdate } from '../../core/actions';

export const Deck = (props) => {
    const display_list = getAllCards();

    function getAllCards() {
        let array_render = [];
        if (props.cards != null) {
            for (var i=0; i< 3; i++){
                array_render.push(
                    <div className='eight wide column'>
                    <div className='ui segment'>
                    <CardShort
                        key={i}
                        card={props.cards[i]}
                    />
                    </div>
                    </div>
                );
            }

        }
        return array_render;
    }

    return (
        <div>
            <div className='ui three column grid'>
                {display_list}
            </div>
        </div>
    );
}