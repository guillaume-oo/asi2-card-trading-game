import React from 'react';
import { Description } from './containers/Description';
import { useDispatch } from "react-redux/es/exports";
import { selectedCardUpdate } from '../../core/actions';
import { useSelector } from "react-redux"


export const TableCard =(props) =>{
    //Connect to the store
    const dispatch = useDispatch();

    function handleOnCardSelected(card){
        dispatch(selectedCardUpdate(card));   
    }

    const user = useSelector(state=>state.myUserReducer.user);
    const UserId = user.id;
    

    function ActionCard(card){
        let CardId = parseInt(props.card.id);

        console.log("TEST CARD ID: " + CardId + " FOR USER: " + UserId)
        console.log("TEST CARD ACTION TYPE: " + props.action)
            console.log("UserId type: " + typeof(UserId) + " cardId type: " + typeof(CardId))
            fetch('http://localhost:8083/store/'+props.action,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                { "user_id": UserId, "card_id": CardId}
                )
        })
        .then(response => response.text())
        .then((response) => {
            if (response == true){throw new Error('Transaction Réussie !');}
            if (response == false){throw new Error('Transaction Impossible !');}
        })

        
    }


    const actionIcon = props.action== "buy" ? <i class="shop icon"></i> : <i class="money icon"></i>;

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
                        <div class="hidden content">{props.action}</div>
                        <button type='button' onClick={ActionCard}>{actionIcon}</button>
                    </div>
                </td>
            </tr>
        );
    }
}