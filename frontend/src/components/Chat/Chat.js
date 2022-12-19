import React, { Component, useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import {SocketContext} from '../../context/socket';
import { chatRoomMessagesUpdate } from '../../core/actions';

export const Chat = (props) => {
    let dispatch = useDispatch();
    const chatRoomId = useSelector(state=>state.chatReducer.chatRoomId);
    const chatMessages = useSelector(state=>state.chatReducer.chatMessages);

    const handleSendMessage = (event) => {
        event.preventDefault();
        console.log("sending message: " + event.currentTarget.input.value);

        fetch('http://localhost:9999/message/'+ chatRoomId, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(event.currentTarget.input.value)
        })
        .catch(error => console.log(error));
    }

    const socket = useContext(SocketContext);
    socket.on("new-message-received", data => {
        console.log("new messages recieved: " + data);
        dispatch(chatRoomMessagesUpdate(chatMessages.push(data)));
    })

    socket.on("message-correctly-sent", data => {
        console.log("message correctly sent: " + data);
        dispatch(chatRoomMessagesUpdate(chatMessages.push(data)));
    })

    return (
        <div>
            <ul className="message-list">                 
                {chatMessages.map(message => {
                return (
                    <li key={message.id}>
                        <div>
                            {message.senderId}
                        </div>
                        <div>
                            {message.text}
                        </div>
                    </li>
                )
            })}
            </ul>
            <form id="form" onSubmit={handleSendMessage}>
                <input id="input"
                    autoComplete="off"
                    placeholder="Release the rage"
                    type="text" />
                
                <button>Send</button> 
            </form>
        </div>
    );
}