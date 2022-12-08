import React, { Component } from 'react';
import {Label} from './containers/Label';
import {Visual} from './containers/Visual';
import { Description } from './containers/Description';
import { useNavigate, } from "react-router-dom";
import {useState , useEffect} from 'react'

export const Cards =(props) =>{
    const navigate = useNavigate();


    if (props.card != null){
        return (
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
                        <tr>
                            <td>
                            <Visual src={props.card.smallImgUrl} /> <span> name = {props.card.name} id = {props.card.id}</span>
                            </td>
                            <td>< Description description = {props.card.description}/></td>
                            <td>family = {props.card.family}</td>
                            <td> hp = {props.card.hp}</td>
                            <td> energy = {props.card.energy}</td>
                            <td> defence = {props.card.defence}</td>
                            <td> attack = {props.card.attack}</td>
                            <td> price = {props.card.price}$</td>
                            <td>
                                <div class="ui vertical animated button" tabindex="0">
                                    <div class="hidden content">Sell</div>
                                    <div class="visible content">
                                        <i class="shop icon"></i>
                                    </div>
                                </div>
                                
                            </td>
                        </tr>
                        </tbody>
                        </table>
        </div>
        </div>


            
        );
    }


}