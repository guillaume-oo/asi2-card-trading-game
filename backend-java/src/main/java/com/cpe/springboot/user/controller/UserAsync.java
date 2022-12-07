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
    static final String busName = "User_BUS";
    private final UserService userService;

    public UserAsync(UserService userService){
        this.userService= userService;
    }

    public void sendMsg(String msg) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+msg+"] to Bus=["+msg+"]");
        jmsTemplate.convertAndSend(busName,msg);
    }

    
	@JmsListener(destination = busName, containerFactory = "connectionFactory")
    public void receiveMessage(String stringReceive, Message message) {
		String command = stringReceive.split("/")[0];
		String dataString = stringReceive.split("/")[1];

		System.out.println("COMMAND : ["+command+"]");
		
		if (command.equals("delete")) {
			System.out.println("---Data : "+ dataString);
        	userService.deleteUser(dataString);
        }
		
		else {
			try {
				ObjectMapper mapper = new ObjectMapper();
				UserDTO user = mapper.readValue(dataString, UserDTO.class);
				
		        System.out.println("[BUSLISTENER] RECEIVED String MSG=["+user+"]");
		        
		        //different commands
		        if (command.equals("add")) {
		        	userService.addUser(user);
		        }
		        if (command.equals("update")) {
		        	userService.updateUser(user);
		        }
		        
			} catch (Exception e) {
				e.printStackTrace();
			}
	    }
	}

	public UserDTO addUserAsync(UserDTO user) {
		
		try {
			ObjectMapper mapper = new ObjectMapper();
			String userSend = mapper.writeValueAsString(user);
			String sendMessage = "add/"+userSend;
			sendMsg(sendMessage);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return user;
	}

	public UserDTO updateUser(UserDTO user) {
		try {
			ObjectMapper mapper = new ObjectMapper();
			String userSend = mapper.writeValueAsString(user);
			String sendMessage = "update/"+userSend;
			sendMsg(sendMessage);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return user;
	}

	public void deleteUser(String id) {
        String sendMessage = "delete/"+id;
        sendMsg(sendMessage);
        return;
	}
}
