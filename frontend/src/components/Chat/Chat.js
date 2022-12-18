import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Chat = (props) => {
    const navigate = useNavigate();

    return (
        <html>
            <head>
                <title>Socket.IO chat</title>
            </head>
            <body>
                <ul id="messages"></ul>
                <form id="form" action="">
                    <input id="input" autocomplete="off" /><button>Send</button>
                </form>
            </body>
        </html>
    );
}