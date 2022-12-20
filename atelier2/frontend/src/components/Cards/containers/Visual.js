import React, { Component } from 'react';
export const Visual=(props) =>{

    let render_visual;
            render_visual=(
                <img 
                    className='imgCard' 
                    src={props.src}  
                />
                );  

    return(
        <div className="thumbnail">
                {render_visual}
        </div>   
    );
}