package com.cpe.springboot.msgemitter.comm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cpe.springboot.model.UserDTO;
import com.cpe.springboot.msgemitter.comm.controller.BusService;

@RestController
public class MsgEmitterRestController {

	@Autowired
    BusService busService;

    @RequestMapping(method = RequestMethod.POST, value = "/sendmsg")
    public boolean sendInform(@RequestBody UserDTO msg) {
        busService.sendMsg(msg);
        return true;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/sendmsg/{busName}")
    public boolean sendInform(@RequestBody UserDTO msg, @PathVariable String busName) {
        busService.sendMsg(msg,busName);
        return true;
    }
    
    @RequestMapping(method=RequestMethod.PUT,value="/user/{id}")
	public UserDTO updateUser(@RequestBody UserDTO user,@PathVariable String id) {
    	user.setId(Integer.valueOf(id));
    	busService.sendMsgUpdate(user);
        return user;

	}

}
