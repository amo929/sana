package com.ex.service;

import java.util.List;

import com.ex.beans.Zipcode;

public interface ZipcodeService {
	List<Zipcode> getAll();
	Zipcode findByZipcode(String zip);
}
