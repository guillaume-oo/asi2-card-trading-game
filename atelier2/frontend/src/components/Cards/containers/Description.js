import React, { Component } from 'react';

export const Description =(props)=>{
  return (
    <div>
        <h1>{props.title}</h1>
        <h5>{props.description} </h5>        
    </div>

);
}