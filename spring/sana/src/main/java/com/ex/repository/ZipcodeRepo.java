package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.beans.User;
import com.ex.beans.Zipcode;

public interface ZipcodeRepo extends JpaRepository<Zipcode, Integer>{

	public Zipcode findByZipcode(String zip);
}
