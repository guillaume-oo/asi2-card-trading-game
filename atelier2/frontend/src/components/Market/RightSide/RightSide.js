import React from 'react';
import {Card} from '../../Cards/Card';


export const RightSide =(props) =>{

    if (props.card != null){
        return (
            <Card card={props.card} />
        );
    }
}