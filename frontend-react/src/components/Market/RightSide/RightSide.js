import React from 'react';
import {Card} from '../../Cards/Card';


export const RightSide =(props) =>{

    if (props.card != null){
        return (
            <div className="col-md-4 col-lg-4">
                <Card card={props.card} />
            </div>
        );
    }
}