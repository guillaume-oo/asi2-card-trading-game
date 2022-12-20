package com.cpe.springboot.msgemitter.comm.controller;
import com.cpe.springboot.model.UserDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import javax.jms.Message;
import javax.jms.TextMessage;

@Service
public class BusService {

	@Autowired
    JmsTemplate jmsTemplate;
    static final String busName = "User_BUS";

    public void sendMsg(UserDTO user) {
    	System.out.println("[BUSSERVICE] SEND String MSG=["+user+"] to Bus=["+user+"]");
        
        try {
			ObjectMapper mapper = new ObjectMapper();
			String userSend = mapper.writeValueAsString(user);
			String sendMessage = "add/"+userSend;
			jmsTemplate.convertAndSend(busName,sendMessage);
			
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
        return;
    }

    public void sendMsg(UserDTO user, String busName) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+user+"] to Bus=["+user+"]");
        
        try {
			ObjectMapper mapper = new ObjectMapper();
			String userSend = mapper.writeValueAsString(user);
			String sendMessage = "add/"+userSend;
			jmsTemplate.convertAndSend(busName,sendMessage);
			
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
        return;
    }

	public void sendMsgUpdate(UserDTO user) {
		try {
			ObjectMapper mapper = new ObjectMapper();
			String userSend = mapper.writeValueAsString(user);
			String sendMessage = "update/"+userSend;
			
			System.out.println("[BUSSERVICE] SEND String MSG=["+sendMessage+"] to Bus=["+sendMessage+"]");
	        jmsTemplate.convertAndSend(busName,sendMessage);
			
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return;
	}
}
