import React, { Component } from 'react';

export const description =(props)=>{
  return (
    <div>
        <h1>{props.title}</h1>
        <h5>description: {props.description} </h5>        
    </div>

);
}