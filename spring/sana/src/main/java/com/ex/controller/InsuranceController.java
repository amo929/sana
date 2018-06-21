package com.ex.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.Insurance;
import com.ex.service.InsuranceService;

@RestController
public class InsuranceController {
	
	@Autowired
	InsuranceService service;
	
	@RequestMapping(value="/insurance", method=RequestMethod.GET,
				produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Insurance> getAll() {
		return service.getAll();
	}
}
