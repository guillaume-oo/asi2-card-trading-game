import React from 'react';
import { useSelector } from "react-redux"

export const User = ()=>{
    const user = useSelector(state=>state.myUserReducer.user)
    console.log("saved user: " + JSON.stringify(user));

    if (user.login == undefined){
        return ( 
            <>
                <h2> no user set </h2>        
            </>
        )
    }
    return ( <>
        <h2> UserName : {user.login}</h2>
        <h2> User Money : {user.account} </h2>
        <h2> User ID : {user.id} </h2>
    </>)
}