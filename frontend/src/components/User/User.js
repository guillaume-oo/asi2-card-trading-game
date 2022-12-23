import React from 'react';

export const User = (props)=>{
    const user = props.user;

    if (user != undefined){
        return ( 
            <div className="userCard">
                <div className="userCard--top">
                    <div className="userCard--fullname">  {user.surName + " " + user.lastName}</div>
                </div>
                <div className="userCard--bottom">
                    <div className="userCard--pseudo"> aka.: {user.login}</div>
                    <div className="userCard--money"> User Money : {user.account} </div>
                </div>
            </div>
        )
    }

}