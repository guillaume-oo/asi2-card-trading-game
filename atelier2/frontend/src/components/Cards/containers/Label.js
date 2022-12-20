import React, { Component } from 'react';

export const Label =(props)=>{
  return (
    <div>
        <h1>{props.title}</h1>
        <h5>name: {props.name} id:{props.id} family:{props.family} affinity:{props.affinity} HP:{props.HP} 
        energy:{props.energy} defence:{props.defence} attack:{props.attack} price:{props.price} </h5>        
    </div>

);
}