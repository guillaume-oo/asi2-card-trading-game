import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GameZone } from '../GameZone/GameZone';
import { Grid, Segment, Menu } from 'semantic-ui-react'
import { Chat } from '../Chat/Chat';

export const Play = (props) => {
    const navigate = useNavigate();

    return (
        <div className="row">
                <div className="left-20">
                    <Chat />
                </div>
                <div className="right-80">
                    <GameZone />
                </div>
            </div>



    );
}