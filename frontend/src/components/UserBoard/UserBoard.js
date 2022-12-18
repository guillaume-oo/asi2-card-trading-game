import React, { Component, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { User } from '../../components/User/User';

export const UserBoard= (props) =>{
    const navigate = useNavigate();

    return(
        <div>
            <img className='img-profil' src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png"></img>
            <br></br>
            {props.userId}
            <br></br>
            {props.actionPoints}
        </div>
    );
}