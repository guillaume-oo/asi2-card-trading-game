import React from 'react';
import { TableCard } from '../../Cards/TableCard';

export const LeftSide= (props) =>{

    function getAllCards(){
        let array_render=[];
        if (props.cards != null){
            for(var i=0; i<props.cards.length; i++){
                array_render.push(
                    <TableCard
                       key={i}
                       card={props.cards[i]}
                       action={props.action}
                    />
                    );
            }
        }
        return array_render;
    }

    const display_list= getAllCards();

    return(
                <table class="ui selectable celled table" id="cardListId">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Family</th>
                            <th>HP</th>
                            <th>Energy</th>
                            <th>Defence</th>
                            <th>Attack</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {display_list}
                    </tbody>
                </table>
        
    );
}