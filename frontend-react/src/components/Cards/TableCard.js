import React from 'react';
import { Description } from './containers/Description';
import { useDispatch } from "react-redux/es/exports";
import { selectedCardUpdate } from '../../core/actions';


export const TableCard =(props) =>{
    //Connect to the store
    const dispatch = useDispatch();

    function handleOnCardSelected(card){
        dispatch(selectedCardUpdate(card));   
    }

    if (props.card != null){
        return (
            <tr onClick={() => handleOnCardSelected(props.card)}>
                <td>
                    {props.card.name} 
                </td>
                <td>
                    <Description description = {props.card.description}/>
                </td>
                <td aria-label='family'> {props.card.family} </td>
                <td aria-label='hp'> {props.card.hp} </td>
                <td aria-label='energy'> {props.card.energy} </td>
                <td aria-label='defence'> {props.card.defence} </td>
                <td aria-label='attack'> {props.card.attack} </td>
                <td aria-label='price'> {props.card.price}$ </td>
                <td>
                    <div class="ui vertical animated button" tabindex="0">
                        <div class="hidden content">Sell</div>
                        <div class="visible content">
                            <i class="shop icon"></i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}