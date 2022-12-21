import React, { Component, useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import {SocketContext} from '../../context/socket';
import { chatRoomMessagesUpdate, chatRoomIDUpdate } from '../../core/actions';

export const Chat = (props) => {
    let dispatch = useDispatch();
    const chatRoomId = useSelector(state=>state.chatReducer.chatRoomId);
    const chatMessages = useSelector(state=>state.chatReducer.chatMessages);
    const user = useSelector(state=>state.userReducer.user);
    const socket = useContext(SocketContext);

    const handleSendMessage = (event) => {
        event.preventDefault();
        console.log("sending message: " + event.currentTarget.input.value);

        fetch('http://localhost:9999/chat/message/'+ chatRoomId + "/" + user.id, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({message : event.currentTarget.input.value})
        })
        .catch(error => console.log(error));
    }

    function isMessageAlreadyRecieved(message){
        return chatMessages.some(item => message.id === item.id);
    }

    socket.on("new-message-received", data => {
        if (!isMessageAlreadyRecieved(data)) {
            console.log("new messages recieved: " + data);
            dispatch(chatRoomMessagesUpdate(data));
        }
    })

    socket.on("chat-room-created", data => {
        console.log("room creer id: " + data);
        dispatch(chatRoomIDUpdate(data));
    })

    // socket.on("message-correctly-sent", data => {
    //     console.log("message correctly sent: " + data);
    //     dispatch(chatRoomMessagesUpdate(chatMessages.push(data)));
    // })

    return (
        <div>
            <ul className="message-list">                 
                {chatMessages.filter(function(item, pos){
                        return chatMessages.indexOf(item)== pos; 
                    }).map((message) => {
                    return (
                        <li key={message.id}>
                            <div>
                                {message.id}
                            </div>
                            <div>
                                {message.authorId}
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