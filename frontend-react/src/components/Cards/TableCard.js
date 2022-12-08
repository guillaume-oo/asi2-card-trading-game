import React from 'react';
import { Description } from './containers/Description';


export const TableCard =(props) =>{
    if (props.card != null){
        return (
            <tr>
                <td>
                    name = {props.card.name} id = {props.card.id}
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