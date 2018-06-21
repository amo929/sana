package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.beans.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	public User findByEmail(String email);
	
}
