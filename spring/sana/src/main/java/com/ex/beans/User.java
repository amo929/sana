package com.ex.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="users")
public class User {
	
	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", passcode=" + password + ", zipcode=" + zipcode + ", spouse=" + spouse + ", children=" + children
				+ ", age=" + age + ", gender=" + gender + ", smoker=" + smoker + ", hbp=" + hbp + ", diabetes="
				+ diabetes + ", surgery=" + surgery + ", allergy=" + allergy + ", plan_mult=" + plan_mult
				+ ", plan_bonus=" + plan_bonus + ", quote_total=" + quote_total + "]";
	}

	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="user")
	@SequenceGenerator(name="user", sequenceName="user_seq", allocationSize=1)
	private int id;
	
	@Column(name="firstname")
	private String firstname;
	
	@Column(name="lastname")
	private String lastname;
	
	@Column(name="email")
	private String email;
	
	@Column(name="passcode")
	private String password;
	
	@Column(name="zipcode")
	private String zipcode;
	
	@Column(name="spouse")
	private int spouse;
	
	@Column(name="children")
	private int children;
	
	@Column(name="age")
	private String age;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="smoker")
	private int smoker;
	
	@Column(name="hbp")
	private int hbp;
	
	@Column(name="diabetes")
	private int diabetes;
	
	@Column(name="surgery")
	private int surgery;
	
	@Column(name="allergies")
	private int allergy;
	
	@Column(name="plan_mult")
	private double plan_mult;
	
	@Column(name="plan_bonus")
	private double plan_bonus;
	
	@Column(name="quote_total")
	private double quote_total;
	
	public User() {super();}

	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	public User(String firstname, String lastname, String email, String password) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
	}

	public User(String firstname, String lastname, String email, String password, String zipcode, int spouse,
			int children, String age, String gender, int smoker, int hbp, int diabetes, int surgery, int allergies,
			double plan_mult, double plan_bonus, double quote_total) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.zipcode = zipcode;
		this.spouse = spouse;
		this.children = children;
		this.age = age;
		this.gender = gender;
		this.smoker = smoker;
		this.hbp = hbp;
		this.diabetes = diabetes;
		this.surgery = surgery;
		this.allergy = allergy;
		this.plan_mult = plan_mult;
		this.plan_bonus = plan_bonus;
		this.quote_total = quote_total;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public int getSpouse() {
		return spouse;
	}

	public void setSpouse(int spouse) {
		this.spouse = spouse;
	}

	public int getChildren() {
		return children;
	}

	public void setChildren(int children) {
		this.children = children;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getSmoker() {
		return smoker;
	}

	public void setSmoker(int smoker) {
		this.smoker = smoker;
	}

	public int getHbp() {
		return hbp;
	}

	public void setHbp(int hbp) {
		this.hbp = hbp;
	}

	public int getDiabetes() {
		return diabetes;
	}

	public void setDiabetes(int diabetes) {
		this.diabetes = diabetes;
	}

	public int getSurgery() {
		return surgery;
	}

	public void setSurgery(int surgery) {
		this.surgery = surgery;
	}

	public int getAllergy() {
		return allergy;
	}

	public void setAllergy(int allergies) {
		this.allergy = allergies;
	}

	public double getPlan_mult() {
		return plan_mult;
	}

	public void setPlan_mult(double plan_mult) {
		this.plan_mult = plan_mult;
	}

	public double getPlan_bonus() {
		return plan_bonus;
	}

	public void setPlan_bonus(double plan_bonus) {
		this.plan_bonus = plan_bonus;
	}

	public double getQuote_total() {
		return quote_total;
	}

	public void setQuote_total(double quote_total) {
		this.quote_total = quote_total;
	}
}
