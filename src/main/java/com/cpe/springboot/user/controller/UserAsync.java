package com.cpe.springboot.user.controller;

import javax.jms.Message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import com.cpe.springboot.user.model.UserDTO;

@Component
public class UserAsync {

    @Autowired
    JmsTemplate jmsTemplate;
    
    //private final UserService userService;
    
	public void adduserAsync(UserDTO user) {
		//todo envoyer le vrai truc
		String msg = "ajout user";
		String busName = "A";
		System.out.println("----------- SEND MSG uid:"+user.getId());
		jmsTemplate.convertAndSend(busName,msg);
	}

	@JmsListener(destination = "A", containerFactory = "connectionFactory")
    public void receiveMessage(String msgStr, Message message) {

            System.out.println("[BUSLISTENER] [CHANNEL RESULT_BUS_MNG] RECEIVED String MSG=["+msgStr+"]");
            //todo faire des if pour savoir la methode
            
            //add methode

            //userService.addUser(userDto);
    }


    
    
}
