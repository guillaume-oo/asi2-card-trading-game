import React from 'react';
import {Visual} from './containers/Visual';
import { Description } from './containers/Description';
import { useDispatch } from "react-redux/es/exports";
import { selectedCardUpdate } from '../../core/actions';

export const Card =(props) =>{
    if (props.card != null){
        return (
            <div class="ui special cards">
                <div class="card">
                    <div class="content">
                            <div class="ui grid">
                                <div class="three column row">
                                    <div class="column">
                                        <i class="heart outline icon"></i><span id="cardHPId">{props.card.hp}</span> 
                                    </div>
                                    <div class="column">
                                            <h5>{props.card.name}</h5>
                                    </div>
                                    <div class="column">
                                        <span id="energyId">10</span> <i class="lightning icon"></i>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="image imageCard">
                        <Visual src={props.card.smallImgUrl} />
                    </div>
                    <div class="content">
                        <div class="ui form tiny">
                            <div class="field">
                                <label id="cardNameId"></label>
                                <textarea id="cardDescriptionId" class="overflowHiden" readonly="" rows="5">{props.card.description}
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <i class="heart outline icon"></i><span id="cardHPId">{props.card.hp}</span> 
                        <div class="right floated ">
                                <span id="cardEnergyId">{props.card.energy}</span>
                            <i class="lightning icon"></i>
                             
                        </div>
                    </div>
                    <div class="content">
                        <span class="right floated">
                                <span id="cardAttackId">{props.card.attack}</span> 
                            <i class=" wizard icon"></i>
                        </span>
                        <i class="protect icon"></i>
                        <span id="cardDefenceId">{props.card.defence}</span> 
                    </div>
                    <div class="ui bottom attached button">
                        <i class="money icon"></i>
                        Actual Value <span id="cardPriceId">{props.card.price}$</span>
                    </div>

                </div>
            </div>
        );
    }
}