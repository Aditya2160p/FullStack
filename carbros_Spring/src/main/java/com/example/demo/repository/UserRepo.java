package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.UserData;

public interface UserRepo extends JpaRepository<UserData,String> {
	public UserData findByEmail(String email);
}
