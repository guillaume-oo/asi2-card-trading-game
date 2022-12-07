package com.cpe.springboot.user.controller;

import java.io.IOException;

import javax.jms.Message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;

import org.springframework.stereotype.Component;

import com.cpe.springboot.user.model.UserDTO;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class UserAsync {

    @Autowired
    JmsTemplate jmsTemplate;
    static final String userBusName = "User_BUS";
    private final UserService userService;

    public UserAsync(UserService userService){
        this.userService= userService;
    }
    
	public UserDTO addUserAsync(UserDTO user) {
        try{
            ObjectMapper mapper = new ObjectMapper();
            // Java object to JSON string
            String userString = mapper.writeValueAsString(user);
            //todo envoyer le vrai truc
            System.out.println("[BUSLISTENER] [CHANNEL User_BUS_MNG] SEND MSG uid:" + user.getId());
            jmsTemplate.convertAndSend(userBusName, userString);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        return user;

	}

	@JmsListener(destination = userBusName, containerFactory = "connectionFactory")
    public void receiveMessage(String msgStr, Message message) {
        try{
            ObjectMapper mapper = new ObjectMapper();
            //JSON file to Java object
            UserDTO user = mapper.readValue(msgStr, UserDTO.class);
            System.out.println("[BUSLISTENER] [CHANNEL User_BUS_MNG] RECEIVED String MSG=["+user.toString()+"]");
            userService.addUser(user);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }
}
