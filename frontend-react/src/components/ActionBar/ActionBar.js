import React, { Component, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { User } from '../../components/User/User';

export const ActionBar= (props) =>{
    const user=useSelector(state=>state.myUserReducer.user);


    return(
        <div>
            <h1>Action </h1>
        </div>
    );
}