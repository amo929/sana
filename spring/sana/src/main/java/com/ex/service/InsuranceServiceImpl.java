package com.ex.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.Insurance;
import com.ex.repository.InsuranceRepo;

@Service("insuranceService")
@Transactional
public class InsuranceServiceImpl implements InsuranceService {

	@Autowired
	InsuranceRepo irepo;
	
	@Override
	public List<Insurance> getAll(){
		return irepo.findAll();
	}
	
}
