package com.ex.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.Insurance;
import com.ex.beans.User;
import com.ex.beans.Zipcode;
import com.ex.repository.InsuranceRepo;
import com.ex.repository.UserRepo;
import com.ex.repository.ZipcodeRepo;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo urepo;
	
	@Autowired
	private InsuranceRepo irepo;
	
	@Autowired
	private ZipcodeRepo zrepo;
	
	
	@Override
	public List<User> getAll() {
		return urepo.findAll();
	}

	@Override
	public User findById(int id) {
		return urepo.findOne(id);
	}

	@Override
	public User findByEmail(String email) {
		return urepo.findByEmail(email);
	}

	@Override
	public User add(User u) {
		if (urepo.findByEmail(u.getEmail()) != null) {
			return null;
		} 
		return urepo.save(u);
	}

	@Override
	public User update(User u) {
		User oldUser = urepo.findOne(u.getId());
		if(oldUser == null) return null;
		else{
			oldUser.setId(u.getId());
			oldUser.setFirstname(u.getFirstname());
			oldUser.setLastname(u.getLastname());	
			oldUser.setEmail(u.getEmail());
			oldUser.setPassword(u.getPassword());
			oldUser.setZipcode(u.getZipcode());
			oldUser.setSpouse(u.getSpouse());
			oldUser.setChildren(u.getChildren());
			oldUser.setAge(u.getAge());
			oldUser.setGender(u.getGender());
			oldUser.setSmoker(u.getSmoker());
			oldUser.setHbp(u.getHbp());
			oldUser.setDiabetes(u.getDiabetes());
			oldUser.setSurgery(u.getSurgery());
			oldUser.setAllergy(u.getAllergy());
			oldUser.setPlan_mult(u.getPlan_mult());
			oldUser.setPlan_bonus(u.getPlan_bonus());
			oldUser.setQuote_total(calculateQuote(oldUser));
		}
		System.out.println(oldUser.toString());
		return oldUser;
	}

	@Override
	public User attemptLogin(User user) {
		
		User check = urepo.findByEmail(user.getEmail());
		System.out.println("=================================");
		System.out.println("Given User " + user.getEmail() + " = " + user.getPassword());
		System.out.println("DB User " + user.getEmail() + " = " + user.getPassword());
		System.out.println("=================================");
		if(check != null && check.getPassword().equals(user.getPassword())) {
			return check;
		}
		return null;
	}
	
	public double calculateQuote(User user)
	{
		System.out.println("Calculating Quote...");
		if(user.getPlan_mult() == 0)
		{
			System.out.println("Returning null value");
			return 0;
		}
		Insurance ins = irepo.findById(1);

		double quote = 0;
		
		switch(user.getAge().toLowerCase()) {
		case "age_0_17":
			quote += ins.getAge_0_17();
			break;
		case "age_18_20":
			quote += ins.getAge_18_20();
			break;
		case "age_21_40":
			quote += ins.getAge_21_40();
			break;
		case "age_40_plus":
			quote += ins.getAge_40_plus();
			break;
		}
		
		switch(user.getGender().toLowerCase()) {
		case "male":
			quote += ins.getGender_male();
			break;
		case "female":
			quote += ins.getGender_female();
			break;
		}
		
		switch(zrepo.findByZipcode(user.getZipcode()).getZiptype().toLowerCase()) {
		case "city":
			quote += ins.getArea_city();
			break;
		case "suburban":
			quote += ins.getArea_suburban();
			break;
		case "rural":
			quote += ins.getArea_rural();
			break;
		}
		
		quote += user.getAllergy() * ins.getAllergy();
		quote += user.getChildren() * ins.getPer_child();
		quote += user.getDiabetes() * ins.getDiabetic();
		quote += user.getHbp() * ins.getHbp();
		quote += user.getSmoker() * ins.getSmoker();
		quote += user.getSpouse() * ins.getSpouse();
		quote += user.getSurgery() * ins.getSurgery();
		
		quote *= (user.getPlan_bonus() + user.getPlan_mult());
		
		System.out.println("Quote = " + quote);
		return quote;
	}
}
