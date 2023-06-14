package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserData;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	@Autowired
	UserService uservice;
	@PostMapping("/signup")
	public ResponseEntity<UserData> createlogin(@RequestBody UserData login) {
		
		System.out.println(login);
		UserData createdlogins = uservice.create(login);
		System.out.print(login);
		return ResponseEntity.ok(createdlogins);
	}
 
 @PostMapping("/login")
 public String login(@RequestBody UserData web_data)
 {
	 
	 UserData db_data= uservice.loginbyId(web_data.getEmail()).orElse(null);
	 if(db_data==null)
		 return "invalid Email";
	 String web_password=web_data.getPassword();
	 String db_password=db_data.getPassword();
	 if(db_password.equals(web_password))
		 return "correct";
	return "invalid password";
 }

}
