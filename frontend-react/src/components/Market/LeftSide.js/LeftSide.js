import React, { Component } from 'react';
import { Cards } from '../../Cards/Card';

//const json = require('./sources/robots.json');
//Create a react component with props
export const LeftSide= (props) =>{

    function getAllCards(){
        let array_render=[];
        console.log(props);
        if (props.cards != null){
            for(var i=0;i<props.cards.length;i++){
                array_render.push(
                    <Cards
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
            <div>
               {display_list}
            </div>
      );
}