package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserData;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
	@Autowired
	UserRepo loginrepo;
	public UserData create(UserData details)
	{
		return loginrepo.save(details);
	}
	public List<UserData> login() {
		return loginrepo.findAll();
	}
	public  Optional<UserData> loginbyId(String email) {
		return loginrepo.findById(email);
	}
}
