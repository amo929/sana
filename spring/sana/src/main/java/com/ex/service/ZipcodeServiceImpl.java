package com.ex.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ex.beans.Zipcode;
import com.ex.repository.ZipcodeRepo;

public class ZipcodeServiceImpl implements ZipcodeService{

	@Autowired
	private ZipcodeRepo zRepo;
	
	@Override
	public List<Zipcode> getAll() {
		// TODO Auto-generated method stub
		return zRepo.findAll();
	}

	@Override
	public Zipcode findByZipcode(String zip) {
		return zRepo.findByZipcode(zip);
	}

}
