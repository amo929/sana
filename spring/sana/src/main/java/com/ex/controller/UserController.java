package com.ex.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.User;
import com.ex.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService service;
	
	@RequestMapping(method=RequestMethod.GET,
				produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAll(){
		return service.getAll();
	}
	
	@RequestMapping(value="/register", method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> register(@RequestBody User user){
		User u = service.add(user);
		if(u == null) return new ResponseEntity<User>(HttpStatus.CONFLICT);
		return new ResponseEntity<User>(u, HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> login(@RequestBody User user){
		System.out.println("LOGGING IN");
		User check = service.attemptLogin(user);
		if(check == null) return new ResponseEntity<User>(HttpStatus.CONFLICT);
		return new ResponseEntity<User>(check, HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/update", method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> update(@RequestBody User user){
		System.out.println("UPDATING NOW");
		System.out.println(user.toString());
		User u = service.update(user);
		return new ResponseEntity<User>(u, HttpStatus.ACCEPTED);
	}
}
