import React, { Component } from 'react';
import {Label} from './containers/Label';
import {Visual} from './containers/Visual';
import { description } from './containers/Desciption';
import { useNavigate, } from "react-router-dom";
import {useState , useEffect} from 'react'

export const Cards =(props) =>{
    const navigate = useNavigate();


    if (props.card != null){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="carte_title">Carte : {props.card.id}</h3>
                </div>
                <div className="panel-body">
                    <Label 
                    name = {props.card.name}
                    defence = {props.card.defence}
                    />
                    <Visual 
                        src={props.card.imgUrl} 
                    />
                </div>
            </div>
        );
    }


}