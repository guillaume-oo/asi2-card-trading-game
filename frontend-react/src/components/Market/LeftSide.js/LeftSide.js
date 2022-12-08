import React, { Component } from 'react';
import { TableCard } from '../../Cards/TableCard';

//const json = require('./sources/robots.json');
//Create a react component with props
export const LeftSide= (props) =>{

    function getAllCards(){
        let array_render=[];
        console.log(props);
        if (props.cards != null){
            for(var i=0; i<props.cards.length; i++){
                array_render.push(
                    <TableCard
                       key={i}
                       card={props.cards[i]}
                    />
                    );
            }
        }
        return array_render;
    }

    const display_list= getAllCards();

    return(
        <div className="row">
            <div className="col-md-4 col-lg-4">
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
            </div>
        </div>
    );
}