package com.ex.service;

import java.util.List;

import com.ex.beans.User;

public interface UserService {
	List<User> getAll();
	User findById(int id);
	User findByEmail(String email);
	User add(User u);
	User update(User u);
	User attemptLogin(User user);
}
