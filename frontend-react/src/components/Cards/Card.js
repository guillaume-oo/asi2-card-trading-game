import React from 'react';
import {Visual} from './containers/Visual';
import { Description } from './containers/Description';


export const Card =(props) =>{
    if (props.card != null){
        return (
            <><div>
                name = {props.card.name} id = {props.card.id}
            </div>
            <Visual src={props.card.smallImgUrl} />
            </>
        );
    }
}